import type { Metadata } from "next";
import { ThingsBuiltShell } from "@/components/things-built-shell";
import { thingsIBuilt } from "@/data/content";

const title = "Things That I Built — Nikhil More";
const description = thingsIBuilt.hero.subhead;

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

export default function ThingsIBuiltPage() {
  return <ThingsBuiltShell />;
}
