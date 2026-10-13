import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/products/ProductCard';
import { Link } from '@/i18n/navigation';
import {
  getCategories,
  getProducts,
  getVarieties,
  type SanityProduct,
  type SanityVariety,
} from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return { title: `${name} Seeds — Cassia Seed Pvt. Ltd` };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const [categories, varieties] = await Promise.all([getCategories(), getVarieties(category)]);
  if (!categories.some((c) => c.slug === category)) notFound();

  if (varieties.length > 0) {
    return <TypeGrid category={category} varieties={varieties} />;
  }

  const locale = await getLocale();
  const products = await getProducts();
  const categoryProducts = products.filter((p) => p.category === category);
  return <CategoryContent category={category} products={categoryProducts} locale={locale} />;
}

function TypeGrid({ category, varieties }: { category: string; varieties: SanityVariety[] }) {
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <Link href="/products" style={{ fontSize: 14, opacity: 0.75 }}>
            ← All Categories
          </Link>
          <h1 className="h-display" style={{ color: 'inherit', marginTop: 12, marginBottom: 8 }}>
            {categoryName}
          </h1>
          <p style={{ opacity: 0.75, marginTop: 0 }}>{varieties.length} varieties</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 20,
            }}
          >
            {varieties.map((variety) => (
              <Link
                key={variety._id}
                href={`/products/${category}/${variety.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%' }}>
                    {variety.image ? (
                      <Image
                        src={urlFor(variety.image).width(400).height(533).fit('crop').url()}
                        alt={variety.nameEn}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                      />
                    ) : null}
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{variety.nameEn}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{variety.use}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryContent({
  category,
  products,
  locale,
}: {
  category: string;
  products: SanityProduct[];
  locale: string;
}) {
  const t = useTranslations('categories');
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <section className="contact-hero">
        <div className="container">
          <Link href="/products" style={{ fontSize: 14, opacity: 0.75 }}>
            ← {t('eyebrow')}
          </Link>
          <h1 className="h-display" style={{ color: 'inherit', marginTop: 12, marginBottom: 8 }}>
            {categoryName}
          </h1>
          <p style={{ opacity: 0.75, marginTop: 0 }}>
            {products.length} {t('varieties')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((p) => (
                <ProductCard key={p._id} product={p} locale={locale} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '64px 0' }}>
              No products found in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
