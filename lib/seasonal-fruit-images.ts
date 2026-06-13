import { MONTH_CROPS } from './seed-calendar';

// Crop IDs that have a matching image in /public/assets/seasonal-fruits/
const CROP_IMAGES: Partial<Record<string, string>> = {
  bitter_gourd: '/assets/seasonal-fruits/bitter-guard.jpeg',
  bottle_gourd:  '/assets/seasonal-fruits/bottle-guard.jpeg',
  brinjal:       '/assets/seasonal-fruits/brinjal.jpeg',
  hot_peppers:   '/assets/seasonal-fruits/chilli.jpeg',
  coriander:     '/assets/seasonal-fruits/corriander.jpeg',
  cucumber:      '/assets/seasonal-fruits/cucumber.jpeg',
  tinda_gourd:   '/assets/seasonal-fruits/apple-guard.jpeg',
  tomato:        '/assets/seasonal-fruits/tomato.jpeg',
};

// Crops without a MONTH_CROPS entry but with available images, added by month
const EXTRA_MONTH_IMAGES: Record<number, string[]> = {
  5:  ['/assets/seasonal-fruits/musk-melon.jpeg', '/assets/seasonal-fruits/water-melon.jpeg'],
  6:  ['/assets/seasonal-fruits/musk-melon.jpeg', '/assets/seasonal-fruits/water-melon.jpeg', '/assets/seasonal-fruits/cotton.jpeg'],
  7:  ['/assets/seasonal-fruits/musk-melon.jpeg', '/assets/seasonal-fruits/water-melon.jpeg', '/assets/seasonal-fruits/cotton.jpeg'],
  8:  ['/assets/seasonal-fruits/cotton.jpeg'],
  9:  ['/assets/seasonal-fruits/cotton.jpeg', '/assets/seasonal-fruits/tomato-1.jpeg'],
  10: ['/assets/seasonal-fruits/tomato-1.jpeg'],
  11: ['/assets/seasonal-fruits/wheat.jpeg'],
  12: ['/assets/seasonal-fruits/wheat.jpeg'],
  1:  ['/assets/seasonal-fruits/wheat.jpeg'],
};

export function getSeasonalFruitImages(month: number): string[] {
  const ids = MONTH_CROPS[month] ?? [];
  const fromCrops = ids
    .map((id) => CROP_IMAGES[id])
    .filter((src): src is string => !!src);
  const seen = new Set(fromCrops);
  const extras = (EXTRA_MONTH_IMAGES[month] ?? []).filter((s) => !seen.has(s));
  return [...fromCrops, ...extras];
}
