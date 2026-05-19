'use client';

import { useTranslations } from 'next-intl';

const WA_NUMBER = '923001234567';

export default function WhatsAppFloatingButton() {
  const t = useTranslations('whatsapp');

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label={t('floatLabel')}
    >
      💬
    </a>
  );
}
