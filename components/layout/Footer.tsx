'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useBrand, type Brand } from '@/lib/brand-context';

const WA_NUMBER = '923001234567';
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/cassiaseedpvtltd',
  instagram: 'https://www.instagram.com/cassiaseedpvtltd',
};

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const { brand, setBrand } = useBrand();

  const logoSrc: Record<Brand, string> = {
    cassia: '/assets/cassia-logo.jpg',
    malapine: '/assets/malapine-logo.jpg',
    plantiva: '/assets/plantiva-logo.jpg',
  };

  const quickLinks = [
    { href: '/', label: tn('home') },
    { href: '/products', label: tn('products') },
    { href: '/about', label: tn('about') },
    { href: '/contact', label: tn('contact') },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <span
                className="nav-logo-mark"
                style={{
                  width: 40,
                  height: 40,
                  ...(brand === 'malapine' ? { background: '#F0E6CC', padding: 2 } : {}),
                }}
              >
                <Image
                  src={logoSrc[brand]}
                  alt={brand}
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </span>
              <span className="footer-brand-name">
                {brand === 'malapine' ? 'MALAPINE SEEDS' : 'Cassia Seed'}
              </span>
            </div>
            <p className="footer-tag">
              {brand === 'malapine' ? t('malapineTagline') : t('cassiaTagline')}
            </p>
            <div className="footer-socials">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-soc"
                title="Facebook"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-soc"
                title="Instagram"
                aria-label="Instagram"
              >
                ◎
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-soc"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:hello@cassiaseed.pk"
                className="footer-soc"
                title="Email"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4>{t('quickLinks')}</h4>
            <ul>
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4>{t('brands')}</h4>
            <ul>
              <li>
                <button onClick={() => setBrand('cassia')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  Cassia Seed Pvt. Ltd
                </button>
              </li>
              <li>
                <button onClick={() => setBrand('malapine')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  MalaPine Seeds
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>{t('contact')}</h4>
            <ul>
              <li>Multan, Pakistan</li>
              <li>
                <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  +92 300 1234567
                </a>
              </li>
              <li>
                <a href="mailto:hello@cassiaseed.pk">hello@cassiaseed.pk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('copyright')}</span>
          <span>{t('tagline')}</span>
        </div>
      </div>
    </footer>
  );
}
