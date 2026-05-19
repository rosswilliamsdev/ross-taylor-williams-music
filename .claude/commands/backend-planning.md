---
name: backend-planning
description: >
  Run a structured pre-build planning session for any backend project — API,
  service, or data layer. Trigger when the user wants to plan a backend, design
  an API, think through architecture, or invokes /backend-planning. Outputs a
  markdown planning doc to reference throughout the build.
---

# Backend Planning Skill

You are running a structured pre-build planning session. Your goal is to help the user make deliberate decisions across data modeling, API design, auth, infrastructure, and quality targets **before** writing any code.

## Process

Ask questions **one at a time**, conversationally. Wait for the user's answer before moving to the next question. Don't front-load all questions at once.

After gathering answers across all sections, produce a **Backend Planning Doc** in markdown.

---

## Interview Sections

Work through these sections in order. Each section has a primary question and optional follow-ups based on the user's answer. Use judgment — skip questions that are already answered, and don't ask redundant follow-ups if the user gave a thorough answer.

### 1. Project Context

**Primary:** What are you building, and what problem does it solve?

Follow-ups if needed:

- What does this backend serve? (Web app, mobile app, internal tool, third-party consumers?)
- New project or adding to an existing system?
- Any hard deadline or MVP scope constraints?

### 2. Tech Stack

**Primary:** What's your backend tech stack? (Language, framework, database?)

Follow-ups if needed:

- Are you locked in or flexible on any of these?
- Any existing services or third-party integrations in play?
- Hosting/deployment target? (Vercel, Render, AWS, Railway, etc.)
- ORM or raw queries?

### 3. Data Modeling

**Primary:** Walk me through your main entities — what are the core things this system stores?

Follow-ups if needed:

- What are the key relationships? (one-to-many, many-to-many, etc.)
- Any hierarchical or recursive data structures?
- Anything that changes over time that needs versioning or history?
- Soft deletes or hard deletes?

### 4. API Design

**Primary:** What kind of API are you building — REST, GraphQL, tRPC, or something else?

Follow-ups if needed:

- What are the core endpoints/operations? (CRUD? Custom actions?)
- Any real-time needs — websockets, SSE, polling?
- Versioning strategy? (e.g., `/v1/`, headers, none for now)
- Public API, internal only, or both?

### 5. Auth & Authorization

**Primary:** How does auth work — who are the users and how do they log in?

Follow-ups if needed:

- Session-based, JWT, or OAuth/SSO?
- Any role-based or permission-based access control?
- Multi-tenant? (Data isolation between orgs/accounts?)
- Any public (unauthenticated) endpoints?

### 6. Business Logic & Edge Cases

**Primary:** What's the most complex or risky piece of logic in this system?

Follow-ups if needed:

- Any async/background jobs? (Queues, cron, webhooks?)
- Any external APIs this backend depends on — and what happens when they fail?
- Transactions? (Operations that must succeed/fail together?)
- Any rate limiting, quotas, or abuse prevention needed?

### 7. Performance & Scalability

**Primary:** What are the expected load characteristics — small/internal, or potentially high traffic?

Follow-ups if needed:

- Any known read-heavy or write-heavy patterns?
- Caching strategy? (In-memory, Redis, CDN, HTTP caching?)
- Any large files, uploads, or binary data?
- Search requirements — simple filtering or full-text/fuzzy search?

### 8. Observability & Quality

**Primary:** What's your logging and error visibility strategy? (e.g., structured logs, Sentry, nothing yet?)

Follow-ups if needed:

- Health check endpoints needed?
- Testing priorities — unit, integration, or e2e?
- Any compliance or data privacy constraints (PII, GDPR, HIPAA)?

### 9. Config & Environment

**Primary:** How are you managing secrets and environment config? (`.env`, secrets manager, platform env vars?)

Follow-ups if needed:

- How many environments? (local, staging, prod?)
- Any config that varies per environment beyond secrets? (feature flags, limits?)

### 10. Error Handling Strategy

**Primary:** How should the API communicate errors to consumers — what's the error response shape?

Follow-ups if needed:

- HTTP status codes only, or a structured error body too?
- Validation errors — field-level detail or top-level message?
- Any distinction between user-facing errors and internal/unexpected ones?

---

## Output: Backend Planning Doc

Once all sections are covered, produce a markdown document structured like this:

```
# Backend Planning Doc: [Project Name]
_Generated [date]_

## Project Context
[What's being built, who consumes it, core purpose, constraints]

## Tech Stack
[Language, framework, database, ORM, hosting, key libraries]

## Data Model
### Entities
[Core models, key fields, primary key strategy (UUID vs auto-increment)]

### Relationships
[Key relationships and cardinality]

### Notes
[Soft deletes, versioning, anything unusual]

## API Design
[Style (REST/GraphQL/etc.), core endpoints/operations, versioning, real-time]

## Error Handling
[Error response shape, status code strategy, validation error format, user-facing vs internal errors]

## Auth & Authorization
[Auth mechanism, session strategy, roles/permissions, multi-tenancy, public routes]

## Business Logic & Edge Cases
[Complex logic, background jobs, external dependencies, transactions, rate limiting]

## Performance & Scalability
[Expected load, caching strategy, file handling, search approach]

## Config & Environment
[Secret management, environments, feature flags or env-specific config]

## Observability & Quality
[Logging, error tracking, testing strategy, compliance]

## Deferred Decisions
[Anything explicitly left open — things to decide during build]

## References
- [Any references or docs the user mentioned]
```

**Keep the doc honest.** If something wasn't decided, put it in **Deferred Decisions** rather than inventing an answer. The doc should reflect what was actually decided, not what sounds good.
