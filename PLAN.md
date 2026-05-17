# Cassia Seed Pvt. Ltd — Agriculture Website Plan

## Context
Client: Cassia Seed Pvt. Ltd (Pakistan-based, F1 hybrid seeds + fertilizers).
Repo: `/mnt/e/Cassia-Seed-Pvt.-Ltd` — empty, only README.md exists.
Goal: Full design + development of a modern agriculture website better than syngenta.com.pk.
No backend required; all content managed via CMS/media tools.

---

## Proposed Tech Stack (Refined)

| Layer | Tool | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router) | i18n routing, Server Components, SEO, image optimization |
| Styling | **Tailwind CSS v4** + `rtl:` variants | RTL support for Urdu, utility-first |
| Components | **shadcn/ui** | Accessible NavigationMenu (hover dropdown), Sheet (mobile sidebar), etc. |
| i18n | **next-intl** | Best-in-class for App Router; handles RTL locale, message formatting |
| Animations | **Framer Motion** | Smooth transitions, scroll reveals, sidebar open/close |
| Media CMS | **Cloudinary** | Images, video thumbnails — free 25 GB tier |
| Content CMS | **Sanity.io** (free tier) | Product catalog, categories, bilingual fields — client self-manages |
| Fonts | **Inter** (EN) + **Noto Nastaliq Urdu** (UR) | via `next/font/google` |
| Hosting | **Vercel** | Zero-config Next.js deploy, free tier, edge CDN |
| Design | **Claude (in code)** | Full multi-brand design system via CSS variables — no Figma needed |

---

## Multi-Brand Theme System

### Overview
The site supports two brands under one codebase. Switching brand changes **all** visual tokens:
background, foreground, text, CTAs, borders, shadows — via a single CSS variable swap.

### Brand: Cassia Seed Pvt. Ltd (default)
Derived from: earthy kraft packaging + green circular logo
```
--brand-bg:         #F9F6F0   (warm off-white / natural)
--brand-surface:    #EEE8DC   (slightly darker warm surface)
--brand-primary:    #2D6A4F   (deep agricultural green)
--brand-primary-fg: #FFFFFF
--brand-secondary:  #D4A017   (wheat gold)
--brand-accent:     #C62828   (pepper red — CTA, highlights)
--brand-text:       #1A2E1A   (dark green-tinted charcoal)
--brand-muted:      #6B7C6B   (muted green-grey)
--brand-border:     #C8D8C0   (light green border)
--brand-navbar-bg:  #2D6A4F   (green navbar)
--brand-navbar-fg:  #FFFFFF
```
Feel: Organic, earthy, farmer-first, warm daylight.

### Brand: MalaPine Seeds
Derived from: black seed packet with metallic gold lettering + gold leaf patterns
```
--brand-bg:         #0E0E0E   (near-black / dark luxury)
--brand-surface:    #1A1A1A   (slightly lighter dark surface)
--brand-primary:    #C9A84C   (metallic gold — primary action)
--brand-primary-fg: #0E0E0E   (black text on gold)
--brand-secondary:  #8B6914   (deeper antique gold)
--brand-accent:     #E63946   (red accent — from product imagery)
--brand-text:       #F0E6CC   (warm cream / gold-tinted white)
--brand-muted:      #7A7060   (muted warm grey)
--brand-border:     #3A3020   (dark gold-tinted border)
--brand-navbar-bg:  #0E0E0E   (black navbar)
--brand-navbar-fg:  #C9A84C   (gold text)
```
Feel: Premium, luxury, export-quality, dark mode, "Export Quality Seeds".

### Theme Implementation
- CSS variables defined per-brand on `[data-brand="cassia"]` and `[data-brand="malapine"]`
- `BrandProvider` (React context, `"use client"`) holds `brand: 'cassia' | 'malapine'`
- `BrandProvider` sets `data-brand` attribute on `<html>` element + persists to `localStorage`
- All Tailwind design tokens reference `var(--brand-*)` — so all components auto-adapt
- Adding a third brand later = define one new `[data-brand="newbrand"]` CSS block only

```
lib/brand-context.tsx     # BrandProvider + useBrand hook
app/globals.css           # [data-brand="cassia"] { --brand-* } + [data-brand="malapine"] { --brand-* }
```

---

## Navigation Architecture

### Desktop (laptop) — Sticky Header Navbar
- Full horizontal navbar at top, sticky on scroll
- Logo (left) | Nav links (center) | Language Switcher (right)
- **Component**: shadcn `NavigationMenu` (Radix UI primitive)
  - Hover on a nav item opens dropdown; dropdown stays open while cursor is over trigger OR panel
  - Mouse leaves both → dropdown closes automatically (built-in Radix behavior)

### Mobile — Sidebar (Sheet)
- Navbar shows only: Logo + Hamburger (☰) button
- Hamburger click → shadcn `Sheet` slides in from left (or right for RTL/Urdu)
- Sheet contains full navigation tree (same items as desktop)
- Overlay dims background; close on overlay click or ✕ button

### Nav Items & Dropdowns
```
Home
Products          → dropdown: [All Products, Vegetables, Peppers, …]
Brand             → dropdown: [✓ Cassia Seed Pvt. Ltd, MalaPine Seeds]
About Us
Contact
[Language Switcher: EN | UR | Mix]
```

### Brand Dropdown Behavior
- Clicking "Cassia Seed Pvt. Ltd" → sets brand to `cassia`, redirects to `/[locale]/products` showing only Cassia products
- Clicking "MalaPine Seeds" → sets brand to `malapine`, full theme swap, shows only MalaPine products
- Active brand gets a checkmark (✓) in the dropdown
- Brand state stored in `localStorage` + React context (survives page navigation, not page reload loss)

---

## Season Marquee

A full-width scrolling marquee strip displayed **below the navbar** on all pages.

### Design
- Infinite horizontal scroll (CSS animation or Framer Motion `animate x`)
- Background uses `--brand-secondary` (gold for Cassia, dark gold for MalaPine)
- Text in `--brand-primary-fg` or contrasting color
- Separator icons between items (leaf 🌿 or `•`)

### Content (placeholder — exact seasonal logic TBD later)
```
🌿 Tomato Season  •  🌿 Karela Season  •  🌿 Shimla Mirch Season  •  🌿 Tinda Season
```
- Content will be fetched from Sanity (`seasonalMarquee` document type — list of season strings)
- Visibility condition (date-based filtering) will be added **later** once client provides season dates
- For now: render all items from Sanity, no date filter

### Sanity Schema (to add later)
```ts
// sanity/schemaTypes/seasonalMarquee.ts
{
  name: 'seasonalMarquee',
  fields: [
    { name: 'items', type: 'array', of: [{ type: 'string' }] },
    // startDate / endDate fields added when client provides them
  ]
}
```

---

## Internationalization Architecture (3 Modes)
```
/en/...      → English only (LTR layout)
/ur/...      → Urdu only (RTL layout, dir="rtl")
/mix/...     → Bilingual: English content + Urdu content stacked on same page
```
- `next-intl` middleware handles locale detection and routing
- Tailwind `rtl:` prefix flips layout automatically for `/ur` locale
- Mobile sidebar slides from **right** in RTL locale (Sheet `side="right"`)
- Separate message JSON files: `en.json`, `ur.json`

---

## Pages & Routing

```
app/
  [locale]/
    layout.tsx                  → Locale layout (BrandProvider, dir attr, NextIntlClientProvider)
    page.tsx                    → Landing Page
    about/page.tsx              → About Us
    contact/page.tsx            → Contact (static info — no form)
    products/
      page.tsx                  → All Categories overview (filtered by active brand)
      [category]/
        page.tsx                → Category product listing
        [product]/
          page.tsx              → Product detail (bilingual stacked in /mix)
```

### Landing Page Sections
1. Hero — full-bleed imagery, bilingual headline, CTA button
2. Season Marquee — scrolling strip (below hero on landing, below navbar globally)
3. About Snippet — Vision + Mission cards
4. Why Cassia / Why MalaPine — icon grid (4 selling points, brand-aware copy)
5. Featured Categories — animated cards
6. YouTube section — product demo embeds
7. WhatsApp CTA Banner
8. Footer

### Product Detail Page
- EN description + UR description (stacked, `/mix` locale)
- Cloudinary image gallery
- Embedded YouTube review
- WhatsApp "Order Now" button

---

## Social & Integrations
- Facebook, Instagram, WhatsApp: footer links + floating WhatsApp button
- Email: `mailto:` on contact page — no form, no dependencies
- YouTube: `<iframe>` embed, URL stored in Sanity per-product

---

## Brand Intelligence

### Cassia Seed Pvt. Ltd
- Location: Multan, Pakistan
- Products: F1 Hybrid vegetable seeds (peppers, gourds, tomatoes, etc.)
- Tone: Farmer-first, empowering, enthusiastic — "Life changer", "trusted hybrid"
- Key selling points: High yield · F1 Hybrid Quality · Farmer Support · Nationwide Supply

### MalaPine Seeds
- Products: Export-quality F1 hybrid seeds (Hybrid Tomato Redo F1 confirmed)
- Tone: Premium, professional, export-focused — "Export Quality Seeds"
- Visual identity: Black + metallic gold, gold leaf decorative patterns
- Tagline: "Export Quality Seeds"

---

## Component Map

```
components/
  layout/
    Navbar.tsx                  # Desktop sticky navbar (shadcn NavigationMenu)
    MobileSidebar.tsx           # shadcn Sheet — full nav tree for mobile
    SeasonMarquee.tsx           # Infinite scroll marquee strip
    Footer.tsx
  brand/
    BrandProvider.tsx           # "use client" — BrandContext + localStorage sync
    BrandSwitcher.tsx           # Dropdown inside Navbar showing 2 brand options
  landing/
    HeroSection.tsx
    AboutSnippet.tsx
    WhyCassia.tsx               # Brand-aware — changes copy based on active brand
    FeaturedCategories.tsx
    YouTubeSection.tsx
    WhatsAppCTABanner.tsx
  products/
    ProductCard.tsx
    BilingualBlock.tsx          # EN → divider → UR (mix locale)
  shared/
    LanguageSwitcher.tsx
    WhatsAppFloatingButton.tsx
    YouTubeEmbed.tsx
  ui/                           # shadcn/ui auto-generated (do not edit)
```

---

## Files to Create (Scaffold Order)

1. `package.json` — Next.js 15, Tailwind, next-intl, shadcn, framer-motion, sanity
2. `next.config.ts` — next-intl plugin, Cloudinary + YouTube domain whitelist
3. `app/globals.css` — `[data-brand="cassia"]` + `[data-brand="malapine"]` CSS variable blocks
4. `tailwind.config.ts` — tokens that reference `var(--brand-*)` CSS vars
5. `lib/brand-context.tsx` — BrandProvider + useBrand hook
6. `middleware.ts` — next-intl locale routing (exclude `/studio`)
7. `messages/en.json` + `messages/ur.json`
8. `sanity/schemaTypes/category.ts` + `product.ts` + `seasonalMarquee.ts`
9. `sanity/lib/client.ts`
10. `sanity.config.ts`
11. All components (layout → brand → landing → products → shared)
12. All pages

---

## Decisions Confirmed

| Question | Answer |
|---|---|
| CMS ownership | Client self-manages → Sanity.io Studio |
| Mix layout | Stacked blocks — EN on top, divider, UR below |
| Brand assets | Logo exists (no colors) → palette derived from packaging images |
| Contact page | Static info only — WhatsApp, mailto, phone, address, Maps embed |
| Desktop nav | Sticky header, shadcn NavigationMenu with hover-open dropdowns |
| Mobile nav | shadcn Sheet sidebar, triggered by hamburger button |
| Brand switching | CSS variable swap via `data-brand` on `<html>` + localStorage |
| Season marquee | Full-width scrolling strip below navbar — content from Sanity, date conditions later |
| MalaPine theme | Dark luxury: black + metallic gold (#C9A84C) |
| Cassia theme | Earthy natural: deep green + wheat gold + warm off-white |

---

## Open Items (Requirements Still Needed)

| Item | Status | Notes |
|---|---|---|
| Seasonal dates per crop | Pending | Client to provide start/end dates for each season |
| MalaPine brand logo | Pending | Need logo file for navbar display |
| Cassia brand logo | Pending | Need logo file |
| WhatsApp number | Pending | Need exact number (format: 92XXXXXXXXXX) |
| Google Maps location | Pending | Need exact address for Maps embed |
| Facebook page URL | Pending | For footer social links |
| Contact email | Pending | For mailto link |
| Initial product list | Pending | At least 3–5 products per brand for launch |
| YouTube video URLs | Pending | Product demo videos for YouTube section |

---

## Verification Plan
- `npm run dev` → all routes load in EN, UR, MIX
- Brand switch: Cassia → MalaPine → all colors swap site-wide
- Desktop: hover Brand dropdown stays open; mouse-leave closes it
- Mobile: hamburger opens sidebar; overlay click closes it
- RTL: Urdu layout flips; sidebar slides from right
- Season marquee scrolls infinitely, no layout break
- Cloudinary images render via `next/image`
- Sanity Studio: add product → appears on products page
- Responsive: 375px / 768px / 1024px / 1280px / 1440px
- Lighthouse: ≥ 90 Performance, 100 Accessibility, 100 SEO
