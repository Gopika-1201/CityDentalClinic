'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Heart, Shield, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SectionHeading } from '@/components/common';
import { siteConfig } from '@/config/site';

const philosophy = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    desc: 'Every decision is made with the patient\'s comfort, health, and long-term wellbeing as the top priority.',
  },
  {
    icon: Shield,
    title: 'Pain-Free Promise',
    desc: 'Advanced anaesthesia techniques and a gentle touch ensure every procedure is as comfortable as possible.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    desc: 'Regularly attending international dental conferences to bring the latest techniques to Tiruppur.',
  },
  {
    icon: Award,
    title: 'Precision & Excellence',
    desc: 'Every restoration, implant, and alignment is crafted to the highest standards of dental artistry.',
  },
];

const awards = [
  { src: '/images/doctor/award1.avif', alt: 'Award 1' },
  { src: '/images/doctor/award2.jpg',  alt: 'Award 2' },
  { src: '/images/doctor/award3.jpg',  alt: 'Award 3' },
  { src: '/images/doctor/award4.jpg',  alt: 'Award 4' },
  { src: '/images/doctor/award5.jpg',  alt: 'Award 5' },
  { src: '/images/doctor/award6.webp', alt: 'Award 6' },
  { src: '/images/doctor/award7.avif', alt: 'Award 7' },
  { src: '/images/doctor/award8.avif', alt: 'Award 8' },
];

export function DoctorProfile() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => p !== null && p !== -1 ? (p + 1) % awards.length : p);
      if (e.key === 'ArrowLeft')  setLightbox((p) => p !== null && p !== -1 ? (p - 1 + awards.length) % awards.length : p);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-muted/30">
      <div className="container-tight">
        <SectionHeading
          label="The Doctor"
          title="Meet "
          highlight={siteConfig.doctor.name}
          subtitle={`${siteConfig.doctor.experience} years of transforming smiles and changing lives across Tiruppur.`}
          className="mb-16"
        />

        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left — Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="group relative overflow-hidden rounded-3xl border border-border shadow-2xl aspect-[4/5] cursor-zoom-in"
              onClick={() => setLightbox(-1)}
            >
              <Image
                src={siteConfig.doctor.image}
                alt={siteConfig.doctor.name}
                fill
                className="object-cover object-top"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating cert cards — CSS float */}
            {siteConfig.doctor.certifications.map((cert, i) => (
              <div
                key={cert}
                className={`absolute rounded-xl border border-border bg-background/95 px-4 py-2.5 shadow-lg backdrop-blur-sm ${
                  i === 0 ? 'card-float-1 -right-4 top-8' : 'card-float-2 -left-4 bottom-16'
                }`}
              >
                <p className="text-xs font-semibold text-primary">{cert}</p>
              </div>
            ))}
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {siteConfig.doctor.name}, {siteConfig.doctor.qualification}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Dr. Chandrasekar is a highly accomplished dental surgeon with{' '}
                {siteConfig.doctor.experience} years of clinical experience. His expertise spans
                cosmetic dentistry, oral implantology, and orthodontics. He is passionate about
                combining the art and science of dentistry to deliver results that are both
                functionally excellent and aesthetically stunning.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                As one of Tiruppur&apos;s most trusted dental professionals, he has built City Dental
                Care into a centre of excellence — equipped with the latest technology and staffed
                by a compassionate team dedicated to patient comfort.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '19+', label: 'Years' },
                { value: '10K+', label: 'Patients' },
                { value: '99%', label: 'Success' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div>
              <h4 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Treatment Philosophy
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {philosophy.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <p.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="mb-0.5 text-sm font-semibold text-foreground">{p.title}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Awards & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center font-heading text-2xl font-bold text-foreground">
            Awards & <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {awards.map((award, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.03 }}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="relative aspect-square">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/20">
                    <ZoomIn className="h-7 w-7 text-white opacity-0 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <Image
                  src={lightbox === -1 ? siteConfig.doctor.image : awards[lightbox].src}
                  alt={lightbox === -1 ? siteConfig.doctor.name : awards[lightbox].alt}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition-transform hover:scale-110"
              >
                <X size={16} />
              </button>
              {lightbox !== -1 && (
                <>
                  {/* Prev */}
                  <button
                    onClick={() => setLightbox((lightbox - 1 + awards.length) % awards.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  {/* Next */}
                  <button
                    onClick={() => setLightbox((lightbox + 1) % awards.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                  {/* Counter */}
                  <p className="mt-3 text-center text-sm text-white/60">{lightbox + 1} / {awards.length}</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
