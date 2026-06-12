const BASE = '/assets/coming-soon-product-designs';

export function getComingSoonImage(brand: 'cassia' | 'malapine', weight?: string): string {
  if (brand === 'malapine') return `${BASE}/malapine-trans-10g.png`;
  const wt = (weight ?? '').toLowerCase();
  if (wt.includes('400')) return `${BASE}/cassia-trans-400g.png`;
  if (wt.includes('500')) return `${BASE}/cassia-trans-500g.png`;
  return `${BASE}/cassia-trans-10g.png`;
}
