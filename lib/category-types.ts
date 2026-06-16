export type Brand = 'cassia' | 'malapine';

export interface CategoryType {
  slug: string;
  name: string;
  image: string;
  use: string;
  season: string;
  origin: string;
  brand: Brand;
}

export const CATEGORY_TYPES: Record<string, CategoryType[]> = {
  gourds: [
    { slug: 'bottle-gourd',  name: 'Bottle Gourd',  brand: 'cassia', image: '/assets/categories/gourds/bottle-gourd.jpeg',  use: 'Curries/juice',       season: 'Summer', origin: 'Africa/Asia' },
    { slug: 'ridge-gourd',   name: 'Ridge Gourd',   brand: 'cassia', image: '/assets/categories/gourds/ridge-gourd.jpeg',   use: 'Stir-fry/curries',    season: 'Summer', origin: 'South Asia' },
    { slug: 'bitter-gourd',  name: 'Bitter Gourd',  brand: 'cassia', image: '/assets/categories/gourds/bitter-gourd.jpeg',  use: 'Stir-fry/medicinal',  season: 'Summer', origin: 'South/Southeast Asia' },
    { slug: 'wax-gourd',     name: 'Wax Gourd',     brand: 'cassia', image: '/assets/categories/gourds/wax-gourd.jpeg',     use: 'Curries/sweets',      season: 'Summer', origin: 'Asia' },
    { slug: 'sponge-gourd',  name: 'Sponge Gourd',  brand: 'cassia', image: '/assets/categories/gourds/sponge-gourd.jpeg',  use: 'Curries/stir-fry',    season: 'Summer', origin: 'South Asia' },
    { slug: 'snake-gourd',   name: 'Snake Gourd',   brand: 'cassia', image: '/assets/categories/gourds/snake-gourd.jpeg',   use: 'Curries/stir-fry',    season: 'Summer', origin: 'South/Southeast Asia' },
  ],
  brinjals: [
    { slug: 'brinjal',               name: 'Brinjal',               brand: 'cassia', image: '/assets/categories/brinjals/brinjal.jpeg',               use: 'Curries/stir-fry',     season: 'Warm season', origin: 'South Asia' },
    { slug: 'long-purple-eggplant',  name: 'Long Purple Eggplant',  brand: 'cassia', image: '/assets/categories/brinjals/long-purple-eggplant.jpeg',  use: 'Stir-fry/grilling',    season: 'Warm season', origin: 'Asia' },
    { slug: 'japanese-eggplant',     name: 'Japanese Eggplant',     brand: 'cassia', image: '/assets/categories/brinjals/japanese-eggplant.jpeg',     use: 'Stir-fry/miso dishes', season: 'Warm season', origin: 'Japan' },
    { slug: 'tango-eggplant',        name: 'Tango Eggplant',        brand: 'cassia', image: '/assets/categories/brinjals/tango-eggplant.jpeg',        use: 'Fresh/salads',         season: 'Warm season', origin: 'Hybrid type' },
    { slug: 'italian-eggplant',      name: 'Italian Eggplant',      brand: 'cassia', image: '/assets/categories/brinjals/italian-eggplant.jpeg',      use: 'Roasting/pasta',       season: 'Warm season', origin: 'Italy' },
    { slug: 'rosa-bianca-eggplant',  name: 'Rosa Bianca Eggplant',  brand: 'cassia', image: '/assets/categories/brinjals/rosa-bianca-eggplant.jpeg',  use: 'Roasting/grilling',    season: 'Warm season', origin: 'Italy' },
  ],
  peppers: [
    { slug: 'serrano-pepper',  name: 'Serrano Pepper',  brand: 'cassia', image: '/assets/categories/peppers/serrano-pepper.jpeg',  use: 'Salsa',             season: 'Warm season',    origin: 'Mexico' },
    { slug: 'habanero-pepper', name: 'Habanero Pepper', brand: 'cassia', image: '/assets/categories/peppers/habanero-pepper.jpeg', use: 'Very hot dishes',   season: 'Warm season',    origin: 'Caribbean' },
    { slug: 'chilli-pepper',   name: 'Chilli Pepper',   brand: 'cassia', image: '/assets/categories/peppers/chilli-pepper.jpeg',   use: 'Spice',             season: 'Warm season',    origin: 'Worldwide' },
    { slug: 'cherry-pepper',   name: 'Cherry Pepper',   brand: 'cassia', image: '/assets/categories/peppers/cherry-pepper.jpeg',   use: 'Stuffing/pickling', season: 'Warm season',    origin: 'Worldwide' },
    { slug: 'banana-pepper',   name: 'Banana Pepper',   brand: 'cassia', image: '/assets/categories/peppers/banana-pepper.jpeg',   use: 'Pickling',          season: 'Warm season',    origin: 'Americas' },
    { slug: 'tabasco-pepper',  name: 'Tabasco Pepper',  brand: 'cassia', image: '/assets/categories/peppers/tabasco-pepper.jpeg',  use: 'Sauce',             season: 'Warm season',    origin: 'Mexico' },
    { slug: 'rocoto-pepper',   name: 'Rocoto Pepper',   brand: 'cassia', image: '/assets/categories/peppers/rocoto-pepper.jpeg',   use: 'Hot pepper dishes', season: 'Cool highlands', origin: 'South America' },
    { slug: 'ghost-pepper',    name: 'Ghost Pepper',    brand: 'cassia', image: '/assets/categories/peppers/ghost-pepper.jpeg',    use: 'Very hot dishes',   season: 'Warm season',    origin: 'India' },
  ],
  tomatoes: [
    { slug: 'roma-tomato',        name: 'Roma Tomato',      brand: 'cassia', image: '/assets/categories/tomatoes/roma-tomato.jpeg',        use: 'Sauce/paste',     season: 'Autumn–Spring', origin: 'Italy-style cultivar' },
    { slug: 'cherry-tomato',      name: 'Cherry Tomato',    brand: 'cassia', image: '/assets/categories/tomatoes/cherry-tomato.jpeg',      use: 'Salads/snacks',   season: 'Autumn–Spring', origin: 'Andes/South America' },
    { slug: 'grape-tomato',       name: 'Grape Tomato',     brand: 'cassia', image: '/assets/categories/tomatoes/grape-tomato.jpeg',       use: 'Fresh eating',    season: 'Autumn–Spring', origin: 'Commercial worldwide' },
    { slug: 'beefsteak-tomato',   name: 'Beefsteak Tomato', brand: 'cassia', image: '/assets/categories/tomatoes/beefsteak-tomato.jpeg',   use: 'Slicing',         season: 'Autumn–Spring', origin: 'Worldwide' },
    { slug: 'campari-tomato',     name: 'Campari Tomato',   brand: 'cassia', image: '/assets/categories/tomatoes/campari-tomato.jpeg',     use: 'Premium fresh',   season: 'Autumn–Spring', origin: 'Hybrid type' },
    { slug: 'plum-tomato',        name: 'Plum Tomato',      brand: 'cassia', image: '/assets/categories/tomatoes/plum-tomato.jpeg',        use: 'Processing',      season: 'Autumn–Spring', origin: 'Worldwide' },
    { slug: 'heirloom-tomato',    name: 'Heirloom Tomato',  brand: 'cassia', image: '/assets/categories/tomatoes/heirloom-tomato.jpeg',    use: 'Fresh',           season: 'Autumn–Spring', origin: 'Traditional varieties' },
    { slug: 'san-marzano-tomato', name: 'San Marzano',      brand: 'cassia', image: '/assets/categories/tomatoes/san-marzano-tomato.jpeg', use: 'Sauces',          season: 'Autumn–Spring', origin: 'Italy' },
    { slug: 'cocktail-tomato',    name: 'Cocktail Tomato',  brand: 'cassia', image: '/assets/categories/tomatoes/cocktail-tomato.jpeg',    use: 'Fresh',           season: 'Autumn–Spring', origin: 'Worldwide' },
    { slug: 'green-tomato',       name: 'Green Tomato',     brand: 'cassia', image: '/assets/categories/tomatoes/green-tomato.jpeg',       use: 'Pickles/cooking', season: 'Autumn–Spring', origin: 'Worldwide' },
  ],
};
