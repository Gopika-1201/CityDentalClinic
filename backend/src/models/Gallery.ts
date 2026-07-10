import mongoose from 'mongoose';

export interface GalleryDoc {
  src: string;
  alt: string;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const gallerySchema = new mongoose.Schema<GalleryDoc>({
  src: { type: String, required: true, trim: true },
  alt: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true, enum: ['clinic', 'team'] },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const GalleryModel = mongoose.model<GalleryDoc>('Gallery', gallerySchema);
