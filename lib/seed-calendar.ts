export interface Crop {
  id: string;
  en: string;
  ur: string | null;
  sowingTime: string;
  sowingMonths: number[];
  seasons: ('summer' | 'winter')[];
  yieldPerPlant: string | null;
  firstHarvest: string | null;
}

export const CROPS: Crop[] = [
  { id: 'arum',         en: 'Arum',          ur: 'اروی',        sowingTime: 'Feb – March',                sowingMonths: [2,3],           seasons: ['summer'],           yieldPerPlant: null,       firstHarvest: '180–200 days' },
  { id: 'bitter_gourd', en: 'Bitter Gourd',  ur: 'کریلہ',       sowingTime: 'Feb – March, June – July',   sowingMonths: [2,3,6,7],       seasons: ['summer'],           yieldPerPlant: '3 kg',     firstHarvest: null           },
  { id: 'bottle_gourd', en: 'Bottle Gourd',  ur: 'کدو',         sowingTime: 'Feb – March, June – July, October', sowingMonths: [2,3,6,7,10], seasons: ['summer','winter'], yieldPerPlant: '4 kg',     firstHarvest: null           },
  { id: 'brinjal',      en: 'Brinjal',       ur: 'بینگن',       sowingTime: 'Feb – March, June, Nov',      sowingMonths: [2,3,6,11],      seasons: ['summer','winter'],  yieldPerPlant: '2 kg',     firstHarvest: '60–70 days'   },
  { id: 'broccoli',     en: 'Broccoli',      ur: null,          sowingTime: 'Aug – Nov',                   sowingMonths: [8,9,10,11],     seasons: ['winter'],           yieldPerPlant: '0.75 kg',  firstHarvest: '60–80 days'   },
  { id: 'cabbage',      en: 'Cabbage',       ur: 'بند گوبھی',  sowingTime: 'Aug – Nov',                   sowingMonths: [8,9,10,11],     seasons: ['winter'],           yieldPerPlant: '0.75 kg',  firstHarvest: '60–100 days'  },
  { id: 'carrot',       en: 'Carrot',        ur: 'گاجر',        sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: '130 gm',   firstHarvest: '60–80 days'   },
  { id: 'cauliflower',  en: 'Cauliflower',   ur: 'پھول گوبھی', sowingTime: 'June – Oct',                  sowingMonths: [6,7,8,9,10],    seasons: ['summer','winter'],  yieldPerPlant: '850 gm',   firstHarvest: '60–80 days'   },
  { id: 'celery',       en: 'Celery',        ur: null,          sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: '100 gm',   firstHarvest: '100–120 days' },
  { id: 'coriander',    en: 'Coriander',     ur: 'دھنیا',       sowingTime: 'July – Nov, Feb – April',     sowingMonths: [7,8,9,10,11,2,3,4], seasons: ['summer','winter'], yieldPerPlant: null,   firstHarvest: '45–50 days'   },
  { id: 'cucumber',     en: 'Cucumber',      ur: 'کھیرا',       sowingTime: 'Feb – July',                  sowingMonths: [2,3,4,5,6,7],   seasons: ['summer'],           yieldPerPlant: '2.5 kg',   firstHarvest: '50–70 days'   },
  { id: 'fenugreek',    en: 'Fenugreek',     ur: 'میتھی',       sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: null,       firstHarvest: null           },
  { id: 'garlic',       en: 'Garlic',        ur: 'لہسن',        sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: '50 gm',    firstHarvest: null           },
  { id: 'ginger',       en: 'Ginger',        ur: 'ادرک',        sowingTime: 'Feb – March',                 sowingMonths: [2,3],           seasons: ['summer'],           yieldPerPlant: null,       firstHarvest: null           },
  { id: 'hot_peppers',  en: 'Hot Peppers',   ur: 'مرچ',         sowingTime: 'Sep – Oct, Feb',              sowingMonths: [9,10,2],        seasons: ['summer','winter'],  yieldPerPlant: '1.5 kg',   firstHarvest: '50–60 days'   },
  { id: 'lettuce',      en: 'Lettuce',       ur: 'سلاد پتہ',   sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: null,       firstHarvest: null           },
  { id: 'mint',         en: 'Mint',          ur: 'پودینہ',      sowingTime: 'July – Nov, Feb – April',     sowingMonths: [7,8,9,10,11,2,3,4], seasons: ['summer','winter'], yieldPerPlant: null,   firstHarvest: '45–50 days'   },
  { id: 'mustard',      en: 'Mustard',       ur: 'سرسوں',       sowingTime: 'Sep – Oct',                   sowingMonths: [9,10],          seasons: ['winter'],           yieldPerPlant: null,       firstHarvest: null           },
  { id: 'okra',         en: 'Okra',          ur: 'بھنڈی',       sowingTime: 'Feb – March, June – July',    sowingMonths: [2,3,6,7],       seasons: ['summer'],           yieldPerPlant: '1 kg',     firstHarvest: '70–90 days'   },
  { id: 'onion',        en: 'Onion',         ur: 'پیاز',        sowingTime: 'Feb – March, Sep – Oct',      sowingMonths: [2,3,9,10],      seasons: ['summer','winter'],  yieldPerPlant: '100 gm',   firstHarvest: '150–180 days' },
  { id: 'peas',         en: 'Peas',          ur: 'مٹر',         sowingTime: 'mid Sep – mid Nov',           sowingMonths: [9,10,11],       seasons: ['winter'],           yieldPerPlant: '600 gm',   firstHarvest: '50–75 days'   },
  { id: 'potato',       en: 'Potato',        ur: 'آلو',         sowingTime: 'Feb – March, Sep – Oct',      sowingMonths: [2,3,9,10],      seasons: ['summer','winter'],  yieldPerPlant: '1 kg',     firstHarvest: '110–150 days' },
  { id: 'radish',       en: 'Radish',        ur: 'مولی',        sowingTime: 'July – Nov, Feb – March',     sowingMonths: [7,8,9,10,11,2,3], seasons: ['summer','winter'], yieldPerPlant: '120 gm',   firstHarvest: '30–60 days'   },
  { id: 'spinach',      en: 'Spinach',       ur: 'پالک',        sowingTime: 'June – Nov',                  sowingMonths: [6,7,8,9,10,11], seasons: ['winter'],           yieldPerPlant: null,       firstHarvest: '50–80 days'   },
  { id: 'sponge_gourd', en: 'Sponge Gourd',  ur: 'توری',        sowingTime: 'Feb – April, June – July',    sowingMonths: [2,3,4,6,7],     seasons: ['summer'],           yieldPerPlant: '2.5 kg',   firstHarvest: '60–70 days'   },
  { id: 'sweet_peppers',en: 'Sweet Peppers', ur: 'شملہ مرچ',   sowingTime: 'Oct – Nov, February',          sowingMonths: [10,11,2],       seasons: ['summer','winter'],  yieldPerPlant: '1 kg',     firstHarvest: '50–60 days'   },
  { id: 'sweet_potato', en: 'Sweet Potato',  ur: 'شکر قندی',   sowingTime: 'Feb – March',                 sowingMonths: [2,3],           seasons: ['summer'],           yieldPerPlant: '700 gm',   firstHarvest: '140–150 days' },
  { id: 'tinda_gourd',  en: 'Apple Guard',   ur: 'ٹینڈا',       sowingTime: 'March – April, June – July',  sowingMonths: [3,4,6,7],       seasons: ['summer'],           yieldPerPlant: '1 kg',     firstHarvest: '50–60 days'   },
  { id: 'tomato',       en: 'Tomato',        ur: 'ٹماٹر',       sowingTime: 'Feb – March, Sep – Nov',      sowingMonths: [2,3,9,10,11],   seasons: ['summer','winter'],  yieldPerPlant: '2.5 kg',   firstHarvest: '60–70 days'   },
  { id: 'turmeric',     en: 'Turmeric',      ur: 'ہلدی',        sowingTime: 'March – April, June – July',  sowingMonths: [3,4,6,7],       seasons: ['summer'],           yieldPerPlant: '1 kg',     firstHarvest: null           },
  { id: 'turnip',       en: 'Turnip',        ur: 'شلجم',        sowingTime: 'Aug – Nov',                   sowingMonths: [8,9,10,11],     seasons: ['winter'],           yieldPerPlant: '150 gm',   firstHarvest: '60–90 days'   },
];

// Month → sowable crop IDs (from §5 of the calendar document)
export const MONTH_CROPS: Record<number, string[]> = {
  1:  [],
  2:  ['arum','bitter_gourd','bottle_gourd','brinjal','coriander','cucumber','ginger','hot_peppers','mint','okra','onion','potato','radish','sponge_gourd','sweet_peppers','sweet_potato','tomato'],
  3:  ['arum','bitter_gourd','bottle_gourd','brinjal','coriander','cucumber','ginger','mint','okra','onion','potato','radish','sponge_gourd','sweet_potato','tinda_gourd','tomato','turmeric'],
  4:  ['coriander','cucumber','mint','sponge_gourd','tinda_gourd','turmeric'],
  5:  ['cucumber'],
  6:  ['bitter_gourd','bottle_gourd','brinjal','cauliflower','cucumber','okra','sponge_gourd','spinach','tinda_gourd','turmeric'],
  7:  ['bitter_gourd','bottle_gourd','cauliflower','coriander','cucumber','mint','okra','radish','sponge_gourd','spinach','tinda_gourd','turmeric'],
  8:  ['broccoli','cabbage','cauliflower','coriander','mint','radish','spinach','turnip'],
  9:  ['broccoli','cabbage','carrot','cauliflower','celery','coriander','fenugreek','garlic','hot_peppers','lettuce','mint','mustard','onion','peas','potato','radish','spinach','tomato','turnip'],
  10: ['bottle_gourd','broccoli','cabbage','carrot','cauliflower','celery','coriander','fenugreek','garlic','hot_peppers','lettuce','mint','mustard','onion','peas','potato','radish','spinach','sweet_peppers','tomato','turnip'],
  11: ['brinjal','broccoli','cabbage','coriander','mint','peas','radish','spinach','sweet_peppers','tomato','turnip'],
  12: [],
};

export const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export function getCropsForMonth(month: number): Crop[] {
  const ids = MONTH_CROPS[month] ?? [];
  return ids.map((id) => CROPS.find((c) => c.id === id)!).filter(Boolean);
}

export type SeasonLabel = 'summer' | 'winter' | 'transition' | 'off';

export function getSeasonForMonth(month: number): SeasonLabel {
  if (month === 1 || month === 12) return 'off';
  if (month >= 2 && month <= 5) return 'summer';
  if (month === 6 || month === 7) return 'transition';
  return 'winter'; // 8–11
}

// Emoji + marquee tone for each crop
export const CROP_DISPLAY: Record<string, { ico: string; tone: string }> = {
  arum:          { ico: '🌱', tone: 'green'  },
  bitter_gourd:  { ico: '🥒', tone: 'lime'   },
  bottle_gourd:  { ico: '🥒', tone: 'green'  },
  brinjal:       { ico: '🍆', tone: 'purple' },
  broccoli:      { ico: '🥦', tone: 'green'  },
  cabbage:       { ico: '🥬', tone: 'lime'   },
  carrot:        { ico: '🥕', tone: 'orange' },
  cauliflower:   { ico: '🌿', tone: 'lime'   },
  celery:        { ico: '🌿', tone: 'lime'   },
  coriander:     { ico: '🌿', tone: 'lime'   },
  cucumber:      { ico: '🥒', tone: 'green'  },
  fenugreek:     { ico: '🌿', tone: 'lime'   },
  garlic:        { ico: '🧄', tone: 'lime'   },
  ginger:        { ico: '🌱', tone: 'green'  },
  hot_peppers:   { ico: '🌶️', tone: 'orange' },
  lettuce:       { ico: '🥬', tone: 'lime'   },
  mint:          { ico: '🌿', tone: 'lime'   },
  mustard:       { ico: '🌿', tone: 'lime'   },
  okra:          { ico: '🌱', tone: 'green'  },
  onion:         { ico: '🧅', tone: 'orange' },
  peas:          { ico: '🫛', tone: 'green'  },
  potato:        { ico: '🥔', tone: 'orange' },
  radish:        { ico: '🌱', tone: 'red'    },
  spinach:       { ico: '🌿', tone: 'lime'   },
  sponge_gourd:  { ico: '🥒', tone: 'green'  },
  sweet_peppers: { ico: '🫑', tone: 'lime'   },
  sweet_potato:  { ico: '🍠', tone: 'orange' },
  tinda_gourd:   { ico: '🥒', tone: 'lime'   },
  tomato:        { ico: '🍅', tone: 'red'    },
  turmeric:      { ico: '🌱', tone: 'orange' },
  turnip:        { ico: '🌱', tone: 'purple' },
};
