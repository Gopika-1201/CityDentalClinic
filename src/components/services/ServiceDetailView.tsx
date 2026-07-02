'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { serviceDetails } from '@/data/services';
import type { ServiceDetail } from '@/types';
import { siteConfig } from '@/config/site';

const serviceIcons: Record<string, string> = {
  implant: '🦷',
  aligners: '😁',
  whitening: '✨',
  rootcanal: '🔬',
  crown: '👑',
  braces: '🔧',
  cleaning: '🪥',
  pediatric: '👶',
};

export function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const others = serviceDetails.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container-tight flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground dark:bg-card py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

        <div className="container-tight relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 text-center text-white"
          >
            <span className="text-5xl">{serviceIcons[service.icon]}</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
              Our Services
            </span>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="max-w-xl text-lg text-white/70">{service.shortDesc}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left — Main */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-primary/5 shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-20">{serviceIcons[service.icon]}</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  About This Treatment
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.fullDesc}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Key Benefits
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((benefit, i) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Sidebar */}
            <div className="flex flex-col gap-5">

              {/* Quick info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                  Treatment Info
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Clock size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Duration
                      </p>
                      <p className="text-sm font-medium text-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <span className="text-base">{serviceIcons[service.icon]}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Specialist
                      </p>
                      <p className="text-sm font-medium text-foreground">{siteConfig.doctor.name}, {siteConfig.doctor.qualification}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/appointment"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
                >
                  Book This Treatment
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="mt-3 block text-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Or call {siteConfig.contact.phoneDisplay}
                </a>
              </motion.div>

              {/* Other services */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="mb-4 font-heading text-base font-semibold text-foreground">
                  Other Services
                </h3>
                <div className="flex flex-col gap-2">
                  {others.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-border p-3 text-sm transition-all hover:border-primary/30 hover:bg-accent"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{serviceIcons[s.icon]}</span>
                        <span className="font-medium text-foreground">{s.title}</span>
                      </div>
                      <ChevronRight
                        size={14}
                        className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="mt-1 flex items-center justify-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View all services <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
