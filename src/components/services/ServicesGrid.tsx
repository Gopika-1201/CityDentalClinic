'use client';

import { useRef, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import { serviceDetails } from '@/data/services';

function ServiceCard({
  service,
  index,
}: {
  service: (typeof serviceDetails)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  const isFeature = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={isFeature ? 'sm:col-span-2 lg:col-span-1' : ''}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        <Link
          href={`/services/${service.slug}`}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10"
        >
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/15 to-primary/5">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.slug === 'pediatric-dentistry' ? 'object-bottom' : 'object-center'}`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
                {service.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-0.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDesc}</p>

            {/* Benefits preview */}
            <ul className="mt-auto flex flex-col gap-1.5 pt-2">
              {service.benefits.slice(0, 3).map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={12} className="shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Duration */}
            <div className="flex items-center gap-1.5 border-t border-border pt-3 text-xs text-muted-foreground">
              <Clock size={12} className="text-primary" />
              {service.duration}
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-brand-light transition-all duration-500 group-hover:w-full" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}