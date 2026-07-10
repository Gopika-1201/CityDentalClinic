import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import Link from 'next/link';
import { FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'City Dental Care terms and conditions — rules and guidelines for using our services and website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & "
        highlight="Conditions"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <SectionHeading
            label="Terms"
            title="Terms & Conditions"
            subtitle="Last updated: July 2025"
            align="left"
            className="mb-8"
          />

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Acceptance of Terms</h3>
              <p className="mt-2">By accessing or using the City Dental Care website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Appointment Bookings</h3>
              <p className="mt-2">When you book an appointment through our website, you agree to provide accurate and complete information. Appointments are subject to availability and confirmation by our clinic. We reserve the right to reschedule or cancel appointments with prior notice to the patient.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Patient Responsibilities</h3>
              <p className="mt-2">Patients are responsible for providing accurate medical history, following pre-treatment and post-treatment instructions, and arriving on time for scheduled appointments. Late arrivals may result in shortened appointment times or rescheduling.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Payment Terms</h3>
              <p className="mt-2">Payment is due at the time of service unless prior arrangements have been made. We offer EMI options for major treatments as discussed with our front desk team. All costs will be clearly explained before treatment begins.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Cancellation and Refund Policy</h3>
              <p className="mt-2">We request at least 24 hours' notice for appointment cancellations. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee. Refund policies for treatments are discussed on a case-by-case basis with the clinic management.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Intellectual Property</h3>
              <p className="mt-2">All content on this website, including text, graphics, logos, images, and software, is the property of City Dental Care and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Limitation of Liability</h3>
              <p className="mt-2">City Dental Care is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our liability is limited to the amount paid by you for the specific service giving rise to the claim.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Changes to Terms</h3>
              <p className="mt-2">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">Contact Us</h3>
              <p className="mt-2">If you have any questions about these Terms & Conditions, please contact us:</p>
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
