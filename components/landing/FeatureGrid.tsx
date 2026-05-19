'use client';

import { useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';

const CASSIA_FEATURES = [
  { ico: '🌿', titleKey: 'f1Quality', descKey: 'f1QualityDesc' },
  { ico: '📈', titleKey: 'maxYield', descKey: 'maxYieldDesc' },
  { ico: '🤝', titleKey: 'farmerSupport', descKey: 'farmerSupportDesc' },
  { ico: '🚚', titleKey: 'nationwide', descKey: 'nationwideDesc' },
];

const MALAPINE_FEATURES = [
  { ico: '✦', titleKey: 'exportStd', descKey: 'exportStdDesc' },
  { ico: '📦', titleKey: 'packaging', descKey: 'packagingDesc' },
  { ico: '🌍', titleKey: 'global', descKey: 'globalDesc' },
  { ico: '🔬', titleKey: 'rnd', descKey: 'rndDesc' },
];

const CASSIA_DATA = [
  { ico: '🌿', title: 'F1 Hybrid Quality', desc: 'Certified high-yield varieties bred for Pakistan.' },
  { ico: '📈', title: 'Maximum Yield', desc: "Engineered for Pakistan's climate and soils." },
  { ico: '🤝', title: 'Farmer Support', desc: 'Agronomist guidance from sowing to harvest.' },
  { ico: '🚚', title: 'Nationwide Delivery', desc: 'From Karachi to Peshawar — and everywhere between.' },
];

const MALAPINE_DATA = [
  { ico: '✦', title: 'Export Standard', desc: 'Each batch certified for international markets.' },
  { ico: '📦', title: 'Premium Packaging', desc: 'Black + gold packets sized for export logistics.' },
  { ico: '🌍', title: 'Global Distribution', desc: 'Trusted by buyers across the Gulf, Africa, and Europe.' },
  { ico: '🔬', title: 'Hybrid R&D', desc: 'Continual selection for yield and disease resistance.' },
];

export default function FeatureGrid() {
  const { brand } = useBrand();
  const t = useTranslations('features');
  const data = brand === 'malapine' ? MALAPINE_DATA : CASSIA_DATA;

  return (
    <section className="section section-band">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h2 className="h-section">
            {brand === 'malapine' ? t('malapineH2') : t('cassiaH2')}
          </h2>
          <p className="h-sub">{t('sub')}</p>
        </div>
        <div className="feature-grid">
          {data.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-ico">{f.ico}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
