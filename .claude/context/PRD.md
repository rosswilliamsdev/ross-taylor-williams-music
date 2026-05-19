# Ross Taylor Williams — Artist Homepage PRD

> **Type:** Personal  
> **Status:** Draft  
> **Last Updated:** 2026-05-18

---

## Problem Statement

Ross Taylor Williams needs a web presence to support his debut album *Earth Music*. Currently there's no central place for fans, press, and venues to find his music, bio, press materials, or show dates. The site serves as both a public-facing artist homepage and a lightweight EPK (Electronic Press Kit) for industry contacts.

---

## Goals & Non-Goals

### Goals
- Single-page artist homepage that feels organic, editorial, and unhurried — matching the album's aesthetic
- Provide fans a place to listen (Bandcamp embed), find show dates, and get in touch
- Serve as a press/EPK resource with quotes, downloadable press kit, and bio
- Ship fast, maintain easily, perform well on all devices
- Photography-forward — the album cover and promo photos are the visual anchors

### Non-Goals
- No merch store (future phase)
- No blog or news feed
- No CMS — content is hardcoded for v1
- No user accounts or authentication
- No custom music player — Bandcamp handles playback

---

## Feature List & Scope

### In Scope
- **Sticky nav** with anchor links, mobile hamburger menu
- **Hero section** — full-bleed album cover, artist name, album title, "Listen Now" CTA
- **Bio section** — two-column layout with promo photo and bio copy
- **Music section** — Bandcamp iframe embed in a card wrapper
- **Shows section** — card list of upcoming shows (date, venue, city, ticket link)
- **Press section** — pull quote cards with source badges, "Download EPK" button. **Built but hidden from v1 — no press content yet. Uncomment in `index.astro` when ready.**
- **Contact section** — form (name, email, message) via Formspree, social links
- **Full-bleed photo dividers** between sections
- **Scroll-triggered animations** — subtle fade-up reveals using Motion
- **Responsive design** — mobile-first, works on all viewports
- **Custom typography** — Glassure (display) + Poppins (body)
- **Image optimization** — use Astro's `<Image>` component for all images (auto-formats, resizes, lazy loads)

### Out of Scope
- Merch / e-commerce
- Blog / CMS
- Analytics dashboard (add a simple analytics script later if needed)
- Email list / newsletter signup (future phase)
- Multi-page routing

---

## v1 Scope / Phasing

### v1 (MVP) — Current Build
- All sections except Press (built but hidden until content is ready)
- Formspree contact form
- Glassure font converted from .otf/.ttf to .woff2 at setup
- Deployed on Netlify/Vercel subdomain (custom domain added later)

### Future Phases
- **v1.1:** Unhide Press section when press quotes and EPK are ready
- **v1.2:** Custom domain + DNS configuration
- **v1.3:** Add email newsletter signup (e.g. Buttondown or Mailchimp embed)
- **v1.4:** Merch section or link-out to external store
- **v1.5:** Headless CMS (Decap / Netlify CMS) for show dates and press quotes — add when maintenance friction justifies it
- **v1.6:** Blog or news section if needed

---

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Astro (latest stable) | Static-first, zero JS by default, component-based authoring without framework overhead |
| Styling | Tailwind CSS v4 | Design system tokens map directly to Tailwind config; utility-first keeps styles colocated |
| Animation | Motion (vanilla JS) | Lightweight scroll-triggered animations without needing React |
| Language | TypeScript | Type safety for content data models and component props |
| Contact Form | Formspree | No backend needed for a single form |
| Fonts | Glassure (custom, self-hosted), Poppins (Google Fonts) | Brand typography from album artwork |
| Hosting | Netlify or Vercel | Free tier, Git-based deploys, handles static builds |
| Formatter | Prettier + prettier-plugin-astro | Consistent formatting, enforced on save |

### Architecture Notes
- **No client-side framework.** Astro renders everything at build time. Interactivity (nav toggle, scroll reveals, form submission) uses vanilla JS via `<script>` tags.
- **No backend.** All content is static JSON files (`shows.json`, `press-quotes.json`) imported at build time. Contact form offloaded to Formspree.
- **No build-time data fetching.** No APIs, no CMS integration. Content changes require a code commit and redeploy.

---

## Content Data Models

### Show
```ts
interface Show {
  date: string       // ISO format: '2026-06-14'
  venue: string
  city: string
  ticketUrl?: string
}
```

### PressQuote
```ts
interface PressQuote {
  quote: string
  source: string
  url?: string
}
```

---

## Design System & Coding Standards

Two companion documents define visual and code conventions:

- **`design-system.md`** — Color tokens (HSL), typography rules (Glassure always uppercase + `letter-spacing: 0.15em`), spacing scale, component specs, shadows, motion, and usage guidelines.
- **`coding-standards.md`** — Prettier config, naming conventions, folder structure, component patterns, TypeScript rules, git workflow, error handling, and environment config.

Claude Code should read both documents before writing any code.

---

## Constraints

- **Timeline:** No hard deadline, but ship v1 quickly — this is a launch companion for the album
- **Team:** Solo (Ross) + Claude Code
- **Budget:** Free-tier hosting. No paid services except custom domain.
- **Performance:** Site should score 90+ on Lighthouse across all categories. Optimize images, lazy load below-the-fold content, minimal JS payload.

---

## Open Questions & Risks

| # | Question / Risk | Status |
|---|-----------------|--------|
| 1 | Glassure font — no .woff2 available. Convert from .otf/.ttf to .woff2 during project setup. | Resolved — convert at setup |
| 2 | Formspree free tier limit (50 submissions/month) — sufficient for now | Resolved — acceptable |
| 3 | Image optimization — use Astro's built-in `<Image>` component for auto-optimization | Resolved |
| 4 | Custom domain — not purchased yet, but intended. Configure DNS when ready. Netlify/Vercel subdomain for v1 launch. | Resolved — defer |
| 5 | Press section — no press content yet. Build the section component but hide/comment out from `index.astro` until content is ready. | Resolved — build but defer |

---

## Project File Structure

```
ross-taylor-williams-site/
├── public/
│   ├── fonts/
│   │   └── Glassure.woff2
│   └── images/
│       ├── Cover.png
│       ├── Alea_Lovely-20.jpg
│       ├── Alea_Lovely-57.jpg
│       ├── Alea_Lovely-67.jpg
│       ├── Alea_Lovely-87.jpg
│       └── Alea_Lovely-103.jpg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Bio.astro
│   │   ├── Music.astro
│   │   ├── Shows.astro
│   │   ├── Press.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── ShowCard.astro
│   │   └── PressCard.astro
│   ├── scripts/
│   │   └── scroll-reveal.ts
│   ├── styles/
│   │   └── global.css
│   ├── content/
│   │   ├── shows.json
│   │   ├── press-quotes.json
│   │   └── types.ts
│   └── pages/
│       └── index.astro
├── .env.example
├── .prettierrc
├── coding-standards.md
├── design-system.md
├── PRD.md
├── CLAUDE.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```
