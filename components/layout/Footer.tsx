'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useBrand, type Brand } from '@/lib/brand-context';

const WA_NUMBER = '923255557303';
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/14i89msye72/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/cassiaseedpvt.ltd?igsh=d3VnOGFwN3FhN2Mw&utm_source=qr',
};

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const { brand, setBrand } = useBrand();

  const logoSrc: Record<Brand, string> = {
    cassia: '/assets/cassia-transparent-bg.png',
    malapine: '/assets/malapine-transparent-bg.png',
    plantiva: '/assets/plantiva-logo.jpg',
  };

  const quickLinks = [
    { href: '/', label: tn('home') },
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
              <Image
                src={logoSrc[brand]}
                alt={brand}
                width={140}
                height={52}
                style={{ objectFit: 'contain' }}
              />
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
                href="mailto:Info@cassiaseed.com"
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
              <li>Hyderabad, Sindh, Pakistan</li>
              <li>
                <a href="tel:+92223400398">022-3400398</a>
              </li>
              <li>
                <a href="tel:+923255557303">0325-5557303</a>
              </li>
              <li>
                <a href="mailto:Info@cassiaseed.com">Info@cassiaseed.com</a>
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
