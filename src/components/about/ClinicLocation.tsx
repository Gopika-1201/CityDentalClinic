'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/common';
import { siteConfig } from '@/config/site';

export function ClinicLocation() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        <SectionHeading
          label="Find Us"
          title="Visit Our "
          highlight="Clinic"
          subtitle="Conveniently located in the heart of Tiruppur. Come visit us — we'd love to meet you."
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
                Clinic Details
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Address
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {siteConfig.contact.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Hours
                    </p>
                    <div className="flex flex-col gap-1">
                      {siteConfig.hours.map((h) => (
                        <div key={h.day} className="flex justify-between gap-4 text-sm">
                          <span className="text-foreground">{h.day}</span>
                          <span className="text-muted-foreground">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
            >
              <ExternalLink size={15} />
              Get Directions on Google Maps
            </a>
          </motion.div>

          {/* Maps — stacked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <p className="border-b border-border bg-card px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                📍 Map View
              </p>
              <iframe
                src={siteConfig.social.googleMapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="City Dental Care - Map"
              />
            </div>

            {/* Street View embed */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <p className="border-b border-border bg-card px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                🏥 Street View
              </p>
              <iframe
                src={siteConfig.social.streetViewEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="City Dental Care - Street View"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
