'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/common';
import { siteConfig } from '@/config/site';

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px]" />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/8 transition-all group-hover:bg-primary/15" />
              <AnimatedCounter
                value={stat.value}
                suffix={'suffix' in stat ? stat.suffix : ''}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
