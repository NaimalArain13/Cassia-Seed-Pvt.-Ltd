import { createElement } from 'react';

interface Props {
  en: React.ReactNode;
  ur: React.ReactNode;
  locale: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function BilingualBlock({ en, ur, locale, as: tag = 'div' }: Props) {
  if (locale === 'ur') {
    return createElement(tag, { className: 'urdu-block' }, ur);
  }
  if (locale === 'en') {
    return createElement(tag, null, en);
  }
  // mix: stacked EN → divider → UR
  return (
    <div className="bilingual">
      {createElement(tag, null, en)}
      <div className="bilingual-divider" />
      {createElement(tag, { className: 'urdu-block' }, ur)}
    </div>
  );
}
