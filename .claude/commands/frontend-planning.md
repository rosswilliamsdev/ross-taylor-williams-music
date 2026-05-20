---
name: frontend-planning
description: >
  Run a structured pre-build planning session for any frontend project.
  Trigger when the user wants to plan a UI, component, or app before coding,
  thinks through design/UX, or invokes /frontend-planning. Outputs a planning
  doc to reference throughout the build.
---

# Frontend Planning Skill

You are running a structured pre-build planning session. Your goal is to help the user make deliberate decisions across aesthetics, interactions, UX, architecture, and tech stack **before** writing any code.

## Process

Ask questions **one at a time**, conversationally. Wait for the user's answer before moving to the next question. Don't front-load all questions at once.

After gathering answers across all sections, produce a **Frontend Planning Doc** in markdown.

---

## Interview Sections

Work through these sections in order. Each section has a primary question and optional follow-ups based on the user's answer. Use judgment — skip questions that are already answered, and don't ask redundant follow-ups if the user gave a thorough answer.

### 1. Project Context

**Primary:** What are you building, and who uses it?

Follow-ups if needed:

- What's the core job-to-be-done? (What does the user come here to accomplish?)
- Is this a new project or adding to an existing one?
- Any hard deadline or MVP scope constraints?

### 2. Tech Stack

**Primary:** What's your tech stack? (Framework, styling, component library, any existing design system?)

Follow-ups if needed:

- Are you locked into this stack or flexible?
- Any libraries already in play for animations, forms, or state?
- Deployment target? (Vercel, static, SSR, etc.)

### 3. Aesthetic Intent

**Primary:** What's the visual direction? Share references, a mood, or describe the feeling you're going for.

Follow-ups if needed:

- Light, dark, or system-adaptive?
- Dense (lots of info) or spacious (breathing room)?
- Any brand constraints — existing colors, fonts, logos?
- What should this UI feel like in one word?

### 4. Interaction Philosophy

**Primary:** How expressive should the interactions and animations be? (None / subtle polish / noticeably animated / highly expressive)

Follow-ups if needed:

- Keyboard-first or primarily pointer/touch?
- Any drag-and-drop, gestures, or complex interaction patterns?
- Should animations respond to user input, or are ambient/decorative animations okay too?

### 5. UX Flows

**Primary:** Walk me through the primary user flow — what does the user do from the moment they land?

Follow-ups if needed:

- What are the key states to design? (empty, loading, error, dense/full data)
- Any dead-end screens where the user could get stuck?
- Forms involved? If so, what's the validation and submission pattern?
- Is any state shareable via URL?

### 6. Responsive & Accessibility

**Primary:** What breakpoints or devices matter most? (Mobile-first, desktop-first, both?)

Follow-ups if needed:

- Any hard a11y requirements? (WCAG level, screen reader support, keyboard nav)
- Touch targets — is this used on mobile/tablet heavily?

### 7. Performance & Quality Targets

**Primary:** Any performance or quality constraints worth calling out upfront?

Follow-ups if needed:

- Large lists, infinite scroll, or heavy data?
- Any known slow paths (external APIs, file uploads, real-time)?
- Which quality areas matter most: a11y, perf, animation polish, mobile, forms?

---

## Output: Frontend Planning Doc

Once all sections are covered, produce a markdown document structured like this:

```
# Frontend Planning Doc: [Project Name]
_Generated [date]_

## Project Context
[Summary of what's being built, who uses it, core job-to-be-done, constraints]

## Tech Stack
[Framework, styling approach, libraries, deployment target]

## Aesthetic Direction
[Visual mood, references, light/dark, density, brand constraints, one-word feel]

## Interaction Philosophy
[Motion budget, input modality, specific interaction patterns]

## UX Flows
### Primary Flow
[Step-by-step]

### Edge States
- Empty: [decision]
- Loading: [decision]
- Error: [decision]
- Dense: [decision]

### Forms & Validation
[Patterns decided]

### URL State
[What lives in the URL]

## Responsive & Accessibility
[Breakpoint strategy, a11y targets, touch considerations]

## Performance & Quality Targets
[Known constraints, priority quality areas]

## Deferred Decisions
[List anything explicitly left open — things to decide during build]

## References
- Vercel Web Interface Guidelines: https://vercel.com/design/guidelines
- [Any references the user provided]
```

**Keep the doc honest.** If something wasn't decided, put it in **Deferred Decisions** rather than inventing an answer. The doc should reflect what was actually decided, not what sounds good.
