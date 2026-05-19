'use client';

import { useTranslations } from 'next-intl';
import YouTubeEmbed from '@/components/shared/YouTubeEmbed';

const VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Hybrid Tomato Ahmer F1 — Field Demo, Multan' },
  { id: 'dQw4w9WgXcQ', title: 'Sponge Gourd Queen F1 — Farmer Story' },
];

export default function YouTubeSection() {
  const t = useTranslations('youtube');

  return (
    <section className="yt-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section" style={{ color: 'inherit' }}>
            {t('h2')}
          </h2>
          <p className="h-sub" style={{ color: 'inherit', opacity: 0.85 }}>
            {t('sub')}
          </p>
        </div>
        <div className="yt-grid">
          {VIDEOS.map((v, i) => (
            <div key={i} className="yt-card">
              <YouTubeEmbed videoId={v.id} title={v.title} />
              <h3 className="yt-title" style={{ color: 'inherit' }}>
                {v.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
