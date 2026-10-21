import type { CSSProperties } from "react";
import type { Metadata } from "next";
import AnhMoDau from "@/components/common/AnhMoDau";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import XemAnhLon from "@/components/common/XemAnhLon";
import XemTruoc from "@/components/common/XemTruoc";
import ChuTach from "@/components/effects/ChuTach";
import DemSo from "@/components/effects/DemSo";
import HienDan from "@/components/effects/HienDan";
import LatManh from "@/components/effects/LatManh";
import { hocThuat } from "@/data/academics";
import { tieuDeHocThuat } from "@/data/artwork/academics-title";

export const metadata: Metadata = { title: "Academics" };

// every certificate on the page is drawn at one height: the most the widest group (ASEEDER, three sheets)
// can take and still fit its column. at 1440 that is two 579px columns, 8px between sheets -> 264px tall
const KHE_ANH = 8;
const nhomGiai = hocThuat.giaiThuong.hang.flat();
const tyLeRongNhat = Math.max(...nhomGiai.map((g) => g.anh.reduce((tong, a) => tong + a.rong / a.cao, 0)));
const soKheNhieuNhat = Math.max(...nhomGiai.map((g) => g.anh.length)) - 1;
const caoChungChi = { "--ty-le": tyLeRongNhat.toFixed(4), "--khe-tong": KHE_ANH * soKheNhieuNhat } as CSSProperties;

type Diem = { nhan: string; giaTri: string; ghiChu: string; kem?: string };

// label, the big number, the small print
function NoiDungDiem({ diem }: { diem: Diem }) {
  return (
    <>
      <span className="type-label block lg:whitespace-nowrap">{diem.nhan}</span>
      <span className="mt-4 flex flex-wrap items-baseline gap-x-7 lg:mt-8">
        <DemSo giaTri={diem.giaTri} className="type-display-48" />
        {diem.kem && <span className="type-body">{diem.kem}</span>}
      </span>
      <span className="type-body block">{diem.ghiChu}</span>
    </>
  );
}

export default function TrangHocThuat() {
  const { gioiThieu, nutKeuGoi, anhBia, hocVan, giaiThuong } = hocThuat;
  return (
    <>
      <KhoiMoDau trang="academics">
        <h1 data-intro="tiles" className="mt-40 md:col-span-6 md:row-start-2 md:mt-32 md:self-end tl:col-span-7 lg:absolute lg:left-71 lg:top-236 lg:mt-0 lg:w-620">
          <HinhVe duLieu={tieuDeHocThuat} moTa="Academics" className="h-auto w-full" />
        </h1>
        <div data-intro="text" className="mt-16 md:col-span-6 md:row-start-3 tl:col-span-7 lg:absolute lg:left-71 lg:top-380 lg:mt-0 lg:w-600">
          <DoanVan dong={gioiThieu} className="text-cream" />
        </div>
        <div data-intro="cta" className="relative z-10 mt-24 md:col-span-6 md:row-start-4 md:self-start tl:col-span-7 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
          <NutKeuGoi trang="academics" nhan={nutKeuGoi} />
        </div>
        <AnhMoDau anh={anhBia} doc={0.4} className="md:row-span-3 md:row-start-2" />
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
                    {diem.xem ? (
                      // the score report shows up under it, so this one gets the pulse
                      <XemTruoc anh={diem.xem} canh="trai" tuFocus className="block outline-offset-8">
                        <NoiDungDiem diem={diem} />
                      </XemTruoc>
                    ) : (
                      <NoiDungDiem diem={diem} />
                    )}
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
            // the row is the size container (not the figure: containment would switch its subgrid off).
            // --cot is one column: the whole row on phones, half of it minus the gap from tablets up
            <div
              key={i}
              style={caoChungChi}
              className="@container [--cot:100cqw] md:[--cot:calc((100cqw-var(--spacing)*40)/2)]"
            >
              <div className="grid gap-32 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:pb-52 lg:pt-32">
                {hang.map((giai, thuTu) => (
                  // subgrid: certificates share a bottom edge, captions share a top edge, however many lines they run to
                  <figure key={giai.anh[0].src} className="row-span-3 grid grid-rows-subgrid gap-y-16 lg:gap-y-26">
                    <LatManh thuTu={thuTu} className="w-fit self-end">
                      <XemAnhLon
                        anh={giai.anh}
                        className="flex h-[calc((var(--cot)-var(--spacing)*var(--khe-tong))/var(--ty-le))] gap-8"
                        anhClassName="h-full w-auto"
                      />
                    </LatManh>
                    <figcaption>
                      {/* room for three lines everywhere, so every row comes out the same height */}
                      <DoanVan dong={giai.ten} className="min-h-[3lh] lg:w-540" />
                    </figcaption>
                    {/* proof she was there: 1-2 photos from the contest (ABRSM has none) */}
                    {"anhThi" in giai ? (
                      <LatManh thuTu={thuTu}>
                        <XemAnhLon anh={giai.anhThi} className="grid grid-cols-2 gap-8" anhClassName="aspect-[3/2] h-auto w-full" />
                      </LatManh>
                    ) : (
                      <div />
                    )}
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
