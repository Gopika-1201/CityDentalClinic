'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common';

const milestones = [
  {
    year: '2005',
    title: 'The Beginning',
    desc: 'City Dental Care was founded with a single mission — to bring world-class dental care to the people of Tiruppur with compassion and precision.',
  },
  {
    year: '2010',
    title: 'Expanding Expertise',
    desc: 'Dr. Chandrasekar completed advanced certifications in implantology and cosmetic dentistry, bringing cutting-edge treatments to the clinic.',
  },
  {
    year: '2016',
    title: 'Invisalign Certification',
    desc: 'Became one of the first certified Invisalign providers in the Tiruppur region, offering patients a discreet path to straighter smiles.',
  },
  {
    year: '2020',
    title: 'Certified Implant Provider',
    desc: 'Achieved certification as a premium implant provider, enabling full-arch restorations and same-day implant procedures.',
  },
  {
    year: '2024',
    title: '10,000+ Smiles',
    desc: 'A landmark milestone — over 10,000 patients treated, with a 99% success rate and countless lives transformed through better oral health.',
  },
];

export function StorySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <SectionHeading
          label="Our Journey"
          title="A Story of "
          highlight="Excellence"
          subtitle="Two decades of dedication, innovation, and genuine care for every patient who walks through our doors."
          className="mb-16"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:w-1/2 ${
                    isRight ? 'md:ml-0 md:pr-12' : 'md:ml-auto md:pl-12'
                  } pl-14 md:pl-0`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/30 ${
                      isRight
                        ? 'left-4 md:left-auto md:-right-2.5'
                        : 'left-4 md:left-auto md:-left-2.5'
                    } top-1`}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/10">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                      {m.year}
                    </span>
                    <h3 className="mb-1.5 font-heading text-lg font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
