'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 gradient-brand opacity-95" />

      {/* Animated dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/15 blur-[100px]"
      />

      <div className="container-tight relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            Ready to Transform Your Smile?
          </span>

          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Your Perfect Smile
            <br />
            Starts Today
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            Book a consultation with {siteConfig.doctor.name} and take the first step
            towards the smile you deserve. Same-day appointments available.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/appointment"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Book Appointment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <Phone size={15} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <p className="text-sm text-white/60">
            {siteConfig.contact.address.city}, {siteConfig.contact.address.state} ·{' '}
            {siteConfig.hours[0].time}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
