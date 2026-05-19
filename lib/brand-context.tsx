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

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<Brand>('cassia');
  const locale = useLocale();

  useEffect(() => {
    const saved = localStorage.getItem('cassia-brand') as Brand | null;
    if (saved && ['cassia', 'malapine', 'plantiva'].includes(saved)) {
      setBrandState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
    localStorage.setItem('cassia-brand', brand);
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
