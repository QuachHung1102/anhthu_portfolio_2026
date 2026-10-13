import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const DUOC_DONG = "(prefers-reduced-motion: no-preference)";

// one easing for the whole site: fast out of the gate, soft landing, no bounce
export const EM = "expo.out";

// fire once, a little before the thing is fully on screen ("top 88%").
// the last rule of a page sits too close to the bottom to ever climb that high on a tall screen,
// so reaching the end of the page counts as well
export const khiCuonToi = (moc: Element | null) => ({
  trigger: moc,
  start: () => {
    if (!moc) return 0;
    const dinh = moc.getBoundingClientRect().top + window.scrollY;
    return Math.min(dinh - window.innerHeight * 0.88, ScrollTrigger.maxScroll(window) - 1);
  },
  once: true,
});

// tiles drop into place left to right, the way you would actually lay a mosaic
export function latManh(manh: Element[], them: gsap.TweenVars = {}) {
  const theoHang = [...manh].sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
  return gsap.from(theoHang, {
    x: () => gsap.utils.random(-18, 18),
    y: () => gsap.utils.random(-46, -14),
    rotation: () => gsap.utils.random(-28, 28),
    scale: 0.5,
    autoAlpha: 0,
    transformOrigin: "50% 50%",
    duration: 0.7,
    ease: EM,
    stagger: { amount: 0.7 },
    ...them,
  });
}

// motion only for people who did not ask their OS to calm down
export function useChuyenDong(pham: RefObject<HTMLElement | null>, dung: () => void | (() => void)) {
  useGSAP(
    () => {
      gsap.matchMedia().add(DUOC_DONG, () => {
        // a still page beats a blank one: if an animation blows up, we just skip it
        try {
          return dung();
        } catch (loi) {
          console.error("animation skipped", loi);
        }
      });
    },
    { scope: pham },
  );
}

export { gsap, SplitText, useGSAP };
