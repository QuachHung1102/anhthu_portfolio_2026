"use client";

import { type ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { AnhDuLieu } from "@/data/types";
import AnhGoc from "./AnhGoc";

type Props = {
  anh: AnhDuLieu[];
  className?: string;
  anhClassName?: string;
  // given: one button wrapping this opens the first picture, instead of a thumbnail per picture
  children?: ReactNode;
};

const nutTron = "grid size-44 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 lg:size-56";

function MuiTen({ trai }: { trai?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={`size-24 ${trai ? "-scale-x-100" : ""}`}>
      <path d="m9 4 8 8-8 8" />
    </svg>
  );
}

// click a picture to see it full size. the pictures of one group page through, lightbox style
export default function XemAnhLon({ anh, className = "", anhClassName = "", children }: Props) {
  const [so, setSo] = useState<number | null>(null);
  const diemCham = useRef<number | null>(null);
  const nhieu = anh.length > 1;
  const sang = (buoc: number) => setSo((s) => (s === null ? s : (s + buoc + anh.length) % anh.length));

  return (
    <div className={className}>
      {children ? (
        <button type="button" aria-haspopup="dialog" className="block cursor-zoom-in text-left outline-offset-8" onClick={() => setSo(0)}>
          {children}
        </button>
      ) : anh.map((a, i) => (
        <button
          key={a.src}
          type="button"
          aria-haspopup="dialog"
          aria-label={`View full size: ${a.moTa}`}
          className="h-full shrink-0 cursor-zoom-in focus-visible:-outline-offset-3"
          onClick={() => setSo(i)}
        >
          <AnhGoc anh={a} className={anhClassName} />
        </button>
      ))}

      {so !== null &&
        createPortal(
          // a modal dialog lives in the top layer, so nothing on the page can paint over it.
          // portalled to body so the reveal effect's hover zoom and tiles never touch it
          <dialog
            ref={(d) => {
              if (d && !d.open) d.showModal();
            }}
            aria-label={anh[so].moTa}
            onClose={() => setSo(null)}
            // the dialog is the dark backdrop itself: a click that lands on it, not on the picture, closes
            onClick={(e) => {
              if (e.target === e.currentTarget) e.currentTarget.close();
            }}
            onKeyDown={(e) => {
              if (nhieu && e.key === "ArrowRight") sang(1);
              if (nhieu && e.key === "ArrowLeft") sang(-1);
            }}
            onPointerDown={(e) => {
              if (e.pointerType !== "mouse") diemCham.current = e.clientX;
            }}
            onPointerUp={(e) => {
              const x0 = diemCham.current;
              diemCham.current = null;
              if (!nhieu || x0 === null || Math.abs(e.clientX - x0) < 60) return;
              sang(e.clientX < x0 ? 1 : -1);
            }}
            className="fixed inset-0 m-0 grid size-full max-h-none max-w-none touch-pan-y place-items-center bg-black/85 p-16 opacity-100 transition-opacity duration-300 backdrop:bg-transparent starting:opacity-0 md:px-96 lg:px-120"
          >
            <form method="dialog" className="absolute right-12 top-12 lg:right-24 lg:top-24">
              <button type="submit" aria-label="Close" className={nutTron}>
                <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="size-24">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </form>

            <figure key={so} className="truot-vao grid justify-items-center gap-12">
              <AnhGoc anh={anh[so]} className="h-auto max-h-[calc(100svh-7rem)] w-auto max-w-full object-contain" />
              {nhieu && (
                <figcaption className="text-sm text-white/80 tabular-nums">
                  {so + 1} / {anh.length}
                </figcaption>
              )}
            </figure>

            {nhieu && (
              <>
                <button type="button" aria-label="Previous picture" className={`${nutTron} absolute bottom-16 left-16 md:bottom-auto md:left-24 md:top-1/2 md:-translate-y-1/2`} onClick={() => sang(-1)}>
                  <MuiTen trai />
                </button>
                <button type="button" aria-label="Next picture" className={`${nutTron} absolute bottom-16 right-16 md:bottom-auto md:right-24 md:top-1/2 md:-translate-y-1/2`} onClick={() => sang(1)}>
                  <MuiTen />
                </button>
              </>
            )}
          </dialog>,
          document.body,
        )}
    </div>
  );
}
