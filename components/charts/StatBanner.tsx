"use client";

export function StatBanner({ value, label, caption }: { value: string; label: string; caption?: string }) {
  return (
    <div className="not-prose my-8 rounded-xl border border-indigo-100 bg-indigo-50/60 px-6 py-5 text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-indigo-500">
        {label}
      </div>
      {caption && <div className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">{caption}</div>}
    </div>
  );
}
