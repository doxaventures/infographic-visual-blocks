"use client";

export function Magnify({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-sm"} role="img" aria-label="Magnifying glass over document">
      <rect x="20" y="40" width="200" height="120" rx="8" className="fill-indigo-50" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="40" y="60" width="160" height="6" rx="3" className="fill-indigo-200" />
      <rect x="40" y="78" width="120" height="6" rx="3" className="fill-slate-200" />
      <rect x="40" y="96" width="140" height="6" rx="3" className="fill-slate-200" />
      <rect x="40" y="114" width="100" height="6" rx="3" className="fill-slate-200" />
      <rect x="40" y="132" width="130" height="6" rx="3" className="fill-slate-200" />
      <circle cx="260" cy="80" r="38" className="fill-teal-50" stroke="#14B8A6" strokeWidth="2" />
      <circle cx="260" cy="80" r="28" className="fill-teal-100/60" />
      <circle cx="260" cy="80" r="18" className="fill-teal-200/60" />
      <line x1="288" y1="108" x2="318" y2="138" className="stroke-teal-500" strokeWidth="4" strokeLinecap="round" />
      <rect x="305" y="125" width="8" height="26" rx="4" className="fill-teal-500" transform="rotate(45 309 138)" />
    </svg>
  );
}
