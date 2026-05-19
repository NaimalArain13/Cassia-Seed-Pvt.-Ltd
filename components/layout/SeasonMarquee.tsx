'use client';

import { useBrand } from '@/lib/brand-context';

const CASSIA_ITEMS = [
  { ico: '🍅', name: 'Hybrid Tomato Ahmer F1', tone: 'red' },
  { ico: '🌶️', name: 'Hot Pepper H-555 F1', tone: 'orange' },
  { ico: '🥒', name: 'Sponge Gourd Queen F1', tone: 'green' },
  { ico: '🫑', name: 'Shimla Mirch Green Bell', tone: 'lime' },
  { ico: '🥬', name: 'Radish Mino Early', tone: 'lime' },
  { ico: '🍅', name: 'Cherry Tomato Gold', tone: 'red' },
  { ico: '🥒', name: 'Karela Hybrid No. 1', tone: 'green' },
  { ico: '🥕', name: 'Turnip Purple Top', tone: 'purple' },
];

const TONES: Record<string, string> = {
  red:    'linear-gradient(135deg,#FF6B6B,#C62828)',
  orange: 'linear-gradient(135deg,#FFB347,#D4A017)',
  green:  'linear-gradient(135deg,#74C69D,#2D6A4F)',
  lime:   'linear-gradient(135deg,#C7E9B4,#74C69D)',
  purple: 'linear-gradient(135deg,#C7A8E0,#7B4FA0)',
};

const MALAPINE_WORDS = ['SEEDS', 'GRAINES', 'ZADEN', 'TOHUM', 'SEMENA', 'SEMILLAS'];

export default function SeasonMarquee() {
  const { brand } = useBrand();

  if (brand === 'malapine') {
    const all = [...MALAPINE_WORDS, ...MALAPINE_WORDS, ...MALAPINE_WORDS];
    return (
      <div className="marquee" style={{ letterSpacing: '0.18em', fontWeight: 600 }}>
        <div className="marquee-track">
          {all.map((s, i) => (
            <span key={i} className="marquee-item" style={{ gap: 28 }}>
              {s}
              <span style={{ opacity: 0.5 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  const all = [...CASSIA_ITEMS, ...CASSIA_ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((it, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-thumb" style={{ background: TONES[it.tone] }}>
              {it.ico}
            </span>
            {it.name}
          </span>
        ))}
      </div>
    </div>
  );
}
