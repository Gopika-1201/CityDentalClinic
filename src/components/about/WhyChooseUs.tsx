'use client';

import { motion } from 'framer-motion';
import {
  Microscope,
  Clock,
  CreditCard,
  MapPin,
  Smile,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import { SectionHeading } from '@/components/common';

const features = [
  {
    icon: Microscope,
    title: 'Latest Technology',
    desc: 'Digital X-rays, 3D scanning, and laser dentistry for precise, minimally invasive treatments.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterilisation Standards',
    desc: 'Hospital-grade sterilisation protocols ensuring the highest levels of hygiene and safety.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    desc: 'Open 7 days a week with evening slots to fit your busy schedule.',
  },
  {
    icon: Smile,
    title: 'Painless Procedures',
    desc: 'Advanced anaesthesia and a gentle approach make every visit comfortable.',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    desc: 'Clear, upfront pricing with no hidden costs. EMI options available.',
  },
  {
    icon: Users,
    title: 'Family Dentistry',
    desc: 'Comprehensive care for every member of your family, from toddlers to seniors.',
  },
  {
    icon: Stethoscope,
    title: 'Specialist Care',
    desc: 'In-house specialists for implants, orthodontics, and cosmetic procedures.',
  },
  {
    icon: MapPin,
    title: 'Conveniently Located',
    desc: 'Centrally located in Tiruppur with easy access and ample parking.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <SectionHeading
          label="Why City Dental Care"
          title="Why Patients "
          highlight="Choose Us"
          subtitle="We combine clinical excellence with genuine warmth to create an experience unlike any other dental clinic."
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8"
            >
              {/* Hover gradient fill */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative flex flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
