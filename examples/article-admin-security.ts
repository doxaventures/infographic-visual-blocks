import type { Block } from "../data/blocks";

export const adminSecurityArticle = {
  slug: "admin-security",
  title: "How to Buy Admin & Security Software (Often the Most Skipped Pillar)",
  subtitle: "The cheapest pillar in the stack, and the one most often skipped entirely — until an incident makes the cost of skipping it obvious.",
  blocks: [
    { type: "lead-infographic", headline: "Admin & Security is the cheapest pillar — $50–$300/mo, and the most commonly skipped", stats: [
      { value: "$50-$300", label: "Typical monthly cost", icon: "dollar" },
      { value: "60%", label: "Of businesses underinvest here", icon: "chart" },
      { value: "$5K-$50K", label: "Avg. cost of a data incident", icon: "building" },
    ], footnote: "Nothing visibly breaks when you skip this pillar — until it does, and the cost is orders of magnitude higher." },
    { type: "p", text: "Admin & Security covers email/productivity hosting, password management, endpoint security, e-signature, and (for larger teams) security awareness training. It's consistently the least expensive pillar in the stack in absolute dollars — and also the one we see growing businesses skip the longest, usually because nothing visibly breaks when you don't have it." },
    { type: "p", text: "This pillar isn't about unlocking new revenue — it's about not losing what you've already built to a phishing email, a lost laptop, or an unsigned contract dispute." },
    { type: "illustration", name: "audit-shield", caption: "Audit your security posture — the risk of skipping is 100x the cost." },
    { type: "checklist", title: "Security posture checklist", items: [
      "Password manager and endpoint security cover every device that touches business accounts — including owner/manager personal devices used for work.",
      "E-signature pricing matches your usage volume (per-document vs. per-user), not just the cheapest-seeming plan.",
      "Email hosting includes admin-console features like forced 2FA at your tier, not gated behind enterprise.",
      "If handling regulated data, confirm the tool's compliance certifications match what you actually need.",
    ]},
    { type: "callout", text: "This pillar isn't about unlocking new revenue — it's about not losing what you've already built to a phishing email, a lost laptop, or an unsigned contract dispute. The tools here are cheap enough that the real decision is whether to have them at all, not which specific vendor to pick.", variant: "warning" },
    { type: "stat", value: "60%", label: "Of small businesses underinvest in security", caption: "The most skipped pillar — and the one with the highest downside risk." },
    { type: "callout", text: "Security tools sold only as part of a bundled managed-IT retainer with no standalone pricing disclosed. Password managers or endpoint tools with no admin deprovisioning workflow for departing employees. E-signature or document tools that don't support audit trails — a real liability if a signed contract is ever disputed.", variant: "key" },
  ] satisfies Block[],
};