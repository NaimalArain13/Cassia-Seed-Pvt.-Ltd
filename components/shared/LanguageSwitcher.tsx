'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const LOCALES = ['en', 'ur', 'mix'] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('lang');

  const switchLocale = (next: string) => {
    router.push(pathname, { locale: next });
  };

  return (
    <div className="lang-switch">
      {LOCALES.map((l) => (
        <button
          key={l}
          className={locale === l ? 'on' : ''}
          onClick={() => switchLocale(l)}
          aria-label={`Switch to ${l}`}
        >
          {t(l)}
        </button>
      ))}
    </div>
  );
}
