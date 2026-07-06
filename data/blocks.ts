export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "stat"; value: string; label: string; caption?: string }
  | { type: "callout"; text: string; variant?: "info" | "warning" | "key" }
  | { type: "bar-chart"; title?: string; bars: { label: string; value: number; color?: string }[]; unit?: string }
  | { type: "illustration"; name: string; caption?: string }
  | { type: "figure"; src: string; alt: string; caption?: string }
  | { type: "lead-infographic"; headline: string; stats: { value: string; label: string; icon?: string }[]; footnote?: string }
  | { type: "comparison-table"; title?: string; headers: string[]; rows: { label: string; cells: (string | boolean)[] }[]; caption?: string }
  | { type: "checklist"; title?: string; items: string[] };
