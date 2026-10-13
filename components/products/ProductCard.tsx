import Image from 'next/image';
import { getComingSoonImage } from '@/lib/product-images';
import { urlFor } from '@/sanity/lib/image';
import type { SanityProduct } from '@/sanity/lib/client';

interface Props {
  product: SanityProduct;
  locale: string;
}

export default function ProductCard({ product, locale }: Props) {
  const brandClass =
    product.brand === 'malapine' ? 'badge-brand-malapine' : 'badge-brand-cassia';
  const brandLabel = product.brand === 'malapine' ? 'MalaPine' : 'Cassia';
  const image = product.images?.[0];
  const imageUrl = image
    ? urlFor(image).width(400).height(300).fit('crop').url()
    : getComingSoonImage(product.brand, product.weight);

  return (
    <div className="product-card">
      <div className="product-img">
        <Image
          src={imageUrl}
          alt={product.nameEn}
          width={400}
          height={300}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div className="product-body">
        <div className="product-badges">
          <span className={`badge ${brandClass}`}>{brandLabel}</span>
          <span className="badge badge-f1">F1 HYBRID</span>
        </div>
        <h3 className="product-name">{product.nameEn}</h3>
        <p className="product-desc">{product.descriptionEn}</p>
        {(locale === 'ur' || locale === 'mix') && product.nameUr && (
          <>
            {locale === 'mix' && (
              <div className="bilingual-divider" style={{ margin: '10px 0' }} />
            )}
            <p className="urdu-block" style={{ fontSize: 16, margin: 0, color: 'var(--text)' }}>
              {product.nameUr}
            </p>
          </>
        )}
        <div className="product-foot" style={{ marginTop: 14 }}>
          {product.weight && <span className="product-wt">{product.weight}</span>}
        </div>
      </div>
    </div>
  );
}
