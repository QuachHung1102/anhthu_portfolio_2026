import type { Metadata } from "next";
import BangTruot from "@/components/arts/BangTruot";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import LatManh from "@/components/effects/LatManh";
import { ngheThuat } from "@/data/arts";
import type { AnhDuLieu } from "@/data/types";

export const metadata: Metadata = { title: "Mosaic" };

type LuoiProps = { anh: AnhDuLieu[]; className: string; coAnh: string };

// a row of photos, uncovered tile by tile from the left
function LuoiAnh({ anh, className, coAnh }: LuoiProps) {
  return (
    <div className={className}>
      {anh.map((a, i) => (
        <LatManh key={a.src} thuTu={i}>
          <AnhGoc anh={a} className={`w-full ${coAnh}`} />
        </LatManh>
      ))}
    </div>
  );
}

export default function TrangMosaic() {
  const { hanhTrinh, tacPham, xuong } = ngheThuat.mosaic;
  return (
    <KhungNgheThuat>
      <section className="pt-40 lg:pt-50">
        <TieuDeNgheThuat coKeTren>{hanhTrinh.tieuDe}</TieuDeNgheThuat>
        <div className="mt-20 grid gap-24 lg:mt-23 lg:grid-cols-[525fr_703fr] lg:gap-61">
          <DoanVan dong={hanhTrinh.doan} />
          <LuoiAnh anh={hanhTrinh.anhTren} className="grid grid-cols-2 gap-13 lg:mt-5" coAnh="aspect-[345/237] h-auto lg:aspect-auto lg:h-237" />
        </div>
        <DuongKe trang="arts" className="mt-24 lg:mt-28" />
        <LuoiAnh anh={hanhTrinh.anhDuoi} className="mt-20 grid grid-cols-2 gap-13 md:grid-cols-4 lg:mt-21 lg:gap-21" coAnh="aspect-[307/279] h-auto lg:aspect-auto lg:h-279" />
        <DuongKe trang="arts" className="mt-40 lg:mt-63" />
      </section>

      <section className="pt-40 lg:pt-49">
        <TieuDeNgheThuat coKeTren>{tacPham.tieuDe}</TieuDeNgheThuat>
        <div className="mt-20 grid gap-24 lg:mt-23 lg:grid-cols-[414fr_799fr] lg:gap-77">
          <DoanVan dong={tacPham.doan} canDeu={false} />
          <LuoiAnh anh={tacPham.anhDoc} className="grid grid-cols-2 gap-13 sm:grid-cols-4 lg:gap-21" coAnh="aspect-[184/240] h-auto border border-white lg:aspect-auto lg:h-240" />
        </div>
        <LuoiAnh anh={tacPham.anhNgang} className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 lg:mt-29 lg:pl-4" coAnh="aspect-[319/220] h-auto lg:aspect-auto lg:h-220" />
        <DuongKe trang="arts" className="mt-24 lg:mt-28" />
        <LuoiAnh anh={tacPham.anhCuoi} className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4 lg:mt-21 lg:grid-cols-[410fr_258fr_293fr_293fr] lg:pl-4" coAnh="aspect-[293/279] h-auto lg:aspect-auto lg:h-279" />
        <DuongKe trang="arts" className="mt-40 lg:mt-63" />
      </section>

      <section className="pt-40 lg:pt-61">
        <TieuDeNgheThuat coKeTren>{xuong.tieuDe}</TieuDeNgheThuat>
        <DoanVan dong={xuong.doan} className="mt-20 lg:mt-23 lg:min-h-233 lg:w-525" />
        <DuongKe trang="arts" className="my-24 lg:mb-21 lg:mt-37" />
        <BangTruot nhan="Workshop">
          {xuong.buoi.map((buoi) => (
            <figure key={buoi.ten} className="lg:pl-4">
              <div className="grid grid-cols-3 gap-10 lg:gap-28">
                {buoi.anh.map((a) => (
                  <AnhGoc key={a.src} anh={a} className="aspect-[410/279] h-auto w-full lg:aspect-auto lg:h-279" />
                ))}
              </div>
              <figcaption className="type-display-40 mt-20 text-center text-arts lg:mt-36">{buoi.ten}</figcaption>
            </figure>
          ))}
        </BangTruot>
        <DuongKe trang="arts" className="mt-32 lg:mb-28 lg:mt-50" />
      </section>
    </KhungNgheThuat>
  );
}
