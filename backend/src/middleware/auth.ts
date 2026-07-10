import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AdminModel } from '../models/Admin';

export interface AuthRequest extends Request {
  admin?: { _id: string; email: string };
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { id: string };

    const admin = await AdminModel.findById(payload.id).select('-password');
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    req.admin = {
      _id: admin._id.toString(),
      email: admin.email,
    };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
