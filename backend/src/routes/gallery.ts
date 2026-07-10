import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { GalleryModel } from '../models/Gallery';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendCreated, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const galleryValidation = [
  body('src').trim().notEmpty().withMessage('Image URL is required'),
  body('alt').trim().notEmpty().withMessage('Alt text is required'),
  body('category').isIn(['clinic', 'team']).withMessage('Category must be clinic or team'),
];

router.get('/', asyncHandler(async (req, res: Response) => {
  const items = await GalleryModel.find().sort({ createdAt: -1 });
  return sendOk(res, items);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const item = await GalleryModel.findById(req.params.id);
  if (!item) {
    return validateBody(res, 'Gallery item not found', 'Not Found', 404);
  }
  return sendOk(res, item);
}));

router.post('/', galleryValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }
  const item = await GalleryModel.create(req.body);
  return sendCreated(res, item, 'Gallery item created successfully');
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const item = await GalleryModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!item) {
    return validateBody(res, 'Gallery item not found', 'Not Found', 404);
  }
  return sendOk(res, item, 'Gallery item updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const item = await GalleryModel.findByIdAndDelete(req.params.id);
  if (!item) {
    return validateBody(res, 'Gallery item not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Gallery item deleted successfully' });
}));

export default router;
