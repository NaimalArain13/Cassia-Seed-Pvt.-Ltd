'use client';

import { useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';
import ComingSoonCard from '@/components/products/ComingSoonCard';
import { urlFor } from '@/sanity/lib/image';
import type { SanityProduct } from '@/sanity/lib/client';

interface Props {
  products: SanityProduct[];
}

export default function FeaturedProducts({ products }: Props) {
  const { brand } = useBrand();
  const t = useTranslations('products');
  const activeBrand = brand === 'malapine' ? 'malapine' : 'cassia';
  const visibleProducts = products.filter((p) => p.brand === activeBrand);

  return (
    <section className="section section-band">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">
            {activeBrand === 'malapine' ? t('malapineH2') : t('cassiaH2')}
          </h2>
        </div>
        <div className="product-grid">
          {visibleProducts.map((p) => {
            const image = p.images?.[0];
            const imageUrl = image ? urlFor(image).width(400).height(300).fit('crop').url() : undefined;

            return (
              <ComingSoonCard key={p._id} brand={p.brand} weight={p.weight} imageUrl={imageUrl} alt={p.nameEn} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
