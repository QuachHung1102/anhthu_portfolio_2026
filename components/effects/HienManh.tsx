"use client";

import { useRef, type ReactNode } from "react";
import { EM, gsap, khiCuonToi, latManh, useChuyenDong } from "./gsap";

type Props = { children: ReactNode; className?: string };

// a drawn wordmark that lays itself when scrolled to, and shivers when the mouse lands on it
export default function HienManh({ children, className }: Props) {
  const khung = useRef<HTMLDivElement>(null);
  useChuyenDong(khung, () => {
    const hop = khung.current;
    if (!hop) return;
    const manh = [...hop.querySelectorAll("[data-piece]")];
    const luotVao = latManh(manh, { scrollTrigger: khiCuonToi(hop) });
    // built once and parked, so the hover handler never creates tweens of its own
    const rung = gsap.fromTo(
      manh,
      { y: -7 },
      { y: 0, duration: 0.45, ease: EM, stagger: { amount: 0.22 }, paused: true, immediateRender: false },
    );
    const khiRe = () => {
      // not before the entrance is done, the two would fight over the same tiles
      if (luotVao.progress() === 1 && window.matchMedia("(hover: hover)").matches) rung.restart();
    };
    hop.addEventListener("pointerenter", khiRe);
    return () => hop.removeEventListener("pointerenter", khiRe);
  });
  return (
    <div ref={khung} className={className}>
      {children}
    </div>
  );
}
