import mongoose from 'mongoose';

export interface FAQDoc {
  category: string;
  question: string;
  answer: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const faqSchema = new mongoose.Schema<FAQDoc>({
  category: { type: String, required: true, trim: true },
  question: { type: String, required: true, trim: true },
  answer: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const FAQModel = mongoose.model<FAQDoc>('FAQ', faqSchema);
