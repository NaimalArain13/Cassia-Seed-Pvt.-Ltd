import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getCategories } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default async function CategoryScroller() {
  const t = await getTranslations('categories');
  const categories = (await getCategories()).filter((c) => c.slug !== 'root-vegetables');

  return (
    <section className="section">
      <div className="container">
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">{t('h2')}</h2>
        </div>

        <div className="cat-scroll">
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
                <h3 className="cat-name">{c.nameEn}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
