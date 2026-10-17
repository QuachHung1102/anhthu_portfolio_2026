import type { ReactNode } from "react";
import type { AnhDuLieu } from "@/data/types";
import AnhGoc from "./AnhGoc";

type Props = {
  anh: AnhDuLieu;
  children: ReactNode;
  className?: string;
  // trai: the picture starts under the left edge, for things near the left margin
  canh?: "giua" | "trai";
  // true when there is no link inside to tab or tap onto
  tuFocus?: boolean;
};

// hover, tap or tab onto it to peek at the paper behind the claim
export default function XemTruoc({ anh, children, className = "", canh = "giua", tuFocus }: Props) {
  return (
    <span tabIndex={tuFocus ? 0 : undefined} className={`group/xem relative ${className}`}>
      <span className="goi-y">{children}</span>
      <span
        aria-hidden
        className={`pointer-events-none invisible absolute top-full z-30 mt-12 w-[min(16rem,70vw)] translate-y-8 opacity-0 transition-[opacity,translate,visibility] duration-300 group-hover/xem:visible group-hover/xem:translate-y-0 group-hover/xem:opacity-100 group-focus-within/xem:visible group-focus-within/xem:translate-y-0 group-focus-within/xem:opacity-100 group-focus-visible/xem:visible group-focus-visible/xem:translate-y-0 group-focus-visible/xem:opacity-100 lg:w-280 ${canh === "trai" ? "left-0" : "left-1/2 -translate-x-1/2"}`}
      >
        <AnhGoc anh={anh} className="h-auto w-full rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.25)]" />
      </span>
    </span>
  );
}
