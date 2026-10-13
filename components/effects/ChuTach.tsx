"use client";

import { useRef, type ReactNode } from "react";
import { EM, gsap, khiCuonToi, SplitText, useChuyenDong } from "./gsap";

type Props = { children: ReactNode; className?: string };

// headings rise out of their own baseline, line by line. calm, no bouncing letters
export default function ChuTach({ children, className }: Props) {
  const khung = useRef<HTMLHeadingElement>(null);
  useChuyenDong(khung, () => {
    SplitText.create(khung.current, {
      type: "lines",
      mask: "lines",
      // lines change when the display font lands or the window resizes, so let it re-split
      autoSplit: true,
      onSplit: (tach) =>
        gsap.from(tach.lines, {
          yPercent: 105,
          duration: 0.8,
          ease: EM,
          stagger: 0.09,
          scrollTrigger: khiCuonToi(khung.current),
        }),
    });
  });
  return (
    <h2 ref={khung} className={className}>
      {children}
    </h2>
  );
}
