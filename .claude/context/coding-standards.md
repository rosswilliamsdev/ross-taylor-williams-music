# Coding Standards — Ross Taylor Williams Site

## 1. Code Style & Formatting

**Formatter:** Prettier (run on save + pre-commit)

```json
// .prettierrc
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

**Rules:**
- 2 spaces, no tabs
- Single quotes everywhere
- No semicolons
- Trailing commas (cleaner diffs)
- 100 char line width
- Prettier handles all formatting — no manual formatting debates

## 2. Naming Conventions

| Context | Convention | Example |
|---------|-----------|---------|
| Components (.astro) | PascalCase | `Nav.astro`, `ShowCard.astro` |
| Utilities / scripts (.ts) | kebab-case | `scroll-reveal.ts`, `utils.ts` |
| Variables / functions | camelCase | `showDate`, `formatVenue()` |
| Types / interfaces | PascalCase | `Show`, `PressQuote` |
| Booleans | `is`/`has`/`should` prefix | `isScrolled`, `hasTickets` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleMenuToggle` |
| CSS custom properties | kebab-case | `--color-brand-primary` |
| JSON data files | kebab-case | `shows.json`, `press-quotes.json` |
| CSS classes (Tailwind) | utility-first | Tailwind classes; custom classes use kebab-case |

**Rules:**
- No vague names (`data`, `info`, `temp`, `stuff`)
- File name should clearly describe its contents — no `helpers.ts` junk drawers
- Component files match the component name exactly (`ShowCard.astro` exports the ShowCard component)

## 3. Folder & File Structure

```
src/
  layouts/
    BaseLayout.astro        # HTML shell, meta tags, font imports, global scripts
  components/
    Nav.astro
    Hero.astro
    Bio.astro
    Music.astro
    Shows.astro
    Press.astro
    Contact.astro
    Footer.astro
    ShowCard.astro
    PressCard.astro
  scripts/
    scroll-reveal.ts        # Motion.js scroll animation setup
  styles/
    global.css              # Tailwind directives, @font-face, design system tokens
  content/
    shows.json              # Show dates data
    press-quotes.json       # Press quotes data
  pages/
    index.astro             # Composes all section components
public/
  fonts/                    # Glassure .woff2
  images/                   # Album cover + promo photos
```

**Rules:**
- Type-based organization (appropriate for a single-page site)
- No barrel files (`index.ts` re-exports) — direct imports only
- All static assets (fonts, images) live in `public/`
- Content data (shows, press) lives in `src/content/` as JSON, imported directly by components
- One component per file — no multi-component files
- If the site grows to multiple pages or features (blog, merch), revisit and consider feature-based structure

## 4. Component & Module Patterns

**Astro components:**
- Props typed inline with a `Props` interface in the frontmatter:

```astro
---
interface Props {
  venue: string
  city: string
  date: string
  ticketUrl?: string
}
const { venue, city, date, ticketUrl } = Astro.props
---
```

- One component per file
- If a component exceeds ~150 lines, extract a sub-component
- No client-side framework components (React, Vue, etc.) — use vanilla JS `<script>` tags for interactivity
- Astro `<script>` tags are automatically bundled and deduplicated — use them freely per component

**TypeScript utilities (`src/scripts/`):**
- Named exports only — no default exports
- Keep functions small and single-purpose
- Shared logic (animation setup, date formatting) lives here, not in component frontmatter

**Interactivity pattern:**
- Static markup rendered by Astro at build time
- Progressive enhancement via `<script>` tags that query the DOM
- Motion library for scroll animations, vanilla JS for everything else (nav toggle, form handling)

## 5. TypeScript / Type Safety

**Config:** `strict: true` — non-negotiable.

**Rules:**
- `any` is banned. Use `unknown` + type narrowing if the type isn't known.
- `interface` for object shapes (Props, data models). `type` for unions, intersections, and aliases.
- All JSON content imports are typed.

**Content types (define in `src/content/types.ts`):**

```ts
interface Show {
  date: string       // ISO format: '2026-06-14'
  venue: string
  city: string
  ticketUrl?: string
}

interface PressQuote {
  quote: string
  source: string
  url?: string
}
```

**No runtime validation needed** — content JSON is authored internally, not fetched from an external API. If external data sources are added later, add Zod at the boundary.

## 6. Git Workflow

**Branch naming:** `type/short-description`
- `feat/shows-section`
- `fix/mobile-nav`
- `chore/update-photos`

**Commit messages:** Conventional Commits format.
- `feat: add shows section with card grid`
- `fix: hero image positioning on mobile`
- `chore: optimize promo images`
- `style: adjust press card spacing`
- `docs: update README with deploy instructions`

**Commit discipline:**
- Group commits logically — one commit per meaningful unit of work, not per file or per save
- A commit should represent a coherent change that could be understood (and reverted) on its own
- Don't mix unrelated changes in one commit (e.g. don't combine a nav fix with a new section)

**Rules:**
- Squash merge to main
- Never force push to main
- Keep commits focused — if a commit message needs "and" in it, it's probably two commits

## 7. Error Handling

**Contact form:**
- Show a success toast on successful Formspree submission
- Show an error toast on failure — never silently fail
- Disable the submit button while sending to prevent double submissions

**General rules:**
- No silent catch blocks (`catch(e) {}`) — always log or surface the error
- Images use `loading="lazy"` and meaningful `alt` text
- Layout must not break if an image fails to load
- No error monitoring service needed at this scale — console errors are sufficient

## 8. Environment & Config

**Environment variables:**
- One `.env` file for local dev
- `.env.example` committed to repo with placeholder values
- `.env` added to `.gitignore` — never committed

**Current env vars:**
```
PUBLIC_FORMSPREE_URL=https://formspree.io/f/xxxxx
```

**Rules:**
- Only `PUBLIC_` prefixed vars are exposed to client code (Astro convention)
- No secrets in client-accessible env vars
- No secrets committed to the repo, ever
- If new env vars are added, update `.env.example` in the same commit
