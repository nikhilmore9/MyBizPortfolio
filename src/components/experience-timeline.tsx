"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { earlierExperience, experience } from "@/data/content";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [earlierOpen, setEarlierOpen] = useState(false);

  return (
    <section id="experience" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="22+ years, six leadership roles, one thread: revenue accountability."
        />

        <ol className="relative mt-14 space-y-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((role) => (
            <li key={role.company} className="relative">
              <span
                className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan bg-background sm:-left-[49px]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>

              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
                {role.dates}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium text-text-primary sm:text-2xl">
                {role.role} · {role.company}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{role.context}</p>

              <ul className="mt-4 space-y-2">
                {role.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-text-secondary sm:text-[15px]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-8 border-t border-border pt-6">
          <button
            type="button"
            onClick={() => setEarlierOpen((v) => !v)}
            aria-expanded={earlierOpen}
            aria-controls="earlier-experience"
            className="flex w-full items-center justify-between gap-3 text-left"
          >
            <span className="font-display text-lg font-medium text-text-primary">
              Earlier Experience
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-text-secondary transition-transform",
                earlierOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          {earlierOpen ? (
            <ul id="earlier-experience" className="mt-5 space-y-4">
              {earlierExperience.map((role) => (
                <li
                  key={`${role.company}-${role.dates}`}
                  className="flex flex-col justify-between gap-1 border-b border-border pb-4 last:border-none sm:flex-row sm:items-baseline"
                >
                  <span className="text-sm font-medium text-text-primary">
                    {role.role} · {role.company}
                  </span>
                  <span className="font-mono text-xs text-text-secondary">{role.dates}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
