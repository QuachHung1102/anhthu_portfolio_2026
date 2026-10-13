"use client";

import { useRef, type ReactNode } from "react";
import { EM, gsap, latManh, useChuyenDong } from "./gsap";

// the one rehearsed moment per page: the title gets laid tile by tile,
// then the photo, the words and the button walk in behind it.
// children opt in with data-intro="tiles | media | text | cta"
export default function MoMan({ children }: { children: ReactNode }) {
  const khung = useRef<HTMLDivElement>(null);
  useChuyenDong(khung, () => {
    const hop = khung.current;
    if (!hop) return;
    const tim = (loai: string) => gsap.utils.toArray<HTMLElement>(`[data-intro="${loai}"]`, hop);
    const nhip = gsap.timeline({ defaults: { ease: EM } });

    for (const bang of tim("tiles")) {
      // data-intro-color keeps the backing shapes still and moves only the coloured tiles
      const mau = bang.dataset.introColor;
      nhip.add(latManh([...bang.querySelectorAll(mau ? `[data-piece="${mau}"]` : "[data-piece]")]), 0);
    }
    // not every hero has a photo or a paragraph, so only cue what is there
    const anh = tim("media");
    const chu = tim("text");
    const nut = tim("cta");
    if (anh.length)
      nhip.fromTo(
        anh,
        { clipPath: "inset(0% 0% 100% 0%)", scale: 1.06 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.1, clearProps: "clipPath" },
        0.15,
      );
    if (chu.length) nhip.from(chu, { y: 14, autoAlpha: 0, duration: 0.7 }, 0.45);
    if (nut.length) nhip.from(nut, { y: 14, autoAlpha: 0, duration: 0.6 }, 0.6);
  });
  return (
    <div ref={khung} className="contents">
      {children}
    </div>
  );
}
