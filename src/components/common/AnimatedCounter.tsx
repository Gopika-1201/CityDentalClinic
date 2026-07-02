'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();
        const start = performance.now();
        const duration = 2000;
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = Math.round(easeOut(progress) * value);
          if (numRef.current) {
            numRef.current.textContent =
              value >= 1000 ? current.toLocaleString('en-IN') : current.toString();
          }
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={cn('flex flex-col items-center gap-1', className)}>
      <p className="font-heading text-4xl font-bold text-primary sm:text-5xl">
        {prefix}
        <span ref={numRef}>0</span>
        {suffix}
      </p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
