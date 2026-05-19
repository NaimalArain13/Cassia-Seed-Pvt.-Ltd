# Cassia Seed Pvt. Ltd — Agriculture Website Plan

## Context
Client: Cassia Seed Pvt. Ltd (Pakistan-based, F1 hybrid seeds + fertilizers).
Repo: `/mnt/e/Cassia-Seed-Pvt.-Ltd` — empty, only README.md exists.
Goal: Full design + development of a modern agriculture website better than syngenta.com.pk.
No backend required; all content managed via CMS/media tools.

---

## Proposed Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router) | i18n routing, Server Components, SEO, image optimization |
| Styling | **Tailwind CSS v4** + `rtl:` variants | RTL support for Urdu, utility-first |
| Components | **shadcn/ui** | NavigationMenu (hover dropdown), Sheet (mobile sidebar), etc. |
| i18n | **next-intl** | Best-in-class for App Router; RTL locale, message formatting |
| Animations | **Framer Motion** | Scroll reveals, page transitions, sidebar open/close |
| Media CMS | **Cloudinary** | Images, video thumbnails — free 25 GB tier |
| Content CMS | **Sanity.io** (free tier) | Product catalog, categories, bilingual fields — client self-manages |
| Fonts | **Inter** (EN) + **Noto Nastaliq Urdu** (UR) | via `next/font/google` |
| Hosting | **Vercel** | Zero-config Next.js deploy, free tier, edge CDN |
| Design | **Claude (in code)** | Full 3-brand design system via CSS variables — no Figma needed |

---

## Multi-Brand Theme System

### Overview
Three brands under one codebase. Switching brand changes **all** visual tokens —
background, foreground, text, CTAs, borders, shadows — via a single CSS variable swap on `<html data-brand="...">`.

Adding a fourth brand in future = define one new `[data-brand="newbrand"]` CSS block only.

---

### Brand 1: Cassia Seed Pvt. Ltd (default)
**Logo analysis**: White background · Forest green seed/leaf icon · Chocolate brown wordmark · Tagline: *"GROW WITH CASSIA/US"*
```
--brand-bg:           #F7F3EE   warm off-white (complements brown tones)
--brand-surface:      #EDE5D8   warm parchment surface
--brand-primary:      #2D5A27   forest green (from logo icon)
--brand-primary-fg:   #FFFFFF
--brand-secondary:    #5C3D1E   chocolate brown (from logo wordmark)
--brand-accent:       #C0721A   warm amber-orange (CTA, highlights)
--brand-text:         #2C1A0E   deep brown charcoal
--brand-muted:        #8A7560   muted warm brown-grey
--brand-border:       #C8B89A   warm tan border
--brand-navbar-bg:    #2D5A27   forest green navbar
--brand-navbar-fg:    #FFFFFF
```
Feel: Organic, earthy, farmer-first, warm and trustworthy.

---

### Brand 2: MalaPine Seeds
**Logo analysis**: Warm sandy parchment card · Brown sun-rising-above-seed icon · Deep warm brown serif typography · Lighter taupe "SEEDS" sub-text
> Note: The actual logo (brand identity) shows warm parchment + brown tones —
> NOT the dark black from the product packaging. Logo is the authority for website theme.
```
--brand-bg:           #F5EDD5   warm sandy parchment (from logo card background)
--brand-surface:      #EAD9B0   deeper parchment surface
--brand-primary:      #5C4A2A   deep warm brown (from logo main text)
--brand-primary-fg:   #F5EDD5   parchment text on brown
--brand-secondary:    #8B7355   medium taupe brown (from logo icon)
--brand-accent:       #A0521E   burnt sienna (warm CTA color)
--brand-text:         #2E1F0A   very dark warm brown
--brand-muted:        #9E8C6A   muted taupe (from logo "SEEDS" text)
--brand-border:       #C8A96A   warm gold-tan border
--brand-navbar-bg:    #5C4A2A   deep brown navbar
--brand-navbar-fg:    #F5EDD5   parchment text
```
Feel: Warm, natural, premium-earthy, artisan, sun-ripened.

---

### Brand 3: Plantiva *(Coming Soon)*
**Logo analysis**: Clean white background · Bold black sans-serif "PLANTIVA" · Deep maroon/burgundy hand-with-drops icon (`#7B1C1C`) · Tagline: *"PLANTING FUTURE"*
> ⚠️ Name clarification: Logo reads **PLANTIVA** — user initially wrote "Plantive". Use **Plantiva** everywhere.
```
--brand-bg:           #FAFAFA   clean white
--brand-surface:      #F0EBEA   very light blush/warm white
--brand-primary:      #7B1C1C   deep maroon/burgundy (from logo icon)
--brand-primary-fg:   #FFFFFF
--brand-secondary:    #A02020   slightly lighter maroon
--brand-accent:       #7B1C1C   same maroon — used for all CTAs
--brand-text:         #1A1A1A   near-black (from logo wordmark)
--brand-muted:        #6B5555   muted maroon-grey
--brand-border:       #E0CECE   light blush border
--brand-navbar-bg:    #1A1A1A   near-black navbar
--brand-navbar-fg:    #FFFFFF   white text + maroon accent on hover
```
Feel: Bold, modern, clean, minimal, future-forward, sophisticated.

---

### Theme Implementation
```
lib/brand-context.tsx   →  BrandProvider ("use client") + useBrand() hook
                            brand: 'cassia' | 'malapine' | 'plantiva'
                            persists to localStorage, sets data-brand on <html>

app/globals.css         →  [data-brand="cassia"]   { --brand-* }
                            [data-brand="malapine"]  { --brand-* }
                            [data-brand="plantiva"]  { --brand-* }
```
All Tailwind utility classes reference `var(--brand-*)` → every component auto-adapts to whichever brand is active.

---

## Navigation Architecture

### Desktop — Sticky Header Navbar
- Logo (left) | Nav links (center) | Language Switcher (right)
- Height: 72px · sticky on scroll · `--brand-navbar-bg` background
- **Component**: shadcn `NavigationMenu` (Radix UI)
  - Hover on trigger → dropdown opens (fade + slide-down 0.2s)
  - Cursor on trigger OR panel → stays open
  - Cursor leaves both → auto-closes

### Mobile — Sidebar Sheet
- Navbar shows: Logo + Hamburger ☰ only
- Hamburger → shadcn `Sheet` slides from **left** (RTL: from right)
- Full nav tree inside Sheet; overlay dims background
- Close on overlay click or ✕ button

### Nav Items
```
Home
Products   → dropdown: All Products / Vegetables / Peppers / Tomatoes / Gourds / View All →
Brand      → dropdown: ✓ Cassia Seed Pvt. Ltd
                          MalaPine Seeds
                          Plantiva  [Coming Soon badge]
About Us
Contact
[EN | UR | Mix]
```

### Brand Dropdown Behavior
| Action | Result |
|---|---|
| Click "Cassia Seed Pvt. Ltd" | brand = `cassia` · theme swap · show Cassia products |
| Click "MalaPine Seeds" | brand = `malapine` · theme swap · show MalaPine products |
| Click "Plantiva" | Navigate to `/[locale]/plantiva` Coming Soon page · brand = `plantiva` · theme swap |
| Active brand | Shows ✓ checkmark in dropdown |
| Plantiva entry | Shows a "Coming Soon" pill/badge beside the name |

---

## Pages & Routing

```
app/
  [locale]/
    layout.tsx                    → Locale layout (BrandProvider, dir, NextIntlClientProvider)
    page.tsx                      → Landing Page (brand-aware content)
    about/page.tsx                → About Us
    contact/page.tsx              → Contact (static info — no form)
    plantiva/
      page.tsx                    → Plantiva Coming Soon page (Plantiva theme)
    products/
      page.tsx                    → All Categories (filtered by active brand)
      [category]/
        page.tsx                  → Category product listing
        [product]/
          page.tsx                → Product detail (bilingual stacked in /mix)
```

### Plantiva Coming Soon Page
Full-screen, centered layout. Plantiva theme active.
```
[Plantiva Logo — large, centered]
"Coming Soon"               ← large bold heading
"Planting Future"           ← tagline (matches logo)
"Something extraordinary is growing. Stay tuned."
[WhatsApp notify button]    ← optional, links to WhatsApp
[Back to Cassia Seed →]     ← link back, resets brand to cassia
```
- No navbar clutter — minimal header with just logo + back link
- Subtle animated background (CSS gradient pulse or Framer Motion particle dots in maroon/black)
- No products shown — purely brand teaser

### Landing Page Sections
1. Hero — full-bleed imagery, bilingual headline, CTAs (brand-aware copy)
2. Season Marquee — visual scrolling strip (see below)
3. About Snippet — Vision + Mission cards
4. Why [Brand] — icon grid, 4 selling points (copy switches per active brand)
5. Featured Categories — animated cards
6. YouTube Section — product demo embeds
7. WhatsApp CTA Banner
8. Footer

### Product Detail Page
- EN description + UR description stacked (`/mix` locale)
- Cloudinary image gallery
- Embedded YouTube review
- WhatsApp "Order Now" button

---

## Season Marquee

Full-width visual scrolling strip displayed **below the navbar** on all pages.

### Design
- Height: 72px · background: `--brand-secondary`
- Each scrolling item = **circular thumbnail image (48×48px) + product name**
- Items separated by 32px gap
- Infinite scroll LEFT via CSS animation · pauses on hover

### Item Structure (per card)
```
[🍅 circular image]  "Roma Tomato F1"    [gap]
[🍅 circular image]  "Cherry Tomato Gold" [gap]
[🍅 circular image]  "Beef Tomato King"   [gap]
[🥒 circular image]  "Karela Hybrid No.1" [gap]
[🥒 circular image]  "Bitter Gourd Supreme" [gap]
[🫑 circular image]  "Shimla Mirch Green Bell" [gap]
[🌶️ circular image]  "Red Chilli Teja F1" [gap]
[🥬 circular image]  "Tinda Round Gold"   [gap]
... duplicated for seamless loop
```

### Data Source
- Seasonal items fetched from Sanity `seasonalMarquee` document
- Each item has: `image` (Cloudinary URL), `nameEn`, `nameUr`
- Date-based seasonal filtering deferred — client to provide season start/end dates

---

## Internationalization Architecture (3 Modes)
```
/en/...   → English only (LTR)
/ur/...   → Urdu only (RTL, dir="rtl")
/mix/...  → Bilingual stacked: EN block → divider → UR block
```
- `next-intl` middleware handles routing (excludes `/studio`)
- `dir` attribute set dynamically in `app/[locale]/layout.tsx`
- `rtl:` Tailwind variants flip all directional utilities for `/ur`
- Mobile sidebar `side="right"` in Urdu locale

---

## Brand Intelligence

### Cassia Seed Pvt. Ltd
- Location: Multan, Pakistan · Nationwide supply
- Products: F1 Hybrid vegetable seeds (peppers, gourds, tomatoes, etc.)
- Tagline: *"Grow With Cassia/Us"*
- Tone: Farmer-first, empowering, enthusiastic
- Selling points: High yield · F1 Hybrid quality · Farmer support · Nationwide supply

### MalaPine Seeds
- Products: Export-quality F1 hybrid seeds (Hybrid Tomato Redo F1 confirmed)
- Tagline: *"Export Quality Seeds"*
- Tone: Premium, professional, export-focused, warm-artisan
- Visual: Warm parchment + deep brown (logo-derived)

### Plantiva
- Status: **Coming Soon** — not yet launched
- Tagline: *"Planting Future"*
- Tone: Bold, modern, future-forward, sophisticated
- Visual: Clean white + near-black + deep maroon accent
- ⚠️ Correct spelling: **Plantiva** (not "Plantive")

---

## Component Map

```
components/
  layout/
    Navbar.tsx                    # Desktop sticky (shadcn NavigationMenu)
    MobileSidebar.tsx             # shadcn Sheet sidebar
    SeasonMarquee.tsx             # Visual image+name infinite scroll
    Footer.tsx
  brand/
    BrandProvider.tsx             # "use client" context + localStorage
    BrandSwitcher.tsx             # Brand dropdown in Navbar
  landing/
    HeroSection.tsx               # Brand-aware headline + CTA
    AboutSnippet.tsx              # Vision + Mission cards
    WhyBrand.tsx                  # Brand-aware selling points grid
    FeaturedCategories.tsx        # Animated category cards
    YouTubeSection.tsx
    WhatsAppCTABanner.tsx
  products/
    ProductCard.tsx
    BilingualBlock.tsx            # EN → divider → UR (mix locale)
  shared/
    LanguageSwitcher.tsx
    WhatsAppFloatingButton.tsx
    YouTubeEmbed.tsx
  ui/                             # shadcn/ui generated (do not edit)
```

---

## Files to Create (Scaffold Order)

1. `package.json` — Next.js 15, Tailwind, next-intl, shadcn, framer-motion, sanity
2. `next.config.ts` — next-intl plugin, Cloudinary + YouTube domain whitelist
3. `app/globals.css` — 3 × `[data-brand]` CSS variable blocks
4. `tailwind.config.ts` — all tokens reference `var(--brand-*)`
5. `lib/brand-context.tsx` — BrandProvider + useBrand hook (3 brands)
6. `middleware.ts` — next-intl locale routing (exclude `/studio`)
7. `messages/en.json` + `messages/ur.json`
8. `sanity/schemaTypes/` — `category.ts`, `product.ts`, `seasonalMarquee.ts`
9. `sanity/lib/client.ts`
10. `sanity.config.ts`
11. All components
12. All pages (including `plantiva/page.tsx` coming soon)

---

## Decisions Confirmed

| Question | Answer |
|---|---|
| CMS ownership | Client self-manages → Sanity.io Studio |
| Mix layout | Stacked blocks — EN on top, divider, UR below |
| Contact page | Static info only — WhatsApp, mailto, phone, address, Maps embed |
| Desktop nav | Sticky header, shadcn NavigationMenu with hover dropdowns |
| Mobile nav | shadcn Sheet sidebar, hamburger button |
| Brand switching | CSS var swap via `data-brand` on `<html>` + localStorage |
| Season marquee | Visual (image + name) scrolling strip, Sanity content, date logic later |
| Cassia theme | Forest green `#2D5A27` + chocolate brown `#5C3D1E` + warm off-white |
| MalaPine theme | Warm parchment `#F5EDD5` + deep brown `#5C4A2A` (logo-derived, not dark) |
| Plantiva theme | Clean white + near-black `#1A1A1A` + deep maroon `#7B1C1C` |
| Plantiva page | Full-screen Coming Soon page at `/[locale]/plantiva` |
| Brand name | **Plantiva** (logo spelling) — not "Plantive" |
| Logos received | ✅ All 3 logos received and analyzed |

---

## Open Items (Requirements Still Needed)

| Item | Status | Notes |
|---|---|---|
| Seasonal dates per crop | Pending | Client to provide start/end dates |
| WhatsApp number | Pending | Format: 92XXXXXXXXXX |
| Google Maps location | Pending | Exact address for embed |
| Facebook page URL | Pending | For footer social links |
| Instagram page URL | Pending | For footer social links |
| Contact email | Pending | For mailto link |
| Cassia product list | Pending | 3–5 products for launch |
| MalaPine product list | Pending | 3–5 products for launch |
| YouTube video URLs | Pending | Product demo videos |
| Plantiva launch date | Pending | Optional — for countdown timer on Coming Soon page |

---

## Verification Plan
- `npm run dev` → all routes load in EN, UR, MIX
- Brand switch: Cassia → MalaPine → Plantiva → all colors swap site-wide
- Plantiva route → Coming Soon page renders with maroon/black theme
- Desktop: hover Brand dropdown stays open; mouse-leave closes
- Mobile: hamburger opens sidebar; overlay click closes
- RTL: Urdu layout flips; sidebar slides from right
- Season marquee: images + names scroll infinitely, pauses on hover
- Cloudinary images render via `next/image`
- Sanity: add product → appears on products page
- Responsive: 375px / 768px / 1024px / 1280px / 1440px
- Lighthouse: ≥ 90 Performance, 100 Accessibility, 100 SEO
