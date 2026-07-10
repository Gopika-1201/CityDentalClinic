import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import Link from 'next/link';
import { FileText, Shield, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'City Dental Care privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy "
        highlight="Policy"
        subtitle="Your privacy matters to us. Here's how we handle your personal information."
      />

      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <SectionHeading
            label="Policy"
            title="Our Privacy Policy"
            subtitle="Last updated: July 2025"
            align="left"
            className="mb-8"
          />

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Information We Collect</h3>
              <p className="mt-2">We collect information you provide directly to us, such as your name, phone number, email address, appointment details, and messages submitted through our contact forms. We also collect usage data automatically when you visit our website.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">How We Use Your Information</h3>
              <p className="mt-2">We use the information we collect to provide and improve our services, respond to your inquiries, schedule and manage appointments, send appointment confirmations, and improve our website and user experience.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Data Security</h3>
              <p className="mt-2">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Third-Party Services</h3>
              <p className="mt-2">We use trusted third-party services for API processing, email delivery, and analytics. These third parties have their own privacy policies, and we encourage you to review them. We do not sell or rent your personal information to third parties.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Your Rights</h3>
              <p className="mt-2">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@citydentalcare.in or call +91 95668 88886.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Changes to This Policy</h3>
              <p className="mt-2">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Contact Us</h3>
              <p className="mt-2">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="mt-3 flex flex-col gap-2 text-xs">
                <li><strong>Email:</strong> info@citydentalcare.in</li>
                <li><strong>Phone:</strong> +91 95668 88886</li>
                <li><strong>Address:</strong> No. 9, Water Tank Road, Town Extension 2nd Street, Tiruppur - 641604, Tamil Nadu, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <ChevronRight size={15} className="-rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
