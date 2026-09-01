"use client";

import { cn } from "@/lib/utils";

export function SignalLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true"
      className={cn("signal-glow", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M-40 480 C 220 480, 260 320, 480 320 S 720 140, 980 140 S 1180 60, 1260 60"
        stroke="var(--cyan)"
        strokeWidth="1.5"
        strokeOpacity="0.55"
        className="signal-path"
      />
      <path
        d="M-40 560 C 260 560, 300 400, 540 400 S 780 220, 1020 220 S 1160 120, 1260 120"
        stroke="var(--lime)"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        className="signal-path"
        style={{ animationDelay: "0.6s" }}
      />
      <path
        d="M-40 400 C 180 400, 220 260, 420 260 S 660 100, 900 100 S 1120 30, 1260 30"
        stroke="var(--coral)"
        strokeWidth="1"
        strokeOpacity="0.3"
        className="signal-path"
        style={{ animationDelay: "1.1s" }}
      />
      <style>{`
        .signal-path {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: signal-draw 2.4s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .signal-path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
        @keyframes signal-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}
