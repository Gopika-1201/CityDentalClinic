import mongoose from 'mongoose';

export interface ServiceDoc {
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  image: string;
  icon: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new mongoose.Schema<ServiceDoc>({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
  shortDesc: { type: String, required: true, trim: true },
  fullDesc: { type: String, required: true },
  benefits: [{ type: String }],
  duration: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  icon: { type: String, required: true, trim: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const ServiceModel = mongoose.model<ServiceDoc>('Service', serviceSchema);
