"use client";

import type { MouseEvent } from "react";
import { manhGoc } from "@/data/artwork/cta-accent";
import { manhCuoi } from "@/data/artwork/cta-accent-end";
import { muiTen } from "@/data/artwork/cta-arrow";
import type { Trang } from "@/data/types";
import HutChuot from "../effects/HutChuot";
import HinhVe from "./HinhVe";

type Props = { trang: Trang; nhan: string };

const kieu: Record<Trang, { nen: string; chu: string; manh: string; rong: string; vien: boolean }> = {
  home: { nen: "bg-arts", chu: "text-cream", manh: "text-blush", rong: "lg:min-w-503", vien: true },
  arts: { nen: "bg-cream", chu: "text-arts", manh: "text-home", rong: "lg:min-w-315", vien: true },
  academics: { nen: "bg-cream", chu: "text-academics", manh: "text-academics", rong: "lg:min-w-315", vien: false },
  projects: { nen: "bg-cream", chu: "text-projects", manh: "text-projects", rong: "lg:min-w-315", vien: true },
};

// Next keeps visited pages in the DOM, hidden, so "#content" can name a page you are not on.
// Scroll to the main that is actually showing. the href stays as the no-JS fallback
function toiNoiDung(e: MouseEvent<HTMLAnchorElement>) {
  const dich = [...document.querySelectorAll("main")].find((m) => m.getClientRects().length > 0);
  if (!dich) return;
  e.preventDefault();
  dich.scrollIntoView();
}

// arrow box + label box. jumps to the first section under the hero
export default function NutKeuGoi({ trang, nhan }: Props) {
  const k = kieu[trang];
  return (
    <HutChuot className="inline-block max-w-full">
      <a href="#content" onClick={toiNoiDung} className={`group flex gap-4 ${k.chu}`}>
        {/* min, not fixed: when the label wraps to two lines the arrow box grows with it */}
        <span className={`flex min-h-64 w-76 shrink-0 items-center justify-center rounded-card lg:h-83 lg:w-99 ${k.nen}`}>
          <HinhVe
            duLieu={muiTen}
            className="h-46 w-40 transition-transform duration-300 group-hover:translate-y-6 lg:h-60 lg:w-52"
          />
        </span>
        <span className={`relative flex min-h-64 min-w-0 items-center rounded-card py-6 pl-44 pr-20 lg:h-83 lg:py-0 lg:pl-53 lg:pr-40 ${k.nen} ${k.rong}`}>
          <HinhVe duLieu={manhGoc} className={`absolute left-4 top-4 h-38 w-41 lg:left-6 lg:top-5 lg:h-50 lg:w-54 ${k.manh}`} />
          {trang === "home" && (
            <HinhVe duLieu={manhCuoi} className="absolute bottom-2 right-3 h-38 w-57 text-blush lg:h-50 lg:w-75" />
          )}
          <span
            className={`type-display-36 relative lg:whitespace-nowrap ${
              k.vien ? "[-webkit-text-stroke:2px_var(--color-home)] [paint-order:stroke_fill]" : ""
            }`}
          >
            {nhan}
          </span>
        </span>
      </a>
    </HutChuot>
  );
}
