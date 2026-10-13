"use client";

import { useRef } from "react";
import type { Trang } from "@/data/types";
import { EM, gsap, khiCuonToi, useChuyenDong } from "../effects/gsap";
import { mauNen } from "./colors";

type Props = { trang: Trang; className?: string; doc?: boolean };

// the 3px rule that holds every page together. it draws itself in; doc = the thin upright one
export default function DuongKe({ trang, className = "", doc }: Props) {
  const ke = useRef<HTMLDivElement>(null);
  useChuyenDong(ke, () => {
    gsap.from(ke.current, {
      [doc ? "scaleY" : "scaleX"]: 0,
      transformOrigin: "left top",
      duration: 1.1,
      ease: EM,
      scrollTrigger: khiCuonToi(ke.current),
    });
  });
  return <div ref={ke} aria-hidden className={`${doc ? "w-px" : "h-[3px]"} ${mauNen[trang]} ${className}`} />;
}
