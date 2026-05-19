import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about_page');
  return { title: t('pageTitle') + ' — Cassia Seed Pvt. Ltd' };
}

export default function AboutPage() {
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about_page');

  return (
    <div>
      {/* Page header */}
      <section
        style={{
          background: 'var(--primary)',
          color: '#FFFFFF',
          padding: '80px 0 60px',
        }}
      >
        <div className="container">
          <h1 className="h-display" style={{ color: 'inherit', marginBottom: 16 }}>
            {t('pageTitle')}
          </h1>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div className="vm-card card" style={{ padding: 32 }}>
              <div className="label eyebrow">{t('vision')}</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginTop: 12 }}>{t('visionBody')}</p>
            </div>
            <div className="vm-card card" style={{ padding: 32 }}>
              <div className="label eyebrow">{t('mission')}</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginTop: 12 }}>{t('missionBody')}</p>
            </div>
          </div>

          {/* Story */}
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">{t('story')}</span>
            <h2 className="h-section" style={{ marginTop: 8 }}>
              {t('story')}
            </h2>
            <p className="h-sub" style={{ marginTop: 16 }}>
              {t('storyBody')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
