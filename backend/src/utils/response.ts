import { Response } from 'express';

export const sendOk = <T>(
  res: Response,
  data: T,
  message: string = 'Success'
) => {
  res.status(200).json({ success: true, message, data });
};

export const sendCreated = <T>(
  res: Response,
  data: T,
  message: string = 'Created successfully'
) => {
  res.status(201).json({ success: true, message, data });
};

export const validateBody = (
  res: Response,
  message: string,
  error: string = 'Bad Request',
  status: number = 400
) => {
  res.status(status).json({ success: false, message, error });
};
