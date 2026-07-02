// ─── Appointment ────────────────────────────────────────────────────────────

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}

export interface Appointment extends AppointmentFormData {
  _id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  _id: string;
  name: string;
  rating: number;
  review: string;
  service?: string;
  avatar?: string;
  createdAt: string;
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'clinic' | 'treatment' | 'team';
}

// ─── Before & After ──────────────────────────────────────────────────────────

export interface BeforeAfterItem {
  before: string;
  after: string;
  label: string;
  service: string;
}

// ─── Service ─────────────────────────────────────────────────────────────────

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  image: string;
  icon: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// ─── API Response ─────────────────────────────────────────────────────────────

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

// ─── Admin ───────────────────────────────────────────────────────────────────

export interface AdminLoginData {
  email: string;
  password: string;
}

export interface AuthToken {
  token: string;
  expiresIn: string;
}
