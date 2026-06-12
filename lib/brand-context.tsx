'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

export type Brand = 'cassia' | 'malapine' | 'plantiva';

interface BrandContextType {
  brand: Brand;
  setBrand: (b: Brand) => void;
}

const BrandContext = createContext<BrandContextType>({
  brand: 'cassia',
  setBrand: () => {},
});

const VALID_BRANDS: Brand[] = ['cassia', 'malapine', 'plantiva'];

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<Brand>('cassia');
  const locale = useLocale();

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('cassia-brand') as Brand | null;
      if (saved && VALID_BRANDS.includes(saved)) {
        setBrandState(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
    try {
      sessionStorage.setItem('cassia-brand', brand);
    } catch {}
  }, [brand]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', locale === 'ur' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  return (
    <BrandContext.Provider value={{ brand, setBrand: setBrandState }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  return useContext(BrandContext);
}
