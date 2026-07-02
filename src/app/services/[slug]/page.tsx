import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { serviceDetails, getServiceBySlug } from '@/data/services';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';
import { CTASection } from '@/components/home/CTASection';
import { siteConfig } from '@/config/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.shortDesc} — Expert ${service.title} by ${siteConfig.doctor.name} in Tiruppur.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailView service={service} />
      <CTASection />
    </>
  );
}
