import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aiLoop } from "@/data/content";

export function AiLoop() {
  return (
    <section id="approach" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="AI-First, Human-Accountable"
          title="AI is a force multiplier — not a substitute for judgment."
          description="Strategy, customer understanding and brand thinking still set the direction. AI and automation compress the distance between that direction and results."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiLoop.map((item, index) => (
            <div key={item.step} className="relative rounded-2xl border border-border bg-surface p-6">
              <p className="font-mono text-sm text-cyan">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-medium text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
              {index < aiLoop.length - 1 ? (
                <span
                  className="absolute -right-2.5 top-1/2 hidden h-px w-5 -translate-y-1/2 bg-border sm:block lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
