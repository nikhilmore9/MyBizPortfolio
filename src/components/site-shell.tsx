"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ImpactMetrics } from "@/components/impact-metrics";
import { ProblemSolve } from "@/components/problem-solve";
import { GrowthSystem } from "@/components/growth-system";
import { CaseStudies } from "@/components/case-studies";
import { AiLoop } from "@/components/ai-loop";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MeetingModal } from "@/components/meeting-modal";

export function SiteShell() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onRequestMeeting={openModal} />
      <main id="main">
        <Hero onRequestMeeting={openModal} />
        <ImpactMetrics />
        <ProblemSolve />
        <GrowthSystem />
        <CaseStudies />
        <AiLoop />
        <ExperienceTimeline />
        <About />
        <Contact onRequestMeeting={openModal} />
      </main>
      <Footer />
      <MeetingModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
