"use client";

export function BuildBlocks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-sm"} role="img" aria-label="Interlocking building blocks">
      <rect x="10" y="60" width="120" height="48" rx="8" className="fill-indigo-100" stroke="#818CF8" strokeWidth="2" />
      <rect x="14" y="64" width="24" height="6" rx="3" className="fill-indigo-300" />
      <rect x="14" y="76" width="60" height="6" rx="3" className="fill-indigo-200" />
      <rect x="14" y="88" width="40" height="6" rx="3" className="fill-indigo-200" />
      <rect x="80" y="60" width="16" height="16" rx="3" className="fill-indigo-300" />
      <rect x="80" y="92" width="16" height="16" rx="3" className="fill-indigo-300" />
      <rect x="140" y="60" width="120" height="48" rx="8" className="fill-teal-100" stroke="#5EEAD4" strokeWidth="2" />
      <rect x="144" y="64" width="24" height="6" rx="3" className="fill-teal-300" />
      <rect x="144" y="76" width="60" height="6" rx="3" className="fill-teal-200" />
      <rect x="144" y="88" width="40" height="6" rx="3" className="fill-teal-200" />
      <line x1="130" y1="84" x2="140" y2="84" className="stroke-slate-300" strokeWidth="2" />
      <polygon points="135,78 145,84 135,90" className="fill-slate-300" />
      <rect x="270" y="50" width="120" height="48" rx="8" className="fill-amber-100" stroke="#FBBF24" strokeWidth="2" />
      <rect x="274" y="54" width="24" height="6" rx="3" className="fill-amber-300" />
      <rect x="274" y="66" width="60" height="6" rx="3" className="fill-amber-200" />
      <rect x="274" y="78" width="40" height="6" rx="3" className="fill-amber-200" />
      <line x1="260" y1="84" x2="270" y2="74" className="stroke-slate-300" strokeWidth="2" />
      <polygon points="265,77 275,74 268,84" className="fill-slate-300" />
      <rect x="140" y="118" width="120" height="48" rx="8" className="fill-red-100" stroke="#FCA5A5" strokeWidth="2" />
      <rect x="144" y="122" width="24" height="6" rx="3" className="fill-red-300" />
      <rect x="144" y="134" width="60" height="6" rx="3" className="fill-red-200" />
      <rect x="144" y="146" width="40" height="6" rx="3" className="fill-red-200" />
      <line x1="200" y1="108" x2="200" y2="118" className="stroke-slate-300" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="195,118 200,128 205,118" className="fill-slate-300" />
    </svg>
  );
}
