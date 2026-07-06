"use client";

import { Check, Minus } from "lucide-react";

export function ComparisonTable({
  title,
  headers,
  rows,
  caption,
}: {
  title?: string;
  headers: string[];
  rows: { label: string; cells: (string | boolean)[] }[];
  caption?: string;
}) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-xl border border-indigo-100">
      {title && (
        <div className="bg-indigo-50 px-5 py-3">
          <h4 className="font-display text-base font-bold tracking-tight text-slate-900">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-indigo-100 bg-indigo-50/80">
              <th className="px-4 py-3 text-left font-semibold text-slate-600">{headers[0]}</th>
              {headers.slice(1).map((h, i) => (
                <th key={i} className="px-4 py-3 text-center font-semibold text-slate-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-indigo-50/40"}>
                <td className="border-t border-indigo-100 px-4 py-3 font-medium text-slate-700">{row.label}</td>
                {row.cells.map((cell, j) => (
                  <td key={j} className="border-t border-indigo-100 px-4 py-3 text-center">
                    {typeof cell === "boolean" ? (
                      cell ? (
                        <Check className="mx-auto h-4 w-4 text-emerald-500" />
                      ) : (
                        <Minus className="mx-auto h-4 w-4 text-slate-300" />
                      )
                    ) : (
                      <span className="text-slate-600">{cell}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <div className="border-t border-indigo-100 bg-slate-50 px-5 py-2">
          <p className="text-xs leading-relaxed text-slate-400">{caption}</p>
        </div>
      )}
    </div>
  );
}
