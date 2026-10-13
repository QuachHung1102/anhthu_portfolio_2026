"use client";

import { useRef } from "react";
import { EM, gsap, useChuyenDong } from "./gsap";

const SO_MANH = 8;
// the whole palette, so a few chips always show whatever colour you clicked on
const MAU = ["bg-home", "bg-arts", "bg-academics", "bg-projects", "bg-cream"];
// broken-tile outlines. nothing in here is allowed to be a neat square
const HINH = [
  "polygon(8% 0, 100% 18%, 82% 100%, 0 76%)",
  "polygon(0 22%, 64% 0, 100% 58%, 30% 100%)",
  "polygon(50% 0, 100% 100%, 0 80%)",
  "polygon(0 0, 92% 12%, 100% 70%, 40% 100%, 6% 62%)",
];

// every click chips a few tiles off the screen. decoration only: it never catches the pointer and is gone in half a second
export default function NhapChuot() {
  const lop = useRef<HTMLDivElement>(null);
  useChuyenDong(lop, () => {
    const hop = lop.current;
    if (!hop) return;
    const khiNhap = (e: MouseEvent) => {
      // detail 0 = Enter or Space on a link. no pointer, so nowhere to burst from
      if (e.detail === 0) return;
      for (let i = 0; i < SO_MANH; i++) {
        const manh = document.createElement("span");
        const co = gsap.utils.random(11, 21);
        manh.className = `absolute ${gsap.utils.random(MAU)}`;
        manh.style.cssText = `left:${e.clientX - co / 2}px;top:${e.clientY - co / 2}px;width:${co}px;height:${co}px;clip-path:${gsap.utils.random(HINH)}`;
        hop.append(manh);
        // spread round the circle, then nudged so it never looks like a clock face
        const goc = ((i + gsap.utils.random(-0.35, 0.35)) / SO_MANH) * Math.PI * 2;
        const xa = gsap.utils.random(36, 82);
        gsap.fromTo(
          manh,
          { scale: 0.3, rotation: gsap.utils.random(-90, 90) },
          {
            x: Math.cos(goc) * xa,
            y: Math.sin(goc) * xa,
            scale: 1,
            rotation: `+=${gsap.utils.random(-160, 160)}`,
            duration: 0.6,
            ease: EM,
          },
        );
        gsap.to(manh, { autoAlpha: 0, duration: 0.25, delay: 0.35, ease: "power1.in", onComplete: () => manh.remove() });
      }
    };
    window.addEventListener("click", khiNhap);
    return () => {
      window.removeEventListener("click", khiNhap);
      gsap.killTweensOf(hop.children);
      hop.replaceChildren();
    };
  });
  return <div ref={lop} aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden" />;
}
