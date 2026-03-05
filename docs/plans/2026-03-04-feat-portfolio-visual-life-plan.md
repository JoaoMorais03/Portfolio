---
title: "feat: Add visual life and blue accents to portfolio"
type: feat
status: completed
date: 2026-03-04
---

# feat: Add visual life and blue accents to portfolio

## Overview

The portfolio is technically solid but visually monotonous — flat black background everywhere, accent blue barely visible, no animations, no depth cues. Recruiters spend 6-8 seconds on initial scan (TheLadders eye-tracking study) and visual polish is a gut-level filter. Right now the site reads as "clean template" rather than "developer who cares about craft."

The goal: add subtle visual life using blue accents, depth, and micro-interactions without crossing into glassmorphism/neon territory. Keep the Linear/Vercel aesthetic, just make it feel like someone lives here.

## Problem Statement

Current issues:
- **Flat black void** — every section shares the same `#09090B` background with zero depth variation
- **Accent color barely exists** — `#3B82F6` only appears in a few link hover states and the Flavibyte text
- **No animations** — everything is static except card hover lifts (200ms translateY)
- **Navbar is text-only** — no photo, no personality, no active page indicator
- **Unused assets** — `.dot-grid` class defined in CSS but never applied anywhere
- **No scroll feedback** — sections appear all at once, no progressive reveal

Research shows successful dark portfolios (Brittany Chiang, Linear, Vercel) use 5-7 accent color touchpoints, radial ambient glows, background variation, and subtle micro-interactions.

## Proposed Solution

Layered approach — each change is small individually but compounds into a portfolio that feels alive:

### Phase 1: Navbar personality + active states
### Phase 2: Background depth (glows, section variation, dot-grid)
### Phase 3: Blue accent expansion (borders, cards, timeline)
### Phase 4: Scroll animations (fade-in on section enter)
### Phase 5: Polish (noise texture, status dot pulse)

## Technical Approach

### Phase 1: Navbar — Avatar + Active Page Indicator

**Files:** `src/components/Navbar.astro`

- [ ] Add small circular photo (28-32px) next to "João Morais" text in the navbar left side
  - Import `photo.jpeg` from `../assets/photo.jpeg` using Astro's `Image` component
  - Style: `rounded-full w-7 h-7 object-cover` (no ring — keep it clean at this size)
  - Place before the name text in the existing flex container
- [ ] Add active page indicator on desktop nav links
  - Use `Astro.url.pathname` to detect current page
  - Active link gets a 2px bottom border in accent color + `text-text` instead of `text-text-muted`
  - CSS: `border-b-2 border-accent` on the active link

### Phase 2: Background Depth

**Files:** `src/styles/global.css`, `src/pages/index.astro`

- [ ] Add radial glow behind hero section
  - Create `.hero-glow` class: absolutely positioned, large blurred radial gradient
  - Color: `rgba(59, 130, 246, 0.06)` center fading to transparent — must be barely perceptible
  - Position: centered above the hero, elliptical shape spanning ~60% width
  - Apply to hero section via a pseudo-element or wrapper div with `position: relative; overflow: hidden`
- [ ] Alternate section backgrounds
  - Projects section: keep `bg-bg` (default)
  - Experience section: add `bg-bg-subtle` (`#111113`) for subtle layering
  - This creates depth through contrast without adding any new colors
- [ ] Apply `.dot-grid` to one section
  - Add `dot-grid` class to the projects section background at reduced opacity
  - Wrap in a div with `opacity-[0.4]` or adjust the gradient color opacity directly
  - The class already exists in `global.css` — just needs to be used

### Phase 3: Blue Accent Expansion

**Files:** `src/styles/global.css`, `src/components/ProjectCard.astro`, `src/components/ExperienceEntry.astro`, `src/pages/index.astro`

- [ ] Card hover: blue-tinted border + glow
  - Change `.card-hover:hover` border-color from `var(--color-border-hover)` to `rgba(59, 130, 246, 0.3)`
  - Add secondary box-shadow: `0 0 20px -5px rgba(59, 130, 246, 0.1)` alongside existing shadow
- [ ] Section heading accent
  - Add a small blue dash/line before or under section headings ("Selected Projects", "Experience")
  - Pattern: a `::after` pseudo-element — 32px wide, 2px tall, `bg-accent`, centered below the heading
- [ ] Experience timeline accent
  - Change the `border-l border-border` on ExperienceEntry to use a faint blue: `border-accent/20`
  - Current role dot is already `bg-accent` — this connects the visual language
- [ ] Navbar bottom border accent
  - Replace or supplement `border-b border-border` on the nav with a gradient bottom border
  - Pattern: same as `.section-fade` but using accent color — fades from transparent → `rgba(59,130,246,0.3)` → transparent

### Phase 4: Scroll Animations

**Files:** `src/styles/global.css`, `src/layouts/BaseLayout.astro` (inline script)

- [ ] CSS classes for scroll-triggered fade-in
  - `.fade-in`: initial state `opacity: 0; transform: translateY(20px)`
  - `.fade-in.visible`: `opacity: 1; transform: translateY(0)` with `transition: opacity 600ms ease, transform 600ms ease`
- [ ] Minimal Intersection Observer script
  - Add inline `<script>` in BaseLayout (keeps zero-JS-bundle approach via Astro inline scripts)
  - Observe all `.fade-in` elements, add `.visible` class when they enter viewport
  - Options: `threshold: 0.1`, `rootMargin: '0px 0px -50px 0px'` (triggers slightly before full visibility)
- [ ] Apply `.fade-in` to sections
  - Hero section: no animation (should be visible immediately on load)
  - Projects section: fade-in
  - Experience section: fade-in
  - Individual project cards: staggered fade-in with `transition-delay` (50ms increments)

### Phase 5: Polish

**Files:** `src/styles/global.css`, `src/components/ProjectCard.astro`

- [ ] Subtle noise texture overlay on body
  - CSS-only approach using SVG filter (no external image needed)
  - `body::before` with `filter: url(#noise)` or inline SVG `<feTurbulence>`
  - Opacity: `0.015` — barely visible, adds warmth to flat surfaces
- [ ] Pulsing dot on "Live" status in ProjectCard
  - Add `@keyframes pulse` animation: subtle scale + opacity pulse on the status indicator
  - Only for `live` status projects (Tiburcio, FlaviByte)
  - CSS: `animation: pulse 2s ease-in-out infinite`
- [ ] Gradient text on hero name (optional — test if it looks good)
  - White-to-light-gray gradient on "João Morais" heading
  - `background: linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%); background-clip: text; -webkit-text-fill-color: transparent`
  - If it looks too flashy, skip it — the name is fine as solid white

## Acceptance Criteria

- [ ] Navbar shows circular photo next to name
- [ ] Current page has visible active indicator in navbar
- [ ] Hero section has a subtle blue radial glow behind it
- [ ] At least two sections have different background shades
- [ ] `.dot-grid` pattern is visible on at least one section
- [ ] Project cards glow blue on hover
- [ ] Section headings have a blue accent element
- [ ] Experience timeline border uses accent color at low opacity
- [ ] Sections fade in on scroll (except hero)
- [ ] Live project status dots pulse
- [ ] No new npm dependencies added (all CSS/vanilla JS)
- [ ] Zero layout shifts or CLS issues from animations
- [ ] Build still passes with zero client JS bundles (only inline scripts)
- [ ] Mobile experience is not degraded — animations respect `prefers-reduced-motion`

## Technical Considerations

- **No new dependencies** — everything is achievable with CSS + one inline Intersection Observer script
- **Performance** — all animations use `transform` and `opacity` (GPU-composited, no layout thrashing)
- **Accessibility** — wrap animations in `@media (prefers-reduced-motion: no-preference)`
- **Astro inline scripts** — the Intersection Observer goes in BaseLayout as `<script>` (Astro deduplicates these)
- **Tailwind v4** — new utility classes may need `@theme` additions or plain CSS in `global.css`

## Sources & References

- **Recruiter behavior:** TheLadders eye-tracking study — 6-8 second scan, F-pattern reading
- **Dark portfolio patterns:** Brittany Chiang (brittanychiang.com), Linear.app — radial glows, grain, 5-7 accent touchpoints
- **Existing code:** `src/styles/global.css:36-39` — unused `.dot-grid` class ready to deploy
- **Existing code:** `src/styles/global.css:63-75` — `.card-hover` effect to enhance with blue glow
- **Existing code:** `src/components/Navbar.astro` — text-only left side, no avatar
- **Existing code:** `src/components/ExperienceEntry.astro:17` — timeline border to accent-tint
