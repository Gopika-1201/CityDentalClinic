'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Shield } from 'lucide-react';
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

export function DoctorProfile() {
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
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-primary/5 shadow-2xl aspect-[4/5]">
              <Image
                src={siteConfig.doctor.image}
                alt={siteConfig.doctor.name}
                fill
                className="object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/20">
                    <Award className="h-14 w-14 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-foreground">
                      {siteConfig.doctor.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{siteConfig.doctor.qualification}</p>
                  </div>
                </div>
              </div>

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
                <p className="text-xs font-semibold text-primary">✓ {cert}</p>
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
      </div>
    </section>
  );
}
