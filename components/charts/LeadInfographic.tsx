"use client";

import { DollarSign, TrendingDown, Building2, BarChart3 } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  dollar: DollarSign,
  "trending-down": TrendingDown,
  building: Building2,
  chart: BarChart3,
};

function StatIcon({ name }: { name?: string }) {
  if (!name) return null;
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon className="h-5 w-5 text-indigo-400" />;
}

export function LeadInfographic({
  headline,
  stats,
  footnote,
}: {
  headline: string;
  stats: { value: string; label: string; icon?: string }[];
  footnote?: string;
}) {
  return (
    <div className="not-prose my-4 overflow-hidden rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/40">
      <div className="px-6 pb-2 pt-5">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-slate-900">
          {headline}
        </h3>
      </div>
      <div className="grid gap-px bg-indigo-100 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-1 bg-white px-6 py-4">
            <div className="flex items-center gap-1.5">
              <StatIcon name={s.icon} />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-indigo-700">
              {s.value}
            </span>
            <span className="text-sm leading-tight text-slate-500">{s.label}</span>
          </div>
        ))}
      </div>
      {footnote && (
        <div className="px-6 pb-4 pt-3">
          <p className="text-xs leading-relaxed text-slate-400">{footnote}</p>
        </div>
      )}
    </div>
  );
}
