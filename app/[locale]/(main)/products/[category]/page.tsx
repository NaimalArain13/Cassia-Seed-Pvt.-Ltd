import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ProductCard, { type ProductData } from '@/components/products/ProductCard';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

const ALL_PRODUCTS: ProductData[] = [
  {
    slug: 'ahmer-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato Ahmer F1',
    nameUr: 'ہائبرڈ ٹماٹر اَحمر ایف ون',
    desc: 'Heat-tolerant, uniform fruit. Ideal for Pakistan\'s summer growing season.',
    wt: 'N.Wt 10g',
    brand: 'cassia',
    img: '/assets/products/cassia-ahmer-tomato.png',
  },
  {
    slug: 'queen-f1',
    category: 'gourds',
    name: 'Sponge Gourd Queen F1',
    nameUr: 'ہائبرڈ سپنج گوارد کوئین',
    desc: 'Long, tender, early harvest. High yield per acre.',
    wt: 'N.Wt 50g',
    brand: 'cassia',
    img: '/assets/products/cassia-sponge-gourd-queen-2.png',
  },
  {
    slug: 'h-555-f1',
    category: 'peppers',
    name: 'Hot Pepper H-555 F1',
    nameUr: 'ہاٹ پیپر ایچ-۵۵۵',
    desc: 'Deep red, high pungency, exporter favorite.',
    wt: 'N.Wt 10g',
    brand: 'cassia',
    img: '/assets/products/cassia-hot-pepper-555.jpeg',
  },
  {
    slug: 'mino-early',
    category: 'root-vegetables',
    name: 'Radish Mino Early',
    nameUr: 'مولی مینو ارلی',
    desc: 'Fast-growing, long, white, crisp variety.',
    wt: 'N.Wt 25g',
    brand: 'cassia',
    img: '/assets/products/cassia-radish-mino-early.png',
  },
  {
    slug: 'purple-top',
    category: 'root-vegetables',
    name: 'Turnip Purple Top',
    nameUr: 'شلجم پرپل ٹاپ',
    desc: 'Traditional variety with purple crown, sweet flavor.',
    wt: 'N.Wt 25g',
    brand: 'cassia',
    img: '/assets/products/cassia-turnip-purple-top.png',
  },
  {
    slug: 'beet-root',
    category: 'root-vegetables',
    name: 'Beet Root F1',
    nameUr: 'چقندر ایف ون',
    desc: 'Deep red, uniform globe shape, rich in nutrients.',
    wt: 'N.Wt 25g',
    brand: 'cassia',
    img: '/assets/products/cassia-beet-root.png',
  },
  {
    slug: 'redo-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    desc: 'Export-grade, plum shape, long shelf life.',
    wt: 'N.Wt 10g',
    brand: 'malapine',
    img: '/assets/products/malapine-tomato-redo.jpeg',
  },
  {
    slug: 'royal-f1',
    category: 'gourds',
    name: 'Hybrid Papaya ROYAL F1',
    nameUr: 'ہائبرڈ پپیتا رائل ایف ون',
    desc: 'High-yield, sweet, uniform color. Export ready.',
    wt: 'N.Wt 10g',
    brand: 'malapine',
    img: '/assets/products/malapine-papaya-royal.png',
  },
];

const VALID_CATEGORIES = ['tomatoes', 'peppers', 'gourds', 'root-vegetables', 'leafy-greens'];

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
  if (!VALID_CATEGORIES.includes(category)) notFound();
  const locale = await getLocale();
  const products = ALL_PRODUCTS.filter((p) => p.category === category);

  return <CategoryContent category={category} products={products} locale={locale} />;
}

function CategoryContent({
  category,
  products,
  locale,
}: {
  category: string;
  products: ProductData[];
  locale: string;
}) {
  const t = useTranslations('categories');
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <section style={{ background: 'var(--primary)', color: '#FFFFFF', padding: '80px 0 60px' }}>
        <div className="container">
          <Link href="/products" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
            ← {t('eyebrow')}
          </Link>
          <h1 className="h-display" style={{ color: 'inherit', marginTop: 12 }}>
            {categoryName}
          </h1>
          <p style={{ opacity: 0.8, marginTop: 8 }}>
            {products.length} {t('varieties')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((p, i) => (
                <ProductCard key={i} product={p} locale={locale} />
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
