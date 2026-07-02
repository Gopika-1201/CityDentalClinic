'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common';
import { siteConfig } from '@/config/site';

const credentials = [
  'BDS Graduate',
  '19 Years Experience',
  'Invisalign Certified',
  'Implant Certified',
  'Advanced Cosmetic',
  'Pediatric Care',
  'Orthodontics',
  'Pain-Free Dentistry',
];

export function DoctorSection() {
  return (
    <section className="section-padding overflow-hidden bg-muted/30">
      <div className="container-tight">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left — 360 Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[420px] w-[420px]">

              {/* Outermost ring — CSS spin */}
              <div className="ring-spin-slow absolute inset-0">
                {credentials.map((cred, i) => {
                  const angle = (i / credentials.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const r = 195;
                  const x = 210 + r * Math.sin(rad);
                  const y = 210 - r * Math.cos(rad);
                  return (
                    <div
                      key={cred}
                      className="absolute"
                      style={{
                        left: x,
                        top: y,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      }}
                    >
                      <span className="whitespace-nowrap rounded-full border border-primary/30 bg-background px-2.5 py-0.5 text-[10px] font-semibold text-primary shadow-sm">
                        {cred}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Middle dashed ring — CSS reverse spin */}
              <div className="ring-spin-reverse absolute inset-10 rounded-full border-2 border-dashed border-primary/20" />

              {/* Inner solid ring */}
              <div className="absolute inset-16 rounded-full border border-primary/15" />

              {/* Doctor image circle */}
              <div className="absolute inset-20 overflow-hidden rounded-full border-4 border-background shadow-2xl">
                <div className="relative h-full w-full bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src={siteConfig.doctor.image}
                    alt={siteConfig.doctor.name}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges — CSS float */}
              <div className="card-float-1 absolute -right-4 top-1/4 rounded-2xl border border-border bg-background px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold text-muted-foreground">Experience</p>
                <p className="font-heading text-2xl font-bold text-primary">19 Yrs</p>
              </div>

              <div className="card-float-2 absolute -left-4 bottom-1/3 rounded-2xl border border-border bg-background px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold text-muted-foreground">Patients</p>
                <p className="font-heading text-2xl font-bold text-primary">10K+</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6"
          >
            <SectionHeading
              label="Meet Your Doctor"
              title="Meet "
              highlight={siteConfig.doctor.name}
              align="left"
            />

            <p className="text-base leading-relaxed text-muted-foreground">
              With {siteConfig.doctor.experience} years of dedicated practice,{' '}
              {siteConfig.doctor.name} brings world-class dental expertise to Tiruppur.
              Specializing in cosmetic dentistry, implants, and Invisalign, every treatment
              is crafted with precision and genuine care.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {([
                ...siteConfig.doctor.certifications,
                'Advanced Cosmetic Dentistry',
                'Pain-Free Procedures',
                'Latest Technology',
                'Personalized Care',
              ] as string[]).map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/about"
                className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
              >
                Full Profile
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/appointment"
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:scale-105"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
