import type { Metadata } from 'next';
import { PageHero } from '@/components/common';
import { StorySection } from '@/components/about/StorySection';
import { DoctorProfile } from '@/components/about/DoctorProfile';
import { WhyChooseUs } from '@/components/about/WhyChooseUs';
import { ClinicLocation } from '@/components/about/ClinicLocation';
import { CTASection } from '@/components/home/CTASection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.doctor.name} and ${siteConfig.name} — ${siteConfig.doctor.experience} years of dental excellence in Tiruppur.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Dedicated to Your "
        highlight="Smile"
        subtitle={`${siteConfig.doctor.experience} years of clinical excellence, compassionate care, and thousands of transformed smiles in Tiruppur.`}
      />
      <StorySection />
      <DoctorProfile />
      <WhyChooseUs />
      <ClinicLocation />
      <CTASection />
    </>
  );
}
