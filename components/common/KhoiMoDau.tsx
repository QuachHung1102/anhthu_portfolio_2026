import { ViewTransition, type ReactNode } from "react";
import type { Trang } from "@/data/types";
import MoMan from "../effects/MoMan";
import { mauNen } from "./colors";
import ThanhDieuHuong from "./ThanhDieuHuong";

type Props = { trang: Trang; children: ReactNode };

// the big coloured block every page opens with. three layouts: a stack on phones, a 12-column grid on tablets
// (children pick their columns), and the mockup's exact positions on wide screens.
// between pages it is one shared element, so orange melts into red instead of blinking
export default function KhoiMoDau({ trang, children }: Props) {
  return (
    <ViewTransition name="hero" share="hero" default="none">
      <header className={`rounded-b-[32px] md:rounded-b-[44px] lg:rounded-b-hero ${mauNen[trang]}`}>
        <div className="relative mx-auto max-w-1440 px-20 pb-36 pt-12 sm:px-32 md:grid md:grid-cols-12 md:gap-x-32 md:px-48 md:pb-56 md:pt-16 lg:block lg:h-783 lg:p-0">
          {/* the nav is the fixed point while everything else changes */}
          <div
            style={{ viewTransitionName: "site-nav" }}
            className="md:col-span-full lg:absolute lg:left-71 lg:right-80 lg:top-[calc(var(--spacing)*16.5)]"
          >
            <ThanhDieuHuong trang={trang} />
          </div>
          <MoMan>{children}</MoMan>
        </div>
      </header>
    </ViewTransition>
  );
}
