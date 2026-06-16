import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import FadeInView from '@/components/shared/FadeInView';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about_page');
  return { title: t('pageTitle') + ' — Cassia Seed Pvt. Ltd' };
}

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about_page');

  const whatWeDo = [
    { icon: '🔬', title: t('rdTitle'), body: t('rdBody') },
    { icon: '🌾', title: t('tradingTitle'), body: t('tradingBody') },
    { icon: '🤝', title: t('marketingTitle'), body: t('marketingBody') },
  ];

  return (
    <div>
      {/* Page header */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="h-display" style={{ color: 'inherit', marginBottom: 12 }}>
            {t('pageTitle')}
          </h1>
          <p style={{ opacity: 0.85 }}>{t('tagline')}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800 }}>
            <span className="eyebrow">{t('whoWeAreEyebrow')}</span>
            <h2 className="h-section" style={{ marginTop: 8 }}>
              {t('whoWeAreH2')}
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              {t('whoWeArePara1')}
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              {t('whoWeArePara2')}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section section-band">
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <span className="eyebrow">{t('whatWeDoEyebrow')}</span>
            <h2 className="h-section" style={{ marginTop: 8 }}>
              {t('whatWeDoH2')}
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {whatWeDo.map(({ icon, title, body }, i) => (
              <FadeInView
                key={title}
                className="card"
                delay={i * 0.1}
                style={{
                  padding: '28px 24px',
                  borderTop: '4px solid var(--primary)',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    margin: '0 0 10px',
                    color: 'var(--text)',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: 'var(--surface)',
              borderRadius: 16,
              padding: '48px 40px',
              borderLeft: '6px solid var(--primary)',
            }}
          >
            <span className="eyebrow">{t('commitmentEyebrow')}</span>
            <h2 className="h-section" style={{ marginTop: 8, marginBottom: 16 }}>
              {t('commitmentH2')}
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: 680,
              }}
            >
              {t('commitmentBody')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="section section-band">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            <FadeInView className="vm-card card" style={{ padding: 32 }}>
              <div className="label eyebrow">{t('vision')}</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>
                {t('visionBody')}
              </p>
            </FadeInView>
            <FadeInView className="vm-card card" style={{ padding: 32 }} delay={0.1}>
              <div className="label eyebrow">{t('mission')}</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>
                {t('missionBody')}
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 800 }}>
            <span className="eyebrow">{t('historyEyebrow')}</span>
            <h2 className="h-section" style={{ marginTop: 8, marginBottom: 24 }}>
              {t('historyH2')}
            </h2>

            <div style={{ display: 'flex', gap: 40, marginBottom: 32, flexWrap: 'wrap' }}>
              {[
                { year: '1985', label: 'Founded' },
                { year: '40+', label: 'Years' },
                { year: '2022', label: 'Incorporated' },
              ].map(({ year, label }) => (
                <div key={year} style={{ textAlign: 'center' }}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 26,
                      fontWeight: 700,
                      color: 'var(--primary)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {year}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-soft)',
                      marginTop: 4,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                marginBottom: 20,
              }}
            >
              {t('historyBody1')}
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: 'var(--text-muted)',
                marginBottom: 32,
              }}
            >
              {t('historyBody2')}
            </p>

            <blockquote
              style={{
                margin: 0,
                padding: '20px 28px',
                background: 'var(--surface)',
                borderRadius: 12,
                borderLeft: '4px solid var(--accent)',
                fontStyle: 'italic',
                fontSize: 17,
                fontWeight: 500,
                color: 'var(--text)',
                lineHeight: 1.6,
              }}
            >
              &ldquo;{t('historyQuote')}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
