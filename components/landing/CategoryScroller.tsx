'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const CATEGORIES = [
  { slug: 'tomatoes', name: 'Tomatoes', image: '/assets/categories/tomatoes/roma-tomato.jpeg' },
  { slug: 'peppers',  name: 'Peppers',  image: '/assets/categories/peppers/serrano-pepper.jpeg' },
  { slug: 'gourds',   name: 'Gourds',   image: '/assets/categories/gourds/bottle-gourd.jpeg' },
  { slug: 'brinjals', name: 'Brinjals', image: '/assets/categories/brinjals/brinjal.jpeg' },
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
            <Link key={c.slug} href={`/products/${c.slug}`} className="cat-card">
              <div className="cat-img">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={200}
                  height={160}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="cat-body">
                <h3 className="cat-name">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
