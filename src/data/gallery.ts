import type { GalleryImage, BeforeAfterItem } from '@/types';

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/clinic-reception.avif', alt: 'Modern clinic reception', category: 'clinic' },
  { src: '/images/gallery/clinic-operatory.webp', alt: 'State-of-the-art operatory', category: 'clinic' },
  { src: '/images/gallery/clinic-waiting.avif', alt: 'Comfortable waiting area', category: 'clinic' },
  { src: '/images/gallery/clinic-equipment.avif', alt: 'Advanced dental equipment', category: 'clinic' },
  { src: '/images/gallery/clinic-sterilization.avif', alt: 'Sterilization room', category: 'clinic' },
  { src: '/images/gallery/team-doctor.avif', alt: 'Dr. Chandrasekar', category: 'team' },
  { src: '/images/gallery/team-staff.jpg', alt: 'Our caring team', category: 'team' },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    before: '/images/before-after/transformation1-before.jpg',
    after: '/images/before-after/transformation1.webp',
    label: 'Transformation 1',
    service: 'transformation-1',
  },
  {
    before: '/images/before-after/transformation2-before.jpg',
    after: '/images/before-after/transformation2.avif',
    label: 'Transformation 2',
    service: 'transformation-2',
  },
  {
    before: '/images/before-after/transformation3-before.jpg',
    after: '/images/before-after/transformation3.webp',
    label: 'Transformation 3',
    service: 'transformation-3',
  },
  {
    before: '/images/before-after/transformation4-before.jpg',
    after: '/images/before-after/transformation4.avif',
    label: 'Transformation 4',
    service: 'transformation-4',
  },
  {
    before: '/images/before-after/transformation5-before.jpg',
    after: '/images/before-after/transformation5.avif',
    label: 'Transformation 5',
    service: 'transformation-5',
  },
  {
    before: '/images/before-after/transformation6-before.jpg',
    after: '/images/before-after/transformation6.webp',
    label: 'Transformation 6',
    service: 'transformation-6',
  },
  {
    before: '/images/before-after/transformation7-before.jpg',
    after: '/images/before-after/transformation7.avif',
    label: 'Transformation 7',
    service: 'transformation-7',
  },
  {
    before: '/images/before-after/transformation8-before.jpg',
    after: '/images/before-after/transformation8.jpg',
    label: 'Transformation 8',
    service: 'transformation-8',
  },
];