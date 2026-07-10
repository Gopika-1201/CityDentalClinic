import { Router, Response } from 'express';
import { AppointmentModel } from '../models/Appointment';
import { authenticate, AuthRequest } from '../middleware/auth';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateBody, sendOk } from '../utils/response';

const router = Router();

router.use(authenticate);

router.get('/', asyncHandler(async (req, res: Response) => {
  const { status } = req.query;
  const filter: Record<string, unknown> = {};
  if (typeof status === 'string') {
    if (['pending', 'confirmed', 'cancelled'].includes(status)) {
      filter.status = status;
    }
  }
  const appointments = await AppointmentModel.find(filter).sort({ createdAt: -1 });
  return sendOk(res, appointments);
}));

router.get('/:id', asyncHandler(async (req, res: Response) => {
  const appointment = await AppointmentModel.findById(req.params.id);
  if (!appointment) {
    return validateBody(res, 'Appointment not found', 'Not Found', 404);
  }
  return sendOk(res, appointment);
}));

router.patch('/:id', asyncHandler(async (req: AuthRequest, res: Response) => {
  const allowedFields = ['status', 'date', 'time', 'message'];
  const updates: Record<string, unknown> = {};
  for (const key of allowedFields) {
    if (req.body[key] !== undefined) {
      updates[key] = req.body[key];
    }
  }
  const appointment = await AppointmentModel.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });
  if (!appointment) {
    return validateBody(res, 'Appointment not found', 'Not Found', 404);
  }
  return sendOk(res, appointment, 'Appointment updated successfully');
}));

router.delete('/:id', asyncHandler(async (req, res: Response) => {
  const appointment = await AppointmentModel.findByIdAndDelete(req.params.id);
  if (!appointment) {
    return validateBody(res, 'Appointment not found', 'Not Found', 404);
  }
  return res.status(200).json({ success: true, message: 'Appointment deleted successfully' });
}));

export default router;
