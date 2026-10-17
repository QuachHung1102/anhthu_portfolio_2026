"use client";

import { useLayoutEffect, useRef } from "react";

// where the visitor was before this page. null = nothing yet, this is the first paint
let truoc: string | null = null;

const trongNgheThuat = (duong: string) => duong === "/arts" || duong.startsWith("/arts/");

// New page: settle the scroll before any scroll trigger measures the page.
// Otherwise a visitor arriving from halfway down another page gets every reveal fired at once, unseen.
export default function VeDauTrang() {
  const moc = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const cu = truoc;
    truoc = window.location.pathname;
    // first paint is the browser's business: reloads and #anchors keep their spot
    if (cu === null || window.location.hash) return;
    // the art pages share one hero. hopping between them only swaps what is under it,
    // so stay where you are, or at most come up to where the new content starts. no trip back to the top
    const noiDung = moc.current?.parentElement;
    const dich =
      noiDung && trongNgheThuat(cu) && trongNgheThuat(truoc)
        ? Math.min(window.scrollY, noiDung.getBoundingClientRect().top + window.scrollY)
        : 0;
    window.scrollTo({ top: dich, behavior: "instant" });
    // the arts hero now re-renders with its title, so Next's own scroll handler runs after us in the same
    // commit and sees the hero off screen: it would yank the page to the top. say it once more before paint
    if (dich) requestAnimationFrame(() => window.scrollTo({ top: dich, behavior: "instant" }));
  }, []);
  // renders nothing you can see: it is only here so the effect can find the <main> it sits in
  return <i ref={moc} hidden />;
}
