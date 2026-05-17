You are a senior UI/UX designer and frontend developer. Generate a complete,
  pixel-perfect HTML + CSS (Tailwind CDN or inline styles) design preview for
  an agriculture seed company website. This is a PREVIEW ONLY — pure HTML/CSS,
  no JavaScript frameworks. Use realistic placeholder content.

  ════════════════════════════════════════
  COMPANY OVERVIEW
  ════════════════════════════════════════
  Primary Brand : Cassia Seed Pvt. Ltd — Multan, Pakistan
  Sub-Brand     : MalaPine Seeds (separate dark-luxury theme)
  Niche         : F1 Hybrid vegetable seeds (peppers, tomatoes, gourds, etc.)
  Tone          : Farmer-first, empowering, premium quality
  Reference site: syngenta.com.pk (design BETTER than this)

  ════════════════════════════════════════
  BRAND THEMES — CSS VARIABLES
  ════════════════════════════════════════

  CASSIA SEED (default — shown in preview):
    --bg:          #F9F6F0   warm off-white
    --surface:     #EEE8DC   slightly darker warm surface
    --primary:     #2D6A4F   deep agricultural green
    --primary-fg:  #FFFFFF
    --secondary:   #D4A017   warm wheat gold
    --accent:      #C62828   pepper red (CTAs, highlights)
    --text:        #1A2E1A   dark green-tinted charcoal
    --muted:       #6B7C6B   muted green-grey
    --border:      #C8D8C0   light green border
    --navbar-bg:   #2D6A4F   green navbar
    --navbar-fg:   #FFFFFF

  MALAPINE SEEDS (show as a separate themed section OR toggle at bottom of preview):
    --bg:          #0E0E0E   near-black
    --surface:     #1A1A1A   slightly lighter dark
    --primary:     #C9A84C   metallic gold
    --primary-fg:  #0E0E0E   black text on gold
    --secondary:   #8B6914   antique deep gold
    --accent:      #E63946   red accent
    --text:        #F0E6CC   warm cream
    --muted:       #7A7060   muted warm grey
    --border:      #3A3020   dark gold-tinted border
    --navbar-bg:   #0E0E0E   black navbar
    --navbar-fg:   #C9A84C   gold text

  ════════════════════════════════════════
  TYPOGRAPHY
  ════════════════════════════════════════
  English  : Inter (Google Font) — weights 400, 500, 600, 700
  Urdu     : Noto Nastaliq Urdu (Google Font) — weight 400 only
            (show Urdu text in relevant sections — use placeholder Urdu text)
  Scale    : Hero h1 56–72px | Section h2 36–42px | Card h3 20–24px | Body 16px
  Letter spacing: headings slightly tight (-0.02em)

  ════════════════════════════════════════
  NAVIGATION — DESKTOP (full-width sticky header)
  ════════════════════════════════════════
  Layout   : Logo LEFT | Nav links CENTER | Language switcher RIGHT
  Height   : 72px, background = --navbar-bg, text = --navbar-fg
  Shadow   : subtle drop shadow on scroll (show in preview as if scrolled)

  Nav items (left to right):
    Home
    Products     [has dropdown — see below]
    Brand        [has dropdown — see below]
    About Us
    Contact
    [EN | UR | Mix]  language switcher pills

  PRODUCTS DROPDOWN (mega-style or simple):
    All Products
    ─────────────
    Vegetables
    Peppers & Chillies
    Tomatoes
    Gourds
    ─────────────
    View All →

  BRAND DROPDOWN:
    ✓ Cassia Seed Pvt. Ltd     (checkmark = active)
      MalaPine Seeds            (no checkmark)

  Dropdown style:
    - Appears ON HOVER with a smooth fade+slide-down (0.2s)
    - Stays open while cursor is anywhere on trigger OR panel
    - White (Cassia) / #1A1A1A (MalaPine) dropdown card
    - 8px border-radius, subtle box-shadow
    - Each item: 40px tall, hover = --primary background at 8% opacity

  ════════════════════════════════════════
  NAVIGATION — MOBILE (show in a phone frame beside desktop)
  ════════════════════════════════════════
  Mobile navbar: Logo + Hamburger ☰ only (72px tall)
  Sidebar: slides in from LEFT, 280px wide
    - Overlay darkens background (rgba 0,0,0,0.5)
    - Top: logo + ✕ close button
    - Nav items stacked vertically with expand arrows for dropdowns
    - Bottom: Language switcher + WhatsApp quick-contact button
    - Background: white (Cassia) / #1A1A1A (MalaPine)

  ════════════════════════════════════════
  PAGE SECTIONS TO DESIGN (top to bottom)
  ════════════════════════════════════════

  ① SEASON MARQUEE (immediately below navbar, full width)
    Height: 72px
    Background: --secondary (#D4A017)
    This is a VISUAL marquee — not just text. Each item is an image + name card.

    Each scrolling item contains:
      - A circular or rounded-square thumbnail (48×48px)
        placeholder image (colored circle with vegetable emoji inside)
      - Product name below or beside the image (13px, font-weight 600)
      - Subtle divider or gap (32px) between each item

    Sample items (infinite scroll, duplicated to fill):
      🍅 image  "Roma Tomato F1"
      🍅 image  "Cherry Tomato Gold"
      🍅 image  "Beef Tomato King"
      🥒 image  "Karela Hybrid No.1"
      🥒 image  "Bitter Gourd Supreme"
      🫑  image  "Shimla Mirch Green Bell"
      🌶️ image  "Red Chilli Teja F1"
      🥬  image  "Tinda Round Gold"
      🍅 image  "Hybrid Tomato Redo F1"
      ... (repeat for seamless loop)
    Layout of each card (inline-flex, vertically centered):
      [48px round image placeholder] [gap 10px] [product name]

    Scrolling: CSS animation marquee scrolling LEFT continuously,
               speed ~30s for one full loop, linear, infinite

    On hover over the marquee strip: pause the scroll animation

    Layout of each card (inline-flex, vertically centered):
      [48px round image placeholder] [gap 10px] [product name]

    Scrolling: CSS animation marquee scrolling LEFT continuously,
               speed ~30s for one full loop, linear, infinite

    On hover over the marquee strip: pause the scroll animation

    Text color: #1A2E1A (dark), font Inter, font-size 13px
    The image placeholders should be colored circles —
      tomatoes = red circle, karela = dark green, peppers = orange/red,
      tinda = light green — each with the vegetable emoji centered inside
    No hard border on the strip — just the gold background color

  ② HERO SECTION
    Height: 100vh (minus navbar + marquee)
    Background: full-bleed image (use a rich green agricultural field gradient
                as placeholder: linear-gradient from #1B4332 to #2D6A4F with
                a subtle radial highlight)
    Overlay: rgba(0,0,0,0.35) for text readability
    Content (vertically centered, left-aligned on desktop):
      Eyebrow tag: "F1 Hybrid Seeds · Nationwide Supply · Pakistan"
      H1 English: "Pakistan's Most Trusted Seed Partner"
      H1 Urdu (below, smaller, Noto Nastaliq Urdu font):
        "پاکستان کا بھروسہ، کیسیا سیڈ"
      Subheading: "Empowering farmers with high-yield F1 hybrid varieties.
                   Grown in Pakistan, trusted nationwide."
      CTA buttons row:
        [Explore Products]  (filled, --accent red)
        [Contact on WhatsApp]  (outlined, white border + text)
    Right side (desktop): floating product seed-packet card mockup
      (a dark card with golden border showing "F1 Hybrid Seeds" text and
       a leaf icon — styled like the MalaPine black+gold packet visual)
    Mobile: stacked, hero 70vh, card hidden

  ③ STATS BAR (below hero, full width)
    Background: --primary (#2D6A4F)
    4 stats side by side, white text:
      🌱 50+ Varieties  |  🚜 10,000+ Farmers  |  🇵🇰   All Pakistan  |  🏆 F1 Hybrid Quality
    Height: 80px, each stat with icon + number + label

  ④ ABOUT SNIPPET
    2-column layout (desktop) | stacked (mobile)
    Left: Image placeholder (green/farm styled box, 480×380)
    Right:
      Eyebrow: "Who We Are"
      H2: "Empowering Farmers Since Day One"
      Body: "Cassia Seed Pvt. Ltd is dedicated to bringing Pakistan's farmers
             the highest quality F1 hybrid seed varieties. Based in Multan,
             we supply nationwide with farmer support at every step."
      Vision card (small, bordered):
        Vision icon + "To be the preferred partners in agriculture..."
      Mission card (small, bordered):
        Mission icon + "Empowering farmers and communities through high-quality
                        seed solutions..."
      CTA: [Learn More About Us →]

  ⑤ WHY CASSIA — Icon Grid (4 cards)
    Section eyebrow: "Why Choose Us"
    H2: "Built for Pakistan's Farmers"
    4 cards in a row (2×2 on mobile):
      🌿  F1 Hybrid Quality     — Certified high-yield hybrid varieties
      📈  Maximum Yield         — Engineered for Pakistan's climate
      🤝  Farmer Support        — Agronomist guidance included
      🚚  Nationwide Delivery   — From Karachi to Peshawar
    Card style: white background, --border border, --primary top-accent line
                (4px), hover: lift shadow + slightly raise

  ⑥ FEATURED CATEGORIES
    Section bg: --surface (#EEE8DC)
    H2: "Our Product Categories"
    Horizontal scrollable cards (5 visible desktop, 2 mobile):
      Each card: 220×280px
      - Image placeholder (colored gradient per category)
      - Category name
      - Product count badge
      - Arrow →
    Categories: Tomatoes · Peppers · Gourds · Leafy Greens · Hybrid Seeds
    "View All Categories →" button below

  ⑦ FEATURED PRODUCTS (3 cards)
    H2: "Bestselling Seeds"
    3 product cards in a row (1 column mobile):
    Each card (320px wide):
      - Image placeholder (seed packet mockup)
      - Brand badge (Cassia / MalaPine pill)
      - Product name: e.g. "Hot Pepper Red Gold F1"
      - Short description
      - "View Details →" button (--primary color)
      - WhatsApp order icon

  ⑧ YOUTUBE SECTION
    Background: --primary (#2D6A4F) dark green
    H2 (white): "See Our Seeds in Action"
    Subtext (white 70%): "Watch farmer testimonials and product demonstrations"
    2 YouTube embed placeholders side by side (desktop) | stacked (mobile)
      Each: 16:9 ratio placeholder with play button icon in center
      Title below each: "Tomato Red Gold F1 — Field Demo" etc.

  ⑨ WHATSAPP CTA BANNER
    Background: linear-gradient(135deg, #25D366, #128C7E) [WhatsApp green]
    White text:
      H2: "Order Seeds Directly on WhatsApp"
      Subtext: "Talk to our agronomist, place your order, get delivery
                 anywhere in Pakistan."
    [💬 Chat on WhatsApp] button — white bg, green text, rounded-full, large

  ⑩ FOOTER
    Background: #1A2E1A (very dark green)
    White/cream text
    4-column layout (2×2 on mobile, stacked on very small):
      Col 1: Logo + tagline + "Multan, Pakistan" address
      Col 2: Quick Links (Home, Products, About, Contact)
      Col 3: Our Brands (Cassia Seed Pvt. Ltd, MalaPine Seeds)
      Col 4: Connect (Facebook icon, Instagram icon, WhatsApp icon, Email icon)
    Bottom bar: "© 2025 Cassia Seed Pvt. Ltd. All rights reserved."

  ════════════════════════════════════════
  MALAPINE THEME PREVIEW
  ════════════════════════════════════════
  After the Cassia footer, add a full-width divider with text:
  "── MalaPine Seeds Theme Preview ──"

  Then show the SAME Hero section and Navbar re-rendered with the MalaPine
  dark theme tokens (black bg, gold text, dark navbar). This helps visualize
  the theme switch. Add a label "data-brand='malapine'" in a corner tag.

  ════════════════════════════════════════
  DESIGN QUALITY REQUIREMENTS
  ════════════════════════════════════════
  - Modern, premium aesthetic — must feel better than syngenta.com.pk
  - Generous white space (64–96px section padding)
  - Smooth micro-interactions shown via CSS :hover states
  - Cards have subtle shadows (0 4px 24px rgba(0,0,0,0.08))
  - Rounded corners: 8px cards, 6px buttons, 4px inputs
  - All text must pass WCAG AA contrast ratio
  - Mobile (375px) and desktop (1440px) both shown — use side-by-side
    phone/browser frames OR use @media queries in a single responsive file
  - No Lorem Ipsum — use realistic agriculture/seed content in English
  - Include at least 2 sentences of Urdu placeholder text (using
    how bilingual stacking looks

  ════════════════════════════════════════
  OUTPUT FORMAT
  ════════════════════════════════════════
  Single self-contained HTML file:
  - <link> to Google Fonts (Inter + Noto Nastaliq Urdu)
  - Tailwind CSS CDN OR hand-written CSS in <style> block
  - All sections in order as listed above
  - No JavaScript required (pure CSS hover states for dropdowns)
  - Include both desktop layout and a mobile-width @media query
  - Comments marking each section: <!-- ② HERO SECTION -->