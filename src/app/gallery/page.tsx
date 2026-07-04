import type { Metadata } from 'next';
import { PageHero, SectionHeading } from '@/components/common';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { BeforeAfterSlider } from '@/components/gallery/BeforeAfterSlider';
import { CTASection } from '@/components/home/CTASection';
import { beforeAfterItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Take a look inside City Dental Care — our modern clinic, state-of-the-art equipment, and our dedicated team in Tiruppur.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Inside City "
        highlight="Dental Care"
        subtitle="A glimpse into our world-class clinic, advanced technology, and the team dedicated to your smile."
      />
      
      {/* Before & After Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-tight">
          <SectionHeading
            label="Transformations"
            title="Smile "
            highlight="Transformations"
            subtitle="Real patient results showcasing our best work"
            className="mb-14"
          />
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>
      </section>
      
      <GalleryGrid />
      <CTASection />
    </>
  );
}