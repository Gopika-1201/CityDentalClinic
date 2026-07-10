'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ label, title, highlight, subtitle, className }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section
      ref={ref}
      className={cn(
        'relative flex min-h-[42vh] items-center overflow-hidden bg-white',
        className
      )}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[120px]"
      />

      <div className="container-tight relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-4"
        >
          {label && (
            <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {label}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {highlight ? (
              <>
                {titleParts[0]}
                <span className="gradient-text">{highlight}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-base leading-relaxed text-foreground/55 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
