"use client";

export function Pillars({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 140" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-sm"} role="img" aria-label="Four stacked pillars">
      <rect x="20" y="60" width="56" height="60" rx="4" className="fill-indigo-400" />
      <rect x="88" y="36" width="56" height="84" rx="4" className="fill-teal-400" />
      <rect x="156" y="48" width="56" height="72" rx="4" className="fill-amber-400" />
      <rect x="224" y="72" width="56" height="48" rx="4" className="fill-red-400" />
      <rect x="20" y="120" width="260" height="12" rx="4" className="fill-slate-100" />
      <text x="48" y="138" textAnchor="middle" className="fill-slate-400" fontSize="10">Sales</text>
      <text x="116" y="138" textAnchor="middle" className="fill-slate-400" fontSize="10">Ops</text>
      <text x="184" y="138" textAnchor="middle" className="fill-slate-400" fontSize="10">Finance</text>
      <text x="252" y="138" textAnchor="middle" className="fill-slate-400" fontSize="10">Admin</text>
    </svg>
  );
}
