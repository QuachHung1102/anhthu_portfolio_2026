"use client";

import { Children, useRef, useState, type ReactNode } from "react";

type Props = { children: ReactNode; nhan: string; mau?: "arts" | "projects" };

// spelled out so Tailwind sees every class
const CHAM = {
  arts: { vien: "border-arts", nen: "bg-arts" },
  projects: { vien: "border-projects", nen: "bg-projects" },
};

// swipeable slides on native scroll-snap. the dots only report where you are, and jump on click
export default function BangTruot({ children, nhan, mau = "arts" }: Props) {
  const ray = useRef<HTMLDivElement>(null);
  const [dangXem, datDangXem] = useState(0);
  const trang = Children.toArray(children);

  // no behavior here on purpose: the CSS decides, and it stays instant for reduced motion
  const toi = (viTri: number) => {
    const hop = ray.current;
    hop?.scrollTo({ left: viTri * hop.clientWidth });
  };

  return (
    <div role="group" aria-roledescription="carousel" aria-label={nhan}>
      {/* focusable so arrow keys can scroll it, and every slide stays readable without JS */}
      <div
        ref={ray}
        tabIndex={0}
        role="region"
        aria-label={`${nhan} slides`}
        onScroll={(e) => datDangXem(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] motion-safe:scroll-smooth"
      >
        {trang.map((noiDung, i) => (
          <div key={i} className="w-full shrink-0 snap-center">
            {noiDung}
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center lg:mt-28">
        {trang.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${nhan} ${i + 1}`}
            aria-current={i === dangXem}
            onClick={() => toi(i)}
            className="grid size-44 place-items-center lg:-m-10"
          >
            {/* small dot, finger-sized button around it. on wide screens the buttons overlap so the dots sit as close as the mockup has them */}
            <span className={`size-15 rounded-full border-2 transition-colors ${CHAM[mau].vien} ${i === dangXem ? CHAM[mau].nen : ""}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
