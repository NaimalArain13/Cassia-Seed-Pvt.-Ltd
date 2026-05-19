import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  // 'mix' locale shows both EN + UR content — it uses English UI strings
  const messageLocale = locale === 'mix' ? 'en' : locale;

  return {
    locale,
    messages: (await import(`../messages/${messageLocale}.json`)).default,
  };
});
