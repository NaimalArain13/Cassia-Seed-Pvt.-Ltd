import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('categories');
  return { title: t('h2') + ' — Cassia Seed Pvt. Ltd' };
}

const CATEGORIES = [
  { slug: 'tomatoes', name: 'Tomatoes', count: 12, img: '/assets/categories/tomatoes/roma-tomato.jpeg' },
  { slug: 'peppers',  name: 'Peppers & Chillies', count: 9, img: '/assets/categories/peppers/serrano-pepper.jpeg' },
  { slug: 'gourds',   name: 'Gourds', count: 6, img: '/assets/categories/gourds/bottle-gourd.jpeg' },
  { slug: 'brinjals', name: 'Brinjals', count: 6, img: '/assets/categories/brinjals/brinjal.jpeg' },
];

export default function ProductsPage() {
  return <ProductsContent />;
}

function ProductsContent() {
  const t = useTranslations('categories');

  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <h1 className="h-display" style={{ color: 'inherit', marginBottom: 12 }}>
            {t('h2')}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cat-scroll" style={{ flexWrap: 'wrap' }}>
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
    </div>
  );
}
