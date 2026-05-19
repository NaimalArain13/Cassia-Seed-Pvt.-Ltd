'use client';

import { useTranslations } from 'next-intl';

const WA_NUMBER = '923001234567';

export default function WhatsAppCTABanner() {
  const t = useTranslations('whatsapp');

  return (
    <section className="wa-banner">
      <div className="container wa-grid">
        <div>
          <h2>{t('bannerH2')}</h2>
          <p>{t('bannerSub')}</p>
        </div>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-whatsapp"
        >
          {t('bannerCta')}
        </a>
      </div>
    </section>
  );
}
