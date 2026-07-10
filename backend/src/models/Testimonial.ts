import mongoose from 'mongoose';

export interface TestimonialDoc {
  name: string;
  service: string;
  rating: number;
  review: string;
  initials: string;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new mongoose.Schema<TestimonialDoc>({
  name: { type: String, required: true, trim: true },
  service: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
  initials: { type: String, required: true, trim: true },
  avatar: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const TestimonialModel = mongoose.model<TestimonialDoc>('Testimonial', testimonialSchema);
