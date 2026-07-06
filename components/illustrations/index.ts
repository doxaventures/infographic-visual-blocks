import { ChartUp } from "./ChartUp";
import { AuditShield } from "./AuditShield";
import { Pillars } from "./Pillars";
import { CostTrend } from "./CostTrend";
import { IntegrationFlow } from "./IntegrationFlow";
import { Magnify } from "./Magnify";
import { BuildBlocks } from "./BuildBlocks";

export const ILLUSTRATIONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "chart-up": ChartUp,
  "audit-shield": AuditShield,
  pillars: Pillars,
  "cost-trend": CostTrend,
  "integration-flow": IntegrationFlow,
  magnify: Magnify,
  "build-blocks": BuildBlocks,
};
