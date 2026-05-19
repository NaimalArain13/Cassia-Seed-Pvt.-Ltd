'use client';

import { useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';

export default function StatsBar() {
  const { brand } = useBrand();
  const t = useTranslations('stats');

  const cassiaStats = [
    { ico: '🌱', num: '50+', lbl: t('varieties') },
    { ico: '🚜', num: '10,000+', lbl: t('farmers') },
    { ico: '🇵🇰', num: 'All Pakistan', lbl: t('supply') },
    { ico: '🏆', num: 'F1 Hybrid', lbl: t('quality') },
  ];

  const malapineStats = [
    { ico: '✦', num: 'Export', lbl: t('exportGrade') },
    { ico: '🌍', num: '6+', lbl: t('countries') },
    { ico: '🏭', num: 'ISO', lbl: t('standards') },
    { ico: '✓', num: 'F1 Hybrid', lbl: t('quality') },
  ];

  const stats = brand === 'malapine' ? malapineStats : cassiaStats;

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <span className="stat-ico">{s.ico}</span>
            <div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
