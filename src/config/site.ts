export const siteConfig = {
  name: 'City Dental Care',
  tagline: 'Your Smile, Our Passion',
  description:
    'Premium dental care in Tiruppur. Led by Dr. Chandrasekar with 19 years of experience. Certified Invisalign & Implant provider.',
  url: 'https://citydentalcare.in',

  doctor: {
    name: 'Dr. Chandrasekar',
    qualification: 'BDS',
    experience: 19,
    certifications: ['Certified Invisalign Provider', 'Certified Implant Provider'],
    image: '/images/doctor/doctor-img.avif',
  },

  contact: {
    phone: '+919566888886',
    phoneDisplay: '+91 95668 88886',
    email: 'info@citydentalcare.in',
    address: {
      line1: 'No. 9, Water Tank Road',
      line2: 'Town Extension 2nd Street',
      city: 'Tiruppur',
      pincode: '641604',
      state: 'Tamil Nadu',
      country: 'India',
      full: 'No. 9, Water Tank Road, Town Extension 2nd Street, Tiruppur - 641604, Tamil Nadu, India',
    },
  },

  social: {
    instagram: 'https://www.instagram.com/citydentalclinics/',
    facebook: 'https://www.facebook.com/CITYDENTALTIRUPUR/',
    whatsapp: 'https://wa.me/919566888886',
    googleMaps: 'https://maps.app.goo.gl/E3rXSmvbEEHJ65n8A',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.265!2d77.35017673905475!3d11.0964582361523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907f0e3b4b4b5%3A0x0!2sCity%20Dental%20Care!5e0!3m2!1sen!2sin!4v1782973524654!5m2!1sen!2sin',
    streetViewEmbed:
      'https://www.google.com/maps/embed?pb=!4v1782973524654!6m8!1m7!1s-piPXDmwfkClvtScz9fGvQ!2m2!1d11.0964582361523!2d77.35017673905475!3f122.32!4f-39.36!5f0.7820865974627469',
  },

  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
  ],

  stats: [
    { label: 'Years Experience', value: 19 },
    { label: 'Happy Patients', value: 10000 },
    { label: 'Treatments Done', value: 25000 },
    { label: 'Success Rate', value: 99, suffix: '%' },
  ],

  services: [
    {
      slug: 'dental-implants',
      title: 'Dental Implants',
      shortDesc: 'Permanent tooth replacement that looks and feels natural.',
      icon: 'implant',
      image: '/images/services/dental-implants.jpeg',
    },
    {
      slug: 'invisalign',
      title: 'Invisalign',
      shortDesc: 'Clear aligners for a straighter smile without metal braces.',
      icon: 'aligners',
      image: '/images/services/invisalign.jpg',
    },
    {
      slug: 'teeth-whitening',
      title: 'Teeth Whitening',
      shortDesc: 'Professional whitening for a brighter, confident smile.',
      icon: 'whitening',
      image: '/images/services/teeth-whitening.webp',
    },
    {
      slug: 'root-canal',
      title: 'Root Canal Treatment',
      shortDesc: 'Pain-free root canal therapy to save your natural tooth.',
      icon: 'rootcanal',
      image: '/images/services/root-canal.webp',
    },
    {
      slug: 'dental-crowns',
      title: 'Dental Crowns & Bridges',
      shortDesc: 'Restore damaged teeth with precision-crafted crowns.',
      icon: 'crown',
      image: '/images/services/dental-crowns.jpg',
    },
    {
      slug: 'orthodontics',
      title: 'Orthodontics',
      shortDesc: 'Braces and aligners to correct misaligned teeth and jaws.',
      icon: 'braces',
      image: '/images/services/orthodontics.jpg',
    },
    {
      slug: 'teeth-cleaning',
      title: 'Teeth Cleaning',
      shortDesc: 'Professional scaling and polishing for optimal oral health.',
      icon: 'cleaning',
      image: '/images/services/teeth-cleaning.jpg',
    },
    {
      slug: 'pediatric-dentistry',
      title: 'Pediatric Dentistry',
      shortDesc: 'Gentle, child-friendly dental care for your little ones.',
      icon: 'pediatric',
      image: '/images/services/pediatric-dentistry.avif',
    },
  ],

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book Appointment', href: '/appointment' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;