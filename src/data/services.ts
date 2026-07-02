import type { ServiceDetail } from '@/types';

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent tooth replacement that looks and feels natural.',
    icon: 'implant',
    image: '/images/services/dental-implants.jpg',
    fullDesc:
      'Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed into the jawbone, acting as an artificial root. Once healed, a custom-crafted crown is attached — giving you a tooth that looks, feels, and functions exactly like a natural one. Dr. Chandrasekar is a certified implant provider with hundreds of successful implant placements.',
    benefits: [
      'Looks and feels like a natural tooth',
      'Prevents bone loss in the jaw',
      'Lasts a lifetime with proper care',
      'No impact on adjacent teeth',
      'Restores full chewing function',
      'Improves speech and confidence',
    ],
    duration: '2–3 appointments over 3–6 months',
  },
  {
    slug: 'invisalign',
    title: 'Invisalign',
    shortDesc: 'Clear aligners for a straighter smile without metal braces.',
    icon: 'aligners',
    image: '/images/services/invisalign.jpg',
    fullDesc:
      'Invisalign uses a series of custom-made, virtually invisible clear aligners to gradually straighten your teeth. As a certified Invisalign provider, Dr. Chandrasekar creates a precise digital treatment plan showing your smile transformation before you even begin. Aligners are removable — eat, drink, and brush normally throughout treatment.',
    benefits: [
      'Nearly invisible — no metal brackets',
      'Removable for eating and brushing',
      'Comfortable with no sharp edges',
      'Fewer dental visits than braces',
      'Digital preview of final results',
      'Treats crowding, gaps, and bite issues',
    ],
    duration: '12–18 months depending on complexity',
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional whitening for a brighter, confident smile.',
    icon: 'whitening',
    image: '/images/services/teeth-whitening.jpg',
    fullDesc:
      'Our professional teeth whitening treatment delivers results up to 8 shades brighter in a single session. Unlike over-the-counter products, our clinical-grade whitening gel is applied under controlled conditions, ensuring even, long-lasting results without sensitivity. We also offer take-home whitening kits for gradual brightening at your convenience.',
    benefits: [
      'Up to 8 shades brighter in one session',
      'Safe, clinically supervised procedure',
      'Minimal to no sensitivity',
      'Long-lasting results (1–2 years)',
      'Take-home kit option available',
      'Instant confidence boost',
    ],
    duration: '60–90 minutes (in-clinic)',
  },
  {
    slug: 'root-canal',
    title: 'Root Canal Treatment',
    shortDesc: 'Pain-free root canal therapy to save your natural tooth.',
    icon: 'rootcanal',
    image: '/images/services/root-canal.jpg',
    fullDesc:
      'Modern root canal treatment is nothing to fear. Using advanced rotary instruments and precise anaesthesia, Dr. Chandrasekar removes infected pulp tissue, cleans and shapes the root canals, and seals them to prevent reinfection. The procedure saves your natural tooth and eliminates pain — most patients report the treatment is no more uncomfortable than a routine filling.',
    benefits: [
      'Eliminates tooth pain completely',
      'Saves your natural tooth',
      'Prevents spread of infection',
      'Virtually painless with modern techniques',
      'High success rate (95%+)',
      'Restored with a crown for full function',
    ],
    duration: '1–2 appointments of 60–90 minutes',
  },
  {
    slug: 'dental-crowns',
    title: 'Dental Crowns & Bridges',
    shortDesc: 'Restore damaged teeth with precision-crafted crowns.',
    icon: 'crown',
    image: '/images/services/dental-crowns.jpg',
    fullDesc:
      'Dental crowns cap and protect damaged, cracked, or weakened teeth, restoring their shape, strength, and appearance. Bridges replace one or more missing teeth by anchoring to adjacent teeth. We use high-quality ceramic and zirconia materials that are colour-matched to your natural teeth for a seamless, beautiful result.',
    benefits: [
      'Restores full tooth strength and function',
      'Natural-looking ceramic and zirconia options',
      'Protects cracked or weakened teeth',
      'Bridges replace missing teeth without implants',
      'Custom colour-matched to your smile',
      'Durable — lasts 10–15 years',
    ],
    duration: '2 appointments over 1–2 weeks',
  },
  {
    slug: 'orthodontics',
    title: 'Orthodontics',
    shortDesc: 'Braces and aligners to correct misaligned teeth and jaws.',
    icon: 'braces',
    image: '/images/services/orthodontics.jpg',
    fullDesc:
      'Our orthodontic treatments correct misaligned teeth, crowding, spacing, and bite problems for patients of all ages. We offer traditional metal braces, ceramic tooth-coloured braces, and clear aligner systems. Each treatment plan is customised after a thorough digital assessment, ensuring the most efficient path to your ideal smile.',
    benefits: [
      'Corrects crowding, gaps, and bite issues',
      'Options for children, teens, and adults',
      'Metal, ceramic, and clear aligner options',
      'Improves oral hygiene and long-term health',
      'Digital treatment planning for predictability',
      'Supervised by an experienced orthodontist',
    ],
    duration: '12–24 months depending on case',
  },
  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    shortDesc: 'Professional scaling and polishing for optimal oral health.',
    icon: 'cleaning',
    image: '/images/services/teeth-cleaning.jpg',
    fullDesc:
      'Professional teeth cleaning (scaling and polishing) removes plaque, tartar, and stains that regular brushing cannot reach. Our hygienists use ultrasonic scalers and hand instruments to clean above and below the gumline, followed by polishing for a smooth, fresh finish. Regular cleanings every 6 months are the foundation of good oral health.',
    benefits: [
      'Removes hardened tartar and plaque',
      'Prevents gum disease and cavities',
      'Freshens breath significantly',
      'Early detection of dental issues',
      'Polished, smooth tooth surfaces',
      'Recommended every 6 months',
    ],
    duration: '45–60 minutes',
  },
  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'Gentle, child-friendly dental care for your little ones.',
    icon: 'pediatric',
    image: '/images/services/pediatric-dentistry.jpg',
    fullDesc:
      'Our child-friendly dental care is designed to make every visit a positive experience. From the first tooth to teenage years, we provide preventive care, fillings, fluoride treatments, and orthodontic assessments in a warm, welcoming environment. We take extra time to explain procedures to children and parents, building trust and healthy dental habits for life.',
    benefits: [
      'Child-friendly, anxiety-free environment',
      'Preventive care and fluoride treatments',
      'Early orthodontic assessment',
      'Gentle techniques for sensitive children',
      'Education on brushing and diet',
      'Builds positive dental habits for life',
    ],
    duration: '30–45 minutes per visit',
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
