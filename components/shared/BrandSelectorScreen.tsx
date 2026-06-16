'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from '@/i18n/navigation';
import { useBrand, type Brand } from '@/lib/brand-context';

const BRANDS: Array<{
  // Plantiva is defined but filtered out below until it launches
  id: Brand;
  name: string;
  tagline: string;
  logo: string;
  cardStyle: React.CSSProperties;
  nameColor: string;
  taglineColor: string;
}> = [
  {
    id: 'cassia',
    name: 'Cassia Seed Pvt. Ltd',
    tagline: 'Premium F1 Hybrid Seeds',
    logo: '/assets/cassia-transparent-bg.png',
    cardStyle: { background: '#FAF7F3', border: '2px solid #C4906A' },
    nameColor: '#2A1608',
    taglineColor: '#8C5A2F',
  },
  {
    id: 'malapine',
    name: 'MalaPine Seeds',
    tagline: 'Export-Grade Varieties',
    logo: '/assets/malapine-transparent-bg.png',
    cardStyle: { background: '#111111', border: '2px solid #C9A84C' },
    nameColor: '#F0E6CC',
    taglineColor: '#C9A84C',
  },
  {
    id: 'plantiva',
    name: 'Plantiva',
    tagline: 'Coming Soon',
    logo: '/assets/plantiva-logo.jpg',
    cardStyle: { background: '#FFFFFF', border: '2px solid #7B1C1C' },
    nameColor: '#2A1608',
    taglineColor: '#7B1C1C',
  },
];

const LOGOS: Record<Brand, string> = {
  cassia: '/assets/cassia-transparent-bg.png',
  malapine: '/assets/malapine-transparent-bg.png',
  plantiva: '/assets/plantiva-logo.jpg',
};

function removeGate() {
  document.documentElement.classList.remove('brand-gate');
}

/** Branded loader shown after the user picks a brand — lets the theme apply before revealing the page */
function BrandLoader({ brand }: { brand: Brand }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
      }}
    >
      <Image
        src={LOGOS[brand]}
        alt={brand}
        width={160}
        height={64}
        style={{ objectFit: 'contain' }}
        priority
      />
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '3px solid var(--border)',
          borderTopColor: 'var(--primary)',
          animation: 'brand-spin 0.85s linear infinite',
        }}
      />
    </div>
  );
}

export default function BrandSelectorScreen() {
  const { setBrand } = useBrand();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [loadingBrand, setLoadingBrand] = useState<Brand | null>(null);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem('cassia-brand-selected')) {
        // No prior selection — show selector. Gate stays under selector (z-index 9997 < 9999).
        setVisible(true);
      } else {
        // Already selected this session — remove gate and show page immediately.
        removeGate();
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleSelect = (b: Brand) => {
    setBrand(b);
    document.documentElement.setAttribute('data-brand', b);

    if (b === 'plantiva') {
      try { sessionStorage.setItem('cassia-brand', b); } catch {}
      setLoadingBrand(b);
      setTimeout(() => {
        removeGate();
        setVisible(false);
        setLoadingBrand(null);
        router.push('/plantiva');
      }, 600);
      return;
    }

    setSelectedBrand(b);
  };

  const handleRemember = (remember: boolean) => {
    if (!selectedBrand) return;
    try {
      sessionStorage.setItem('cassia-brand', selectedBrand);
      if (remember) sessionStorage.setItem('cassia-brand-selected', '1');
    } catch {}

    const chosen = selectedBrand;
    setSelectedBrand(null);
    setLoadingBrand(chosen);

    // Give the brand theme time to apply, then reveal the page.
    setTimeout(() => {
      removeGate();
      setLoadingBrand(null);
      setVisible(false);
    }, 750);
  };

  if (!visible && !loadingBrand) return null;

  const selectedMeta = BRANDS.find((b) => b.id === selectedBrand);

  return (
    <>
      {/* ── Brand selection screen ── */}
      {visible && !loadingBrand && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#FAF7F3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            gap: 36,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8C5A2F',
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              Welcome
            </p>
            <h1
              style={{
                fontSize: 'clamp(22px, 4vw, 34px)',
                fontWeight: 700,
                color: '#2A1608',
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              Cassia Seed Group
            </h1>
            <p style={{ color: '#7A6355', fontSize: 16 }}>Choose a brand to continue</p>
          </div>

          <div
            className="brand-selector-cards"
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: 860,
              width: '100%',
            }}
          >
            {BRANDS.filter((b) => b.id !== 'plantiva').map((b) => (
              <button
                key={b.id}
                className="brand-selector-card"
                onClick={() => handleSelect(b.id)}
                style={{
                  ...b.cardStyle,
                  borderRadius: 16,
                  padding: '28px 24px',
                  minWidth: 200,
                  maxWidth: 260,
                  flex: '1 1 190px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 14,
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-5px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = '';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}
              >
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={72}
                  height={72}
                  style={{ objectFit: 'contain', borderRadius: 8 }}
                />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: b.nameColor, marginBottom: 4 }}>
                    {b.name}
                  </div>
                  <div style={{ fontSize: 13, color: b.taglineColor }}>{b.tagline}</div>
                </div>
              </button>
            ))}

            {/* ── "New Brand Coming Soon" — display only, not clickable ── */}
            <div
              style={{
                background: '#F5F5F5',
                border: '2px dashed #BBBBBB',
                borderRadius: 16,
                padding: '28px 24px',
                minWidth: 200,
                maxWidth: 260,
                flex: '1 1 190px',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 14,
                opacity: 0.7,
                boxShadow: 'none',
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 8,
                  background: '#E0E0E0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  color: '#AAAAAA',
                }}
              >
                ?
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#888888', marginBottom: 4 }}>
                  Upcoming Brand
                </div>
                <div style={{ fontSize: 13, color: '#AAAAAA' }}>Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Remember preference dialog ── */}
      {selectedBrand && selectedMeta && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              padding: '36px 32px',
              maxWidth: 400,
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>💾</div>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#2A1608', marginBottom: 8 }}>
              Save your preference?
            </h2>
            <p style={{ color: '#7A6355', fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
              Show <strong>{selectedMeta.name}</strong> automatically on your next visit?
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleRemember(true)}
                style={{
                  background: '#C4906A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Yes, remember it
              </button>
              <button
                onClick={() => handleRemember(false)}
                style={{
                  background: 'transparent',
                  color: '#2A1608',
                  border: '1.5px solid #C4906A',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                No, ask each time
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Post-selection branded loader ── */}
      {loadingBrand && <BrandLoader brand={loadingBrand} />}
    </>
  );
}
