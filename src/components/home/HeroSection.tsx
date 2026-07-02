'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

const words = ['Smile', 'Confidence', 'Health', 'Beauty'];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    el.textContent = words[0];

    timerRef.current = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % words.length;
      el.style.opacity = '0';
      el.style.transform = 'translateY(-12px)';
      setTimeout(() => {
        el.textContent = words[wordIndex.current];
        el.style.transition = 'none';
        el.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        });
      }, 300);
    }, 2500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient blobs */}
      <div className="orb-float-1 pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="orb-float-2 pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[80px]" />

      <motion.div style={{ y, opacity }} className="container-tight relative z-10 w-full py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 10,000+ patients in Tiruppur
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Crafting Your Perfect{' '}
            <span
              ref={wordRef}
              className="gradient-text inline-block min-w-[200px]"
              style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
            >
              Smile
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.doctor.name}, {siteConfig.doctor.qualification} —{' '}
            {siteConfig.doctor.experience} years of excellence in advanced dental care.
            Certified Invisalign &amp; Implant specialist.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/appointment"
              className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
            >
              Book Appointment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:scale-105 active:scale-95"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {siteConfig.doctor.certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
              >
                ✓ {cert}
              </span>
            ))}
          </motion.div>

        </div>
      </motion.div>


    </section>
  );
}
