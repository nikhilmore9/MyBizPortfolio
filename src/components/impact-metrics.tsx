"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCountUp } from "@/components/ui/use-count-up";
import { useInView } from "@/components/ui/use-in-view";
import { metrics, type Metric } from "@/data/content";

function MetricPanel({ metric }: { metric: Metric }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const value = useCountUp(metric.value, inView);
  const decimals = metric.decimals ?? 0;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-cyan/60 sm:p-7"
    >
      <p className="font-mono text-3xl font-semibold tabular-nums text-text-primary sm:text-4xl">
        {metric.prefix}
        {value.toFixed(decimals)}
        {metric.suffix}
      </p>
      <p className="mt-3 text-sm font-semibold text-text-primary">{metric.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{metric.context}</p>
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section id="impact" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Impact in Numbers"
          title="Commercial accountability, not vanity metrics."
          description="Every figure below traces back to a specific programme, budget and business outcome."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <MetricPanel key={metric.label} metric={metric} />
          ))}
        </div>
      </Container>
    </section>
  );
}
