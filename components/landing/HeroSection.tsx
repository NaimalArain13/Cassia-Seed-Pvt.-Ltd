'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';

const WA_NUMBER = '923001234567';

const HERO_IMAGES = {
  cassia: '/assets/products/cassia-ahmer-tomato.png',
  malapine: '/assets/products/malapine-papaya-royal.png',
};

export default function HeroSection() {
  const { brand } = useBrand();
  const locale = useLocale();
  const t = useTranslations('hero');

  const isMapline = brand === 'malapine';
  const eyebrow = isMapline ? t('malapineEyebrow') : t('cassiaEyebrow');
  const h1En = isMapline ? t('malapineH1') : t('cassiaH1');
  const h1Ur = isMapline ? t('malapineUrH1') : t('cassiaUrH1');
  const subEn = isMapline ? t('malapineSub') : t('cassiaSub');
  const subUr = isMapline ? t('malapineUrSub') : t('cassiaUrSub');
  const cta1 = isMapline ? t('malapineCta1') : t('cassiaCta1');
  const cta2 = t('cta2');
  const imgSrc = HERO_IMAGES[brand as keyof typeof HERO_IMAGES] ?? HERO_IMAGES.cassia;

  return (
    <section className="hero" data-bg={brand}>
      <div className="container hero-grid">
        <div>
          <span className="hero-tag">{eyebrow}</span>

          {locale !== 'ur' && <h1>{h1En}</h1>}
          {(locale === 'ur' || locale === 'mix') && (
            <h1 className="urdu-h1" style={{ color: 'inherit' }}>{h1Ur}</h1>
          )}

          {locale !== 'ur' && <p>{subEn}</p>}
          {(locale === 'ur' || locale === 'mix') && (
            <p
              className="urdu-h1"
              style={{
                fontSize: 17,
                lineHeight: 2.1,
                color: 'inherit',
                margin: locale === 'mix' ? '0 0 32px' : '24px 0 32px',
              }}
            >
              {subUr}
            </p>
          )}

          <div className="hero-ctas">
            <button className="btn btn-accent btn-lg">{cta1} →</button>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              💬 {cta2}
            </a>
          </div>
        </div>

        <div className="hero-card-mock">
          <Image
            src={imgSrc}
            alt="Featured seed packet"
            width={440}
            height={440}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
