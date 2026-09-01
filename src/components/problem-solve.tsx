"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { problems } from "@/data/content";
import { cn } from "@/lib/utils";

export function ProblemSolve() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilities" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What I Help Organisations Solve"
          title="Four recurring growth problems. One operating discipline."
        />

        <div className="mt-12 grid gap-3">
          {problems.map((item, index) => {
            const isActive = active === index;
            return (
              <button
                key={item.problem}
                type="button"
                onClick={() => setActive(index)}
                aria-expanded={isActive}
                className={cn(
                  "group grid gap-4 rounded-2xl border p-6 text-left transition-colors sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:p-7",
                  isActive
                    ? "border-cyan bg-surface"
                    : "border-border bg-surface/40 hover:border-cyan/50",
                )}
              >
                <span className="font-display text-lg font-medium text-text-primary sm:text-xl">
                  {item.problem}
                </span>
                <ArrowRight
                  className={cn(
                    "hidden h-5 w-5 shrink-0 transition-colors sm:block",
                    isActive ? "text-cyan" : "text-text-secondary",
                  )}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-sm leading-relaxed sm:text-base",
                    isActive ? "text-text-primary" : "text-text-secondary",
                  )}
                >
                  {item.outcome}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
