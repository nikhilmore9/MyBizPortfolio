"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { FieldNotes } from "@/components/field-notes";
import { Footer } from "@/components/footer";
import { MeetingModal } from "@/components/meeting-modal";

export function ThingsBuiltShell() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onRequestMeeting={openModal} />
      <main id="main">
        <FieldNotes />
      </main>
      <Footer />
      <MeetingModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
