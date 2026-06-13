'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getSeasonalFruitImages } from '@/lib/seasonal-fruit-images';

const SLIDE_INTERVAL = 4500;

export default function SeasonalFruitBanner() {
  const month = new Date().getMonth() + 1;
  const images = getSeasonalFruitImages(month);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      SLIDE_INTERVAL,
    );
    return () => clearInterval(id);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <section className="sfb">
      {images.map((src, i) => (
        <div
          key={src}
          className="sfb-slide"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
          />
        </div>
      ))}

      <div className="sfb-overlay" />

      <div className="container sfb-content">
        <span className="eyebrow sfb-eyebrow">In Season Now</span>
        <h2 className="sfb-headline">Fresh from the Field</h2>
        <p className="sfb-sub">{images.length} crops ready to grow this month</p>

        {images.length > 1 && (
          <div className="sfb-dots" role="tablist" aria-label="Slide indicators">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1} of ${images.length}`}
                className={`sfb-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
