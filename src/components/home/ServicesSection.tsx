'use client';

import React, { useRef, MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Sparkles, ScanLine, Smile, Zap,
  Crown, AlignCenter, ShieldCheck, Baby,
} from 'lucide-react';
import { SectionHeading } from '@/components/common';
import { siteConfig } from '@/config/site';

const serviceIcons: Record<string, React.ElementType> = {
  implant:   ScanLine,
  aligners:  AlignCenter,
  whitening: Sparkles,
  rootcanal: Zap,
  crown:     Crown,
  braces:    Smile,
  cleaning:  ShieldCheck,
  pediatric: Baby,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof siteConfig.services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
        className="group relative h-full"
      >
        <Link
          href={`/services/${service.slug}`}
          className="flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
        >
          {/* Icon */}
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110"
            whileHover={{ rotate: [0, -10, 10, -6, 0] }}
            transition={{ duration: 0.5 }}
          >
            {(() => { const Icon = serviceIcons[service.icon] ?? ScanLine; return <Icon size={26} strokeWidth={1.6} />; })()}
          </motion.div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDesc}</p>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
            Learn more <ArrowUpRight size={14} />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-brand-light transition-all duration-500 group-hover:w-full" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <SectionHeading
          label="What We Offer"
          title="Advanced Dental "
          highlight="Services"
          subtitle="From routine cleanings to complex implants — every treatment delivered with precision, care, and the latest technology."
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:scale-105"
          >
            View All Services <ArrowUpRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
