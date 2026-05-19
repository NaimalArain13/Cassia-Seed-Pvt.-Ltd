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
  { slug: 'tomatoes', name: 'Tomatoes', count: 12, img: '/assets/products/cassia-ahmer-tomato.png' },
  { slug: 'peppers', name: 'Peppers & Chillies', count: 9, img: '/assets/products/cassia-hot-pepper-555.jpeg' },
  { slug: 'gourds', name: 'Gourds', count: 7, img: '/assets/products/cassia-sponge-gourd-queen-2.png' },
  { slug: 'root-vegetables', name: 'Root Vegetables', count: 6, img: '/assets/products/cassia-radish-mino-early.png' },
  { slug: 'leafy-greens', name: 'Leafy Greens', count: 4, img: '/assets/products/cassia-turnip-purple-top.png' },
];

export default function ProductsPage() {
  return <ProductsContent />;
}

function ProductsContent() {
  const t = useTranslations('categories');

  return (
    <div>
      <section
        style={{ background: 'var(--primary)', color: '#FFFFFF', padding: '80px 0 60px' }}
      >
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t('eyebrow')}
          </span>
          <h1 className="h-display" style={{ color: 'inherit', marginTop: 8 }}>
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
