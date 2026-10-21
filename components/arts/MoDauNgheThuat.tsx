import type { ReactNode } from "react";
import AnhMoDau from "@/components/common/AnhMoDau";
import DoanVan from "@/components/common/DoanVan";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import { ngheThuat } from "@/data/arts";
import { tieuDeNgheThuat } from "@/data/artwork/arts-title";
import TheoMon from "./TheoMon";

// the drawn "Art" up front, typed titles on the three discipline pages. same 77% leading as the mockup
const CHU_LON = "font-display text-cream leading-[0.772]";

type DuongDan = keyof typeof ngheThuat.gioiThieu;

// same red hero on all four art pages. it lives in the arts layout, so it stays put between them;
// title, words, button and photo change underneath it.
// since 2026-10-21 every page has the big framed photo on the right (About me style), so the titles
// shrink to the left half on wide screens
export default function MoDauNgheThuat() {
  const { gioiThieu, nutKeuGoi, anhBia } = ngheThuat;

  // tablets: words on the left, the photo takes the right half
  const phan = (duong: DuongDan, tieuDe: ReactNode, viTriChu: string) => (
    <>
      {tieuDe}
      <div data-intro="text" className={`mt-16 text-cream md:col-span-6 md:row-start-3 tl:col-span-7 lg:absolute lg:left-75 lg:mt-0 lg:w-600 ${viTriChu}`}>
        <DoanVan dong={gioiThieu[duong]} />
      </div>
      <div data-intro="cta" className="relative z-10 mt-24 md:col-span-6 md:row-start-4 md:self-start tl:col-span-7 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
        <NutKeuGoi trang="arts" nhan={nutKeuGoi[duong]} />
      </div>
      <AnhMoDau anh={anhBia[duong].anh} doc={anhBia[duong].doc} className="md:row-span-3 md:row-start-2" />
    </>
  );

  const ban: Record<string, ReactNode> = {
    "/arts": phan(
      "/arts",
      <h1 data-intro="tiles" className="mt-24 md:col-span-6 md:row-start-2 md:mt-32 tl:col-span-5 lg:absolute lg:left-70 lg:top-190 lg:mt-0 lg:w-460">
        <HinhVe duLieu={tieuDeNgheThuat} moTa="Art" className="h-auto w-full max-w-300 tl:max-w-none" />
      </h1>,
      "lg:top-418",
    ),
    "/arts/mosaic": phan(
      "/arts/mosaic",
      <h1 data-intro="text" className={`mt-24 text-[clamp(3rem,2rem+5vw,5rem)] md:col-span-6 md:row-start-2 md:mt-32 lg:absolute lg:left-72 lg:top-178 lg:mt-0 lg:text-[calc(var(--spacing)*121.4)] lg:leading-none ${CHU_LON}`}>
        Mosaic
      </h1>,
      "lg:top-316",
    ),
    "/arts/piano": phan(
      "/arts/piano",
      <h1 data-intro="text" className={`mt-24 text-[clamp(5rem,1rem+18vw,12rem)] md:col-span-6 md:row-start-2 md:mt-32 md:text-[9vw] lg:absolute lg:left-71 lg:top-152 lg:mt-0 lg:text-[calc(var(--spacing)*235)] ${CHU_LON}`}>
        Piano
      </h1>,
      "lg:top-380",
    ),
    "/arts/vietnamese-zither": phan(
      "/arts/vietnamese-zither",
      <h1 data-intro="text" className={`mt-24 text-[clamp(3rem,0.5rem+11vw,7rem)] md:col-span-6 md:row-start-2 md:mt-32 md:text-[6.5vw] lg:absolute lg:left-75 lg:top-152 lg:mt-0 lg:text-[calc(var(--spacing)*124)] ${CHU_LON}`}>
        Vietnamese
        <br />
        Zither
      </h1>,
      "lg:top-380",
    ),
  };

  return (
    <KhoiMoDau trang="arts">
      <TheoMon ban={ban} />
    </KhoiMoDau>
  );
}
