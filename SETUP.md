# Setup Checklist — Ross Taylor Williams Site

Complete setup guide for initializing the project from scratch. Follow in order.

---

## Prerequisites

- [ ] Node.js 18+ installed (`node -v`)
- [ ] npm or pnpm installed
- [ ] Git installed and configured
- [ ] Code editor (VS Code recommended)
- [ ] Formspree account created (free tier)
- [ ] Glassure font files (.otf or .ttf) available for conversion

---

## 1. Project Initialization

- [ ] Run `npm create astro@latest` in parent directory
  - Choose project name: `ross-taylor-williams-site`
  - Template: **Empty** or **Minimal**
  - TypeScript: **Yes, strict**
  - Install dependencies: **Yes**
  - Git: **Yes** (initialize repository)
- [ ] `cd ross-taylor-williams-site`
- [ ] Verify Astro installed: `npm run dev` (should start dev server)

---

## 2. Install Dependencies

### Core Dependencies
```bash
npm install tailwindcss@next @tailwindcss/vite@next
npm install motion
```

### Dev Dependencies
```bash
npm install -D prettier prettier-plugin-astro
npm install -D @types/node
```

### Verify Installation
- [ ] Check `package.json` for all dependencies
- [ ] Run `npm install` to ensure clean lockfile

---

## 3. Configure Prettier

- [ ] Create `.prettierrc` in project root:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ]
}
```

- [ ] Create `.prettierignore`:

```
dist/
.astro/
node_modules/
public/
.env
package-lock.json
pnpm-lock.yaml
```

- [ ] Run `npx prettier --write .` to format existing files

---

## 4. Configure Tailwind CSS v4

- [ ] Update `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
})
```

- [ ] Create `src/styles/global.css`:

```css
@import "tailwindcss";

/* Design System Tokens */
@theme {
  /* Colors */
  --color-brand-primary: hsl(100, 18%, 52%);
  --color-brand-secondary: hsl(25, 28%, 32%);
  --color-brand-primary-light: hsl(100, 22%, 88%);
  --color-brand-primary-dark: hsl(100, 18%, 36%);

  --color-neutral-50: hsl(45, 20%, 97%);
  --color-neutral-100: hsl(45, 15%, 92%);
  --color-neutral-200: hsl(40, 12%, 84%);
  --color-neutral-400: hsl(35, 8%, 58%);
  --color-neutral-600: hsl(30, 6%, 38%);
  --color-neutral-900: hsl(25, 8%, 14%);

  --color-error: hsl(4, 60%, 52%);
  --color-success: hsl(145, 40%, 42%);

  --color-surface-base: hsl(45, 20%, 97%);
  --color-surface-raised: hsl(45, 15%, 92%);

  --color-text-primary: hsl(25, 8%, 14%);
  --color-text-secondary: hsl(30, 6%, 38%);
  --color-text-muted: hsl(35, 8%, 58%);
  --color-text-inverse: hsl(45, 20%, 97%);

  /* Fonts */
  --font-display: 'Glassure', serif;
  --font-body: 'Poppins', system-ui, sans-serif;

  /* Spacing (4px base unit) */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-20: 5rem;
  --spacing-24: 6rem;
  --spacing-32: 8rem;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Shadows */
  --shadow-sm: 0 1px 3px hsl(25 8% 14% / 0.08);
  --shadow-md: 0 4px 12px hsl(25 8% 14% / 0.10);
  --shadow-lg: 0 8px 24px hsl(25 8% 14% / 0.12);

  /* Motion */
  --duration-base: 200ms;
  --duration-enter: 400ms;
  --easing-out: cubic-bezier(0.0, 0.0, 0.2, 1);
}

/* Font Faces */
@font-face {
  font-family: 'Glassure';
  src: url('/fonts/Glassure.woff2') format('woff2');
  font-weight: 400 700;
  font-display: swap;
}

/* Base Styles */
body {
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background-color: var(--color-surface-base);
  line-height: 1.6;
}

/* Glassure Typography Rules */
.text-display {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Section Scroll Margin for Anchor Links */
section {
  scroll-margin-top: 6rem;
}
```

---

## 5. Convert & Setup Glassure Font

### Convert Font to WOFF2

**Option A: Using Online Converter**
- [ ] Visit [CloudConvert](https://cloudconvert.com/otf-to-woff2) or [FontSquirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [ ] Upload Glassure .otf or .ttf file
- [ ] Download converted .woff2 file

**Option B: Using CLI Tool (if installed)**
```bash
# If woff2 tool is installed via Homebrew or npm
woff2_compress path/to/Glassure.ttf
```

### Install Font
- [ ] Create `public/fonts/` directory
- [ ] Move `Glassure.woff2` to `public/fonts/`
- [ ] Verify font loads in browser DevTools Network tab when running dev server

---

## 6. Setup Google Fonts (Poppins)

- [ ] Add to `<head>` in `BaseLayout.astro`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 7. Project Structure Scaffolding

Create all directories and placeholder files:

```bash
mkdir -p src/layouts
mkdir -p src/components
mkdir -p src/scripts
mkdir -p src/styles
mkdir -p src/content
mkdir -p src/pages
mkdir -p public/fonts
mkdir -p public/images
```

- [ ] Verify folder structure matches PRD section "Project File Structure"

---

## 8. Environment Variables

- [ ] Create `.env.example`:

```
PUBLIC_FORMSPREE_URL=https://formspree.io/f/your-form-id-here
```

- [ ] Create `.env` (not committed):

```
PUBLIC_FORMSPREE_URL=https://formspree.io/f/actual-form-id
```

- [ ] Verify `.env` is in `.gitignore`

### Setup Formspree
- [ ] Log in to [Formspree](https://formspree.io)
- [ ] Create new form
- [ ] Copy form endpoint URL (e.g., `https://formspree.io/f/xyzabc123`)
- [ ] Paste into `.env` as `PUBLIC_FORMSPREE_URL`

---

## 9. Git Configuration

- [ ] Verify `.gitignore` includes:

```
# Build
dist/
.astro/

# Dependencies
node_modules/

# Environment
.env
.env.local
.env.*.local

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
```

- [ ] Initialize git if not already done: `git init`
- [ ] Create initial commit:

```bash
git add .
git commit -m "chore: initial project setup with Astro, Tailwind v4, and dependencies"
```

---

## 10. Content Files Setup

### Create Type Definitions

- [ ] Create `src/content/types.ts`:

```ts
export interface Show {
  date: string // ISO format: '2026-06-14'
  venue: string
  city: string
  ticketUrl?: string
}

export interface PressQuote {
  quote: string
  source: string
  url?: string
}
```

### Create Content JSON Files

- [ ] Create `src/content/shows.json`:

```json
[
  {
    "date": "2026-06-14",
    "venue": "The Mint",
    "city": "Los Angeles, CA",
    "ticketUrl": "https://example.com/tickets"
  }
]
```

- [ ] Create `src/content/press-quotes.json`:

```json
[
  {
    "quote": "Earth Music is a stunning debut.",
    "source": "Example Publication",
    "url": "https://example.com/review"
  }
]
```

---

## 11. Image Assets

### Required Images (from PRD)
- [ ] `Cover.png` — album cover (hero section)
- [ ] `Alea_Lovely-20.jpg` — promo photo 1
- [ ] `Alea_Lovely-57.jpg` — promo photo 2
- [ ] `Alea_Lovely-67.jpg` — promo photo 3 (bio section)
- [ ] `Alea_Lovely-87.jpg` — promo photo 4
- [ ] `Alea_Lovely-103.jpg` — promo photo 5

### Image Preparation
- [ ] Optimize images before adding (use [Squoosh](https://squoosh.app/) or ImageOptim)
- [ ] Move all images to `public/images/`
- [ ] Verify images load in dev server

---

## 12. TypeScript Configuration

- [ ] Verify `tsconfig.json` has `strict: true`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

---

## 13. VS Code Setup (Optional but Recommended)

- [ ] Install extensions:
  - Astro
  - Prettier - Code formatter
  - Tailwind CSS IntelliSense
  - ESLint (optional)

- [ ] Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["class:\\s*?[\"'`]([^\"'`]*).*?[\"'`]", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 14. Verify Installation

Run these commands to ensure everything is working:

- [ ] `npm run dev` — dev server starts without errors
- [ ] Visit `http://localhost:4321` — page loads (even if blank)
- [ ] Check browser console for errors — should be clean
- [ ] Check Network tab — Glassure font loads successfully
- [ ] Run `npx prettier --check .` — no formatting errors

---

## 15. Initial Component Scaffolding

Create placeholder files for all components (content added during build phase):

```bash
touch src/layouts/BaseLayout.astro
touch src/components/Nav.astro
touch src/components/Hero.astro
touch src/components/Bio.astro
touch src/components/Music.astro
touch src/components/Shows.astro
touch src/components/Press.astro
touch src/components/Contact.astro
touch src/components/Footer.astro
touch src/components/ShowCard.astro
touch src/components/PressCard.astro
touch src/scripts/scroll-reveal.ts
touch src/pages/index.astro
```

- [ ] All component files created
- [ ] Run `git status` to see new files

---

## 16. Commit Setup Completion

- [ ] Stage all files:

```bash
git add .
```

- [ ] Commit:

```bash
git commit -m "chore: complete project scaffolding and configuration"
```

---

## 17. Deployment Preparation

### Option A: Netlify
- [ ] Create Netlify account (free tier)
- [ ] Install Netlify CLI: `npm install -g netlify-cli`
- [ ] Run `netlify login`
- [ ] Run `netlify init` (defer actual deployment until build phase)

### Option B: Vercel
- [ ] Create Vercel account (free tier)
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Run `vercel login`
- [ ] Run `vercel link` (defer actual deployment until build phase)

**Deploy after components are built** — not during setup phase.

---

## Post-Setup: Build Phase

After completing setup checklist, proceed to build components in this order:

1. `BaseLayout.astro` — HTML shell, meta tags, font imports
2. `Nav.astro` — sticky nav with anchor links
3. `Hero.astro` — full-bleed album cover hero
4. `Bio.astro` — two-column bio section
5. `Music.astro` — Bandcamp embed
6. `ShowCard.astro` → `Shows.astro` — show dates list
7. `PressCard.astro` → `Press.astro` — press quotes (build but comment out in `index.astro`)
8. `Contact.astro` — Formspree contact form
9. `Footer.astro` — social links, copyright
10. `scroll-reveal.ts` — Motion.js scroll animations
11. `index.astro` — compose all sections

---

## Troubleshooting

### Tailwind styles not applying
- Verify `@import "tailwindcss";` is first line in `global.css`
- Check `astro.config.mjs` includes Tailwind Vite plugin
- Clear `.astro/` cache and restart dev server

### Glassure font not loading
- Check Network tab in DevTools — should see request for `Glassure.woff2`
- Verify file path is `/fonts/Glassure.woff2` (public folder)
- Check `@font-face` declaration in `global.css`

### TypeScript errors
- Run `npx astro check` to see type errors
- Verify `tsconfig.json` extends `astro/tsconfigs/strict`
- Check all imports have correct paths and extensions

### Prettier not formatting
- Run `npx prettier --write .` manually
- Check `.prettierrc` is valid JSON
- Verify `prettier-plugin-astro` is installed

---

## Success Criteria

Setup is complete when:

✅ Dev server runs without errors
✅ Glassure font loads in browser
✅ Poppins font loads from Google Fonts
✅ Tailwind utilities apply correctly
✅ All folders and placeholder files exist
✅ Environment variables configured
✅ Git repository initialized with clean commit history
✅ Formspree form endpoint configured
✅ TypeScript strict mode enabled and passing
✅ Prettier formats all files correctly

**Next step:** Begin building components per build phase order above.
