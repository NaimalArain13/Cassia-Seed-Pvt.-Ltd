'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useBrand, type Brand } from '@/lib/brand-context';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

const BRAND_NAMES: Record<Brand, string> = {
  cassia: 'Cassia Seed',
  malapine: 'MALAPINE SEEDS',
  plantiva: 'PLANTIVA',
};

const BRAND_LOGOS: Record<Brand, string> = {
  cassia: '/assets/cassia-transparent-bg.png',
  malapine: '/assets/malapine-transparent-bg.png',
  plantiva: '/assets/plantiva-logo.jpg',
};

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
  const { brand } = useBrand();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

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
            <Image
              src={BRAND_LOGOS[brand]}
              alt={BRAND_NAMES[brand]}
              width={170}
              height={58}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>
              {t('home')}
            </Link>

            {/* Products dropdown — hidden until real product images are ready */}
            {false && (
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
            )}

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
          closeLabel={t('closeMenu')}
        />
      )}
    </>
  );
}

interface MobileSheetProps {
  onClose: () => void;
  brand: Brand;
  closeLabel: string;
}

function MobileSheetInline({ onClose, brand, closeLabel }: MobileSheetProps) {
  const t = useTranslations('nav');
  const WA_NUMBER = '923255557303';

  const navItems = [
    { href: '/' as const, label: t('home') },
    { href: '/about' as const, label: t('about') },
    { href: '/contact' as const, label: t('contact') },
  ];

  return (
    <>
      <div className="sheet-overlay open" onClick={onClose} />
      <aside className="sheet open" aria-label="Navigation menu">
        <div className="sheet-head">
          <div className="nav-logo">
            <Image
              src={BRAND_LOGOS[brand]}
              alt={BRAND_NAMES[brand]}
              width={140}
              height={48}
              style={{ objectFit: 'contain' }}
            />
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

        <div style={{ marginTop: 'auto' }}>
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
