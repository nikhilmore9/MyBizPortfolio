"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { FieldNotes } from "@/components/field-notes";
import { Footer } from "@/components/footer";
import { MeetingModal } from "@/components/meeting-modal";
import type { ThingsIBuiltPage } from "@/data/content";

export function ThingsBuiltShell({ content }: { content: ThingsIBuiltPage }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onRequestMeeting={openModal} />
      <main id="main">
        <FieldNotes content={content} />
      </main>
      <Footer />
      <MeetingModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
