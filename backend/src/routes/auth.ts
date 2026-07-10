import { Router, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import { AdminModel } from '../models/Admin';
import { asyncHandler } from '../middleware/asyncHandler';

const router = Router();

const loginValidation = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('password').notEmpty().withMessage('Password is required'),
];

router.post('/login', loginValidation, asyncHandler(async (req, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  const admin = await AdminModel.findOne({ email });
  if (!admin) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const isPasswordValid = await admin.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: admin._id.toString() },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' } as jwt.SignOptions
  );

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    data: { token, admin: { _id: admin._id, email: admin.email, name: admin.name } },
  });
}));

export default router;
