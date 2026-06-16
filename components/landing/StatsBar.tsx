'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useBrand } from '@/lib/brand-context';

function parseStatValue(value: string): { target: number; suffix: string } | null {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return null;
  const target = parseInt(match[1].replace(/,/g, ''), 10);
  if (Number.isNaN(target)) return null;
  return { target, suffix: match[2] };
}

function AnimatedStatValue({ value }: { value: string }) {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(parsed ? '0' : value);

  useEffect(() => {
    if (!parsed || !inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(parsed.target * progress).toLocaleString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed]);

  return (
    <div ref={ref} className="stat-num">
      {display}
      {parsed?.suffix ?? ''}
    </div>
  );
}

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
          <motion.div
            key={i}
            className="stat"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="stat-ico">{s.ico}</span>
            <div>
              <AnimatedStatValue value={s.num} />
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
