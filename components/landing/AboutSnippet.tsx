'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useBrand } from '@/lib/brand-context';

export default function AboutSnippet() {
  const { brand } = useBrand();
  const locale = useLocale();
  const t = useTranslations('about');
  const isC = brand === 'cassia';

  const imgSrc = isC
    ? '/assets/products/cassia-sponge-gourd-queen-2.png'
    : '/assets/products/malapine-tomato-redo.jpeg';

  const h2 = isC ? t('cassiaH2') : t('malapineH2');
  const bodyEn = isC ? t('cassiaBody') : t('malapineBody');
  const bodyUr = isC ? t('cassiaUrBody') : t('malapineUrBody');

  return (
    <section className="section">
      <div className="container about-grid">
        <div className="about-img">
          <Image
            src={imgSrc}
            alt={h2}
            width={500}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 12 }}
          />
        </div>
        <div>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">{h2}</h2>

          {locale !== 'ur' && <p className="h-sub">{bodyEn}</p>}
          {(locale === 'ur' || locale === 'mix') && (
            <p className="urdu-block" style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: locale === 'mix' ? 12 : 0 }}>
              {bodyUr}
            </p>
          )}

          <div className="about-vm">
            <div className="vm-card">
              <div className="label">{t('visionLabel')}</div>
              <p className="body">{t('visionBody')}</p>
            </div>
            <div className="vm-card">
              <div className="label">{t('missionLabel')}</div>
              <p className="body">{t('missionBody')}</p>
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <Link href="/about" className="btn btn-outline">
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
