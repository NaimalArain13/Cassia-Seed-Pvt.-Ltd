'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const CATEGORIES = [
  { slug: 'tomatoes', name: 'Tomatoes', count: 12, img: '/assets/products/cassia-ahmer-tomato.png' },
  { slug: 'peppers', name: 'Peppers', count: 9, img: '/assets/products/cassia-hot-pepper-555.jpeg' },
  { slug: 'gourds', name: 'Gourds', count: 7, img: '/assets/products/cassia-sponge-gourd-queen-2.png' },
  { slug: 'root-vegetables', name: 'Root Veg.', count: 6, img: '/assets/products/cassia-radish-mino-early.png' },
  { slug: 'leafy-greens', name: 'Leafy Greens', count: 4, img: '/assets/products/cassia-turnip-purple-top.png' },
];

export default function CategoryScroller() {
  const t = useTranslations('categories');

  return (
    <section className="section">
      <div className="container">
        <div className="flex-between" style={{ alignItems: 'flex-end' }}>
          <div>
            <span className="eyebrow">{t('eyebrow')}</span>
            <h2 className="h-section">{t('h2')}</h2>
          </div>
          <Link href="/products" className="btn btn-ghost">
            {t('viewAll')}
          </Link>
        </div>

        <div className="cat-scroll">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`} className="cat-card">
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
                  <p className="cat-meta">
                    {c.count} {t('varieties')}
                  </p>
                </div>
                <span className="cat-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
