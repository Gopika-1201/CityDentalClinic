import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import { CTASection } from '@/components/home/CTASection';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our patients say about City Dental Care. Real reviews from real patients in Tiruppur.',
};

const testimonials = [
  { name: 'Priya Rajan', service: 'Invisalign', rating: 5, initials: 'PR', review: 'Dr. Chandrasekar transformed my smile completely. The Invisalign treatment was seamless and the results are beyond what I expected. Highly recommend to anyone looking for a trusted dentist in Tiruppur!' },
  { name: 'Karthik Murugan', service: 'Dental Implants', rating: 5, initials: 'KM', review: 'Got dental implants done here. The procedure was completely pain-free and the implants look and feel exactly like natural teeth. The doctor is extremely skilled and the staff is very caring.' },
  { name: 'Deepa Suresh', service: 'Teeth Whitening', rating: 5, initials: 'DS', review: 'My teeth are 5 shades whiter after the whitening treatment. The clinic is spotless, staff is warm, and Dr. Chandrasekar is incredibly skilled. Best dental experience I have ever had.' },
  { name: 'Arun Selvam', service: 'Root Canal', rating: 5, initials: 'AS', review: 'I was terrified of root canals but this was completely painless. The doctor explained every step and made me feel at ease throughout. I cannot believe how comfortable the whole experience was.' },
  { name: 'Meena Krishnan', service: 'Orthodontics', rating: 5, initials: 'MK', review: "My daughter's braces treatment was handled with so much care. The team is patient with kids and the results after 18 months are stunning. We are so happy we chose City Dental Care." },
  { name: 'Vijay Anand', service: 'Dental Crown', rating: 5, initials: 'VA', review: 'The crown fits perfectly and matches my natural teeth exactly. You cannot tell the difference at all. Exceptional craftsmanship and very professional service throughout.' },
  { name: 'Lakshmi Nair', service: 'Teeth Cleaning', rating: 5, initials: 'LN', review: 'Best dental cleaning I have ever had. Thorough, gentle, and my teeth feel incredible. Will definitely be coming back every 6 months. The clinic is very clean and modern.' },
  { name: 'Senthil Kumar', service: 'Invisalign', rating: 5, initials: 'SK', review: 'Completed my Invisalign journey here. The doctor monitored every stage closely. My confidence has gone through the roof. Worth every rupee — absolutely life-changing!' },
  { name: 'Anitha Raj', service: 'Pediatric Dentistry', rating: 5, initials: 'AR', review: 'My son used to be scared of dentists but Dr. Chandrasekar made him feel so comfortable. Now he actually looks forward to his dental visits. Amazing with children!' },
  { name: 'Balamurugan S', service: 'Dental Implants', rating: 5, initials: 'BS', review: 'Had three implants placed over six months. Each appointment was smooth and professional. The final result is incredible — I can eat anything without any issues.' },
  { name: 'Kavitha Devi', service: 'Teeth Whitening', rating: 5, initials: 'KD', review: 'I had my wedding coming up and wanted a brighter smile. The whitening results were dramatic and long-lasting. Got so many compliments on my wedding day!' },
  { name: 'Rajesh Pandi', service: 'Root Canal', rating: 5, initials: 'RP', review: 'Had severe tooth pain for weeks. Dr. Chandrasekar diagnosed and treated it in two visits. Zero pain during the procedure. Wish I had come sooner!' },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8">
      <div className="flex items-start justify-between">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
        </div>
        <Quote size={22} className="text-primary/15 transition-colors group-hover:text-primary/30" />
      </div>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">"{t.review}"</p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
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

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Patient Stories"
        title="Real Smiles, "
        highlight="Real Stories"
        subtitle="Over 10,000 patients have trusted us with their smiles. Here's what they have to say."
      />

      <section className="section-padding bg-background">
        <div className="container-tight">
          <SectionHeading
            label="Reviews"
            title="What Our Patients "
            highlight="Say"
            subtitle="Every review is from a real patient. We are proud of every smile we have helped create."
            className="mb-14"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>

          {/* Google review CTA */}
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/40 p-8 text-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Had a great experience?
            </h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Your review helps other patients find the care they deserve. Share your experience on Google.
            </p>
            <a
              href="https://maps.app.goo.gl/E3rXSmvbEEHJ65n8A"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
