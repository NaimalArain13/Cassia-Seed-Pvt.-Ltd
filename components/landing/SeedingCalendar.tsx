'use client';

import { useState } from 'react';
import {
  MONTH_SHORT, MONTH_NAMES, getCropsForMonth,
  getSeasonForMonth, CROP_DISPLAY, type Crop,
} from '@/lib/seed-calendar';

const SEASON_META: Record<string, { label: string; icon: string; color: string; bg: string }> = {
  summer:     { label: 'Summer Season',     icon: '☀️', color: '#A3705A', bg: '#FEF3E8' },
  winter:     { label: 'Winter Season',     icon: '❄️', color: '#2D6A9F', bg: '#EAF3FB' },
  transition: { label: 'Transition Season', icon: '🌦️', color: '#4A7A4A', bg: '#EBF5EB' },
  off:        { label: 'Off Season',        icon: '💤', color: '#777',    bg: '#F5F5F5' },
};

function CropCard({ crop }: { crop: Crop }) {
  const display = CROP_DISPLAY[crop.id];
  const isSummer = crop.seasons.includes('summer');
  const isWinter = crop.seasons.includes('winter');

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 12,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 24 }}>{display?.ico ?? '🌱'}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', lineHeight: 1.3 }}>
            {crop.en}
          </div>
          {crop.ur && (
            <div
              className="urdu-block"
              style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}
            >
              {crop.ur}
            </div>
          )}
        </div>
        {/* Season badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-end' }}>
          {isSummer && (
            <span style={{ fontSize: 10, background: '#FEF3E8', color: '#A3705A', borderRadius: 4, padding: '2px 6px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              ☀️ Summer
            </span>
          )}
          {isWinter && (
            <span style={{ fontSize: 10, background: '#EAF3FB', color: '#2D6A9F', borderRadius: 4, padding: '2px 6px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              ❄️ Winter
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px 12px',
          borderTop: '1px solid var(--border-soft)',
          paddingTop: 8,
          marginTop: 2,
        }}
      >
        <div>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: 2 }}>Sow</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{crop.sowingTime}</div>
        </div>
        {crop.firstHarvest && (
          <div>
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: 2 }}>Harvest</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{crop.firstHarvest}</div>
          </div>
        )}
        {crop.yieldPerPlant && (
          <div>
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-soft)', marginBottom: 2 }}>Yield</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{crop.yieldPerPlant} / plant</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SeedingCalendar() {
  const currentMonth = new Date().getMonth() + 1;
  const [selected, setSelected] = useState(currentMonth);

  const crops = getCropsForMonth(selected);
  const season = getSeasonForMonth(selected);
  const meta = SEASON_META[season];

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <span className="eyebrow">Farmer&apos;s Guide</span>
          <h2 className="h-section">Pakistan Sowing Calendar</h2>
          <p className="h-sub" style={{ marginTop: 6, maxWidth: 560 }}>
            Know what to sow each month. Select any month to see the full crop guide for that period.
          </p>
        </div>

        {/* Month selector */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            overflowX: 'auto',
            paddingBottom: 4,
            marginBottom: 24,
            scrollbarWidth: 'none',
          }}
        >
          {MONTH_SHORT.map((m, idx) => {
            const monthNum = idx + 1;
            const isActive = selected === monthNum;
            const isCurrent = currentMonth === monthNum;
            const count = getCropsForMonth(monthNum).length;
            return (
              <button
                key={m}
                onClick={() => setSelected(monthNum)}
                style={{
                  flexShrink: 0,
                  minWidth: 56,
                  padding: '8px 4px',
                  borderRadius: 10,
                  border: isActive ? '2px solid var(--primary)' : '2px solid var(--border-soft)',
                  background: isActive ? 'var(--primary)' : 'var(--card)',
                  color: isActive ? 'var(--primary-fg)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                  transition: 'all 0.15s',
                  position: 'relative',
                }}
              >
                {isCurrent && (
                  <span
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -4,
                      background: 'var(--primary)',
                      color: 'var(--primary-fg)',
                      fontSize: 8,
                      fontWeight: 700,
                      borderRadius: 4,
                      padding: '1px 4px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    NOW
                  </span>
                )}
                <span style={{ fontSize: 13, fontWeight: isActive ? 700 : 500 }}>{m}</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: isActive ? 'var(--primary-fg)' : count > 0 ? 'var(--primary)' : 'var(--text-soft)',
                    opacity: count === 0 ? 0.5 : 1,
                  }}
                >
                  {count > 0 ? count : '—'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Season banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: meta.bg,
            border: `1px solid ${meta.color}30`,
            borderRadius: 12,
            padding: '14px 20px',
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 24 }}>{meta.icon}</span>
          <div>
            <div style={{ fontWeight: 700, color: meta.color, fontSize: 15 }}>
              {MONTH_NAMES[selected - 1]} — {meta.label}
            </div>
            <div style={{ fontSize: 13, color: meta.color, opacity: 0.75, marginTop: 2 }}>
              {crops.length > 0
                ? `${crops.length} crop${crops.length !== 1 ? 's' : ''} sowable this month`
                : 'No active sowing window — a good time to prepare beds and soil'}
            </div>
          </div>
        </div>

        {/* Crop grid or empty state */}
        {crops.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 14,
            }}
          >
            {crops.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 24px',
              color: 'var(--text-muted)',
              background: 'var(--surface)',
              borderRadius: 12,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 12 }}>🌱</div>
            <p style={{ fontSize: 15, lineHeight: 1.6 }}>
              January and December fall outside all sowing windows in Pakistan.<br />
              Use this time to prepare soil, check irrigation, and plan your next season.
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <p
          style={{
            fontSize: 12,
            color: 'var(--text-soft)',
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          * Sowing windows are general guidelines for most of Pakistan. Local climate, altitude, and variety choice may affect timing. Source: Agribusiness Pakistan.
        </p>
      </div>
    </section>
  );
}
