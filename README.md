# joaomorais.dev

Personal portfolio and CV site built with Astro 5 and Tailwind CSS 4.

**Live at:** [joaomorais.dev](https://joaomorais.dev)

## Stack

- **[Astro 5](https://astro.build)** — Static site generator, zero client JS by default
- **[Tailwind CSS 4](https://tailwindcss.com)** — Utility-first CSS via `@tailwindcss/vite`
- **[MDX](https://mdxjs.com)** — Project case study pages with rich content
- **[Inter](https://rsms.me/inter/)** + **[JetBrains Mono](https://www.jetbrains.com/lp/mono/)** — Typography

## Project Structure

```
src/
├── assets/            # Images (processed by Astro)
│   └── photo.jpeg
├── components/        # Reusable Astro components
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   ├── ExperienceEntry.astro
│   └── Section.astro
├── content.config.ts  # Content collection schemas (Zod)
├── data/              # Content collections
│   ├── projects/      # MDX files — one per project
│   ├── experience.json
│   └── education.json
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro        # Home — hero, about, projects, experience
│   ├── cv.astro           # Web CV with print styles
│   └── projects/
│       ├── index.astro    # All projects grid
│       └── [slug].astro   # Dynamic case study pages from MDX
└── styles/
    └── global.css         # Design system — colors, effects, prose
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about, selected projects, experience |
| `/projects` | All projects grid |
| `/projects/[slug]` | Project case study (rendered from MDX) |
| `/cv` | Web-based CV with downloadable PDF |

## Design

Dark theme, blue accent (`#3B82F6`). No light mode.

Visual features:
- Blue geometric line grid behind the hero
- Scroll-triggered fade-in animations (Intersection Observer)
- Blue-glow card hover effects
- Dot-grid texture on the projects section
- Navbar with avatar and active page indicator
- Pulsing status dots on live projects
- Subtle noise texture overlay
- Section heading accent dashes
- Alternating section backgrounds for depth

Animations respect `prefers-reduced-motion`.

## Content

### Adding a project

Create a new `.mdx` file in `src/data/projects/`:

```mdx
---
title: "Project Name"
description: "One-line description."
type: "personal"          # personal | client | university
status: "completed"       # live | in-development | completed
technologies: ["React", "Node.js"]
featured: true            # show on home page
github: "https://github.com/..."
url: "https://..."        # optional live URL
order: 1                  # display order (lower = first)
---

## What it does

Write about the project here using standard markdown.
```

### Editing experience

Edit `src/data/experience.json`. Each entry has:

```json
{
  "id": "company-name",
  "role": "Job Title",
  "company": "Company",
  "location": "City, Country",
  "startDate": "Month Year",
  "endDate": "Month Year",
  "bullets": ["What you did"],
  "technologies": ["Tech", "Stack"]
}
```

Omit `endDate` for current positions.

### Editing education

Edit `src/data/education.json` with the same pattern.

### Updating the CV PDF

The LaTeX source is `cv.tex` at the project root. To regenerate:

```bash
pdflatex -output-directory=public cv.tex
rm -f public/cv.aux public/cv.log public/cv.out
```

Requires a LaTeX distribution (e.g., [MacTeX](https://www.tug.org/mactex/) or [TeX Live](https://www.tug.org/texlive/)).

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # preview production build
```

## Deployment

Static output in `dist/`. Works with any static host:

- **Vercel** — auto-detected, zero config
- **Netlify** — auto-detected
- **Cloudflare Pages** — build command: `npm run build`, output: `dist`
- **GitHub Pages** — add `@astrojs/vercel` or use GitHub Actions

## License

This is my personal portfolio. The code structure is open for reference, but the content (text, images, project descriptions) is mine.
