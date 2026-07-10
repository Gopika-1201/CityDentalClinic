import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { SettingModel } from '../models/Setting';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const settingValidation = [
  body('key').trim().notEmpty().withMessage('Key is required'),
  body('value').notEmpty().withMessage('Value is required'),
  body('type').isIn(['string', 'number', 'boolean', 'json', 'image']).withMessage('Invalid type'),
];

router.get('/', asyncHandler(async (_req, res: Response) => {
  const settings = await SettingModel.find({}).sort({ key: 1 });
  return sendOk(res, settings);
}));

router.get('/:key', asyncHandler(async (req: AuthRequest, res: Response) => {
  const setting = await SettingModel.findOne({ key: req.params.key.toUpperCase() });
  if (!setting) {
    return validateBody(res, 'Setting not found', 'Not Found', 404);
  }
  return sendOk(res, setting);
}));

router.put('/', settingValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }

  const { key, value, type, description } = req.body;
  const setting = await SettingModel.findOneAndUpdate(
    { key: key.toUpperCase() },
    { value, type, description },
    { new: true, runValidators: true, upsert: true }
  );
  return sendOk(res, setting, 'Setting saved successfully');
}));

router.delete('/:key', asyncHandler(async (req, res: Response) => {
  const setting = await SettingModel.findOneAndDelete({ key: req.params.key.toUpperCase() });
  if (!setting) {
    return validateBody(res, 'Setting not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Setting deleted successfully' });
}));

export default router;
