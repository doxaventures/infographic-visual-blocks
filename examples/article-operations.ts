import type { Block } from "../data/blocks";

export const operationsArticle = {
  slug: "operations",
  title: "How to Buy Core Operations Software (Field Service, Fulfillment & Project Management)",
  subtitle: "This pillar has the widest price range in the whole stack, because it's the one most tied to how big your operation actually is today.",
  blocks: [
    { type: "lead-infographic", headline: "Core Operations pricing varies more than any other pillar — $200–$3K+/mo depending on team size", stats: [
      { value: "$500-$1,500", label: "Typical monthly cost", icon: "dollar" },
      { value: "2-5x", label: "Price swing by team size", icon: "chart" },
      { value: "12-100+", label: "Crew-size range across plans", icon: "building" },
    ], footnote: "The same tool category can cost 5x more for a 50-person operation vs. a 10-person one." },
    { type: "p", text: "Core Operations is the pillar that actually runs the day-to-day of the business — dispatch and scheduling for a field service company, fulfillment and inventory for an ecommerce brand, project and client work management for an agency. It's also the pillar where team-size fit swings the price the most: the gap between a platform built for a 12-person crew and one built for a 100+ person operation is often hundreds of dollars a month for overlapping functionality." },
    { type: "p", text: "Don't buy for the team you'll be in two years — buy for the team you are today. You can re-evaluate when you actually outgrow it." },
    { type: "p", text: "The trap here isn't a bad tool — it's the right tool at the wrong size. Growing into a bigger platform later is a real migration project either way, so the honest evaluation question is what you need to run smoothly this year, not what looks most impressive on a sales call." },
    { type: "illustration", name: "pillars", caption: "Operations spans the widest variety of tool categories — and the widest price range by team size." },
    { type: "stat", value: "347+", label: "Hand-curated operations tools across 101 industries", caption: "The widest selection — and the most variation in pricing." },
    { type: "callout", text: "The most expensive operations mistake isn't a bad tool — it's the right tool at the wrong size. Buying for the team you'll be in two years can cost 5x more than buying for the team you are today.", variant: "key" },
    { type: "h2", text: "What to evaluate" },
    { type: "checklist", title: "Evaluation checklist", items: [
      "Match the tool's stated team-size band to your actual headcount, not your headcount in two years — you can re-evaluate when you're actually there.",
      "Confirm dispatch/scheduling data can export cleanly. If you ever do outgrow the platform, this is what makes a migration painless instead of a rebuild.",
      "For anything with a mobile/field component, check offline functionality — a dispatch tool that needs signal to function is a liability in the field.",
      "Ask what's included at the base tier vs. gated behind an add-on (routing optimization, advanced reporting, and API access are common upsells).",
    ]},
    { type: "h2", text: "Red flags" },
    { type: "callout", text: "Per-technician or per-seat pricing that isn't disclosed until a demo call.", variant: "warning" },
    { type: "callout", text: "Long-term contracts required to unlock the pricing tier that actually fits your team size.", variant: "warning" },
    { type: "callout", text: "No published SLA or status page for a tool your team depends on to run daily operations.", variant: "key" },
  ] satisfies Block[],
};