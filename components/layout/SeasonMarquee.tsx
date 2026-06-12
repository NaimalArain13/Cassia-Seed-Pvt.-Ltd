'use client';

import { useBrand } from '@/lib/brand-context';
import { getCropsForMonth, CROP_DISPLAY, MONTH_NAMES, getSeasonForMonth } from '@/lib/seed-calendar';

const TONES: Record<string, string> = {
  red:    'linear-gradient(135deg,#FF6B6B,#C62828)',
  orange: 'linear-gradient(135deg,#FFB347,#D4A017)',
  green:  'linear-gradient(135deg,#74C69D,#2D6A4F)',
  lime:   'linear-gradient(135deg,#C7E9B4,#74C69D)',
  purple: 'linear-gradient(135deg,#C7A8E0,#7B4FA0)',
};

// Fallback items shown in Jan / Dec (no active sowing window)
const OFF_SEASON_ITEMS = [
  { ico: '🌱', name: 'Prepare your soil', tone: 'green'  },
  { ico: '💧', name: 'Check irrigation',  tone: 'lime'   },
  { ico: '🌿', name: 'Compost & amend',   tone: 'lime'   },
  { ico: '🛖', name: 'Ready your beds',   tone: 'green'  },
  { ico: '📅', name: 'February sowing starts soon', tone: 'orange' },
];

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

  const currentMonth = new Date().getMonth() + 1;
  const season = getSeasonForMonth(currentMonth);
  const crops = getCropsForMonth(currentMonth);

  const rawItems = season === 'off'
    ? OFF_SEASON_ITEMS
    : crops.map((c) => ({
        ico:  CROP_DISPLAY[c.id]?.ico  ?? '🌱',
        name: c.en,
        tone: CROP_DISPLAY[c.id]?.tone ?? 'green',
      }));

  // Triple the list so the marquee never gaps
  const items = [...rawItems, ...rawItems, ...rawItems];

  const seasonLabel =
    season === 'summer'     ? `☀️ ${MONTH_NAMES[currentMonth - 1]} · Summer Sowing Season` :
    season === 'winter'     ? `❄️ ${MONTH_NAMES[currentMonth - 1]} · Winter Sowing Season` :
    season === 'transition' ? `🌦️ ${MONTH_NAMES[currentMonth - 1]} · Transition Season`    :
                              `💤 ${MONTH_NAMES[currentMonth - 1]} · Off Season`;

  return (
    <div className="marquee" title={seasonLabel}>
      <div className="marquee-track">
        {items.map((it, i) => (
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
