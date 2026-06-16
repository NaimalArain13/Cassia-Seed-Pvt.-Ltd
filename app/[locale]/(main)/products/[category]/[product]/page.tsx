import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getComingSoonImage } from '@/lib/product-images';
import { CATEGORY_TYPES } from '@/lib/category-types';
import type { Metadata } from 'next';

const WA_NUMBER = '923255557303';

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product } = await params;
  const type = CATEGORY_TYPES[category]?.find((t) => t.slug === product);
  const name = type?.name ?? product.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return { title: `${name} — Coming Soon — Cassia Seed Pvt. Ltd` };
}

export default async function TypeDetailPage({ params }: Props) {
  const { category, product } = await params;

  const categoryTypes = CATEGORY_TYPES[category];
  if (!categoryTypes) notFound();

  const type = categoryTypes.find((t) => t.slug === product);
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const typeName = type?.name ?? product.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const sachetImg = getComingSoonImage(type?.brand ?? 'cassia');

  return (
    <div>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">

          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--text-muted)', marginBottom: 40, flexWrap: 'wrap' }}>
            <Link href="/products" style={{ color: 'var(--text-muted)' }}>Products</Link>
            <span>/</span>
            <Link href={`/products/${category}`} style={{ color: 'var(--text-muted)' }}>{categoryName}</Link>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>{typeName}</span>
          </div>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Left: type illustration */}
            {type && (
              <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', aspectRatio: '3/4' }}>
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            )}

            {/* Right: info + coming soon */}
            <div>
              {/* Coming Soon badge */}
              <span
                style={{
                  display: 'inline-block',
                  background: '#FEF3C7',
                  color: '#92400E',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: 99,
                  marginBottom: 16,
                }}
              >
                Coming Soon
              </span>

              <h1 className="h-section" style={{ marginBottom: 24 }}>{typeName}</h1>

              {/* Info table */}
              {type && (
                <div
                  className="card"
                  style={{ padding: '20px 24px', marginBottom: 28 }}
                >
                  {[
                    { icon: '🍽', label: 'Common Use', value: type.use },
                    { icon: '🌤', label: 'Growing Season', value: type.season },
                    { icon: '🌍', label: 'Origin', value: type.origin },
                  ].map(({ icon, label, value }) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        gap: 12,
                        padding: '10px 0',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {label}
                        </span>
                        <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border)', marginBottom: 24 }} />

              {/* Sachet placeholder */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <Image
                  src={sachetImg}
                  alt="Coming soon seed sachet"
                  width={160}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24, textAlign: 'center' }}>
                Our F1 hybrid seeds for this variety are currently in development.
                Contact us on WhatsApp to register your interest.
              </p>

              {/* CTA */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=I'm interested in ${encodeURIComponent(typeName)} seeds`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  💬 Ask on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div style={{ marginTop: 56, borderTop: '1px solid var(--border)', paddingTop: 24 }}>
            <Link
              href={`/products/${category}`}
              style={{ fontSize: 14, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              ← Back to {categoryName}
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
