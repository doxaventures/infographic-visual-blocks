"use client";

import { Lightbulb, AlertTriangle, Sparkles } from "lucide-react";

const variants = {
  info: { bg: "bg-sky-50 border-sky-200", icon: Lightbulb, iconColor: "text-sky-500" },
  warning: { bg: "bg-amber-50 border-amber-200", icon: AlertTriangle, iconColor: "text-amber-500" },
  key: { bg: "bg-indigo-50 border-indigo-200", icon: Sparkles, iconColor: "text-indigo-500" },
} as const;

export function CalloutBox({ text, variant = "key" }: { text: string; variant?: "info" | "warning" | "key" }) {
  const v = variants[variant];
  const Icon = v.icon;

  return (
    <div className={`not-prose my-8 flex gap-4 rounded-xl border ${v.bg} px-5 py-4`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${v.iconColor}`} />
      <p className="text-base leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}
