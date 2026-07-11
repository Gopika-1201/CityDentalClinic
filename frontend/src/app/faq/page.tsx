import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import { CTASection } from '@/components/home/CTASection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about dental treatments at City Dental Care, Tiruppur.',
};

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book an appointment online through our Appointment page, call us at +91 95668 88886, or send us a WhatsApp message. We offer same-day appointments when available.',
      },
      {
        q: 'What are your clinic hours?',
        a: 'We are open Monday to Saturday from 9:00 AM to 8:00 PM, and on Sundays from 10:00 AM to 2:00 PM.',
      },
      {
        q: 'Do you treat children?',
        a: 'Yes! We have a dedicated pediatric dentistry service. Our team is specially trained to make children feel comfortable and at ease during their visits.',
      },
      {
        q: 'Is the clinic hygienic and safe?',
        a: 'Absolutely. We follow hospital-grade sterilisation protocols. All instruments are autoclaved, and we use single-use disposables wherever possible. Your safety is our top priority.',
      },
    ],
  },
  {
    category: 'Treatments',
    items: [
      {
        q: 'Is root canal treatment painful?',
        a: 'Modern root canal treatment is virtually painless. We use advanced local anaesthesia and rotary instruments to ensure you feel minimal to no discomfort during the procedure. Most patients are surprised by how comfortable it is.',
      },
      {
        q: 'How long does Invisalign treatment take?',
        a: 'Invisalign treatment typically takes 12 to 18 months depending on the complexity of your case. Dr. Chandrasekar will give you a precise timeline after your initial digital assessment.',
      },
      {
        q: 'How long do dental implants last?',
        a: 'With proper care, dental implants can last a lifetime. The titanium post fuses with your jawbone permanently. The crown on top may need replacement after 10–15 years depending on wear.',
      },
      {
        q: 'How many shades whiter will my teeth get after whitening?',
        a: 'Our professional in-clinic whitening can lighten teeth by up to 8 shades in a single session. Results vary based on the natural colour of your teeth and the cause of staining.',
      },
      {
        q: 'At what age should my child first visit a dentist?',
        a: "We recommend bringing your child for their first dental visit when their first tooth appears, or by their first birthday. Early visits help establish good habits and catch any issues early.",
      },
    ],
  },
  {
    category: 'Costs & Insurance',
    items: [
      {
        q: 'Do you offer EMI or payment plans?',
        a: 'Yes, we offer flexible EMI options for major treatments like implants and Invisalign. Please speak to our front desk team for details on available payment plans.',
      },
      {
        q: 'How much does a dental implant cost?',
        a: 'Implant costs vary depending on the number of implants, the type of crown, and your specific case. We provide a detailed, transparent cost breakdown after your consultation — no hidden charges.',
      },
      {
        q: 'Do you accept dental insurance?',
        a: 'We work with several insurance providers. Please bring your insurance card and policy details to your appointment and our team will help you understand your coverage.',
      },
    ],
  },
  {
    category: 'After Treatment',
    items: [
      {
        q: 'What should I do after a tooth extraction?',
        a: 'Bite on the gauze for 30–45 minutes, avoid hot food and drinks for 24 hours, do not rinse vigorously, and take prescribed medications. We will provide detailed post-care instructions after your procedure.',
      },
      {
        q: 'How do I care for my Invisalign aligners?',
        a: 'Rinse your aligners with lukewarm water every time you remove them. Clean them with a soft toothbrush and clear soap. Never use hot water as it can warp the plastic. Always brush your teeth before reinserting.',
      },
      {
        q: 'How often should I visit the dentist?',
        a: 'We recommend a check-up and professional cleaning every 6 months. Regular visits help catch problems early when they are easier and less expensive to treat.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently Asked "
        highlight="Questions"
        subtitle="Everything you need to know about our treatments, clinic, and what to expect."
      />

      <section className="section-padding bg-background">
        <div className="container-tight max-w-4xl">
          <div className="flex flex-col gap-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <SectionHeading
                  label={section.category}
                  title={section.category}
                  align="left"
                  className="mb-6"
                />
                 <Accordion className="flex flex-col gap-3">
                   {section.items.map((item, i) => (
                     <AccordionItem
                       key={`${section.category}-${i}`}
                       value={`item-${i}`}
                      className="rounded-2xl border border-border bg-card px-6 shadow-sm"
                    >
                      <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/40 p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-foreground">
              Still have questions?
            </h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Our team is happy to help. Reach out to us directly and we will answer any questions you have.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919566888886"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:scale-105"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
