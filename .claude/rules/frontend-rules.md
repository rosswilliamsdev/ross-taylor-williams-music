# Frontend Rules — Ross Taylor Williams Site

Concise rules for building an accessible, fast, delightful single-page editorial site. Use MUST/SHOULD/NEVER to guide decisions.

**Context:** This is a static, single-page artist homepage with scroll-based navigation, one contact form, and no backend. No dark mode, no user accounts, no complex state management. Many typical app/SaaS UI rules don't apply here.

**Not covered here (not needed for this project):**

- URL state management / deep-linking (single-page scroll navigation)
- Modals, drawers, tabs, filters, virtualized lists (no complex widgets)
- Dark mode / theming (single light theme)
- React-specific performance optimization (Astro static site, no React)
- Complex form flows (only one contact form)

## Interactions

### Keyboard

- MUST: Full keyboard support per [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
- MUST: Visible focus rings (`:focus-visible`; group with `:focus-within`)
- MUST: Manage focus (trap, move, return) per APG patterns
- NEVER: `outline: none` without visible focus replacement

### Targets & Input

- MUST: Hit target ≥24px (mobile ≥44px); if visual <24px, expand hit area
- MUST: Mobile `<input>` font-size ≥16px to prevent iOS zoom
- NEVER: Disable browser zoom (`user-scalable=no`, `maximum-scale=1`)
- MUST: `touch-action: manipulation` to prevent double-tap zoom
- SHOULD: Set `-webkit-tap-highlight-color` to match design

### Forms

- MUST: Hydration-safe inputs (no lost focus/value)
- NEVER: Block paste in `<input>`/`<textarea>`
- MUST: Loading buttons show spinner and keep original label
- MUST: Enter submits focused input; in `<textarea>`, ⌘/Ctrl+Enter submits
- MUST: Keep submit enabled until request starts; then disable with spinner
- MUST: Accept free text, validate after—don't block typing
- MUST: Allow incomplete form submission to surface validation
- MUST: Errors inline next to fields; on submit, focus first error
- MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`
- SHOULD: Disable spellcheck for emails/codes/usernames
- SHOULD: Placeholders end with `…` and show example pattern
- MUST: Warn on unsaved changes before navigation
- MUST: Compatible with password managers & 2FA; allow pasting codes
- MUST: Trim values to handle text expansion trailing spaces
- MUST: No dead zones on checkboxes/radios; label+control share one hit target

### Navigation

- MUST: Links use `<a>` for navigation (support Cmd/Ctrl/middle-click)
- NEVER: Use `<div onClick>` for navigation
- MUST: Anchor links scroll smoothly to sections

### Feedback

- SHOULD: Optimistic UI; reconcile on response; on failure rollback or offer Undo
- MUST: Confirm destructive actions or provide Undo window
- MUST: Use polite `aria-live` for toasts/inline validation
- SHOULD: Ellipsis (`…`) for options opening follow-ups ("Rename…") and loading states ("Loading…")

### Touch & Polish

- MUST: Generous targets, clear affordances; avoid finicky interactions
- MUST: If it looks clickable, it must be clickable

### Autofocus

- SHOULD: Autofocus on desktop with single primary input; rarely on mobile

## Animation

- MUST: Honor `prefers-reduced-motion` (provide reduced variant or disable)
- MUST: Animate compositor-friendly props (`transform`, `opacity`) only
- NEVER: Animate layout props (`top`, `left`, `width`, `height`)
- NEVER: `transition: all`—list properties explicitly
- SHOULD: Animate only to clarify cause/effect or add deliberate delight (this is editorial, not flashy)
- SHOULD: Ease-out curves, ~400ms duration, ~30px translate for scroll reveals
- SHOULD: Prefer CSS > Web Animations API > Motion library for scroll reveals
- MUST: Animations interruptible (no autoplay)
- MUST: Correct `transform-origin` (motion starts where it "physically" should)

## Layout

- SHOULD: Optical alignment; adjust ±1px when perception beats geometry
- MUST: Deliberate alignment to grid/baseline/edges—no accidental placement
- SHOULD: Balance icon/text lockups (weight/size/spacing/color)
- MUST: Verify mobile, laptop, ultra-wide (simulate ultra-wide at 50% zoom)
- MUST: Respect safe areas (`env(safe-area-inset-*)`)
- MUST: Avoid unwanted scrollbars; fix overflows
- SHOULD: Flex/grid over JS measurement for layout

## Content & Accessibility

- SHOULD: Inline help first; tooltips last resort
- MUST: Skeletons mirror final content to avoid layout shift
- MUST: `<title>` matches current context
- MUST: No dead ends; always offer next step/recovery
- MUST: Design empty/sparse/dense/error states
- MUST: Redundant status cues (not color-only); icons have text labels
- MUST: Accessible names exist even when visuals omit labels
- MUST: `scroll-margin-top` on section anchors for smooth navigation
- MUST: Hierarchical `<h1>`–`<h6>` (hero h1, sections h2, card titles h3)
- MUST: Locale-aware dates for show dates (`Intl.DateTimeFormat`)
- MUST: Accurate `aria-label`; decorative elements `aria-hidden`
- MUST: Prefer native semantics (`button`, `a`, `label`) before ARIA

## Typography

- MUST: **Glassure font always uppercase** (`text-transform: uppercase`) — never mixed or lowercase
- MUST: **Glassure requires `letter-spacing: 0.15em`** — always apply when using Glassure
- NEVER: Use Glassure below `xl` size — it degrades at small sizes
- MUST: Poppins for all body text, nav, buttons, labels, form inputs
- SHOULD: Curly quotes (" "); avoid widows/orphans (`text-wrap: balance`)
- MUST: Use `…` character (not `...`)
- MUST: Non-breaking spaces: `10&nbsp;MB`, `⌘&nbsp;K`, brand names
- SHOULD: `translate="no"` on artist name to prevent garbled auto-translation

## Content Handling

- MUST: Text containers handle long content (`truncate`, `line-clamp-*`, `break-words`)
- MUST: Flex children need `min-w-0` to allow truncation
- MUST: Handle empty states—no broken UI for empty strings/arrays

## Performance

- SHOULD: Test iOS Low Power Mode and macOS Safari
- MUST: Preload above-fold images (hero, album cover); lazy-load the rest
- MUST: Prevent CLS — use Astro `<Image>` with explicit dimensions
- SHOULD: Critical fonts: `<link rel="preload" as="font">` with `font-display: swap`
- SHOULD: `<link rel="preconnect">` for external domains (Google Fonts, Bandcamp)
- MUST: Lighthouse score 90+ across all categories

## Design & Polish

- SHOULD: Layered shadows (ambient + direct) per design system tokens
- SHOULD: Nested radii: child ≤ parent; concentric
- MUST: Meet contrast—prefer [APCA](https://apcacontrast.com/) over WCAG 2
- MUST: Increase contrast on `:hover`/`:active`/`:focus`
- SHOULD: `<meta name="theme-color">` matches page background (cream)
