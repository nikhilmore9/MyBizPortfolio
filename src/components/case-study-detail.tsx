"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MeetingModal } from "@/components/meeting-modal";
import { Container } from "@/components/ui/container";
import type { CaseStudyDownload } from "@/data/content";

export function CaseStudyDetail({ study }: { study: CaseStudyDownload }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onRequestMeeting={() => setModalOpen(true)} />
      <main id="main">
        <section className="border-b border-border py-16 sm:py-24">
          <Container className="max-w-3xl">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-text-secondary transition-colors hover:text-cyan"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              All case studies
            </Link>

            <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
              Case Study
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-text-primary sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-4 font-mono text-sm text-text-secondary">
              {study.org} &middot; {study.period}
            </p>

            <p className="mt-8 text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
              {study.summary}
            </p>

            {study.metrics.length > 0 ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-surface p-6"
                  >
                    <p className="font-mono text-2xl font-semibold tabular-nums text-text-primary sm:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-text-primary">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={study.pdfUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download the case study
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
              >
                Request a Meeting
              </button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <MeetingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
