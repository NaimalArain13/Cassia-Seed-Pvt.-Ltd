import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact');
  return { title: t('pageTitle') + ' — Cassia Seed Pvt. Ltd' };
}

const WA_NUMBER = '923255557303';
const EMAIL = 'Info@cassiaseed.com';
const MAPS_EMBED =
  'https://maps.google.com/maps?q=Gulshan-e-Zealpak+Cooperative+Housing+Society,+SITE+Area,+Hyderabad,+Sindh,+Pakistan&output=embed';

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('contact');

  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: 'var(--navbar-bg)',
          color: '#FFFFFF',
          padding: '80px 0 60px',
        }}
      >
        <div className="container">
          <h1 className="h-display" style={{ color: 'inherit', marginBottom: 12 }}>
            {t('pageTitle')}
          </h1>
          <p style={{ fontSize: 18, opacity: 0.85 }}>{t('pageSubtitle')}</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
              marginBottom: 48,
            }}
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 36 }}>💬</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t('whatsappLabel')}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                  +92 325 5557303
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="card"
              style={{
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 36 }}>✉️</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t('emailLabel')}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>{EMAIL}</div>
              </div>
            </a>

            {/* Landline */}
            <a
              href="tel:+922234003​98"
              className="card"
              style={{
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 36 }}>📞</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t('phone')}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>022-3400398</div>
              </div>
            </a>

            {/* Mobile */}
            <a
              href="tel:+923255557303"
              className="card"
              style={{
                padding: 28,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 36 }}>📱</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t('mobile')}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>0325-5557303</div>
              </div>
            </a>

            {/* Address */}
            <div
              className="card"
              style={{
                padding: 28,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                gridColumn: 'span 2',
              }}
            >
              <span style={{ fontSize: 36, flexShrink: 0 }}>📍</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{t('address')}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 4, lineHeight: 1.6 }}>
                  {t('addressValue')}
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed — hidden until verified */}
          {false && (
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                src={MAPS_EMBED}
                title={t('mapTitle')}
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
