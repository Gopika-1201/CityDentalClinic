import type { Metadata } from 'next';
import { PageHero } from '@/components/common';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our full range of dental services — from Invisalign and implants to whitening and pediatric care. Expert treatment by Dr. Chandrasekar in Tiruppur.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Advanced Dental "
        highlight="Care"
        subtitle="Comprehensive treatments delivered with precision, technology, and genuine compassion — all under one roof."
      />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
