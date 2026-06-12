const BASE = '/assets/coming-soon-product-designs';

export function getComingSoonImage(brand: 'cassia' | 'malapine', weight?: string): string {
  if (brand === 'malapine') return `${BASE}/10g-malapine.jfif`;
  const wt = (weight ?? '').toLowerCase();
  if (wt.includes('400')) return `${BASE}/400g-cassia.jfif`;
  if (wt.includes('500')) return `${BASE}/500g-cassia.jfif`;
  return `${BASE}/10g-cassia.jfif`;
}
