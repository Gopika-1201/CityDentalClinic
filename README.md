# City Dental Care

Premium dental care in Tiruppur, led by Dr. Chandrasekar with 19 years of experience. Certified Invisalign & Implant provider.

**Live Demo:** https://city-dental-clinic-md9y.vercel.app/

## Tech Stack

**Frontend**
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- TypeScript

**Backend**
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Resend (Email)
- Helmet, CORS, Rate Limiting

## Local Development

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/Gopika-1201/CityDentalClinic.git
cd CityDentalClinic

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

### Environment Variables

Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ssvipvc.mongodb.net/?appName=Cluster0
JWT_SECRET=<your-jwt-secret-key-here>
JWT_EXPIRES_IN=7d
RESEND_API_KEY=re_<your-resend-api-key>
EMAIL_FROM=noreply@citydentalcare.in
ADMIN_EMAIL=admin@citydentalcare.in
FRONTEND_URL=http://localhost:3000
```

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Run Development Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Frontend: http://localhost:3000
Backend: http://localhost:5000

## Deployment

- **Frontend** deployed on [Vercel](https://vercel.com/)
- **Backend** deployed on [Render](https://render.com/)

### Vercel (Frontend)
- Root Directory: `frontend`
- Build Command: `cd frontend && npm install && npm run build`
- Output: `.next`
- Framework: Next.js

### Render (Backend)
- Root Directory: `backend`
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Env: `NPM_CONFIG_PRODUCTION=false` (required for TypeScript types)

## Project Structure

```
├── frontend/           # Next.js app (App Router)
│   ├── src/
│   │   ├── app/        # Pages and layouts
│   │   ├── components/ # Reusable UI components
│   │   ├── config/     # Site configuration
│   │   └── lib/        # Utilities
│   └── public/         # Static assets
│
└── backend/            # Express API
    └── src/
        ├── routes/     # API routes
        ├── models/     # Mongoose models
        ├── middleware/ # Auth, errors, validation
        └── utils/      # Helpers and config
```

## License

Private - All rights reserved.
