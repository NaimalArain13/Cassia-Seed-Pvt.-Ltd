import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

const ALL_PRODUCTS = [
  {
    slug: 'ahmer-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato Ahmer F1',
    nameUr: 'ہائبرڈ ٹماٹر اَحمر ایف ون',
    desc: 'Heat-tolerant, uniform fruit. Ideal for Pakistan\'s summer growing season. Produces firm, round tomatoes with excellent shelf life.',
    wt: 'N.Wt 10g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-ahmer-tomato.png',
  },
  {
    slug: 'queen-f1',
    category: 'gourds',
    name: 'Sponge Gourd Queen F1',
    nameUr: 'ہائبرڈ سپنج گوارد کوئین',
    desc: 'Long, tender, early harvest. High yield per acre. Excellent for both fresh market and processing.',
    wt: 'N.Wt 50g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-sponge-gourd-queen-2.png',
  },
  {
    slug: 'h-555-f1',
    category: 'peppers',
    name: 'Hot Pepper H-555 F1',
    nameUr: 'ہاٹ پیپر ایچ-۵۵۵',
    desc: 'Deep red, high pungency, exporter favorite. Consistent fruit size and color for export markets.',
    wt: 'N.Wt 10g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-hot-pepper-555.jpeg',
  },
  {
    slug: 'mino-early',
    category: 'root-vegetables',
    name: 'Radish Mino Early',
    nameUr: 'مولی مینو ارلی',
    desc: 'Fast-growing, long, white, crisp variety.',
    wt: 'N.Wt 25g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-radish-mino-early.png',
  },
  {
    slug: 'purple-top',
    category: 'root-vegetables',
    name: 'Turnip Purple Top',
    nameUr: 'شلجم پرپل ٹاپ',
    desc: 'Traditional variety with purple crown, sweet flavor.',
    wt: 'N.Wt 25g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-turnip-purple-top.png',
  },
  {
    slug: 'beet-root',
    category: 'root-vegetables',
    name: 'Beet Root F1',
    nameUr: 'چقندر ایف ون',
    desc: 'Deep red, uniform globe shape, rich in nutrients.',
    wt: 'N.Wt 25g',
    brand: 'cassia' as const,
    img: '/assets/products/cassia-beet-root.png',
  },
  {
    slug: 'redo-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    desc: 'Export-grade, plum shape, long shelf life. Consistent color and firmness for international markets.',
    wt: 'N.Wt 10g',
    brand: 'malapine' as const,
    img: '/assets/products/malapine-tomato-redo.jpeg',
  },
  {
    slug: 'royal-f1',
    category: 'gourds',
    name: 'Hybrid Papaya ROYAL F1',
    nameUr: 'ہائبرڈ پپیتا رائل ایف ون',
    desc: 'High-yield, sweet, uniform color. Export ready with excellent disease resistance.',
    wt: 'N.Wt 10g',
    brand: 'malapine' as const,
    img: '/assets/products/malapine-papaya-royal.png',
  },
];

const WA_NUMBER = '923001234567';

interface Props {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product: slug } = await params;
  const p = ALL_PRODUCTS.find((x) => x.slug === slug);
  if (!p) return { title: 'Product not found' };
  return { title: `${p.name} — Cassia Seed Pvt. Ltd` };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, product: slug } = await params;
  const locale = await getLocale();
  const p = ALL_PRODUCTS.find((x) => x.slug === slug && x.category === category);
  if (!p) notFound();

  const brandLabel = p.brand === 'malapine' ? 'MalaPine' : 'Cassia';
  const brandClass = p.brand === 'malapine' ? 'badge-brand-malapine' : 'badge-brand-cassia';

  return (
    <div>
      <section className="section">
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: 8, fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href={`/products/${category}`}>
              {category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>{p.name}</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Image */}
            <div
              className="card"
              style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 320 }}
            >
              <Image
                src={p.img}
                alt={p.name}
                width={400}
                height={400}
                style={{ objectFit: 'contain', maxHeight: 360 }}
              />
            </div>

            {/* Details */}
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                <span className={`badge ${brandClass}`}>{brandLabel}</span>
                <span className="badge badge-f1">F1 HYBRID</span>
              </div>

              <h1 className="h-section">{p.name}</h1>

              {(locale === 'ur' || locale === 'mix') && p.nameUr && (
                <h2 className="urdu-h1" style={{ marginTop: 8, color: 'var(--text)' }}>
                  {p.nameUr}
                </h2>
              )}

              <p className="h-sub" style={{ marginTop: 16 }}>{p.desc}</p>

              {p.wt && (
                <div
                  style={{
                    display: 'inline-block',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: '8px 16px',
                    fontSize: 14,
                    marginTop: 16,
                  }}
                >
                  {p.wt}
                </div>
              )}

              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=I'm interested in ${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  💬 Order on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
