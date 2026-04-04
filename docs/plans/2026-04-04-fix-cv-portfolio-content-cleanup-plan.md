---
title: "Fix: CV & Portfolio Content Update + Duplicate Cleanup"
type: fix
status: completed
date: 2026-04-04
---

# CV & Portfolio Content Update + Duplicate Cleanup

## Overview

Three changes in one pass: (1) delete accidental macOS " 2" duplicate files cluttering the repo, (2) update Prozis and Flavibyte locations to "Remote" across CV and portfolio, (3) add the AI agency company work to Prozis section.

---

## Phase 1: Delete Duplicate Files

macOS Finder created " 2" copies of files/directories. None are git-tracked. All are stale partial copies.

**Files to delete:**

```
astro.config 2.mjs
package-lock 2.json
src/content.config 2.ts
src/data 2/                          # entire directory (partial copy, missing files)
src/assets 2/
src/components 2/
src/layouts 2/
src/pages 2/
src/styles 2/
docs/brainstorms 2/
docs/plans 2/
```

**Command:** `find . -name "* 2*" -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*" -delete` then `find . -name "* 2" -type d -empty -delete` for leftover empty dirs.

---

## Phase 2: Update Locations to Remote

Both Prozis and Flavibyte are fully remote. Current values say "Porto, Portugal" and "Chaves, Portugal" which implies on-site.

### Files to change:

#### `cv.tex`

| Line | Current | New |
|------|---------|-----|
| 86 | `{Prozis}{Porto, Portugal}` | `{Prozis}{Remote}` |
| 96 | `{Flavibyte}{Chaves, Portugal}` | `{Flavibyte}{Remote}` |

#### `src/data/experience.json`

| Entry | Current | New |
|-------|---------|-----|
| Prozis | `"location": "Porto, Portugal"` | `"location": "Remote"` |
| Flavibyte | `"location": "Chaves, Portugal"` | `"location": "Remote"` |

#### `src/pages/cv.astro`

Line 29 has hardcoded `"Full-Stack Developer . Porto, Portugal"` — update to `"Full-Stack Developer . Remote"`.

---

## Phase 3: Add AI Agency Company to Prozis

The user is building an AI agency with a colleague — innovating autonomous development workflows using Claude Code, Kubernetes (K8s), and a custom orchestrator written in Go.

### `cv.tex` — Prozis experience bullets

Add new bullet after existing ones:

```latex
\resumeItem{Co-building an AI agency with a colleague, developing autonomous development workflows using \textbf{Claude Code}, \textbf{Kubernetes (K8s)}, and a custom orchestrator built in \textbf{Go}}
```

### `src/data/experience.json` — Prozis bullets

Add new bullet to the Prozis `highlights` array:

```json
"Co-building an AI agency with a colleague, developing autonomous development workflows using Claude Code, Kubernetes, and a custom orchestrator built in Go"
```

### `src/pages/cv.astro`

No change needed — it renders from experience.json dynamically.

---

## Phase 4: Regenerate PDF

After all tex changes:

```bash
pdflatex -output-directory=public cv.tex
rm -f public/cv.aux public/cv.log public/cv.out
```

Verify: still fits on 1 page.

---

## Acceptance Criteria

- [x] All " 2" duplicate files and directories removed from repo root and src/
- [x] Prozis location = "Remote" in cv.tex, experience.json, and cv.astro
- [x] Flavibyte location = "Remote" in cv.tex and experience.json
- [x] AI agency bullet added to Prozis in cv.tex and experience.json
- [x] PDF regenerated at public/cv.pdf, still 1 page
- [x] `npm run build` still succeeds (no broken imports from deleted duplicates)
