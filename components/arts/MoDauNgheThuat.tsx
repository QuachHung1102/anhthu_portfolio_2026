import type { ReactNode } from "react";
import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import { ngheThuat } from "@/data/arts";
import { tieuDeNgheThuat } from "@/data/artwork/arts-title";
import TheoMon from "./TheoMon";

// the drawn "Art" up front, typed titles on the three discipline pages. same 77% leading as the mockup
const CHU_LON = "font-display text-cream leading-[0.772]";

// same red hero on all four art pages. it lives in the arts layout, so it stays put between them;
// only the title, and on piano and zither the photo, change underneath it
export default function MoDauNgheThuat() {
  const { gioiThieu, nutKeuGoi, anhBia } = ngheThuat;

  const anh = (
    <div
      data-intro="media"
      className="relative mt-28 overflow-hidden rounded-[24px] md:col-span-6 md:col-start-7 md:row-span-3 md:row-start-2 md:mt-32 md:min-h-260 tl:col-span-7 tl:col-start-6 lg:absolute lg:left-564 lg:top-178 lg:mt-0 lg:h-537 lg:min-h-0 lg:w-796 lg:rounded-photo"
    >
      <AnhGoc anh={anhBia} uuTien className="aspect-[796/537] h-auto w-full md:absolute md:inset-0 md:aspect-auto md:h-full" />
    </div>
  );
  const doan = (viTri: string) => (
    <div data-intro="text" className={`mt-16 text-cream md:row-start-3 ${viTri}`}>
      <DoanVan dong={gioiThieu} canDeu={false} />
    </div>
  );

  // tablets: words on the left, the photo (where there is one) takes the rest and matches their height
  const ban: Record<string, ReactNode> = {
    "/arts": (
      <>
        <h1 data-intro="tiles" className="mt-24 md:col-span-6 md:row-start-2 md:mt-32 tl:col-span-5 lg:absolute lg:left-70 lg:top-190 lg:mt-0 lg:w-460">
          <HinhVe duLieu={tieuDeNgheThuat} moTa="Art" className="h-auto w-full max-w-300 tl:max-w-none" />
        </h1>
        {doan("md:col-span-6 tl:col-span-5 lg:absolute lg:left-75 lg:top-418 lg:mt-0 lg:w-414")}
        {anh}
      </>
    ),
    "/arts/mosaic": (
      <>
        <h1 data-intro="text" className={`mt-24 text-[clamp(3rem,2rem+5vw,5rem)] md:col-span-6 md:row-start-2 md:mt-32 tl:col-span-5 lg:absolute lg:left-72 lg:top-178 lg:mt-0 lg:text-[calc(var(--spacing)*121.4)] lg:leading-none ${CHU_LON}`}>
          Mosaic
        </h1>
        {doan("md:col-span-6 tl:col-span-5 lg:absolute lg:left-75 lg:top-316 lg:mt-0 lg:w-414")}
        {anh}
      </>
    ),
    "/arts/piano": (
      <>
        <h1 data-intro="text" className={`mt-24 text-[clamp(5rem,1rem+18vw,12rem)] md:col-span-full md:row-start-2 md:mt-32 lg:absolute lg:left-71 lg:top-152 lg:mt-0 lg:text-[calc(var(--spacing)*306.6)] ${CHU_LON}`}>
          Piano
        </h1>
        {doan("md:col-span-8 tl:col-span-6 lg:absolute lg:left-75 lg:top-416 lg:mt-0 lg:w-414")}
      </>
    ),
    "/arts/vietnamese-zither": (
      <>
        <h1 data-intro="text" className={`mt-24 text-[clamp(3rem,0.5rem+11vw,7rem)] md:col-span-full md:row-start-2 md:mt-32 lg:absolute lg:left-75 lg:top-152 lg:mt-0 lg:text-[calc(var(--spacing)*169.8)] ${CHU_LON}`}>
          Vietnamese
          <br />
          Zither
        </h1>
        {doan("md:col-span-10 tl:col-span-8 lg:absolute lg:left-75 lg:top-472 lg:mt-0 lg:w-707")}
      </>
    ),
  };

  return (
    <KhoiMoDau trang="arts">
      <TheoMon ban={ban} />
      <div data-intro="cta" className="mt-24 md:col-span-6 md:row-start-4 md:self-start tl:col-span-5 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
        <NutKeuGoi trang="arts" nhan={nutKeuGoi} />
      </div>
    </KhoiMoDau>
  );
}
