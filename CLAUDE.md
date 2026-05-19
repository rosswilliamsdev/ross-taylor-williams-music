# CLAUDE.md — Ross Taylor Williams Artist Site

## Project Overview

Single-page artist homepage for Ross Taylor Williams, built to support the debut album _Earth Music_. Organic, editorial, photography-forward. No backend, no CMS, no framework — just Astro compiling clean static HTML.

## Reference Documents

Read these files in .claude/context before writing any code:

- .claude/context/PRD.md
- .claude/context/coding-standards.md
- .claude/context/design-system.md
- .claude/rules/frontend-rules.md

## Tech Stack

- **Astro** (latest stable) — static site framework
- **Tailwind CSS v4** — utility-first styling, configured with design system tokens
- **Motion** (`motion` package, vanilla JS) — scroll-triggered animations
- **TypeScript** — strict mode
- **Formspree** — contact form submissions
- **Fonts:** Glassure (self-hosted, custom display font) + Poppins (Google Fonts, body)

## Critical Rules

### Typography

- **Glassure** is the display font. Always `text-transform: uppercase` and `letter-spacing: 0.15em`. No exceptions. Never use below `xl` size.
- **Poppins** for all body text, nav, buttons, labels, form inputs.
- Never use Inter, Roboto, Arial, or system fonts.

### Images

- Use Astro's `<Image>` component for all images — never raw `<img>` tags.
- All images include meaningful `alt` text.
- Lazy load everything below the fold.

### Animation

- Subtle and organic. Ease-out curves, ~400ms duration, ~30px translate.
- Use Motion's `inView()` for scroll reveals.
- CSS `@keyframes` for hero entrance animations.
- Don't over-animate — this is an editorial site, not a SaaS landing page.

### Colors

- All color values use HSL. Never hex, never rgb.
- Palette is restrained: cream, sage green, bark brown. Don't introduce new colors.

### Press Section

- Build the component (`Press.astro`, `PressCard.astro`) but **comment it out** in `index.astro`. No press content exists yet. Also comment out the Press nav link.

## Setup Checklist

1. `npm create astro@latest` — empty/minimal template
2. Install Tailwind CSS v4 per Astro docs
3. Install `motion` package
4. Convert Glassure font from .otf/.ttf to .woff2 (use a tool like `woff2` or an online converter)
5. Configure `tailwind.config.mjs` with design system tokens
6. Set up Prettier with `prettier-plugin-astro`
7. Create `.env.example` with `PUBLIC_FORMSPREE_URL` placeholder
8. Scaffold folder structure per `coding-standards.md` section 3

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run preview    # Preview production build locally
```

## Content Files

Show dates and press quotes live in `src/content/` as JSON files. Types defined in `src/content/types.ts`. To update content, edit the JSON and redeploy.

## Deployment

Netlify or Vercel, free tier, Git-based deploys. No custom domain configured yet — use platform subdomain for v1.
