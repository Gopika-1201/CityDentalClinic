import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { ServiceModel } from '../models/Service';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendCreated, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const serviceValidation = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('slug').trim().notEmpty().withMessage('Slug is required'),
  body('shortDesc').trim().notEmpty().withMessage('Short description is required'),
  body('fullDesc').trim().notEmpty().withMessage('Full description is required'),
  body('duration').trim().notEmpty().withMessage('Duration is required'),
  body('image').trim().notEmpty().withMessage('Image is required'),
  body('icon').trim().notEmpty().withMessage('Icon is required'),
];

router.get('/', asyncHandler(async (req, res: Response) => {
  const services = await ServiceModel.find().sort({ createdAt: -1 });
  return sendOk(res, services);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const service = await ServiceModel.findById(req.params.id);
  if (!service) {
    return validateBody(res, 'Service not found', 'Not Found', 404);
  }
  return sendOk(res, service);
}));

router.post('/', serviceValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }

  req.body.benefits = req.body.benefits || [];
  const service = await ServiceModel.create(req.body);
  return sendCreated(res, service, 'Service created successfully');
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const service = await ServiceModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!service) {
    return validateBody(res, 'Service not found', 'Not Found', 404);
  }
  return sendOk(res, service, 'Service updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const service = await ServiceModel.findByIdAndDelete(req.params.id);
  if (!service) {
    return validateBody(res, 'Service not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Service deleted successfully' });
}));

export default router;
