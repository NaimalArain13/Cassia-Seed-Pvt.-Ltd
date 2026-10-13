import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getCategories } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('categories');
  return { title: t('h2') + ' — Cassia Seed Pvt. Ltd' };
}

export default async function ProductsPage() {
  const t = await getTranslations('categories');
  const categories = (await getCategories()).filter((c) => c.slug !== 'root-vegetables');

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
            {categories.map((c) => (
              <Link key={c.slug} href={`/products/${c.slug}`} className="cat-card">
                <div className="cat-img">
                  {c.image ? (
                    <Image
                      src={urlFor(c.image).width(200).height(160).fit('crop').url()}
                      alt={c.nameEn}
                      width={200}
                      height={160}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  ) : null}
                </div>
                <div className="cat-body">
                  <div>
                    <h3 className="cat-name">{c.nameEn}</h3>
                    {typeof c.count === 'number' && (
                      <p className="cat-meta">
                        {c.count} {t('varieties')}
                      </p>
                    )}
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
