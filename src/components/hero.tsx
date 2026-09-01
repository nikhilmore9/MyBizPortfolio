"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SignalLines } from "@/components/ui/signal-lines";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero({ onRequestMeeting }: { onRequestMeeting: () => void }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pb-20 pt-14 sm:pb-28 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 dot-texture" aria-hidden="true" />
      <SignalLines className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] w-full opacity-80" />

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan"
          >
            AI-First Marketing Systems
          </motion.p>

          <motion.h1
            custom={0.08}
            variants={fadeUp}
            className="mt-5 text-balance font-display text-4xl font-medium leading-[1.06] tracking-tight text-text-primary sm:text-5xl lg:text-[3.4rem]"
          >
            I build growth systems that turn complexity into accountable
            revenue.
          </motion.h1>

          <motion.p
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Nikhil More is a B2B demand generation and performance marketing
            leader who combines commercial strategy, applied AI, and
            full-funnel execution to create measurable growth.
          </motion.p>

          <motion.div
            custom={0.24}
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#impact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Explore My Impact
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onRequestMeeting}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
            >
              Request a Meeting
            </button>
          </motion.div>

          <motion.p
            custom={0.32}
            variants={fadeUp}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-text-secondary"
          >
            <MapPin className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
            Based in India. Built for global growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-surface">
            <Image
              src="/images/headshot-1.png"
              alt="Portrait of Nikhil More"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#070A12]/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-cyan/10 signal-glow blur-3xl"
            aria-hidden="true"
          />
        </motion.div>
      </Container>
    </section>
  );
}
