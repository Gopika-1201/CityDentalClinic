'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

const words = ['Smile', 'Confidence', 'Health', 'Beauty'];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    el.textContent = words[0];

    timerRef.current = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % words.length;
      el.style.opacity = '0';
      el.style.transform = 'translateY(-14px)';
      setTimeout(() => {
        el.textContent = words[wordIndex.current];
        el.style.transition = 'none';
        el.style.transform = 'translateY(14px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        });
      }, 320);
    }, 2600);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* ── Layer 1: Background image with parallax ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.avif"
          alt="City Dental Care"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* ── Layer 2: White gradient overlay ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      {/* ── Layer 3: Brand tint ── */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-tr from-primary/8 via-transparent to-transparent" />

      {/* ── Layer 4: Vignette ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,0.5) 100%)',
        }}
      />

      {/* ── Layer 5: Orbs ── */}
      <div className="orb-float-1 pointer-events-none absolute -left-40 top-1/3 z-[4] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="orb-float-2 pointer-events-none absolute -right-40 bottom-1/4 z-[4] h-[400px] w-[400px] rounded-full bg-primary/6 blur-[100px]" />

      {/* ── Layer 6: Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,160,140,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="container-tight relative z-10 w-full py-28"
      >
        <div className="flex flex-col items-center gap-7 text-center">

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 backdrop-blur-sm"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xs font-medium text-foreground/60">
              Trusted by 10,000+ patients in Tiruppur
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Crafting Your
            <br />
            Perfect{' '}
            <span
              ref={wordRef}
              className="gradient-text inline-block min-w-[220px]"
              style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
            >
              Smile
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="max-w-xl text-base leading-relaxed text-foreground/55 sm:text-lg"
          >
            Experience world-class dental care with Dr. Chandrasekar — certified Invisalign and implant specialist in Tiruppur.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/appointment"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/50 active:scale-95"
            >
              Book Appointment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 rounded-full border border-primary/25 bg-white px-8 py-4 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-primary/5 hover:scale-105 active:scale-95"
            >
              <Phone size={15} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.68 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {siteConfig.doctor.certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
              >
                ✓ {cert}
              </span>
            ))}
          </motion.div>


        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="scroll-bounce flex flex-col items-center gap-1 text-foreground/30">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={14} />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
