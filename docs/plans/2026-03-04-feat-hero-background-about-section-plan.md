---
title: "feat: Replace hero glow with blue line pattern + add About section"
type: feat
status: completed
date: 2026-03-04
---

# feat: Replace hero glow with blue line pattern + add About section

## Overview

Two changes to the home page:

1. **Replace the radial gradient glow** behind the hero with an original geometric blue line pattern — something more distinctive than a blurry blob
2. **Add an About section** between hero and projects — short paragraph about being a software engineer passionate about learning, building projects to learn new things (especially AI), studied in Portugal, currently working remote from the US

## Changes

### 1. Hero background — blue line grid pattern

**File:** `src/styles/global.css`, `src/pages/index.astro`

- [ ] Remove `.hero-glow` radial gradient (the blurry blue blob)
- [ ] Replace with a CSS-only geometric line pattern using the accent blue
  - Approach: diagonal or crossing blue lines at very low opacity, created with `repeating-linear-gradient`
  - Lines should be thin (1px), blue (`rgba(59, 130, 246, 0.08-0.12)`), at angles
  - Fade out at edges using a mask-image radial gradient so lines don't hit hard edges
  - This creates an original, engineered feel vs the generic radial glow
- [ ] Keep `position: relative; overflow: hidden` on the hero section

### 2. About section

**File:** `src/pages/index.astro`

- [ ] Add a short "About" section between hero and projects
  - No section-fade divider on top (flows naturally from hero)
  - Use `max-w-3xl` to match hero width
  - Section heading with `section-heading` class for the blue accent dash
  - Short paragraph (3-4 sentences max), honest voice matching rest of portfolio:
    - Software engineer who likes building things to learn
    - Particularly interested in AI right now
    - Studied computer engineering in Portugal (ISEP)
    - Currently working remote from the US
  - `fade-in` class for scroll animation
  - Keep it brief — this is personality, not a resume

## Acceptance Criteria

- [ ] Hero background has visible blue line pattern (not a radial glow)
- [ ] Lines fade out at edges (not hard cutoff)
- [ ] About section appears between hero and projects
- [ ] About text is 3-4 sentences, human voice, not AI-sounding
- [ ] About section has section-heading with blue accent dash
- [ ] About section fades in on scroll
- [ ] Build passes
- [ ] Mobile looks good (lines not too dense on small screens)

## Files to modify

- `src/styles/global.css` — replace `.hero-glow` with new line pattern class
- `src/pages/index.astro` — update hero class, add About section
