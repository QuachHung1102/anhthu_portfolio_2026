import type { Metadata } from "next";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import XemAnhLon from "@/components/common/XemAnhLon";
import { ngheThuat } from "@/data/arts";
import type { AnhDuLieu } from "@/data/types";

export const metadata: Metadata = { title: "Mosaic" };

type LuoiProps = { anh: AnhDuLieu[]; className: string; coAnh: string };

// a row of photos, uncovered tile by tile from the left. click one for the original, full size
function LuoiAnh({ anh, className, coAnh }: LuoiProps) {
  return <XemAnhLon anh={anh} className={className} anhClassName={`w-full ${coAnh}`} nutClassName="block w-full" lat={{}} />;
}

// one piece from bare tray to finished, cut off the desk, arrows between the steps
function QuyTrinh({ ten, buoc }: { ten: string; buoc: AnhDuLieu[] }) {
  return (
    <figure>
      <ol className="grid grid-cols-2 items-center gap-x-8 gap-y-16 md:flex md:gap-x-0">
        {buoc.map((a, i) => (
          <li key={a.src} className="flex items-center md:flex-1">
            <XemAnhLon
              anh={buoc}
              tu={i}
              den={i + 1}
              className="flex-1"
              lat={{}}
              nutClassName="block w-full"
              anhClassName="mx-auto h-160 w-auto max-w-full object-contain lg:h-220"
            />
            {i < buoc.length - 1 && (
              <span aria-hidden className="type-display-40 hidden px-8 text-arts md:block">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="sr-only">{ten}, from bare tray to finished piece</figcaption>
    </figure>
  );
}

// rows of at most four, spread evenly: 7 photos come out as 4 + 3, never 6 + 1. [first, end) of each row
function hangAnh(so: number): [number, number][] {
  const soHang = Math.ceil(so / 4);
  const moiHang = Math.ceil(so / soHang);
  const hang: [number, number][] = [];
  for (let i = 0; i < so; i += moiHang) hang.push([i, Math.min(i + moiHang, so)]);
  return hang;
}

// spelled out so Tailwind sees them
const COT = ["", "grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-2 md:grid-cols-4"];

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
          <DoanVan dong={tacPham.doan} />
          <QuyTrinh {...tacPham.quyTrinh[0]} />
        </div>
        <div className="mt-32 lg:mt-40">
          <QuyTrinh {...tacPham.quyTrinh[1]} />
        </div>
        <DuongKe trang="arts" className="mt-24 lg:mt-28" />
        <LuoiAnh anh={tacPham.anhCuoi} className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4 lg:mt-21 lg:grid-cols-[410fr_410fr_230fr_230fr] lg:pl-4" coAnh="aspect-[293/279] h-auto lg:aspect-auto lg:h-279" />
        <DuongKe trang="arts" className="mt-40 lg:mt-63" />
      </section>

      <section className="pt-40 lg:pt-61">
        <TieuDeNgheThuat coKeTren>{xuong.tieuDe}</TieuDeNgheThuat>
        <DoanVan dong={xuong.doan} className="mt-20 lg:mt-23 lg:min-h-233 lg:w-525" />
        <DuongKe trang="arts" className="my-24 lg:mb-21 lg:mt-37" />
        {/* both workshops in full, one after the other: a slider left a hole under the shorter one */}
        <div className="grid gap-40 lg:gap-56">
          {xuong.buoi.map((buoi) => (
            <figure key={buoi.ten} className="lg:pl-4">
              <div className="grid gap-10 lg:gap-28">
                {hangAnh(buoi.anh.length).map(([tu, den]) => (
                  <XemAnhLon
                    key={tu}
                    anh={buoi.anh}
                    tu={tu}
                    den={den}
                    className={`grid gap-10 lg:gap-28 ${COT[den - tu]}`}
                    anhClassName="aspect-[410/279] h-auto w-full"
                    nutClassName="block w-full"
                  />
                ))}
              </div>
              <figcaption className="type-display-40 mt-20 text-center text-arts lg:mt-36">{buoi.ten}</figcaption>
            </figure>
          ))}
        </div>
        <DuongKe trang="arts" className="mt-32 lg:mb-28 lg:mt-50" />
      </section>
    </KhungNgheThuat>
  );
}
