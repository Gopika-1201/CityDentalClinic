import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface AdminDoc extends mongoose.Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const adminSchema = new mongoose.Schema<AdminDoc>({
  email: { type: String, required: [true, 'Email is required'], unique: true, trim: true, lowercase: true },
  password: { type: String, required: [true, 'Password is required'], select: false },
  name: { type: String, required: [true, 'Name is required'], trim: true },
}, { timestamps: true });

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  if (!this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

adminSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const AdminModel = mongoose.model<AdminDoc>('Admin', adminSchema);
