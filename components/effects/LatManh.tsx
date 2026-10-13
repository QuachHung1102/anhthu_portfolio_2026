"use client";

import { useRef, type ReactNode } from "react";
import { EM, gsap, khiCuonToi, useChuyenDong } from "./gsap";

type Props = { children: ReactNode; thuTu?: number; className?: string };

const SO_O = 24; // 6 across, 4 down

// a photo starts hidden under cream tiles, and they come off as you scroll to it.
// thuTu = place in the row, so a row uncovers left to right
export default function LatManh({ children, thuTu = 0, className = "" }: Props) {
  const khung = useRef<HTMLDivElement>(null);
  useChuyenDong(khung, () => {
    const hop = khung.current;
    if (!hop) return;
    const nhip = gsap
      .timeline({ scrollTrigger: khiCuonToi(hop), delay: thuTu * 0.09 })
      .fromTo(
        ".tile",
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.5, ease: "power2.out", stagger: { amount: 0.45, grid: [4, 6], from: "random" } },
        0,
      );
    const anh = hop.querySelectorAll("img");
    if (anh.length) nhip.from(anh, { scale: 1.08, duration: 1.1, ease: EM }, 0);
  });
  return (
    // hover uses the standalone `scale` property, so it never fights GSAP's transform
    <div
      ref={khung}
      className={`relative overflow-hidden [&_img]:transition-[scale] [&_img]:duration-700 motion-safe:hover:[&_img]:scale-104 ${className}`}
    >
      {children}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid grid-cols-6 grid-rows-4">
        {Array.from({ length: SO_O }, (_, i) => (
          <span key={i} className="tile invisible bg-cream" />
        ))}
      </div>
    </div>
  );
}
