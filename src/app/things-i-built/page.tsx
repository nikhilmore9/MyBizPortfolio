import type { Metadata } from "next";
import { ThingsBuiltShell } from "@/components/things-built-shell";

const title = "Things That I Have Done | Nikhil More";
const description =
  "Field notes on AI systems and marketing automation Nikhil More has built — what problem each one replaced, how it works, and what it changed.";

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
