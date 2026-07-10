import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import { validateEnv } from './utils/env';
import appointmentRoutes from './routes/appointments';
import contactRoutes from './routes/contact';
import authRoutes from './routes/auth';
import serviceRoutes from './routes/services';
import testimonialRoutes from './routes/testimonials';
import galleryRoutes from './routes/gallery';
import reviewRoutes from './routes/reviews';
import faqRoutes from './routes/faqs';
import settingRoutes from './routes/settings';
import { errorHandler } from './middleware/errorHandler';

const env = validateEnv();
const app = express();
const PORT = env.PORT;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: env.NODE_ENV === 'production' ? 3 : 5,
  message: 'Too many authentication attempts, please try again later.',
});

app.use(helmet());
app.use(limiter);
app.use(cors({ origin: env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json({ limit: '10kb' }));

mongoose
  .connect(env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

app.get('/health', (_req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.json({
    status: isDbConnected ? 'ok' : 'degraded',
    service: 'City Dental Care API',
    database: isDbConnected ? 'connected' : 'disconnected',
  });
});

app.use('/api/appointments', appointmentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/settings', settingRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
