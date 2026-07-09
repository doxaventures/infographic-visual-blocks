import type { Block } from "../data/blocks";

export const financeArticle = {
  slug: "finance",
  title: "How to Buy Finance Software (Accounting, Payroll & Expense Tools)",
  subtitle: "This pillar is more standardized than the others — but the payroll line item still varies more than most owners expect.",
  blocks: [
    { type: "lead-infographic", headline: "Finance tools are the most standardized pillar — $300–$1,500/mo for most small businesses", stats: [
      { value: "$300-$1,500", label: "Typical monthly cost", icon: "dollar" },
      { value: "$5-$15", label: "Per employee /mo for payroll", icon: "chart" },
      { value: "50%", label: "May qualify for a free card option", icon: "trending-down" },
    ], footnote: "Payroll is the hidden variable — per-employee fees can double your total finance stack cost." },
    { type: "p", text: "Finance tooling — core accounting, payroll, corporate cards/expense management, and accounts-payable automation — is the most standardized pillar in the stack, in the sense that most businesses in a given size band land on a similar shortlist of tools. Where it varies is payroll, which prices per employee and per pay-frequency, so the same plan tier can cost noticeably different amounts for two businesses with the same headcount but different pay structures." },
    { type: "p", text: "Don't assume finance software is expensive — corporate cards funded by interchange fees can be genuinely free, making this pillar cheaper than expected." },
    { type: "p", text: "This is also the pillar most likely to have a genuinely free or revenue-share option (corporate cards funded by interchange fees are a common example), so \"finance software is expensive\" isn't always true — it depends heavily on which specific tools you pick." },
    { type: "illustration", name: "pillars", caption: "Finance is the most standardized pillar — costs vary mainly by payroll headcount." },
    { type: "stat", value: "41", label: "Hand-curated finance tools across 101 industries", caption: "Real pricing, not vendor-quoted list prices." },
    { type: "callout", text: "The most expensive finance mistake isn't picking the wrong accounting tool — it's signing a payroll plan without knowing the per-employee fee, which can double your total finance stack cost.", variant: "key" },
    { type: "h2", text: "What to evaluate" },
    { type: "checklist", title: "Evaluation checklist", items: [
      "Get the actual per-employee payroll cost, not just the base platform fee — that's usually the bigger number for a team past a handful of people.",
      "Check whether the accounting tool's plan tier includes the reporting/job-costing features you need, or if that's a separate upsell tier.",
      "For corporate cards, confirm whether the 'free' plan has a revenue/spend minimum, and what happens if you fall under it.",
      "Make sure whatever you pick reconciles cleanly with your point-of-sale or invoicing system — manual reconciliation is where bookkeeping hours quietly disappear.",
    ]},
    { type: "h2", text: "Red flags" },
    { type: "callout", text: "Payroll quotes that only show a per-month platform fee, with the per-employee fee revealed later.", variant: "warning" },
    { type: "callout", text: "Accounting migrations that require a paid consultant to move your historical data — ask about this before you commit, not after.", variant: "warning" },
    { type: "callout", text: "Expense/card tools that require a personal credit check or personal guarantee without disclosing it upfront.", variant: "key" },
  ] satisfies Block[],
};