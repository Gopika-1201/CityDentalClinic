import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <span className="font-heading text-2xl font-bold text-primary">404</span>
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
        >
          <Home size={15} />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
