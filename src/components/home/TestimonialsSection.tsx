'use client';

import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/common';

const testimonials = [
  {
    name: 'Priya Rajan',
    service: 'Invisalign',
    rating: 5,
    review:
      'Dr. Chandrasekar transformed my smile completely. The Invisalign treatment was seamless and the results are beyond what I expected. Highly recommend!',
    initials: 'PR',
  },
  {
    name: 'Karthik Murugan',
    service: 'Dental Implants',
    rating: 5,
    review:
      'Got dental implants done here. The procedure was completely pain-free and the implants look and feel exactly like natural teeth. Amazing work!',
    initials: 'KM',
  },
  {
    name: 'Deepa Suresh',
    service: 'Teeth Whitening',
    rating: 5,
    review:
      'My teeth are 5 shades whiter after the whitening treatment. The clinic is spotless, staff is warm, and Dr. Chandrasekar is incredibly skilled.',
    initials: 'DS',
  },
  {
    name: 'Arun Selvam',
    service: 'Root Canal',
    rating: 5,
    review:
      'I was terrified of root canals but this was completely painless. The doctor explained every step and made me feel at ease throughout.',
    initials: 'AS',
  },
  {
    name: 'Meena Krishnan',
    service: 'Orthodontics',
    rating: 5,
    review:
      "My daughter's braces treatment was handled with so much care. The team is patient with kids and the results after 18 months are stunning.",
    initials: 'MK',
  },
  {
    name: 'Vijay Anand',
    service: 'Dental Crown',
    rating: 5,
    review:
      'The crown fits perfectly and matches my natural teeth exactly. You cannot tell the difference at all. Exceptional craftsmanship.',
    initials: 'VA',
  },
  {
    name: 'Lakshmi Nair',
    service: 'Teeth Cleaning',
    rating: 5,
    review:
      'Best dental cleaning I have ever had. Thorough, gentle, and my teeth feel incredible. Will definitely be coming back every 6 months.',
    initials: 'LN',
  },
  {
    name: 'Senthil Kumar',
    service: 'Invisalign',
    rating: 5,
    review:
      'Completed my Invisalign journey here. The doctor monitored every stage closely. My confidence has gone through the roof. Worth every rupee!',
    initials: 'SK',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[300px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={13} className="fill-primary text-primary" />
          ))}
        </div>
        <Quote size={20} className="text-primary/20" />
      </div>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.review}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.service}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="container-tight mb-14">
        <SectionHeading
          label="Patient Stories"
          title="What Our Patients "
          highlight="Say"
          subtitle="Real experiences from real patients. Over 10,000 smiles transformed in Tiruppur."
        />
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track pb-5">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative mt-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track-reverse pb-5">
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
