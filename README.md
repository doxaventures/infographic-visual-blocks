# Infographic Visual Blocks

A reusable system for adding rich visual blocks — HTML infographics, charts, SVG illustrations, comparison tables, checklists, and callouts — to content-driven Next.js sites.

Repository: https://github.com/doxaventures/infographic-visual-blocks

## Contents

- `CLAUDE.md` — full system instructions and archetype templates
- `data/blocks.ts` — typed `Block` union
- `components/ArticleBody.tsx` — unified renderer
- `components/charts/` — reusable chart/infographic components
- `components/illustrations/` — SVG illustration registry
- `examples/article.ts` — example article data

## Usage

1. Copy the relevant files into your Next.js + TypeScript + Tailwind project.
2. Install `recharts` and `lucide-react` if not already present.
3. Author articles as a `Block[]` array.
4. Render with `<ArticleBody blocks={article.blocks} />`.

## Rule

- Every article must have at least 3 visual blocks.
- The first block must be `lead-infographic`.
