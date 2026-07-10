import type { Metadata } from 'next';
import { CalendarDays, Phone, MapPin } from 'lucide-react';
import { PageHero } from '@/components/common';
import { AppointmentForm } from '@/components/appointment/AppointmentForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: `Schedule your dental appointment with Dr. Chandrasekar at City Dental Care, Tiruppur. Same-day appointments available.`,
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        label="Book Appointment"
        title="Your Perfect "
        highlight="Smile"
        subtitle="Ready to transform your smile? Book your appointment today and experience world-class dental care."
      />

      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left — Info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: CalendarDays,
                  title: 'Hours',
                  content: siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join('\n'),
                  href: null,
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: siteConfig.contact.phoneDisplay,
                  href: `tel:${siteConfig.contact.phone}`,
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: siteConfig.contact.address.full,
                  href: siteConfig.social.googleMaps,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed text-foreground transition-colors hover:text-primary"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">
                  Schedule Your Visit
                </h2>
                <p className="mb-7 text-sm text-muted-foreground">
                  Fill in the details below and we will confirm your appointment shortly.
                </p>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}