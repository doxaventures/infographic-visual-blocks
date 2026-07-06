"use client";

export function CostTrend({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-xs"} role="img" aria-label="Dollar sign with downward trend">
      <circle cx="100" cy="60" r="45" className="fill-amber-100" />
      <text x="100" y="72" textAnchor="middle" className="fill-amber-600" fontSize="44" fontWeight="bold" fontFamily="sans-serif">$</text>
      <polyline points="10,90 60,70 100,50 160,30" className="stroke-teal-500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="160,25 172,30 160,35" className="fill-teal-500" />
    </svg>
  );
}
