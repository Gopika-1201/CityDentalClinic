import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { TestimonialModel } from '../models/Testimonial';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendCreated, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const testimonialValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('service').trim().notEmpty().withMessage('Service is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('review').trim().notEmpty().withMessage('Review is required'),
  body('initials').trim().notEmpty().withMessage('Initials are required'),
];

router.get('/', asyncHandler(async (req, res: Response) => {
  const testimonials = await TestimonialModel.find().sort({ createdAt: -1 });
  return sendOk(res, testimonials);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const testimonial = await TestimonialModel.findById(req.params.id);
  if (!testimonial) {
    return validateBody(res, 'Testimonial not found', 'Not Found', 404);
  }
  return sendOk(res, testimonial);
}));

router.post('/', testimonialValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }
  const testimonial = await TestimonialModel.create(req.body);
  return sendCreated(res, testimonial, 'Testimonial created successfully');
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const testimonial = await TestimonialModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!testimonial) {
    return validateBody(res, 'Testimonial not found', 'Not Found', 404);
  }
  return sendOk(res, testimonial, 'Testimonial updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const testimonial = await TestimonialModel.findByIdAndDelete(req.params.id);
  if (!testimonial) {
    return validateBody(res, 'Testimonial not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
}));

export default router;
