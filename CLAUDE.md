# Visual Blocks — HTML-Infographic & SVG Illustration System

A reusable system for adding rich visual blocks (HTML-infographics, charts, SVG illustrations, comparison tables, checklists, callouts) to content-driven Next.js sites.

## Architecture

Visual content is authored as a **typed `Block` array** alongside article data. A unified renderer (`ArticleBody`) maps each block type to its React component via a switch statement.

**Block types available:**

| Block | Purpose | When to use |
|---|---|---|
| `lead-infographic` | HTML/CSS multi-stat hero panel | ALWAYS the first block |
| `illustration` | Inline SVG component from registry | Throughout body |
| `stat` | Large highlighted number with label | Dollar amounts, percentages, benchmarks |
| `callout` | Styled insight box (info/warning/key) | Key takeaways, red flags, tips |
| `bar-chart` | Horizontal bar chart via Recharts | Cost comparisons, spend breakdowns |
| `comparison-table` | Feature matrix with checkmarks/text | Tool comparisons |
| `checklist` | Checklist with check-circle icons | Diagnostics, step-by-step guides |
| `figure` | External SVG/image from /public/ | Custom illustrations, screenshots |

## File layout

```
components/
  ArticleBody.tsx          — unified block renderer (switch on block.type)
  charts/
    LeadInfographic.tsx    — hero infographic panel
    CostBarChart.tsx       — Recharts bar chart
    StatBanner.tsx         — large stat display
    CalloutBox.tsx         — insight callout
    ComparisonTable.tsx    — feature matrix table
    Checklist.tsx          — checklist component
  illustrations/
    index.ts               — registry mapping name → component
    ChartUp.tsx            — trending bars
    AuditShield.tsx        — shield with checkmark
    Pillars.tsx            — four stacked bars
    CostTrend.tsx          — dollar sign + trend line
    IntegrationFlow.tsx    — tools connected by arrows
    Magnify.tsx            — magnifying glass over document
    BuildBlocks.tsx        — interlocking stack blocks
data/
  blocks.ts                — shared Block type definition
```

## Authoring

Every article must include at least 3 visual blocks. The FIRST block must be `lead-infographic`.

```typescript
blocks: [
  { type: "lead-infographic", headline: "...", stats: [
    { value: "...", label: "...", icon: "dollar|trending-down|building|chart" },
  ], footnote: "..." },
  { type: "p", text: "..." },
  { type: "stat", value: "...", label: "..." },
  { type: "bar-chart", title: "...", bars: [
    { label: "...", value: 100 },
  ], unit: "/mo" },
  { type: "comparison-table", headers: ["Feature", "Tool A", "Tool B"], rows: [
    { label: "Feature", cells: [true, false] },
  ]},
  { type: "checklist", title: "...", items: ["Item 1", "Item 2"] },
  { type: "callout", text: "...", variant: "info|warning|key" },
  { type: "illustration", name: "chart-up|audit-shield|pillars|cost-trend|integration-flow|magnify|build-blocks", caption: "..." },
]
```

## Archetype templates

**Cost Breakdown** — `lead-infographic` → (body) → `illustration(pillars)` → `stat` → `callout(key)`

**Tool Comparison** — `lead-infographic` → `bar-chart` → `comparison-table` → `callout(warning)` → `callout(key)`

**Sprawl Diagnostic** — `lead-infographic` → `illustration(audit-shield)` → `checklist` → `callout(warning)` → `stat` → `callout(key)`

**Integration Stack** — `lead-infographic` → `illustration(integration-flow)` → `callout(info)` → `callout(key)`

## Workflow

1. Run `npx tsc --noEmit` — must pass with zero errors
2. Start dev server and fetch the page to verify blocks render
3. Confirm: lead-infographic is first, all illustrations show, tables/checklists render correctly
4. Fix any issues found, re-run tsc, re-fetch — loop until clean
5. Only then commit
