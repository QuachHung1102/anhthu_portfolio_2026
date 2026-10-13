"use client";

import { useRef, type ReactNode } from "react";
import { EM, gsap, khiCuonToi, useChuyenDong } from "./gsap";

type Props = { children: ReactNode; className?: string };

// for real lists only: each child steps in after the one before it
export default function HienDan({ children, className }: Props) {
  const khung = useRef<HTMLDivElement>(null);
  useChuyenDong(khung, () => {
    const hop = khung.current;
    if (!hop) return;
    gsap.from(hop.children, {
      y: 16,
      autoAlpha: 0,
      duration: 0.7,
      ease: EM,
      stagger: 0.09,
      scrollTrigger: khiCuonToi(hop),
    });
  });
  return (
    <div ref={khung} className={className}>
      {children}
    </div>
  );
}
