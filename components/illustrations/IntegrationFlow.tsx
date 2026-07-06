"use client";

export function IntegrationFlow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-md"} role="img" aria-label="Integration flow diagram">
      <rect x="8" y="8" width="100" height="44" rx="8" className="fill-indigo-100" />
      <text x="58" y="35" textAnchor="middle" className="fill-indigo-700" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tool A</text>
      <line x1="108" y1="30" x2="138" y2="30" className="stroke-slate-300" strokeWidth="2" />
      <polygon points="138,25 148,30 138,35" className="fill-slate-300" />
      <rect x="148" y="8" width="100" height="44" rx="8" className="fill-teal-100" />
      <text x="198" y="35" textAnchor="middle" className="fill-teal-700" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tool B</text>
      <line x1="248" y1="30" x2="278" y2="30" className="stroke-slate-300" strokeWidth="2" />
      <polygon points="278,25 288,30 278,35" className="fill-slate-300" />
      <rect x="288" y="8" width="100" height="44" rx="8" className="fill-amber-100" />
      <text x="338" y="35" textAnchor="middle" className="fill-amber-700" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tool C</text>
      <line x1="198" y1="52" x2="198" y2="78" className="stroke-slate-300" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="193,78 198,88 203,78" className="fill-slate-300" />
      <rect x="148" y="88" width="100" height="44" rx="8" className="fill-red-100" />
      <text x="198" y="115" textAnchor="middle" className="fill-red-700" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Tool D</text>
    </svg>
  );
}
