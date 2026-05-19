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
    "Pakistan's most trusted F1 hybrid seed partner. Nationwide supply, farmer support included. Based in Multan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${notoNastaliq.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: read brand from localStorage before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var b=localStorage.getItem('cassia-brand');if(!b||!['cassia','malapine','plantiva'].includes(b))b='cassia';document.documentElement.setAttribute('data-brand',b);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
