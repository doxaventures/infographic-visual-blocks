import type { Block } from "../data/blocks";

export const salesMarketingArticle = {
  slug: "sales-marketing",
  title: "How to Buy Sales & Marketing Software (Without Overpaying for Ad Spend You Don't Need Yet)",
  subtitle: "This is usually the most expensive pillar in the stack, and the pillar most likely to include a tool sized for a business you aren't yet.",
  blocks: [
    { type: "lead-infographic", headline: "Sales & Marketing is the most expensive pillar — avg. $3K–$6K/mo for a 10-person business", stats: [
      { value: "$3K-$6K", label: "Typical monthly cost", icon: "dollar" },
      { value: "40%", label: "Of total stack cost", icon: "chart" },
      { value: "4-7", label: "Tools per business", icon: "building" },
    ], footnote: "Ad spend often doubles the subscription cost — always separate the two when budgeting." },
    { type: "p", text: "Sales & Marketing tools get your business found and turn that attention into booked work — CRM, lead generation, review/messaging management, and marketing automation all live here. It's also, almost every time we run the numbers, the single most expensive pillar in the stack, mostly because pay-per-lead advertising spend gets bundled in alongside the software subscriptions." },
    { type: "p", text: "The real trap isn't picking a bad CRM — it's picking a CRM sized for a business you aren't yet, and paying for features that won't be useful for 2-3 years." },
    { type: "p", text: "That mix is exactly why generic \"best CRM 2026\" roundups aren't that useful: they compare feature lists, not what a tool actually costs a business your size to run, and they rarely separate the software fee from the ad spend riding alongside it." },
    { type: "bar-chart", title: "Monthly cost by sales & marketing category", bars: [
      { label: "Local PPC Ads (Google LSA)", value: 2000 },
      { label: "Real Estate Portal Ads", value: 2000 },
      { label: "Enterprise CRM (HubSpot)", value: 800 },
      { label: "Email/SMS Automation", value: 500 },
      { label: "Mid-Market CRM", value: 300 },
      { label: "SEO & Local Search", value: 200 },
      { label: "Basic CRM", value: 100 },
    ], unit: "/mo" },
    { type: "comparison-table", title: "CRM tiers at a glance", headers: ["Tier", "Monthly cost", "Best for"], rows: [
      { label: "Light", cells: ["$0-$100/mo", "Solo operator, basic contact tracking"] },
      { label: "Mid-market", cells: ["$100-$400/mo", "5-15 person team with pipeline tracking"] },
      { label: "Enterprise", cells: ["$400-$3K+/mo", "Multi-team, advanced attribution, custom workflows"] },
    ]},
    { type: "callout", text: "Annual-only contracts with no month-to-month option for a business that hasn't validated the tool yet.", variant: "warning" },
    { type: "callout", text: "\"Unlimited\" plans that throttle core usage (contacts, sends, calls) once you hit a soft cap not mentioned upfront.", variant: "key" },
    { type: "h2", text: "What to evaluate" },
    { type: "checklist", title: "Evaluation checklist", items: [
      "Separate the subscription fee from the ad spend line item — a $200/mo lead-gen tool can carry $1,500+/mo of pay-per-lead spend behind it, and that spend is the real number to budget for.",
      "Check the team-size band the tool is actually built for. Enterprise CRM/marketing suites often carry features (multi-team routing, advanced attribution) a small team will never touch, at a price built to justify them.",
      "Confirm it integrates with whatever you use for invoicing/accounting today — a CRM that doesn't sync with your books creates manual double-entry, which is its own hidden cost.",
      "Ask what happens to your data (contacts, review history, call recordings) if you cancel. Portability matters more once you've been on a tool for a year.",
    ]},
    ] satisfies Block[],
};