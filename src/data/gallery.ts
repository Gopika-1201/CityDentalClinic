import type { GalleryImage, BeforeAfterItem } from '@/types';

export const galleryImages: GalleryImage[] = [
  { src: '/images/gallery/clinic-reception.jpg', alt: 'Modern clinic reception', category: 'clinic' },
  { src: '/images/gallery/clinic-operatory.jpg', alt: 'State-of-the-art operatory', category: 'clinic' },
  { src: '/images/gallery/clinic-waiting.jpg', alt: 'Comfortable waiting area', category: 'clinic' },
  { src: '/images/gallery/clinic-equipment.jpg', alt: 'Advanced dental equipment', category: 'clinic' },
  { src: '/images/gallery/clinic-sterilization.jpg', alt: 'Sterilization room', category: 'clinic' },
  { src: '/images/gallery/treatment-implant.jpg', alt: 'Dental implant procedure', category: 'treatment' },
  { src: '/images/gallery/treatment-invisalign.jpg', alt: 'Invisalign consultation', category: 'treatment' },
  { src: '/images/gallery/treatment-whitening.jpg', alt: 'Teeth whitening session', category: 'treatment' },
  { src: '/images/gallery/treatment-cleaning.jpg', alt: 'Professional teeth cleaning', category: 'treatment' },
  { src: '/images/gallery/treatment-xray.jpg', alt: 'Digital X-ray imaging', category: 'treatment' },
  { src: '/images/gallery/team-doctor.jpg', alt: 'Dr. Chandrasekar', category: 'team' },
  { src: '/images/gallery/team-staff.jpg', alt: 'Our caring team', category: 'team' },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    before: '/images/before-after/implant-before.jpg',
    after: '/images/before-after/implant-after.jpg',
    label: 'Dental Implant',
    service: 'dental-implants',
  },
  {
    before: '/images/before-after/invisalign-before.jpg',
    after: '/images/before-after/invisalign-after.jpg',
    label: 'Invisalign Treatment',
    service: 'invisalign',
  },
  {
    before: '/images/before-after/whitening-before.jpg',
    after: '/images/before-after/whitening-after.jpg',
    label: 'Teeth Whitening',
    service: 'teeth-whitening',
  },
  {
    before: '/images/before-after/crown-before.jpg',
    after: '/images/before-after/crown-after.jpg',
    label: 'Dental Crown',
    service: 'dental-crowns',
  },
  {
    before: '/images/before-after/orthodontics-before.jpg',
    after: '/images/before-after/orthodontics-after.jpg',
    label: 'Orthodontics',
    service: 'orthodontics',
  },
  {
    before: '/images/before-after/cleaning-before.jpg',
    after: '/images/before-after/cleaning-after.jpg',
    label: 'Teeth Cleaning',
    service: 'teeth-cleaning',
  },
];
