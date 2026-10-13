"use client";

import { useRef, type ReactNode } from "react";
import { DUOC_DONG, gsap, useGSAP } from "./gsap";

type Props = { children: ReactNode; className?: string };

// the button leans toward the cursor. mouse only, fingers have nothing to hover
export default function HutChuot({ children, className }: Props) {
  const khung = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.matchMedia().add(`${DUOC_DONG} and (hover: hover)`, () => {
        const hop = khung.current;
        if (!hop) return;
        const keoX = gsap.quickTo(hop, "x", { duration: 0.4, ease: "power3" });
        const keoY = gsap.quickTo(hop, "y", { duration: 0.4, ease: "power3" });
        const theo = (e: PointerEvent) => {
          const o = hop.getBoundingClientRect();
          keoX((e.clientX - o.left - o.width / 2) * 0.2);
          keoY((e.clientY - o.top - o.height / 2) * 0.3);
        };
        const buong = () => {
          keoX(0);
          keoY(0);
        };
        hop.addEventListener("pointermove", theo);
        hop.addEventListener("pointerleave", buong);
        return () => {
          hop.removeEventListener("pointermove", theo);
          hop.removeEventListener("pointerleave", buong);
        };
      });
    },
    { scope: khung },
  );
  return (
    <div ref={khung} className={className}>
      {children}
    </div>
  );
}
