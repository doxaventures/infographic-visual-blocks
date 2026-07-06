"use client";

export function ChartUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-xs"} role="img" aria-label="Trending bar chart">
      <rect x="16" y="60" width="24" height="40" rx="4" className="fill-indigo-200" />
      <rect x="52" y="40" width="24" height="60" rx="4" className="fill-indigo-300" />
      <rect x="88" y="30" width="24" height="70" rx="4" className="fill-indigo-400" />
      <rect x="124" y="20" width="24" height="80" rx="4" className="fill-indigo-500" />
      <rect x="160" y="10" width="24" height="90" rx="4" className="fill-teal-500" />
      <line x1="12" y1="100" x2="190" y2="100" className="stroke-slate-200" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="170" cy="5" r="4" className="fill-teal-500" />
    </svg>
  );
}
