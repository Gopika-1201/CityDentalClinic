import mongoose from 'mongoose';

export interface ReviewDoc {
  before: string;
  after: string;
  label: string;
  service: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new mongoose.Schema<ReviewDoc>({
  before: { type: String, required: true, trim: true },
  after: { type: String, required: true, trim: true },
  label: { type: String, required: true, trim: true },
  service: { type: String, required: true, trim: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const ReviewModel = mongoose.model<ReviewDoc>('Review', reviewSchema);
