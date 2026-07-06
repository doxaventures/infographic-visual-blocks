"use client";

export function AuditShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-full max-w-xs"} role="img" aria-label="Shield with checkmark">
      <circle cx="100" cy="80" r="70" className="fill-indigo-50" stroke="#C7D2FE" strokeWidth="2" />
      <circle cx="100" cy="80" r="55" className="fill-indigo-100/60" />
      <path d="M100 30L140 48V90C140 114 120 136 100 140C80 136 60 114 60 90V48L100 30Z" className="fill-indigo-500" />
      <path d="M100 36L133 50V88C133 109 116 128 100 132C84 128 67 109 67 88V50L100 36Z" className="fill-indigo-400" />
      <path d="M85 85L95 95L115 70" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
