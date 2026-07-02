import type { Metadata } from 'next';
import { PageHero } from '@/components/common';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CTASection } from '@/components/home/CTASection';

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
      <GalleryGrid />
      <CTASection />
    </>
  );
}
