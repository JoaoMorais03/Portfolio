---
title: "feat: Rebuild portfolio with Astro 5 + Tailwind 4 dark minimal design"
type: feat
status: completed
date: 2026-03-04
origin: docs/brainstorms/2026-03-04-portfolio-rebuild-brainstorm.md
---

# Rebuild Portfolio: Astro 5 + Linear-Inspired Dark Minimal Design

## Overview

Complete rebuild of the developer portfolio from Next.js 14 + Shadcn/Framer Motion to **Astro 5 + Tailwind CSS 4**, with a dark-only, Linear/Vercel/Raycast-inspired minimal design. The rebuild adds **case study pages** for featured projects and a **web-based CV page**, replacing the current AI-template aesthetic with a design that signals craft and taste to senior hiring teams.

## Problem Statement / Motivation

The current portfolio uses the exact same stack and visual patterns (gradient orbs, glassmorphism, glow effects, Shadcn components, Framer Motion entrance animations) that every AI-generated and bootcamp portfolio uses in 2025-2026. Senior engineers and hiring managers see this pattern dozens of times weekly — it signals "template" rather than "craft." The portfolio needs to stand out through **design restraint**, **content depth** (case studies), and **technical intentionality** (right tool for the job).

(see brainstorm: `docs/brainstorms/2026-03-04-portfolio-rebuild-brainstorm.md`)

## Proposed Solution

A ground-up rebuild using Astro 5 as the framework, with:
- **Zero client-side JavaScript** (mobile nav via `<script>` tag, no React/Preact needed since dark-only = no theme toggle)
- **Tailwind CSS 4** via Vite plugin (`@tailwindcss/vite`), configured with `@theme` directives in CSS
- **Content Collections** with Zod schemas for projects (MDX) and experience/skills (JSON)
- **Case study pages** at `/projects/[slug]` rendered from MDX content
- **Web-based CV page** at `/cv` instead of just a PDF embed
- **Dark-only design** — no theme toggle, stronger visual identity

## Technical Approach

### Architecture

```
portfolio/
  astro.config.mjs
  tsconfig.json
  package.json
  src/
    content.config.ts              # Astro 5 content collection definitions
    pages/
      index.astro                  # Home page
      projects/
        index.astro                # All projects grid
        [slug].astro               # Individual case study page
      cv.astro                     # Web-based CV
    layouts/
      BaseLayout.astro             # HTML shell, meta, fonts, global styles
    components/
      Navbar.astro                 # Sticky nav (JS via <script> tag)
      Footer.astro                 # Minimal footer
      ProjectCard.astro            # Project card for grids
      ExperienceEntry.astro        # Experience timeline entry
      Section.astro                # Reusable section wrapper
    styles/
      global.css                   # Tailwind import + @theme + custom utilities
    data/
      projects/                    # MDX files per project (content collection)
        nexus-finance.mdx
        grafica-sinal.mdx
        porfia-dos-leitoes.mdx
        hospital-management.mdx
        familysync.mdx
        queima25.mdx
      experience.json              # Structured experience data
      education.json               # Education data
    assets/
      photo.jpeg                   # Profile photo (optimized by astro:assets)
  public/
    cv.pdf                         # Downloadable resume PDF
    favicon.ico
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png
    icon-192.png
    icon-512.png
    manifest.json
```

### Key Technical Decisions

**1. No React/Preact islands needed**

Since the site is dark-only (no theme toggle), the only interactive element is the mobile hamburger menu. This can be handled with a vanilla `<script>` tag inside the Astro component — no framework runtime needed. This means **literally zero JavaScript shipped to the client** beyond ~20 lines for the mobile nav toggle.

**2. Tailwind CSS 4 configuration via CSS**

Tailwind 4 eliminates `tailwind.config.ts` and `postcss.config.js`. All configuration lives in `src/styles/global.css` using `@theme` directives:

```css
@import "tailwindcss";

@theme inline {
  --color-bg: #0A0A0A;
  --color-bg-subtle: #111111;
  --color-border: #1A1A1A;
  --color-border-hover: #2A2A2A;
  --color-text: #EDEDED;
  --color-text-muted: #888888;
  --color-accent: #3B82F6;

  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Geist Mono', monospace;
}
```

**3. Content Collections with Astro 5 loaders**

`src/content.config.ts` defines collections using the new loader API:

```ts
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['personal', 'client', 'university']),
    status: z.enum(['live', 'in-development', 'completed', 'in-progress']),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    url: z.string().optional(),
    github: z.string().optional(),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    bullets: z.array(z.string()),
    technologies: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.json'),
  schema: z.object({
    id: z.string(),
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    courses: z.array(z.string()),
  }),
});

export const collections = { projects, experience, education };
```

**4. Case study MDX structure**

Each project MDX file has frontmatter (validated by schema) + rich body content:

```mdx
---
title: "Nexus Finance"
description: "Financial dashboard for tracking stock and cryptocurrency portfolios"
type: "personal"
status: "live"
technologies: ["Next.js", "TypeScript", "Supabase", "Clerk", "TanStack Query"]
featured: true
url: "https://nexus-finance.live"
github: "https://github.com/JoaoMorais03/nexus-finance"
order: 1
---

## Context

[What problem does this solve? Who is it for?]

## Approach

[Technical decisions and why]

## Challenges

[What was hard, how you solved it]

## Results

[Metrics, outcomes, learnings]
```

**5. astro.config.mjs**

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://joaomorais.dev',
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
      gfm: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

---

### Implementation Phases

#### Phase 1: Project Scaffolding

Set up the Astro 5 project alongside the existing Next.js code (in a new branch or directory), then replace.

- [x] Initialize Astro 5 project: `npm create astro@latest`
- [x] Install integrations: `@astrojs/mdx`, `@tailwindcss/vite`
- [x] Configure `astro.config.mjs` (MDX, Tailwind 4 via Vite plugin)
- [x] Set up `tsconfig.json` with path aliases
- [x] Create `src/styles/global.css` with Tailwind import and `@theme` color/font tokens
- [x] Add Inter + JetBrains Mono fonts (via `@fontsource` packages or self-hosted)
- [x] Migrate assets: `photo.jpeg` to `src/assets/`, static files to `public/`
- [x] Verify dev server runs and renders a blank page with correct fonts/colors

**Files created:**
- `astro.config.mjs`
- `tsconfig.json`
- `package.json`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro` (placeholder)

#### Phase 2: Design System & Layout Components

Build the foundational components that define the visual identity.

- [x] Create `BaseLayout.astro` — HTML shell with meta tags, font loading, global CSS import, `<slot />`
- [x] Create `Navbar.astro` — fixed header with name/logo, nav links (About, Experience, Projects), mobile hamburger. Dark only, no theme toggle. Mobile menu via `<script>` tag (vanilla JS, ~20 lines)
- [x] Create `Footer.astro` — minimal: social links (GitHub, LinkedIn, Email), copyright
- [x] Create `Section.astro` — reusable section wrapper with consistent padding/max-width
- [x] Define spacing system: 8px grid, max-width `max-w-3xl` for content, `max-w-5xl` for wider sections
- [x] Verify responsive behavior at mobile/tablet/desktop breakpoints

**Design rules to enforce:**
- Background: `#0A0A0A` (body), `#111111` (cards/elevated)
- Borders: `1px solid #1A1A1A`, hover: `#2A2A2A`
- Border radius: `rounded-lg` max (no `rounded-2xl` or `rounded-3xl`)
- Text: `#EDEDED` primary, `#888888` muted
- Accent: `#3B82F6` used sparingly (links, subtle highlights)
- Typography: restrained scale, no hero text larger than `text-4xl`
- Transitions: `transition-colors duration-150` only, no transform animations
- Monospace: dates, tech tags, metadata

**Files created:**
- `src/layouts/BaseLayout.astro`
- `src/components/Navbar.astro`
- `src/components/Footer.astro`
- `src/components/Section.astro`

#### Phase 3: Content Collections & Data Migration

Extract all hardcoded data from React components into Astro content collections and JSON data files.

- [x] Create `src/content.config.ts` with `projects`, `experience`, `education` collection definitions
- [x] Create `src/data/experience.json` — migrate 3 experience entries from `Experience.tsx`
- [x] Create `src/data/education.json` — migrate education data from `Education.tsx`
- [x] Create 6 MDX files in `src/data/projects/` — migrate project data from `Projects.tsx`:
  - `nexus-finance.mdx` (featured)
  - `grafica-sinal.mdx` (featured)
  - `porfia-dos-leitoes.mdx` (featured)
  - `hospital-management.mdx`
  - `familysync.mdx`
  - `queima25.mdx`
- [x] Write initial case study body content for the 3 featured projects (Context, Approach, Challenges, Results)
- [x] Verify collections load correctly with `getCollection()` in a test page

**Data sources (current codebase):**
- Experience: `components/sections/Experience.tsx` (3 entries with bullets + tech tags)
- Projects: `components/sections/Projects.tsx` (6 entries with descriptions + tech + links)
- Education: `components/sections/Education.tsx` (1 entry with courses)
- Personal info: `components/sections/Hero.tsx`, `components/sections/About.tsx`

**Files created:**
- `src/content.config.ts`
- `src/data/experience.json`
- `src/data/education.json`
- `src/data/projects/*.mdx` (6 files)

#### Phase 4: Home Page

Build the main landing page with all sections.

- [x] **Hero section**: Name (`text-4xl font-bold`), one-line role description (`text-text-muted`), 2-3 social icon links (GitHub, LinkedIn, Email). Clean, typographic, no gradients or orbs. Optional: subtle horizontal rule or small profile photo.
- [x] **Selected Projects section**: 2-3 featured project cards linking to `/projects/[slug]`. Cards show: title, one-line description, tech tags (monospace), status indicator. Subtle border, hover: border lightens.
- [x] **Experience section**: Timeline or stacked cards. Each entry: role, company, period (monospace), 2-3 key bullets. Tech tags below.
- [x] **Footer**: Social links + copyright

- [x] Create `ProjectCard.astro` component — used on home page and `/projects` grid
- [x] Create `ExperienceEntry.astro` component — used on home page
- [x] Wire up data from content collections using `getCollection()`

**Files created/modified:**
- `src/pages/index.astro`
- `src/components/ProjectCard.astro`
- `src/components/ExperienceEntry.astro`

#### Phase 5: Project Pages (Case Studies)

The key differentiator — dedicated pages showing engineering thinking.

- [x] Create `src/pages/projects/index.astro` — grid of all 6 projects using `ProjectCard.astro`
- [x] Create `src/pages/projects/[slug].astro` — dynamic route rendering MDX content
  - Uses `getStaticPaths()` to generate pages from `projects` collection
  - Uses `render()` from `astro:content` to render MDX body
  - Layout: back link, title, metadata (tech stack, status, links), then rendered MDX content
  - Clean typography for prose content (use Tailwind `prose` plugin or custom styles)
- [x] Write substantive case study content for at least the 3 featured projects (this is content work, not code)
- [x] Style the prose/article layout — headings, paragraphs, code blocks, lists

**Files created:**
- `src/pages/projects/index.astro`
- `src/pages/projects/[slug].astro`

#### Phase 6: Web-Based CV Page

A clean, printable web page version of the CV — not just a PDF embed.

- [x] Create `src/pages/cv.astro` — structured layout pulling from experience + education collections
- [x] Sections: Contact info, Experience, Education, Skills (derived from project technologies), Languages
- [x] Add print styles (`@media print`) for clean PDF generation from browser
- [x] Include a "Download PDF" link to `/cv.pdf`
- [x] Keep the existing `cv.pdf` in `public/` as a downloadable fallback

**Files created:**
- `src/pages/cv.astro`

#### Phase 7: SEO, Meta, Performance & Deployment

- [x] Configure `<head>` in `BaseLayout.astro`: charset, viewport, title template, description, keywords
- [x] Add Open Graph meta tags (title, description, image, url, type)
- [x] Migrate favicons and `manifest.json` from `public/`
- [x] Add canonical URL support
- [x] Add sitemap integration: `npx astro add sitemap`
- [ ] Run Lighthouse audit — target 100/100/100/100
- [ ] Configure deployment (Vercel or Cloudflare Pages)
- [ ] Set up custom domain when registered

**Files modified:**
- `src/layouts/BaseLayout.astro`
- `astro.config.mjs` (add sitemap integration)

---

## Alternative Approaches Considered

1. **Next.js overhaul** — Keep Next.js, gut the design. Rejected: Next.js is overkill for a static portfolio, doesn't differentiate, and makes it easy to fall back into template patterns. (see brainstorm)

2. **SvelteKit** — Bold differentiator showing polyglot skills. Rejected: steeper learning curve, less relevant to current work (React/Vue), smaller ecosystem. (see brainstorm)

3. **React/Preact islands in Astro** — Initially considered for theme toggle and mobile nav. Decided against: dark-only design eliminates theme toggle, mobile nav is simple enough for vanilla JS `<script>`. Zero framework runtime is a stronger statement.

---

## System-Wide Impact

### Interaction Graph

This is a complete rebuild — no interaction with existing codebase. The old Next.js code can be archived on a separate branch before replacing.

### State Lifecycle Risks

None — static site with no server state, no database, no authentication.

### API Surface Parity

N/A — standalone static site.

---

## Acceptance Criteria

### Functional Requirements

- [ ] Home page renders with hero, selected projects, experience, and footer
- [ ] `/projects` page shows all 6 projects in a grid
- [ ] `/projects/[slug]` renders case study content from MDX for each project
- [ ] `/cv` page shows a clean, printable web-based resume
- [ ] Navbar works on mobile (hamburger menu) and desktop (inline links)
- [ ] All social links (GitHub, LinkedIn, Email) work correctly
- [ ] PDF download link works from CV page
- [ ] All content from current portfolio is preserved (experience, projects, education, personal info)

### Non-Functional Requirements

- [ ] Lighthouse score: 95+ on all four categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Zero client-side JavaScript beyond mobile nav toggle (~20 lines)
- [ ] Page load: < 1s on 3G throttled
- [ ] Design: dark-only, no AI-template patterns (no gradient orbs, glassmorphism, glow effects, bouncing arrows)
- [ ] Responsive: works on mobile (375px), tablet (768px), desktop (1280px+)

### Quality Gates

- [ ] All pages render correctly in static build (`npm run build`)
- [ ] No TypeScript errors
- [ ] Content collection schemas validate all data
- [ ] Visual review: design matches Linear/Vercel aesthetic (dark, minimal, typographic)

---

## Success Metrics

- Senior engineers/hiring managers comment on the design quality or case studies (qualitative)
- Lighthouse 100/100/100/100
- Zero JavaScript shipped (beyond mobile nav)
- Case studies demonstrate engineering thinking, not just tech lists

---

## Dependencies & Prerequisites

- Node.js 18+ (for Astro 5)
- Custom domain registration (can be done in parallel)
- Case study content writing (content work, not blocked by code)

---

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Astro 5 / Tailwind 4 API changes | Low | Both are stable releases; pin versions |
| Case study content takes time to write | Medium | Launch with placeholder content, iterate |
| Over-designing despite "minimal" goal | Medium | Strict adherence to design rules in Phase 2; no decorative elements |
| Custom domain delays | Low | Deploy to Vercel subdomain first, add domain later |

---

## What NOT to Build (YAGNI)

Carried forward from brainstorm:
- Blog section (structure for later, no UI)
- Contact form (email link sufficient)
- Testimonials section
- Animated page transitions
- 3D elements / Three.js
- Loading screens or skeletons
- Scroll progress indicators
- Skills section on home page (let projects demonstrate skills)

---

## Sources & References

### Origin

- **Brainstorm document:** [docs/brainstorms/2026-03-04-portfolio-rebuild-brainstorm.md](docs/brainstorms/2026-03-04-portfolio-rebuild-brainstorm.md) — Key decisions carried forward: Astro 5 + Tailwind 4 stack, dark-only Linear-inspired design, case study pages for projects, strip all AI-template patterns.

### Internal References

- Current experience data: `components/sections/Experience.tsx`
- Current project data: `components/sections/Projects.tsx`
- Current education data: `components/sections/Education.tsx`
- Current hero/about text: `components/sections/Hero.tsx`, `components/sections/About.tsx`
- Current assets: `public/photo.jpeg`, `public/cv.pdf`, `public/favicon.*`
- LaTeX CV source: `cv.tex` (reference for web CV page structure)

### External References

- Astro 5 Content Collections: https://docs.astro.build/en/guides/content-collections/
- Astro 5 Content API (defineCollection, getCollection, render): https://docs.astro.build/en/reference/modules/astro-content/
- MDX Integration: https://docs.astro.build/en/guides/integrations-guide/mdx/
- Tailwind CSS 4 + Astro: use `@tailwindcss/vite` via Vite plugin config
- Astro Image Optimization: https://docs.astro.build/en/guides/images/

### Design Inspiration

- [linear.app](https://linear.app) — Dark UI, precise spacing, subtle borders
- [vercel.com](https://vercel.com) — Clean typography, monospace accents
- [raycast.com](https://raycast.com) — Minimal color, content-focused
- [leerob.io](https://leerob.io) — Simple developer portfolio
