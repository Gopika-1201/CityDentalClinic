'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="rounded-full bg-destructive/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <RefreshCw size={28} className="text-destructive" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
          Something went wrong
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          We encountered an unexpected error. Please try again, or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <span className="flex items-center gap-2">
              <Home size={15} />
              Go Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
