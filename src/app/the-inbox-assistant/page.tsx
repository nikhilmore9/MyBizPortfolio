import type { Metadata } from "next";
import { ThingsBuiltShell } from "@/components/things-built-shell";
import { inboxAssistant } from "@/data/content";

const title = "The Inbox Assistant — Nikhil More";
const description = inboxAssistant.hero.subhead;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function TheInboxAssistantPage() {
  return <ThingsBuiltShell content={inboxAssistant} />;
}
