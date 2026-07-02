'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clinicImages = [
  { src: '/images/clinic/image1.avif', alt: 'City Dental Care clinic' },
  { src: '/images/clinic/image2.avif', alt: 'State-of-the-art treatment room' },
  { src: '/images/clinic/image3.avif', alt: 'Advanced dental equipment' },
  { src: '/images/clinic/image4.webp', alt: 'Comfortable patient area' },
  { src: '/images/clinic/image5.avif', alt: 'Modern clinic interior' },
];

const TOTAL = clinicImages.length;
const INTERVAL = 3500;
const emptySubscribe = () => () => {};

// Per-offset 3D transform config
function getTransform(offset: number, total: number) {
  const isActive  = offset === 0;
  const isLeft1   = offset === total - 1;
  const isRight1  = offset === 1;
  const isLeft2   = offset === total - 2;
  const isRight2  = offset === 2;

  if (isActive)  return { tx: 0,    tz: 0,    ry: 0,   scale: 1,    opacity: 1,    zIndex: 20 };
  if (isRight1)  return { tx: 420,  tz: -180, ry: -42, scale: 0.82, opacity: 0.85, zIndex: 15 };
  if (isLeft1)   return { tx: -420, tz: -180, ry: 42,  scale: 0.82, opacity: 0.85, zIndex: 15 };
  if (isRight2)  return { tx: 760,  tz: -380, ry: -62, scale: 0.62, opacity: 0.45, zIndex: 10 };
  if (isLeft2)   return { tx: -760, tz: -380, ry: 62,  scale: 0.62, opacity: 0.45, zIndex: 10 };
  return           { tx: 0,    tz: -600, ry: 0,   scale: 0.4,  opacity: 0,    zIndex: 1  };
}

export function ClinicShowcase() {
  const mounted   = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [active, setActive]   = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next  = useCallback(() => setActive((p) => (p + 1) % TOTAL), []);
  const prev  = useCallback(() => setActive((p) => (p - 1 + TOTAL) % TOTAL), []);
  const goTo  = useCallback((i: number) => setActive(i), []);

  useEffect(() => {
    if (paused) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next, active]);

  return (
    <section
      className="relative overflow-hidden bg-background py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle ambient glow behind active card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* 3D stage — full viewport width */}
      <div className="relative" style={{ perspective: '1800px', perspectiveOrigin: '50% 50%' }}>
        <div className="relative mx-auto" style={{ height: 520 }}>
          {mounted && clinicImages.map((img, i) => {
            const offset = (i - active + TOTAL) % TOTAL;
            const { tx, tz, ry, scale, opacity, zIndex } = getTransform(offset, TOTAL);
            const isActive = offset === 0;
            const isClickable = offset === 1 || offset === TOTAL - 1;

            return (
              <div
                key={img.src}
                onClick={() => isClickable && goTo(i)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '480px',
                  height: '480px',
                  transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: 'transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.75s ease',
                  cursor: isClickable ? 'pointer' : 'default',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                {/* Card shell */}
                <div
                  className="relative h-full w-full overflow-hidden rounded-3xl"
                  style={{
                    boxShadow: isActive
                      ? '0 40px 100px -15px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.06)'
                      : '0 10px 30px rgba(0,0,0,0.15)',
                    transition: 'box-shadow 0.75s ease',
                  }}
                >
                  {/* Image */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />

                  {/* Shimmer on entry */}
                  {isActive && (
                    <motion.div
                      key={`shimmer-${active}`}
                      initial={{ x: '-120%' }}
                      animate={{ x: '220%' }}
                      transition={{ duration: 1.0, ease: 'easeOut', delay: 0.05 }}
                      className="pointer-events-none absolute inset-0 z-20"
                      style={{
                        background:
                          'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)',
                      }}
                    />
                  )}

                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-30 mt-8 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {clinicImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? 'var(--primary)' : 'var(--border)',
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
