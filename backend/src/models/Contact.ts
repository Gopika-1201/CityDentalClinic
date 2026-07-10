import mongoose from 'mongoose';

export interface Contact {
  name: string;
  phone: string;
  email: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

const contactSchema = new mongoose.Schema<Contact>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.model<Contact>('Contact', contactSchema);