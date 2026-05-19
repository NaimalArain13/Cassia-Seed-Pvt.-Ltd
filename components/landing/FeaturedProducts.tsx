'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';
import ProductCard, { type ProductData } from '@/components/products/ProductCard';

const CASSIA_PRODUCTS: ProductData[] = [
  {
    slug: 'ahmer-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato Ahmer F1',
    nameUr: 'ہائبرڈ ٹماٹر اَحمر ایف ون',
    desc: 'Heat-tolerant, uniform fruit',
    wt: 'N.Wt 10g',
    brand: 'cassia',
    img: '/assets/products/cassia-ahmer-tomato.png',
  },
  {
    slug: 'queen-f1',
    category: 'gourds',
    name: 'Sponge Gourd Queen F1',
    nameUr: 'ہائبرڈ سپنج گوارد کوئین',
    desc: 'Long, tender, early harvest',
    wt: 'N.Wt 50g',
    brand: 'cassia',
    img: '/assets/products/cassia-sponge-gourd-queen-2.png',
  },
  {
    slug: 'h-555-f1',
    category: 'peppers',
    name: 'Hot Pepper H-555 F1',
    nameUr: 'ہاٹ پیپر ایچ-۵۵۵',
    desc: 'Deep red, high pungency, exporter favorite',
    wt: 'N.Wt 10g',
    brand: 'cassia',
    img: '/assets/products/cassia-hot-pepper-555.jpeg',
  },
];

const MALAPINE_PRODUCTS: ProductData[] = [
  {
    slug: 'redo-f1',
    category: 'tomatoes',
    name: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    desc: 'Export-grade, plum shape, long shelf life',
    wt: 'N.Wt 10g',
    brand: 'malapine',
    img: '/assets/products/malapine-tomato-redo.jpeg',
  },
  {
    slug: 'royal-f1',
    category: 'gourds',
    name: 'Hybrid Papaya ROYAL F1',
    nameUr: 'ہائبرڈ پپیتا رائل ایف ون',
    desc: 'High-yield, sweet, uniform color',
    wt: 'N.Wt 10g',
    brand: 'malapine',
    img: '/assets/products/malapine-papaya-royal.png',
  },
  {
    slug: 'redo-f1-bulk',
    category: 'tomatoes',
    name: 'Hybrid Tomato REDO F1',
    nameUr: 'ہائبرڈ ٹماٹر ریڈو ایف ون',
    desc: 'Bestseller — uniform export grade',
    wt: 'N.Wt 10g',
    brand: 'malapine',
    img: '/assets/products/malapine-tomato-redo.jpeg',
  },
];

export default function FeaturedProducts() {
  const { brand } = useBrand();
  const locale = useLocale();
  const t = useTranslations('products');
  const products = brand === 'malapine' ? MALAPINE_PRODUCTS : CASSIA_PRODUCTS;

  return (
    <section className="section section-band">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">
            {brand === 'malapine' ? t('malapineH2') : t('cassiaH2')}
          </h2>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
