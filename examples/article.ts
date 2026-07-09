import type { Block } from "../data/blocks";
import { financeArticle } from "./article-finance";
import { salesMarketingArticle } from "./article-sales-marketing";
import { operationsArticle } from "./article-operations";
import { adminSecurityArticle } from "./article-admin-security";

export const sampleArticle = {
  title: "Sample article with visual blocks",
  blocks: [
    { type: "lead-infographic", headline: "Most businesses spend 2-5% of revenue on software", stats: [
      { value: "4-7%", label: "Highest by industry", icon: "chart" },
      { value: "$6K-$10K", label: "Typical unoptimized /mo", icon: "dollar" },
      { value: "$3K-$5K", label: "Optimized stack /mo", icon: "trending-down" },
    ], footnote: "Varies by industry and team size." },
    { type: "p", text: "Most small businesses spend between 2-5% of revenue on software." },
    { type: "stat", value: "2-5%", label: "of revenue on software", caption: "Varies by industry vertical." },
    { type: "illustration", name: "chart-up", caption: "Cost trend by industry." },
    { type: "bar-chart", title: "Monthly spend by category", bars: [
      { label: "Sales & Marketing", value: 3200 },
      { label: "Core Operations", value: 2100 },
      { label: "Finance", value: 900 },
      { label: "Admin & Security", value: 600 },
    ], unit: "/mo" },
    { type: "callout", text: "The most expensive form of sprawl is overlap, not usage.", variant: "key" },
    { type: "comparison-table", title: "Feature comparison", headers: ["Feature", "Tool A", "Tool B"], rows: [
      { label: "Automation", cells: [true, false] },
      { label: "Integrations", cells: ["200+", "50+"] },
      { label: "Mobile app", cells: [true, true] },
    ]},
    { type: "checklist", title: "Signs of sprawl", items: [
      "Multiple tools doing the same job",
      "No central vendor management",
      "Invoices from unknown subscriptions",
    ]},
    { type: "illustration", name: "audit-shield", caption: "Audit your stack to expose hidden overlaps." },
  ] satisfies Block[],
};

export const pillarArticles = [
  financeArticle,
  salesMarketingArticle,
  operationsArticle,
  adminSecurityArticle,
] as const;

export type PillarArticle = (typeof pillarArticles)[number];