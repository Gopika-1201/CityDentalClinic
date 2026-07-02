'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';
import type { BeforeAfterItem } from '@/types';

function SliderCard({ item }: { item: BeforeAfterItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (dragging) updatePosition(e.clientX);
  }, [dragging, updatePosition]);
  const onMouseUp = useCallback(() => setDragging(false), []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-col-resize select-none overflow-hidden rounded-2xl border border-border shadow-lg"
        onMouseDown={onMouseDown}
        onTouchMove={(e) => onTouchMove(e.nativeEvent)}
      >
        {/* After image (full) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <Image
            src={item.after}
            alt={`${item.label} after`}
            fill
            className="object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-xs text-muted-foreground">After</p>
          </div>
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50">
            <Image
              src={item.before}
              alt={`${item.label} before`}
              fill
              className="object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-xs text-muted-foreground">Before</p>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-xl"
          style={{ left: `${position}%` }}
        >
          {/* Handle */}
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary shadow-xl">
            <ChevronsLeftRight size={16} className="text-white" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Before
        </div>
        <div className="absolute bottom-3 right-3 z-10 rounded-full bg-primary/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          After
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-sm font-semibold text-foreground">{item.label}</p>
    </div>
  );
}

export function BeforeAfterSlider({ items }: { items: BeforeAfterItem[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <SliderCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}
