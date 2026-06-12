import type { Metadata } from 'next';
import { Inter, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  weight: '400',
  subsets: ['arabic'],
  variable: '--font-nastaliq',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cassia Seed Pvt. Ltd — F1 Hybrid Seeds, Pakistan',
  description:
    "Pakistan's most trusted F1 hybrid seed partner. Nationwide supply, farmer support included. Based in Hyderabad, Sindh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${notoNastaliq.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Anti-flash script runs synchronously before the browser paints anything.
          1. Applies the saved brand theme so colors never flash.
          2. If the user hasn't chosen a brand this session, adds `brand-gate` to <html>
             which makes the CSS gate overlay visible — blocking the landing page
             until React hydrates and BrandSelectorScreen takes over.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var b=sessionStorage.getItem('cassia-brand');if(!b||!['cassia','malapine','plantiva'].includes(b))b='cassia';document.documentElement.setAttribute('data-brand',b);if(!sessionStorage.getItem('cassia-brand-selected'))document.documentElement.classList.add('brand-gate');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {/* Gate overlay — shown via CSS only when <html> has class="brand-gate".
            Prevents any flash of the landing page before brand selection. */}
        <div id="brand-gate" aria-hidden="true">
          <div id="brand-gate-spinner" />
        </div>
        {children}
      </body>
    </html>
  );
}
