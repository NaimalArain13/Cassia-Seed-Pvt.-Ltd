import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export interface ProductData {
  slug: string;
  category: string;
  name: string;
  nameUr?: string;
  desc: string;
  wt?: string;
  brand: 'cassia' | 'malapine';
  img: string;
}

interface Props {
  product: ProductData;
  locale: string;
}

export default function ProductCard({ product, locale }: Props) {
  const brandClass =
    product.brand === 'malapine' ? 'badge-brand-malapine' : 'badge-brand-cassia';
  const brandLabel = product.brand === 'malapine' ? 'MalaPine' : 'Cassia';

  return (
    <div className="product-card">
      <div className="product-img">
        <Image
          src={product.img}
          alt={product.name}
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
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
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
          {product.wt && <span className="product-wt">{product.wt}</span>}
          <Link
            href={`/products/${product.category}/${product.slug}`}
            className="product-view"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
