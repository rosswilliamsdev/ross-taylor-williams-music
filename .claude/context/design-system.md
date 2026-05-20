# Design System — Ross Taylor Williams

## Table of Contents

- [Overview](#overview)
- [Color Tokens](#color-tokens)
- [Typography](#typography)
- [Spacing Scale](#spacing-scale)
- [Border Radius](#border-radius)
- [Shadows](#shadows)
- [Breakpoints](#breakpoints)
- [Motion](#motion)
- [Components](#components)
- [Usage Notes](#usage-notes)

---

## Overview

Organic, editorial, and quietly personal — rooted in the palette of the _Earth Music_ album cover: soft greens, warm bark browns, and airy creams. Type pairs the distinctive presence of Glassure for all display and heading moments with the clean legibility of Poppins for body and UI copy.

---

## Color Tokens

```css
:root {
  /* Brand */
  --color-brand-primary: hsl(100, 18%, 52%); /* muted sage green */
  --color-brand-secondary: hsl(25, 28%, 32%); /* warm bark brown */
  --color-brand-primary-light: hsl(100, 22%, 88%); /* pale sage tint */
  --color-brand-primary-dark: hsl(100, 18%, 36%); /* deep sage */

  /* Neutral */
  --color-neutral-50: hsl(45, 20%, 97%); /* near white / cream */
  --color-neutral-100: hsl(45, 15%, 92%); /* warm off-white */
  --color-neutral-200: hsl(40, 12%, 84%); /* light warm gray */
  --color-neutral-400: hsl(35, 8%, 58%); /* mid gray */
  --color-neutral-600: hsl(30, 6%, 38%); /* dark gray */
  --color-neutral-900: hsl(25, 8%, 14%); /* near black / deep earth */

  /* Semantic */
  --color-error: hsl(4, 60%, 52%);
  --color-success: hsl(145, 40%, 42%);
  --color-warning: hsl(38, 80%, 52%);
  --color-info: hsl(210, 50%, 52%);

  /* Surface */
  --color-surface-base: hsl(45, 20%, 97%); /* page background */
  --color-surface-raised: hsl(45, 15%, 92%); /* cards, panels */
  --color-surface-overlay: hsl(45, 15%, 88%); /* hover states, subtle fills */

  /* Text */
  --color-text-primary: hsl(25, 8%, 14%);
  --color-text-secondary: hsl(30, 6%, 38%);
  --color-text-muted: hsl(35, 8%, 58%);
  --color-text-inverse: hsl(45, 20%, 97%);
}
```

---

## Typography

**Font Families**

```css
:root {
  --font-display: 'Glassure', serif; /* all headings, section titles, hero */
  --font-body: 'Poppins', system-ui, sans-serif; /* body copy, UI labels, nav */
  --font-mono: 'JetBrains Mono', monospace; /* not primary use case */
}
```

**Scale**

| Token              | Size     | Line Height | Weight | Usage                       |
| ------------------ | -------- | ----------- | ------ | --------------------------- |
| `--font-size-xs`   | 0.75rem  | 1.4         | 400    | captions, fine print        |
| `--font-size-sm`   | 0.875rem | 1.5         | 400    | secondary labels, meta      |
| `--font-size-base` | 1rem     | 1.6         | 400    | body copy                   |
| `--font-size-lg`   | 1.125rem | 1.5         | 500    | lead paragraphs             |
| `--font-size-xl`   | 1.25rem  | 1.4         | 500    | card titles, subheadings    |
| `--font-size-2xl`  | 1.5rem   | 1.3         | 600    | section headings (Glassure) |
| `--font-size-3xl`  | 2rem     | 1.2         | 600    | page headings (Glassure)    |
| `--font-size-4xl`  | 2.75rem  | 1.1         | 700    | display (Glassure)          |
| `--font-size-5xl`  | 4rem     | 1.05        | 400    | hero title (Glassure)       |

**Rules:**

- Use `--font-display` (Glassure) for all `2xl` and above headings, including the hero.
- Use `--font-body` (Poppins) for all body text, nav, buttons, labels, and UI copy.
- Glassure renders best at larger sizes — don't use below `xl`.
- **Glassure must always be set in all caps (`text-transform: uppercase`).** Never use it in mixed or lowercase.
- **Glassure requires `letter-spacing: 0.15em`** (1.5 units above default). Always apply this whenever the font is used.

---

## Spacing Scale

Base unit: 4px

| Token          | Value          |
| -------------- | -------------- |
| `--spacing-1`  | 0.25rem (4px)  |
| `--spacing-2`  | 0.5rem (8px)   |
| `--spacing-3`  | 0.75rem (12px) |
| `--spacing-4`  | 1rem (16px)    |
| `--spacing-5`  | 1.25rem (20px) |
| `--spacing-6`  | 1.5rem (24px)  |
| `--spacing-8`  | 2rem (32px)    |
| `--spacing-10` | 2.5rem (40px)  |
| `--spacing-12` | 3rem (48px)    |
| `--spacing-16` | 4rem (64px)    |
| `--spacing-20` | 5rem (80px)    |
| `--spacing-24` | 6rem (96px)    |
| `--spacing-32` | 8rem (128px)   |

---

## Border Radius

| Token           | Value  | Usage             |
| --------------- | ------ | ----------------- |
| `--radius-none` | 0      | sharp image crops |
| `--radius-sm`   | 4px    | tags, badges      |
| `--radius-md`   | 8px    | cards, inputs     |
| `--radius-lg`   | 16px   | modals, panels    |
| `--radius-pill` | 9999px | pill buttons      |

Prefer `--radius-none` and `--radius-sm` to maintain the organic/editorial tone — avoid heavy rounding.

---

## Shadows

| Token           | Value                             |
| --------------- | --------------------------------- |
| `--shadow-none` | none                              |
| `--shadow-sm`   | 0 1px 3px hsl(25 8% 14% / 0.08)   |
| `--shadow-md`   | 0 4px 12px hsl(25 8% 14% / 0.10)  |
| `--shadow-lg`   | 0 8px 24px hsl(25 8% 14% / 0.12)  |
| `--shadow-xl`   | 0 16px 48px hsl(25 8% 14% / 0.14) |

Shadows use the near-black earth tone as the shadow color for warmth, not pure black.

---

## Breakpoints

| Token          | Value  |
| -------------- | ------ |
| `--bp-mobile`  | 480px  |
| `--bp-tablet`  | 768px  |
| `--bp-desktop` | 1024px |
| `--bp-wide`    | 1280px |
| `--bp-max`     | 1440px |

Max content width: `1200px`. Center with `margin-inline: auto` and `padding-inline: --spacing-6` (mobile) / `--spacing-12` (desktop).

---

## Motion

| Token              | Value                          |
| ------------------ | ------------------------------ |
| `--duration-fast`  | 120ms                          |
| `--duration-base`  | 200ms                          |
| `--duration-slow`  | 350ms                          |
| `--duration-enter` | 400ms                          |
| `--easing-default` | ease                           |
| `--easing-out`     | cubic-bezier(0.0, 0.0, 0.2, 1) |
| `--easing-in-out`  | cubic-bezier(0.4, 0.0, 0.2, 1) |

Prefer minimal motion. Use entrance animations (`--duration-enter`) for hero and section reveals only. All interactive transitions use `--duration-base`.

---

## Components

### Button

Purpose: primary CTAs (contact, EPK download), secondary nav actions.

**Variants:**

- `primary` — `--color-brand-primary` bg, `--color-text-inverse` text
- `secondary` — transparent bg, `--color-brand-primary` border + text
- `ghost` — no border, `--color-text-secondary` text, subtle hover fill
- `bark` — `--color-brand-secondary` bg, `--color-text-inverse` text (use sparingly for contrast moments)

**Sizes:**

- `sm` — `--spacing-2` vertical, `--spacing-4` horizontal, `--font-size-sm`
- `md` — `--spacing-3` vertical, `--spacing-6` horizontal, `--font-size-base`
- `lg` — `--spacing-4` vertical, `--spacing-8` horizontal, `--font-size-lg`

**States:** hover (10% darken bg), focus (2px outline `--color-brand-primary`), disabled (40% opacity, no pointer events).

Font: Poppins, weight 500. Use `--radius-sm` or `--radius-pill` depending on context.

---

### Nav / Header

Purpose: sticky top nav with artist name + page anchor links.

- Artist name left-aligned in Glassure `--font-size-xl`, uppercase, `letter-spacing: 0.15em`.
- Links right-aligned in Poppins `--font-size-sm`, weight 500, `--color-text-secondary`.
- Active link: `--color-brand-primary`.
- Background: `--color-surface-base` with `--shadow-sm` on scroll.
- Mobile: collapse to hamburger menu.

---

### Card

Purpose: press quotes, show dates, EPK materials.

- Background: `--color-surface-raised`
- Border: 1px solid `--color-neutral-200`
- Radius: `--radius-md`
- Shadow: `--shadow-sm`, elevate to `--shadow-md` on hover
- Padding: `--spacing-6`
- Title: Glassure `--font-size-xl`, uppercase, `letter-spacing: 0.15em`
- Body: Poppins `--font-size-base`

---

### Badge / Tag

Purpose: genre tags, press source labels, show venue type.

- Background: `--color-brand-primary-light`
- Text: `--color-brand-primary-dark`, Poppins `--font-size-xs`, weight 500, uppercase, letter-spacing 0.05em
- Radius: `--radius-sm`
- Padding: `--spacing-1` vertical, `--spacing-2` horizontal

---

### Section Header

Purpose: labels for each page section (Bio, Music, Press, Shows, Contact).

- Main heading: Glassure `--font-size-3xl` or `--font-size-4xl`, uppercase, `letter-spacing: 0.15em`
- Subtext: Poppins `--font-size-base`, `--color-text-secondary`

---

### Input / Textarea

Purpose: contact form.

- Border: 1px solid `--color-neutral-200`
- Radius: `--radius-md`
- Padding: `--spacing-3` vertical, `--spacing-4` horizontal
- Font: Poppins `--font-size-base`
- Focus: border `--color-brand-primary`, `--shadow-sm`
- Error: border `--color-error`, error message in `--font-size-sm` below

---

### Toast / Alert

Purpose: form submission feedback.

- Success: `--color-success` left border accent, `--color-surface-raised` bg
- Error: `--color-error` left border accent
- Font: Poppins `--font-size-sm`
- Radius: `--radius-md`
- Shadow: `--shadow-md`

---

## Usage Notes

- **Glassure is the display font** — used for all headings `xl` and above, hero title, nav artist name, card titles, and section headers. Always uppercase with `letter-spacing: 0.15em`.
- **Glassure must not be used below `xl`.** It degrades at small sizes. All UI copy, labels, and body text use Poppins.
- **Color palette is intentionally restrained.** The site should feel like the cover: mostly cream/white negative space, sage green as a grounding accent, brown as a secondary warmth layer. Avoid introducing new colors.
- **Photography is a first-class design element.** The album cover and any live/promo photos should be allowed to breathe — full-bleed or generous padding, minimal competing UI chrome nearby.
- **Bandcamp embed:** wrap in a simple `--color-surface-raised` card with generous padding. Don't over-style around it — let it be a clean functional block.
- **EPK / Press section:** use a Card grid layout. Include badge tags for press sources. Offer a "Download EPK" button using the `bark` button variant for visual contrast.
- **Show Dates:** simple list or card grid — venue, date, city. Keep it scannable. Poppins throughout, Glassure only for the section heading.
