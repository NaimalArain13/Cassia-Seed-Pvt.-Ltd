'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { useBrand, type Brand } from '@/lib/brand-context';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

const BRAND_NAMES: Record<Brand, string> = {
  cassia: 'Cassia Seed',
  malapine: 'MALAPINE SEEDS',
  plantiva: 'PLANTIVA',
};

function BrandLogoMark({ brand }: { brand: Brand }) {
  const srcs: Record<Brand, string> = {
    cassia: '/assets/cassia-logo.jpg',
    malapine: '/assets/malapine-logo.jpg',
    plantiva: '/assets/plantiva-logo.jpg',
  };
  const styles: Record<Brand, React.CSSProperties> = {
    cassia: {},
    malapine: { background: '#F0E6CC', borderRadius: 6, padding: '2px 6px', width: 54, height: 36 },
    plantiva: { background: 'transparent', borderRadius: 4, width: 72, height: 36 },
  };
  return (
    <span className="nav-logo-mark" style={styles[brand]}>
      <Image
        src={srcs[brand]}
        alt={BRAND_NAMES[brand]}
        width={36}
        height={36}
        style={{ objectFit: 'contain', mixBlendMode: brand === 'plantiva' ? 'multiply' : undefined }}
      />
    </span>
  );
}

interface MobileToggleProps {
  onOpen: () => void;
  label: string;
}

function MobileToggle({ onOpen, label }: MobileToggleProps) {
  return (
    <button className="mobile-toggle" onClick={onOpen} aria-label={label}>
      ☰
    </button>
  );
}

export default function Navbar() {
  const t = useTranslations('nav');
  const { brand, setBrand } = useBrand();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const handleBrandSwitch = (next: Brand) => {
    setBrand(next);
    if (next === 'plantiva') {
      router.push('/plantiva');
    } else if (pathname.startsWith('/plantiva')) {
      router.push('/');
    }
  };

  const productCategories = [
    { label: t('allProducts'), href: '/products' },
    { label: t('tomatoes'), href: '/products/tomatoes' },
    { label: t('peppers'), href: '/products/peppers' },
    { label: t('gourds'), href: '/products/gourds' },
    { label: t('leafyGreens'), href: '/products/leafy-greens' },
    { label: t('rootVeg'), href: '/products/root-vegetables' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <BrandLogoMark brand={brand} />
            {BRAND_NAMES[brand]}
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>
              {t('home')}
            </Link>

            {/* Products dropdown */}
            <div className="dropdown-wrap">
              <button className={`nav-link${isActive('/products') ? ' active' : ''}`}>
                {t('products')}
                <span className="nav-caret">▾</span>
              </button>
              <div className="dropdown">
                <div className="dropdown-section-label">Categories</div>
                {productCategories.map((c) => (
                  <Link key={c.href} href={c.href} className="dropdown-item">
                    {c.label}
                  </Link>
                ))}
                <div className="dropdown-divider" />
                <Link
                  href="/products"
                  className="dropdown-item"
                  style={{ color: 'var(--accent)', fontWeight: 600 }}
                >
                  {t('viewAll')}
                </Link>
              </div>
            </div>

            {/* Brand dropdown */}
            <div className="dropdown-wrap">
              <button className="nav-link">
                {t('brand')}
                <span className="nav-caret">▾</span>
              </button>
              <div className="dropdown">
                <div className="dropdown-section-label">{t('ourBrands')}</div>
                {(['cassia', 'malapine', 'plantiva'] as Brand[]).map((b) => (
                  <button
                    key={b}
                    className="dropdown-item"
                    onClick={() => handleBrandSwitch(b)}
                  >
                    <span>
                      {b === 'cassia' && 'Cassia Seed Pvt. Ltd'}
                      {b === 'malapine' && 'MalaPine Seeds'}
                      {b === 'plantiva' && (
                        <>
                          Plantiva{' '}
                          <span
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              color: 'var(--accent)',
                              marginLeft: 6,
                            }}
                          >
                            {t('comingSoon')}
                          </span>
                        </>
                      )}
                    </span>
                    {brand === b && <span className="check">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <Link href="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>
              {t('about')}
            </Link>
            <Link href="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>
              {t('contact')}
            </Link>
          </div>

          {/* Right side */}
          <div className="nav-right">
            <LanguageSwitcher />
            <MobileToggle onOpen={() => setMobileOpen(true)} label={t('openMenu')} />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar rendered inline; kept in same tree for state */}
      {mobileOpen && (
        <MobileSheetInline
          onClose={() => setMobileOpen(false)}
          brand={brand}
          onBrandSwitch={handleBrandSwitch}
          closeLabel={t('closeMenu')}
          switchBrandLabel={t('switchBrand')}
          switchToLabel={t('switchTo')}
        />
      )}
    </>
  );
}

interface MobileSheetProps {
  onClose: () => void;
  brand: Brand;
  onBrandSwitch: (b: Brand) => void;
  closeLabel: string;
  switchBrandLabel: string;
  switchToLabel: string;
}

function MobileSheetInline({
  onClose,
  brand,
  onBrandSwitch,
  closeLabel,
  switchBrandLabel,
  switchToLabel,
}: MobileSheetProps) {
  const t = useTranslations('nav');
  const WA_NUMBER = '923001234567';

  const handleBrand = (b: Brand) => {
    onBrandSwitch(b);
    onClose();
  };

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/products' as const, label: t('products') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <>
      <div className="sheet-overlay open" onClick={onClose} />
      <aside className="sheet open" aria-label="Navigation menu">
        <div className="sheet-head">
          <div className="nav-logo" style={{ color: 'var(--text)' }}>
            <BrandLogoMark brand={brand} />
            {BRAND_NAMES[brand]}
          </div>
          <button
            className="mobile-toggle"
            onClick={onClose}
            style={{ background: 'transparent', color: 'var(--text)' }}
            aria-label={closeLabel}
          >
            ✕
          </button>
        </div>

        {navItems.map(({ href, label }) => (
          <Link key={href} href={href} className="sheet-link" onClick={onClose}>
            {label} <span style={{ opacity: 0.4 }}>›</span>
          </Link>
        ))}

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="dropdown-section-label" style={{ padding: '0 8px' }}>
            {switchBrandLabel}
          </div>
          <button
            className="btn btn-outline"
            onClick={() => handleBrand(brand === 'cassia' ? 'malapine' : 'cassia')}
          >
            {switchToLabel} {brand === 'cassia' ? 'MalaPine' : 'Cassia'}
          </button>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
