import type { CSSProperties } from "react";
import type { Metadata } from "next";
import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import ChuTach from "@/components/effects/ChuTach";
import DemSo from "@/components/effects/DemSo";
import HienDan from "@/components/effects/HienDan";
import LatManh from "@/components/effects/LatManh";
import { hocThuat } from "@/data/academics";
import { tieuDeHocThuat } from "@/data/artwork/academics-title";
import type { AnhDuLieu } from "@/data/types";

export const metadata: Metadata = { title: "Academics" };

// shortcut: frame width is keyed on how many certificates sit side by side (285 / 2x256 / 3x201 in the mockup).
// Move the widths into data if a row ever gets a different mix.
const RONG_THEO_SO_ANH: Record<number, string> = { 1: "max-w-285", 2: "max-w-512", 3: "max-w-603 lg:ml-8 lg:w-603" };

// placeholders fill the big blue box, real certificates keep their own shape
const rongKhung = (anh: AnhDuLieu[]) => (anh[0].giaLap ? "max-w-563" : (RONG_THEO_SO_ANH[anh.length] ?? ""));

export default function TrangHocThuat() {
  const { nutKeuGoi, hocVan, giaiThuong } = hocThuat;
  return (
    <>
      <KhoiMoDau trang="academics">
        <h1 data-intro="tiles" className="mt-40 md:col-span-full md:mt-72 lg:absolute lg:left-72 lg:top-404 lg:mt-0 lg:w-966">
          <HinhVe duLieu={tieuDeHocThuat} moTa="Academics" className="h-auto w-full" />
        </h1>
        <div data-intro="cta" className="mt-24 md:col-span-full md:mt-32 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
          <NutKeuGoi trang="academics" nhan={nutKeuGoi} />
        </div>
      </KhoiMoDau>

      <NoiDungTrang className="text-academics [--ink:var(--color-academics-ink)] lg:pl-118 lg:pr-124">
        <section className="pt-48 md:pt-64 lg:pt-141">
          <ChuTach className="type-display-64">{hocVan.tieuDe}</ChuTach>
          <DuongKe trang="academics" className="mt-12 lg:mt-31" />
          {hocVan.hang.map((hang, i) => (
            <div key={i}>
              {/* the mockup spaces these columns by hand, so each one carries its own x.
                  anywhere narrower the row just fits as many as it can, 200px each at least */}
              <HienDan className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,12.5rem),1fr))] gap-x-24 gap-y-28 py-28 md:py-36 lg:block lg:h-190 lg:py-0">
                {hang.map((diem) => (
                  <div
                    key={diem.nhan + diem.x}
                    style={{ "--x": `calc(var(--spacing) * ${diem.x})` } as CSSProperties}
                    className="lg:absolute lg:left-(--x) lg:top-40"
                  >
                    <p className="type-label lg:whitespace-nowrap">{diem.nhan}</p>
                    <p className="mt-4 flex flex-wrap items-baseline gap-x-7 lg:mt-8">
                      <DemSo giaTri={diem.giaTri} className="type-display-48" />
                      {diem.kem && <span className="type-body">{diem.kem}</span>}
                    </p>
                    <p className="type-body">{diem.ghiChu}</p>
                  </div>
                ))}
              </HienDan>
              <DuongKe trang="academics" />
            </div>
          ))}
        </section>

        <section className="pt-64 md:pt-80 lg:pt-155">
          <ChuTach className="type-display-64">{giaiThuong.tieuDe}</ChuTach>
          <DuongKe trang="academics" className="mt-12 lg:mt-34" />
          {giaiThuong.hang.map((hang, i) => (
            <div key={i}>
              <div className="grid gap-32 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:grid-cols-[644fr_554fr] lg:gap-0 lg:pb-52 lg:pt-32">
                {hang.map((giai, thuTu) => (
                  <figure key={giai.anh[0].src} className="flex flex-col justify-end">
                    <div className={`w-full ${rongKhung(giai.anh)}`}>
                      <LatManh thuTu={thuTu}>
                        <div className="flex">
                          {giai.anh.map((anh: AnhDuLieu) => (
                            <AnhGoc
                              key={anh.src}
                              anh={anh}
                              className={anh.giaLap ? "aspect-[563/400] h-auto w-full bg-academics" : "h-auto w-0 flex-1"}
                            />
                          ))}
                        </div>
                      </LatManh>
                    </div>
                    <figcaption className="mt-16 lg:mt-26">
                      <DoanVan dong={giai.ten} canDeu={false} className="font-bold lg:w-486" />
                    </figcaption>
                  </figure>
                ))}
              </div>
              <DuongKe trang="academics" />
            </div>
          ))}
        </section>
      </NoiDungTrang>
    </>
  );
}
