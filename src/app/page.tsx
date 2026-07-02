import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { DoctorSection } from '@/components/home/DoctorSection';
import { ClinicShowcase } from '@/components/home/ClinicShowcase';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClinicShowcase />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
