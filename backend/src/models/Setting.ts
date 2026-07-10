import mongoose from 'mongoose';

export interface SettingDoc {
  key: string;
  value: string;
  type: 'string' | 'number' | 'boolean' | 'json' | 'image';
  description?: string;
  updatedAt: Date;
}

const settingSchema = new mongoose.Schema<SettingDoc>({
  key: { type: String, required: true, unique: true, trim: true, uppercase: true },
  value: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: ['string', 'number', 'boolean', 'json', 'image'],
    default: 'string',
  },
  description: { type: String, trim: true },
}, { timestamps: true });

export const SettingModel = mongoose.model<SettingDoc>('Setting', settingSchema);
