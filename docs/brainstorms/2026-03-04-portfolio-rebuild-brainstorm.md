# Portfolio Rebuild: Astro + Linear-Inspired Dark Minimal Design

**Date:** 2026-03-04
**Status:** Brainstorm
**Author:** Joao Morais

---

## What We're Building

A complete rebuild of the developer portfolio using **Astro + Tailwind CSS**, replacing the current Next.js + Shadcn/Framer Motion setup. The goal is a **dark, minimalistic, Linear/Vercel/Raycast-inspired** portfolio that stands out to senior hiring teams at both startups and enterprise companies.

Key additions:
- **Case study pages** for each major project (problem > approach > solution > results)
- **Zero-JS-by-default** static site with islands for interactivity where needed
- **MDX content collections** for projects and case studies
- **Dark-first design** with optional light mode

### Why This Matters

The current portfolio uses the same stack (Next.js + Shadcn + Framer Motion + glassmorphism/gradient orbs) that every AI-generated and bootcamp portfolio uses. Senior engineers and hiring managers see this pattern dozens of times weekly. It signals "template" rather than "craft."

---

## Why Astro

1. **Right tool for the job** — A portfolio is a content site. Astro is built for content sites. Using Next.js for a static portfolio is like using a sledgehammer on a nail.
2. **Performance as a signal** — 0kb JS by default. When a senior engineer opens DevTools and sees a near-perfect Lighthouse score with no framework bloat, that's a statement.
3. **Stack as a talking point** — Shows awareness of modern tooling beyond React. Demonstrates you pick tools based on the problem, not habit.
4. **Content collections** — First-class support for MDX case studies. Each project gets its own structured content file with type-safe frontmatter.
5. **Islands architecture** — Interactive elements (theme toggle, mobile nav) use React/Preact islands. The rest ships zero JS.

---

## Design Philosophy

### What to strip (AI-template red flags)
- Gradient orbs / animated backgrounds
- Glassmorphism navbar
- Glow-on-hover effects
- Bouncing scroll arrows
- "Available for opportunities" pulse badges
- Generic section headings with uppercase accent labels
- Framer Motion entrance animations on every element
- Shadcn/UI component library (too recognizable)

### What to adopt (Linear/Vercel aesthetic)
- **Dark background**: Near-black (#0A0A0A or similar), not blue-tinted
- **Subtle borders**: 1px borders in very low-contrast gray, no rounded-2xl everywhere
- **Typography-driven**: Let type hierarchy do the work, not colors/effects
- **Monospace accents**: Use monospace for dates, tech tags, metadata
- **Precise spacing**: Consistent 8px grid, generous whitespace
- **Micro-interactions only**: Subtle opacity/transform transitions, no flashy animations
- **Neutral palette**: Grays + one accent color (keep blue or consider green/purple)
- **Content density**: Show substance, not decoration

### Typography
- **Primary**: Inter or Geist Sans (clean, professional)
- **Mono**: JetBrains Mono or Geist Mono (for code, dates, tags)
- **Scale**: Restrained — no text-7xl hero titles. Let the work speak.

### Color Palette (Dark mode primary)
```
--bg:          #0A0A0A    (near black)
--bg-subtle:   #111111    (cards, elevated surfaces)
--border:      #1A1A1A    (subtle borders)
--border-hover:#2A2A2A    (hover state)
--text:        #EDEDED    (primary text)
--text-muted:  #888888    (secondary text)
--accent:      #3B82F6    (blue, used sparingly)
```

---

## Key Decisions

### 1. Case Study Structure
Each featured project gets a dedicated `/projects/[slug]` page with:
- **Context**: What was the problem? Who was it for?
- **Approach**: Technical decisions and why
- **Architecture**: System design diagram or key technical choices
- **Challenges**: What was hard and how you solved it
- **Results**: Metrics, outcomes, learnings
- **Tech stack**: Listed with your role clearly defined

This is the #1 thing that differentiates a senior-level portfolio.

### 2. Page Structure
```
/                   — Home (hero + brief sections linking deeper)
/projects           — All projects grid
/projects/[slug]    — Individual case study
/experience         — Detailed experience (or keep on home)
/cv                 — Clean web-based CV (not just a PDF embed)
```

### 3. Home Page Sections (Simplified)
1. **Hero**: Name, one-line role description, 2-3 social links. No gradient text, no orbs. Just clean type.
2. **Selected Projects**: 2-3 featured project cards linking to case studies
3. **Experience**: Timeline or cards (minimal)
4. **Skills**: Possibly removed entirely — let projects demonstrate skills instead of listing them
5. **Footer**: Minimal — links + contact

### 4. What Makes This Stand Out
- **Case studies** show HOW you think, not just WHAT you built
- **Stack choice** (Astro) shows tool awareness
- **Performance** (0kb JS) is a silent flex
- **Design restraint** signals taste and maturity
- **No Shadcn/no template components** — everything is custom, simple CSS
- **Web-based CV** instead of just a PDF download

### 5. Deployment
- Vercel or Cloudflare Pages (both have first-class Astro support)
- Custom domain if available

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Astro 5.x | Content-first, zero JS default, MDX support |
| Styling | Tailwind CSS 4.x | Already known, utility-first, no component library |
| Content | MDX via Content Collections | Type-safe frontmatter, rich case study pages |
| Interactivity | Preact islands (if needed) | Lightweight, only for theme toggle / mobile nav |
| Fonts | Inter + JetBrains Mono (or Geist family) | Clean, professional, developer-oriented |
| Icons | Lucide (via astro-icon) or inline SVG | Minimal, consistent |
| Deployment | Vercel or Cloudflare Pages | Fast, free tier, Astro-native |
| Analytics | Plausible or none | Privacy-respecting, lightweight |

---

## What NOT to Build (YAGNI)

- Blog section (unless you actively write)
- Contact form (email link is sufficient)
- Testimonials section
- Animated page transitions
- 3D elements or Three.js
- Dark/light toggle animation (simple swap is fine)
- Loading screens or skeletons
- Scroll progress indicators

---

## Open Questions

None — all resolved.

## Resolved Questions

1. **Custom domain?** Will register a personal domain (e.g., joaomorais.dev). Structure site with this in mind.
2. **Light mode?** Dark-only. No theme toggle. Stronger identity, less code, more opinionated.
3. **Blog/writing?** Skip for now, but structure the Astro project so a blog content collection can be added later without restructuring. Don't build any blog UI.

---

## Inspiration References

- [linear.app](https://linear.app) — Dark UI, precise spacing, subtle borders
- [vercel.com](https://vercel.com) — Clean typography, monospace accents, dark theme
- [raycast.com](https://raycast.com) — Minimal color, content-focused, developer-oriented
- [leerob.io](https://leerob.io) — Simple developer portfolio, Next.js VP of DX at Vercel
- [delba.dev](https://delba.dev) — Clean developer portfolio with good case studies
