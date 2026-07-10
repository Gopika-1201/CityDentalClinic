import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({ success: false, message: 'Invalid ID format' });
  }

  if (err instanceof mongoose.Error.ValidationError) {
    const firstError = Object.values(err.errors)[0];
    return res.status(422).json({ success: false, message: firstError?.message || 'Validation failed' });
  }

  if (err instanceof mongoose.MongooseError && 'code' in err && err.code === 11000) {
    return res.status(409).json({ success: false, message: 'Duplicate entry' });
  }

  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ success: false, message: 'Token expired' });
  }

  if (err instanceof Error && err.message.includes('Invalid environment')) {
    return res.status(500).json({ success: false, message: 'Server configuration error' });
  }

  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
};
