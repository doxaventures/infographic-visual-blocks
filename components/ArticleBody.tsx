"use client";

import type { Block } from "../data/blocks";
import { StatBanner } from "./charts/StatBanner";
import { CalloutBox } from "./charts/CalloutBox";
import { CostBarChart } from "./charts/CostBarChart";
import { LeadInfographic } from "./charts/LeadInfographic";
import { ComparisonTable } from "./charts/ComparisonTable";
import { Checklist } from "./charts/Checklist";
import { ILLUSTRATIONS } from "./illustrations";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-5 text-lg leading-relaxed text-slate-700">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i} className="mt-4 font-bold text-xl text-slate-900">{block.text}</h2>;
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6">
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
          case "stat":
            return <StatBanner key={i} value={block.value} label={block.label} caption={block.caption} />;
          case "callout":
            return <CalloutBox key={i} text={block.text} variant={block.variant} />;
          case "bar-chart":
            return <CostBarChart key={i} title={block.title} bars={block.bars} unit={block.unit} />;
          case "lead-infographic":
            return <LeadInfographic key={i} headline={block.headline} stats={block.stats} footnote={block.footnote} />;
          case "comparison-table":
            return <ComparisonTable key={i} title={block.title} headers={block.headers} rows={block.rows} caption={block.caption} />;
          case "checklist":
            return <Checklist key={i} title={block.title} items={block.items} />;
          case "illustration": {
            const Illus = ILLUSTRATIONS[block.name];
            if (!Illus) return null;
            return (
              <div key={i} className="not-prose my-6 flex flex-col items-center">
                <Illus />
                {block.caption && <p className="mt-2 text-center text-sm text-slate-500">{block.caption}</p>}
              </div>
            );
          }
          case "figure":
            return (
              <figure key={i} className="not-prose my-6 flex flex-col items-center">
                <img src={block.src} alt={block.alt} className="h-auto max-w-full" />
                {block.caption && <figcaption className="mt-2 text-center text-sm text-slate-500">{block.caption}</figcaption>}
              </figure>
            );
          default:
            return <p key={i}>{(block as { text: string }).text}</p>;
        }
      })}
    </div>
  );
}
