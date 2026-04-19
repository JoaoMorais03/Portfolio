---
title: "Fix: CV & Portfolio Content Refresh"
type: fix
status: active
date: 2026-04-19
---

# CV & Portfolio Content Refresh

## Overview

Batch of content updates across CV (cv.tex) and portfolio (experience.json, cv.astro, project MDX files). Includes LinkedIn URL fix, skills cleanup, project description fixes, Flavibyte trim, and a full Prozis rewrite.

---

## 1. LinkedIn URL

Update in all locations:

| File | Current | New |
|------|---------|-----|
| `cv.tex:67` | `https://www.linkedin.com/in/joão-pedro-de-morais-8922782b8` | `https://www.linkedin.com/in/joaomoraisdev` |
| `src/pages/cv.astro:46` | `https://www.linkedin.com/in/jo%C3%A3o-pedro-de-morais-8922782b8` | `https://www.linkedin.com/in/joaomoraisdev` |

Also check: `src/pages/index.astro`, `src/components/Footer.astro` or any other file linking to LinkedIn.

---

## 2. Technical Skills — Remove Items

### `cv.tex` (lines 75, 79)

**Backend line:** Remove `Python,` and `Microservices` → becomes:
```
Java, Spring Boot, Node.js, Express.js, RESTful APIs, WebSockets
```

**Tools & Practices line:** Remove `Code Review, Automated Testing (Vitest),` → becomes:
```
Jira, GitHub Actions
```

### `src/pages/cv.astro` (lines 11-12)

**Backend array:** Remove `'Python'`
**Frontend array:** No change

Note: cv.astro doesn't have Microservices or Code Review/Automated Testing — only cv.tex does.

---

## 3. Projects — Remove Items

### Tiburcio — Remove Hono

| File | Change |
|------|--------|
| `cv.tex:117` | Remove `Hono,` from tech list |
| `src/data/projects/tiburcio.mdx:6` | Remove `"Hono"` from technologies array |
| `src/data/projects/tiburcio.mdx:15` | Remove "and Hono" from body text if mentioned |

### Hospital Management — Remove "Microservices architecture"

| File | Change |
|------|--------|
| `cv.tex:126` | Rewrite bullet to remove "Microservices architecture" |
| `src/data/projects/hospital-management.mdx:2` | Remove "microservices architecture" from description |
| `src/data/projects/hospital-management.mdx:19` | Remove "microservices" from Architecture section body |

---

## 4. Flavibyte — Remove First Bullet

Remove "Registered a small company to take on freelance projects outside of my day job" from:

| File | Change |
|------|--------|
| `cv.tex:100` | Delete the `\resumeItem{Registered...}` line |
| `src/data/experience.json:24` | Remove that string from bullets array |

---

## 5. Prozis — Full Rewrite

Replace all 5 current bullets with new ones. Goal: punchy, honest, recruiter-sticky. No AI buzzwords.

### Current (cv.tex):
1. Core developer on Prozis Hub, one of 2 largest internal systems...
2. Entrusted with production deployment responsibilities typically reserved for mid-level engineers...
3. Optimized SQL Server queries and indexing strategies, reducing data processing time by 35%...
4. Participate in code reviews and manage tasks in Jira...
5. Co-building an AI agency with a colleague...

### Proposed (cv.tex):

```latex
\resumeItem{One of 7 engineers owning 5 major internal platforms end-to-end --- UI, API, and database. Report directly to the CEO on one of them}
\resumeItem{Promoted from junior to mid in under a year after leading data migrations and pushing architecture improvements across the team}
\resumeItem{Cut data processing time by 35\% rewriting SQL Server queries with JPA native queries and proper indexing via Liquibase}
\resumeItem{Pitched and now building an internal AI tool that orchestrates autonomous dev tasks using \textbf{Claude Code}, \textbf{Kubernetes}, and a custom orchestrator in \textbf{Go}}
```

### Proposed (experience.json):

```json
"bullets": [
  "One of 7 engineers owning 5 major internal platforms end-to-end — UI, API, and database. Report directly to the CEO on one of them",
  "Promoted from junior to mid in under a year after leading data migrations and pushing architecture improvements across the team",
  "Cut data processing time by 35% rewriting SQL Server queries with JPA native queries and proper indexing via Liquibase",
  "Pitched and now building an internal AI tool that orchestrates autonomous dev tasks using Claude Code, Kubernetes, and a custom orchestrator in Go"
]
```

**Why these 4 bullets work:**
- Bullet 1: Shows scope + CEO access. "5 platforms, 7 engineers, end-to-end" is concrete and memorable.
- Bullet 2: Growth story. Junior → mid in <1 year is a strong signal. Shows initiative, not just task completion.
- Bullet 3: Quantified impact. Kept the 35% number but made the sentence shorter and more direct.
- Bullet 4: Innovation story. "Pitched and now building" shows ownership. The tech stack (Claude Code, K8s, Go) is eye-catching.

Dropped: the "code reviews and Jira" bullet (generic, every developer does this) and the "typically reserved for mid-level" framing (replaced by the actual promotion story which is stronger).

---

## 6. Regenerate PDF

```bash
pdflatex -output-directory=public cv.tex
rm -f public/cv.aux public/cv.log public/cv.out
```

Verify: still 1 page.

---

## Acceptance Criteria

- [ ] LinkedIn URL updated to `linkedin.com/in/joaomoraisdev` in cv.tex and cv.astro (and anywhere else)
- [ ] Python and Microservices removed from Backend skills in cv.tex
- [ ] Code Review and Automated Testing (Vitest) removed from Tools & Practices in cv.tex
- [ ] Python removed from Backend skills in cv.astro
- [ ] Hono removed from Tiburcio in cv.tex and tiburcio.mdx
- [ ] "Microservices architecture" removed from Hospital Management in cv.tex and hospital-management.mdx
- [ ] Flavibyte "Registered a small company..." bullet removed from cv.tex and experience.json
- [ ] Prozis bullets rewritten in cv.tex and experience.json (4 new bullets)
- [ ] PDF regenerated, still 1 page
- [ ] `npm run build` succeeds
