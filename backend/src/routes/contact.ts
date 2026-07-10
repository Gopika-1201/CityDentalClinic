import { Router, Response } from 'express';
import { ContactModel } from '../models/Contact';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

router.get('/', asyncHandler(async (req, res: Response) => {
  const { status } = req.query;
  const filter: Record<string, unknown> = {};
  if (typeof status === 'string') {
    if (['new', 'read', 'replied'].includes(status)) {
      filter.status = status;
    }
  }
  const contacts = await ContactModel.find(filter).sort({ createdAt: -1 });
  return sendOk(res, contacts);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    return validateBody(res, 'Contact not found', 'Not Found', 404);
  }
  return sendOk(res, contact);
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const allowedFields = ['status'];
  const updates: Record<string, unknown> = {};
  for (const key of allowedFields) {
    if (req.body[key] !== undefined) {
      updates[key] = req.body[key];
    }
  }
  const contact = await ContactModel.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });
  if (!contact) {
    return validateBody(res, 'Contact not found', 'Not Found', 404);
  }
  return sendOk(res, contact, 'Contact updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const contact = await ContactModel.findByIdAndDelete(req.params.id);
  if (!contact) {
    return validateBody(res, 'Contact not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Contact deleted successfully' });
}));

export default router;
