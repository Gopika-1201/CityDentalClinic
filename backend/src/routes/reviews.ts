import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { ReviewModel } from '../models/Review';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendCreated, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const reviewValidation = [
  body('before').trim().notEmpty().withMessage('Before image URL is required'),
  body('after').trim().notEmpty().withMessage('After image URL is required'),
  body('label').trim().notEmpty().withMessage('Label is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
];

router.get('/', asyncHandler(async (req, res: Response) => {
  const reviews = await ReviewModel.find().sort({ createdAt: -1 });
  return sendOk(res, reviews);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const review = await ReviewModel.findById(req.params.id);
  if (!review) {
    return validateBody(res, 'Review not found', 'Not Found', 404);
  }
  return sendOk(res, review);
}));

router.post('/', reviewValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }
  const review = await ReviewModel.create(req.body);
  return sendCreated(res, review, 'Review created successfully');
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const review = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!review) {
    return validateBody(res, 'Review not found', 'Not Found', 404);
  }
  return sendOk(res, review, 'Review updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const review = await ReviewModel.findByIdAndDelete(req.params.id);
  if (!review) {
    return validateBody(res, 'Review not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Review deleted successfully' });
}));

export default router;
