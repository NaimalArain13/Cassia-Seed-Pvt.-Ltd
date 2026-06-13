import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { BrandProvider } from '@/lib/brand-context';
import BrandSelectorScreen from '@/components/shared/BrandSelectorScreen';
import type { Locale } from '@/i18n/routing';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const dir = locale === 'ur' ? 'rtl' : 'ltr';

  return (
    <NextIntlClientProvider messages={messages}>
      <BrandProvider>
        {/* Sync lang + dir on <html> before paint — needed for font and RTL CSS selectors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang="${locale}";document.documentElement.dir="${dir}";`,
          }}
        />
        <BrandSelectorScreen />
        {children}
      </BrandProvider>
    </NextIntlClientProvider>
  );
}
