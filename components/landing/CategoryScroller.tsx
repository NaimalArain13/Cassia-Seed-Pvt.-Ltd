'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getComingSoonImage } from '@/lib/product-images';

const CS = getComingSoonImage('cassia');

const CATEGORIES = [
  { slug: 'tomatoes', name: 'Tomatoes', count: 12, img: CS },
  { slug: 'peppers', name: 'Peppers', count: 9, img: CS },
  { slug: 'gourds', name: 'Gourds', count: 7, img: CS },
  { slug: 'root-vegetables', name: 'Root Veg.', count: 6, img: CS },
  { slug: 'leafy-greens', name: 'Leafy Greens', count: 4, img: CS },
];

export default function CategoryScroller() {
  const t = useTranslations('categories');

  return (
    <section className="section">
      <div className="container">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">{t('h2')}</h2>
        </div>

        <div className="cat-scroll">
          {CATEGORIES.map((c) => (
            <div key={c.slug} className="cat-card" style={{ cursor: 'default' }}>
              <div className="cat-img">
                <Image
                  src={c.img}
                  alt={c.name}
                  width={200}
                  height={160}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="cat-body">
                <div>
                  <h3 className="cat-name">{c.name}</h3>
                  {/* <p className="cat-meta">{c.count} {t('varieties')}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
