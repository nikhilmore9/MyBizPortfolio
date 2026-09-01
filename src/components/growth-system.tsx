import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillars } from "@/data/content";

const RADIUS = 220;
const CENTER = 300;

const nodes = pillars.map((label, index) => {
  const angle = (-90 + index * 60) * (Math.PI / 180);
  const x = CENTER + RADIUS * Math.cos(angle);
  const y = CENTER + RADIUS * Math.sin(angle);
  return { label, x, y };
});

export function GrowthSystem() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Growth Systems, Not Isolated Campaigns"
          title="Six pillars, one accountable operating system."
          description="Every engagement connects these disciplines instead of running them as disconnected campaigns."
        />

        {/* Desktop: SVG hub-and-spoke diagram */}
        <div className="mt-14 hidden lg:block">
          <svg
            viewBox="0 0 600 600"
            role="img"
            aria-label="Diagram: Accountable Growth System at the centre, connected to six pillars — Strategy and GTM, Demand Generation and Paid Media, ABM and Sales Alignment, Lifecycle and Marketing Automation, SEO GEO LLMO and Content, and CRO Attribution Analytics and AI."
            className="mx-auto w-full max-w-2xl"
          >
            {nodes.map((node) => (
              <line
                key={node.label}
                x1={CENTER}
                y1={CENTER}
                x2={node.x}
                y2={node.y}
                stroke="var(--border)"
                strokeWidth={1.5}
              />
            ))}

            <circle
              cx={CENTER}
              cy={CENTER}
              r={95}
              fill="var(--surface)"
              stroke="var(--cyan)"
              strokeWidth={1.5}
            />
            <foreignObject x={CENTER - 85} y={CENTER - 55} width={170} height={110}>
              <div className="flex h-full w-full items-center justify-center text-center font-display text-[17px] font-medium leading-tight text-text-primary">
                Accountable Growth System
              </div>
            </foreignObject>

            {nodes.map((node) => (
              <g key={node.label}>
                <circle cx={node.x} cy={node.y} r={7} fill="var(--lime)" />
                <foreignObject
                  x={node.x - 85}
                  y={
                    node.y < CENTER
                      ? node.y - 70
                      : node.y + 16
                  }
                  width={170}
                  height={60}
                >
                  <div className="flex h-full items-center justify-center text-center font-mono text-[12px] font-medium leading-snug text-text-secondary">
                    {node.label}
                  </div>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>

        {/* Mobile / tablet: accessible stacked list */}
        <div className="mt-12 lg:hidden">
          <div className="rounded-2xl border border-cyan/50 bg-surface px-6 py-5 text-center">
            <p className="font-display text-lg font-medium text-text-primary">
              Accountable Growth System
            </p>
          </div>
          <ol className="relative mt-6 space-y-4 border-l border-border pl-6">
            {pillars.map((pillar) => (
              <li key={pillar} className="relative">
                <span
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-lime"
                  aria-hidden="true"
                />
                <p className="font-mono text-sm font-medium text-text-primary">{pillar}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
