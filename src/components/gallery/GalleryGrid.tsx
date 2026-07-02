'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import type { GalleryImage } from '@/types';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'clinic', label: 'Our Clinic' },
  { key: 'treatment', label: 'Treatments' },
  { key: 'team', label: 'Our Team' },
] as const;

type Category = (typeof categories)[number]['key'];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25 }}
        className="relative mx-16 max-h-[85vh] max-w-4xl w-full aspect-video overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full w-full bg-white/5">
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          {/* Fallback */}
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-white/40 text-sm">{images[index].alt}</p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-sm font-medium text-white">{images[index].alt}</p>
          <p className="text-xs text-white/60">{index + 1} / {images.length}</p>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative mb-4 cursor-pointer overflow-hidden rounded-2xl border border-border bg-muted break-inside-avoid"
                onClick={() => openLightbox(i)}
              >
                <div className={`relative w-full ${i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]'} bg-gradient-to-br from-primary/10 to-primary/5`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* Fallback */}
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="text-xs text-muted-foreground px-4 text-center">{img.alt}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-foreground/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn size={28} className="text-white" />
                  <p className="text-xs font-medium text-white/90">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
