"use client";

import { CheckCircle2 } from "lucide-react";

export function Checklist({ title, items }: { title?: string; items: string[] }) {
  return (
    <div className="not-prose my-8 rounded-xl border border-indigo-100 bg-indigo-50/60 px-5 py-5">
      {title && (
        <h4 className="mb-3 font-display text-base font-bold tracking-tight text-slate-900">{title}</h4>
      )}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500" />
            <span className="text-base leading-relaxed text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
