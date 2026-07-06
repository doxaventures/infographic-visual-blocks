"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BRAND_COLORS = ["#6366F1", "#14B8A6", "#F59E0B", "#EF4444", "#8B5CF6"];

export function CostBarChart({
  title,
  bars,
  unit,
}: {
  title?: string;
  bars: { label: string; value: number; color?: string }[];
  unit?: string;
}) {
  const data = bars.map((b, i) => ({ name: b.label, value: b.value, fill: b.color ?? BRAND_COLORS[i % BRAND_COLORS.length] }));
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div className="not-prose my-8 rounded-xl border border-indigo-100 bg-white px-5 py-5">
      {title && <h4 className="mb-4 font-display text-base font-bold tracking-tight text-slate-900">{title}</h4>}
      <ResponsiveContainer width="100%" height={data.length * 56 + 20}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
          <XAxis type="number" domain={[0, maxVal * 1.15]} tick={{ fontSize: 12, fill: "#94A3B8" }} hide />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "#475569" }} width={140} />
          <Tooltip formatter={(val: number) => [`${val}${unit ? " " + unit : ""}`, "Cost"]} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
