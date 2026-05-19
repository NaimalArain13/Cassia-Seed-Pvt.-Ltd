'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { useBrand } from '@/lib/brand-context';

const LAUNCH_DATE = new Date('2026-09-01T00:00:00Z').getTime();

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function PlantivaPage() {
  const locale = useLocale();
  const t = useTranslations('plantiva');
  const router = useRouter();
  const { setBrand } = useBrand();
  const timer = useCountdown(LAUNCH_DATE);

  const handleBack = () => {
    setBrand('cassia');
    router.push('/');
  };

  const countdownItems = [
    { label: t('days'), val: pad(timer.d) },
    { label: t('hours'), val: pad(timer.h) },
    { label: t('minutes'), val: pad(timer.m) },
    { label: t('seconds'), val: pad(timer.s) },
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        color: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Decorative radial blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute', top: -120, right: -120,
          width: 480, height: 480,
          background: 'radial-gradient(circle at 50% 50%, rgba(123,28,28,0.10), transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', bottom: -160, left: -100,
          width: 420, height: 420,
          background: 'radial-gradient(circle at 50% 50%, rgba(123,28,28,0.06), transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <header
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 32px', position: 'relative', zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#7B1C1C',
          }}
        >
          {t('label')}
        </div>
        <button
          onClick={handleBack}
          style={{
            background: 'transparent', border: '1px solid #E6E2E0', color: '#1A1A1A',
            padding: '8px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
            cursor: 'pointer', letterSpacing: '0.04em',
          }}
        >
          {t('backToCassia')}
        </button>
      </header>

      {/* Main content */}
      <section
        style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '32px 24px 48px', textAlign: 'center',
          position: 'relative', zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 720, width: '100%' }}>
          {/* Logo */}
          <div style={{ display: 'inline-block', padding: '8px 32px', marginBottom: 40 }}>
            <Image
              src="/assets/plantiva-logo.jpg"
              alt="Plantiva"
              width={360}
              height={120}
              style={{ maxWidth: 'min(360px, 80vw)', display: 'block', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 9999,
              background: '#7B1C1C', color: '#FFFFFF',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 28,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#FFFFFF' }} />
            {t('badge')}
          </div>

          {/* Headline */}
          {locale !== 'ur' && (
            <h1
              style={{
                fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 700,
                letterSpacing: '-0.03em', lineHeight: 1.05,
                margin: '0 0 18px', color: '#1A1A1A',
              }}
            >
              {t('h1Part1')}{' '}
              <span style={{ color: '#7B1C1C', fontStyle: 'italic' }}>{t('h1Part2')}</span>
            </h1>
          )}

          {(locale === 'ur' || locale === 'mix') && (
            <p
              className="urdu-block"
              style={{ fontSize: 28, color: '#1A1A1A', margin: '0 0 18px', textAlign: 'center', direction: 'rtl' }}
            >
              {t('urH1')}
            </p>
          )}

          <p
            style={{
              fontSize: 17, lineHeight: 1.7, color: '#5A5A5A',
              maxWidth: 560, margin: '0 auto 40px',
            }}
          >
            {t('body')}
          </p>

          {/* Countdown */}
          <div
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12, maxWidth: 520, margin: '0 auto 40px',
            }}
          >
            {countdownItems.map(({ label, val }) => (
              <div
                key={label}
                style={{
                  background: '#FFFFFF', border: '1px solid #E6E2E0',
                  borderRadius: 8, padding: '16px 8px',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(28px, 4.2vw, 40px)', fontWeight: 700,
                    color: '#1A1A1A', letterSpacing: '-0.02em',
                    lineHeight: 1, fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: '#7B1C1C', marginTop: 8,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Email signup */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto',
              background: '#FFFFFF', border: '1px solid #E6E2E0',
              borderRadius: 9999, padding: 6,
            }}
          >
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              required
              style={{
                flex: 1, border: 0, outline: 'none',
                padding: '10px 18px', fontSize: 15,
                fontFamily: 'inherit', color: '#1A1A1A', background: 'transparent',
              }}
            />
            <button
              type="submit"
              style={{
                background: '#7B1C1C', color: '#FFFFFF', border: 0,
                padding: '10px 22px', borderRadius: 9999,
                fontWeight: 600, fontSize: 14, cursor: 'pointer', letterSpacing: '0.02em',
              }}
            >
              {t('notifyCta')}
            </button>
          </form>
          <div style={{ fontSize: 12, color: '#A8A8A8', marginTop: 12 }}>
            {t('notifyNote')}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '20px 32px', borderTop: '1px solid #E6E2E0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: '#A8A8A8', position: 'relative', zIndex: 2,
        }}
      >
        <div>{t('footerCopy')}</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a
            href="https://www.instagram.com/cassiaseedpvtltd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: 'pointer', color: 'inherit' }}
          >
            Instagram
          </a>
          <a href="mailto:info@cassiaseed.com" style={{ cursor: 'pointer', color: 'inherit' }}>
          info@cassiaseed.com
          </a>
        </div>
      </footer>
    </main>
  );
}
