import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import { BeforeAfterSlider } from '@/components/gallery/BeforeAfterSlider';
import { CTASection } from '@/components/home/CTASection';
import { beforeAfterItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Before & After',
  description:
    'See real smile transformations at City Dental Care — before and after results for implants, Invisalign, whitening, and more.',
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        label="Transformations"
        title="Real Results, "
        highlight="Real Smiles"
        subtitle="Drag the slider to reveal the transformation. Every result is a real patient treated by Dr. Chandrasekar."
      />

      <section className="section-padding bg-background">
        <div className="container-tight">
          <SectionHeading
            label="Patient Transformations"
            title="Before & "
            highlight="After"
            subtitle="Drag the divider left or right to compare. These are real results from our patients in Tiruppur."
            className="mb-14"
          />
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
