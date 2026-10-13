"use client";

import { useRef } from "react";
import { dienSo } from "./count-format";
import { gsap, khiCuonToi, useChuyenDong } from "./gsap";

type Props = { giaTri: string; className?: string };

// scores count up from zero. the real value is in the HTML, so no JS still reads right
export default function DemSo({ giaTri, className }: Props) {
  const khung = useRef<HTMLSpanElement>(null);
  useChuyenDong(khung, () => {
    // write into React's own text node, swapping it out would leave React talking to a ghost
    const chu = khung.current?.firstChild;
    if (!chu) return;
    const tienDo = { tiLe: 0 };
    const ve = () => {
      chu.nodeValue = dienSo(giaTri, tienDo.tiLe);
    };
    ve();
    gsap.to(tienDo, { tiLe: 1, duration: 1.4, ease: "power2.out", onUpdate: ve, scrollTrigger: khiCuonToi(khung.current) });
    // put the true text back if motion gets switched off mid-visit
    return () => {
      chu.nodeValue = giaTri;
    };
  });
  return (
    <span ref={khung} className={className}>
      {giaTri}
    </span>
  );
}
