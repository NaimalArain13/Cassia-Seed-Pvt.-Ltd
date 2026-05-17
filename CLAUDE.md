# CLAUDE.md — Cassia Seed Pvt. Ltd Website

## Project Overview
A full-stack agriculture marketing website for Cassia Seed Pvt. Ltd (Multan, Pakistan), built with Next.js 15 App Router. The site sells F1 hybrid vegetable seeds and supports three language modes — English, Urdu (RTL), and a bilingual Mix — with all content managed by the client via Sanity.io Studio.

---

## Technology Stack
- **Framework**: Next.js 15 (App Router, Server Components, TypeScript)
- **Styling**: Tailwind CSS v4 with `rtl:` variants for Urdu RTL layout
- **Components**: shadcn/ui (themed to agriculture palette)
- **i18n**: next-intl — three locales: `en`, `ur`, `mix`
- **Animations**: Framer Motion (scroll reveals, page transitions)
- **Media CMS**: Cloudinary (images, video thumbnails — free 25 GB tier)
- **Content CMS**: Sanity.io (product catalog, categories, bilingual fields — client self-manages)
- **Fonts**: Inter (EN/LTR) + Noto Nastaliq Urdu (UR/RTL) — both via `next/font/google`
- **Hosting**: Vercel (zero-config Next.js deploy)

---

## Directory Structure
```
/
├── PLAN.md                          # Project plan and decisions
├── CLAUDE.md                        # This file
├── next.config.ts                   # next-intl plugin + Cloudinary domain whitelist
├── middleware.ts                    # next-intl locale routing (en/ur/mix)
├── tailwind.config.ts               # Custom design tokens (colors, fonts, spacing)
├── sanity.config.ts                 # Sanity Studio entry + schema registration
├── components.json                  # shadcn/ui config
├── .env.local                       # CLOUDINARY_*, NEXT_PUBLIC_SANITY_*, SANITY_API_TOKEN
│
├── messages/
│   ├── en.json                      # English UI strings
│   └── ur.json                      # Urdu UI strings
│
├── sanity/
│   ├── schemaTypes/
│   │   ├── category.ts              # Category schema (name EN/UR, slug, image)
│   │   └── product.ts              # Product schema (name EN/UR, desc EN/UR, images, YouTube URL)
│   └── lib/client.ts               # Sanity client + GROQ helpers
│
├── app/
│   ├── globals.css                  # CSS custom properties (design tokens)
│   ├── layout.tsx                   # Root layout (fonts injection only)
│   └── [locale]/
│       ├── layout.tsx               # Locale layout (dir attr, NextIntlClientProvider)
│       ├── page.tsx                 # Landing page
│       ├── about/page.tsx           # About Us
│       ├── contact/page.tsx         # Contact (static info, no form)
│       └── products/
│           ├── page.tsx             # All categories overview
│           ├── [category]/
│           │   ├── page.tsx         # Category product listing
│           │   └── [product]/
│           │       └── page.tsx     # Product detail (bilingual stacked in /mix)
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx               # Sticky nav + LanguageSwitcher + mobile menu
    │   └── Footer.tsx               # Social links, address, WhatsApp, email
    ├── ui/                          # shadcn/ui generated components (do not edit manually)
    ├── landing/
    │   ├── HeroSection.tsx          # Full-bleed hero, bilingual headline, CTA
    │   ├── AboutSnippet.tsx         # Vision + Mission cards
    │   ├── WhyCassia.tsx            # Icon grid: 4 key selling points
    │   ├── FeaturedCategories.tsx   # Animated category cards
    │   ├── YouTubeSection.tsx       # YouTube embed(s) for product demos
    │   └── WhatsAppCTABanner.tsx    # "Order Now on WhatsApp" banner
    ├── products/
    │   ├── ProductCard.tsx          # Card used in category listing
    │   └── BilingualBlock.tsx       # EN content → divider → UR content (mix locale)
    └── shared/
        ├── LanguageSwitcher.tsx     # Switches between /en, /ur, /mix
        ├── WhatsAppFloatingButton.tsx
        └── YouTubeEmbed.tsx         # Wrapper around <iframe> for YouTube
```

---

## Coding Conventions
- **TypeScript strict mode** — no `any`, use proper types for Sanity GROQ results
- **Server Components by default** — only add `"use client"` when state/hooks/framer-motion are needed
- **Locale-aware links** — always use `useRouter` from `next-intl/navigation`, never plain Next.js router
- **RTL rule**: add `rtl:` Tailwind variants alongside every directional utility (`ml-`, `mr-`, `pl-`, `pr-`, `text-left`, `text-right`, `flex-row`)
- **Bilingual fields in Sanity** — every user-facing text field has a sibling: `titleEn` / `titleUr`, `descriptionEn` / `descriptionUr`
- **Image handling** — always use `next/image` with Cloudinary URLs; never raw `<img>` tags
- **No inline styles** — all design values come from Tailwind tokens defined in `tailwind.config.ts`
- **Component naming** — PascalCase files and exports; one component per file
- **No barrel `index.ts` files** — import directly from the component file path

---

## Key Commands
```bash
# Development
npm run dev           # Start dev server at http://localhost:3000

# Production build
npm run build
npm run start

# Sanity Studio (runs at http://localhost:3333)
npm run sanity:dev

# shadcn/ui — add a new component
npx shadcn@latest add <component-name>

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

---

## Important Notes (Gotchas)

1. **Locale `mix` is NOT a real i18n locale** — `next-intl` is configured with locales `['en', 'ur', 'mix']`, but `mix` uses English messages (`en.json`) as its base. The bilingual stacking is handled in-component via `BilingualBlock.tsx`, not via the message system.

2. **Urdu RTL layout** — the `<html dir>` attribute is set dynamically in `app/[locale]/layout.tsx` based on locale (`ur` → `dir="rtl"`, others → `dir="ltr"`). Never hardcode direction in components.

3. **Noto Nastaliq Urdu font weight** — this font only has weight `400`. Do not apply `font-bold` or other weights to Urdu text; use font-size or color for emphasis instead.

4. **Cloudinary domain in `next.config.ts`** — `res.cloudinary.com` must be whitelisted in `images.remotePatterns` or `next/image` will throw. Also whitelist `img.youtube.com` for video thumbnails.

5. **Sanity free tier limit** — free tier allows 3 non-admin users and 10 GB dataset. Keep Sanity for text/metadata only; all binary assets (images, videos) go through Cloudinary.

6. **`next-intl` middleware matcher** — exclude `/studio` (Sanity Studio route) from the locale middleware, otherwise Studio will redirect to `/en/studio`.

7. **Framer Motion + Server Components** — `motion.*` components require `"use client"`. Wrap animated sections in a thin client wrapper; keep data-fetching in the parent Server Component.

8. **WhatsApp link format** — use `https://wa.me/92XXXXXXXXXX` (country code 92 for Pakistan, no `+`, no spaces, no dashes).

9. **Google Maps embed** — use the `<iframe>` embed URL from Google Maps (`maps.google.com/maps?q=...&output=embed`), not the JS Maps API. No API key needed for basic embeds.

10. **Environment variables** — `NEXT_PUBLIC_*` vars are exposed to the browser. Never put `SANITY_API_TOKEN` (write token) as `NEXT_PUBLIC_`; use it only in Server Components or API routes.
