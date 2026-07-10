import { Router, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { FAQModel } from '../models/FAQ';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendCreated, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

const faqValidation = [
  body('category').trim().notEmpty().withMessage('Category is required'),
  body('question').trim().notEmpty().withMessage('Question is required'),
  body('answer').trim().notEmpty().withMessage('Answer is required'),
];

router.get('/', asyncHandler(async (req, res: Response) => {
  const faqs = await FAQModel.find().sort({ createdAt: -1 });
  return sendOk(res, faqs);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const faq = await FAQModel.findById(req.params.id);
  if (!faq) {
    return validateBody(res, 'FAQ not found', 'Not Found', 404);
  }
  return sendOk(res, faq);
}));

router.post('/', faqValidation, asyncHandler(async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return validateBody(res, errors.array()[0].msg, 'Bad Request', 400);
  }
  const faq = await FAQModel.create(req.body);
  return sendCreated(res, faq, 'FAQ created successfully');
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const faq = await FAQModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!faq) {
    return validateBody(res, 'FAQ not found', 'Not Found', 404);
  }
  return sendOk(res, faq, 'FAQ updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const faq = await FAQModel.findByIdAndDelete(req.params.id);
  if (!faq) {
    return validateBody(res, 'FAQ not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'FAQ deleted successfully' });
}));

export default router;
