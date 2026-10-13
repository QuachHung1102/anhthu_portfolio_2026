import Link from "next/link";
import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import HienManh from "@/components/effects/HienManh";
import LatManh from "@/components/effects/LatManh";
import { chuA } from "@/data/artwork/home-mosaic-a";
import { chanDung } from "@/data/artwork/home-portrait";
import { vetGhep } from "@/data/artwork/home-strip-overlay";
import { tieuDeTrangChu } from "@/data/artwork/home-title";
import { chuAcademics } from "@/data/artwork/wordmark-academics";
import { chuArt } from "@/data/artwork/wordmark-art";
import { chuProject } from "@/data/artwork/wordmark-project";
import { trangChu } from "@/data/home";
import type { Trang } from "@/data/types";

// each column title is drawn, not typed, so it needs its own artwork and size
const chuCot: Partial<Record<Trang, { hinh: typeof chuArt; co: string }>> = {
  academics: { hinh: chuAcademics, co: "h-54 w-343" },
  arts: { hinh: chuArt, co: "h-52 w-117" },
  projects: { hinh: chuProject, co: "h-61 w-307" },
};

export default function TrangChu() {
  const { loiChao, nutKeuGoi, viSao, cot } = trangChu;
  return (
    <>
      <KhoiMoDau trang="home">
        {/* only the red tiles move, the cream letters underneath stay put.
            tablets: title across the top, then words on the left and the portrait on the right */}
        <h1
          data-intro="tiles"
          data-intro-color="#FF4762"
          className="mt-24 md:col-span-full md:mt-32 md:max-w-680 lg:absolute lg:left-19 lg:top-134 lg:mt-0 lg:w-827 lg:max-w-none"
        >
          <HinhVe duLieu={tieuDeTrangChu} moTa="About me" className="h-auto w-full" />
        </h1>
        <div data-intro="text" className="mt-12 md:col-span-6 md:mt-20 tl:col-span-7 lg:absolute lg:left-71 lg:top-355 lg:mt-0 lg:w-625">
          <DoanVan dong={loiChao} />
        </div>
        <div data-intro="cta" className="mt-24 md:col-span-6 md:col-start-1 md:mt-28 md:self-start tl:col-span-7 lg:absolute lg:left-71 lg:top-658 lg:mt-0">
          <NutKeuGoi trang="home" nhan={nutKeuGoi} />
        </div>
        <div
          data-intro="media"
          className="mx-auto mt-28 max-w-520 md:col-span-6 md:col-start-7 md:row-span-2 md:row-start-3 md:mx-0 md:mt-20 md:max-w-none md:self-center tl:col-span-5 tl:col-start-8 lg:absolute lg:left-722 lg:top-136 lg:mt-0 lg:w-708"
        >
          <HinhVe duLieu={chanDung} moTa="Anh Thư holding a ceramic mosaic piece" className="h-auto w-full" />
        </div>
      </KhoiMoDau>

      <NoiDungTrang className="lg:pl-71 lg:pr-78">
        <section className="pt-40 md:pt-56 lg:pt-54">
          <h2
            aria-label={`${viSao.tieuDe.truoc}${viSao.tieuDe.chuVe}${viSao.tieuDe.sau}`}
            className="type-display-64 flex items-start justify-center text-academics"
          >
            <span aria-hidden>{viSao.tieuDe.truoc}</span>
            {/* the "a" is a mosaic shard, because of course it is */}
            <HinhVe duLieu={chuA} className="mx-2 -mt-[0.06em] h-[1em] w-[0.67em] shrink-0" />
            <span aria-hidden>{viSao.tieuDe.sau}</span>
          </h2>
          <DuongKe trang="academics" className="mx-auto w-452 max-w-full" />
          <DoanVan dong={viSao.doan} className="mx-auto mt-24 lg:mt-30" />
          <div className="relative mt-24 md:mt-32 lg:ml-2 lg:mt-34">
            {/* phones: one big photo over two small ones, so it is a composition and not a queue */}
            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-16 lg:grid-cols-[410fr_414fr_414fr] lg:gap-26">
              {viSao.anh.map((anh, i) => (
                <LatManh key={anh.src} thuTu={i} className={i === 0 ? "col-span-2 sm:col-span-1" : ""}>
                  <AnhGoc anh={anh} className="aspect-[414/377] h-auto w-full lg:aspect-auto lg:h-377" />
                </LatManh>
              ))}
            </div>
            <HinhVe
              duLieu={vetGhep}
              className="pointer-events-none absolute left-5 top-3 hidden h-368 w-1276 lg:block"
            />
          </div>
        </section>

        <DuongKe trang="home" className="mt-40 md:mt-56 lg:mr-2 lg:mt-59" />

        <section className="grid gap-40 pt-32 md:gap-48 md:pt-48 lg:grid-cols-[412fr_414fr_412fr] lg:gap-26 lg:pt-27">
          {cot.map((muc) => {
            const chu = chuCot[muc.trang];
            return (
              // tablets read each one as a row: wordmark on the left, its blurb on the right
              <div key={muc.trang} className="md:grid md:grid-cols-2 md:gap-x-40 lg:block">
                <div>
                  <Link href={muc.duongDan} className="flex h-64 items-end">
                    <HienManh>
                      {chu && <HinhVe duLieu={chu.hinh} moTa={muc.ten} className={`max-w-full ${chu.co}`} />}
                    </HienManh>
                  </Link>
                  <DuongKe trang={muc.trang} className="mt-22" />
                </div>
                {/* the mockup gives this copy a 201px box and measures the rule below from it. min, so longer copy pushes the rule instead of running into it */}
                <DoanVan dong={muc.moTa} canDeu={false} className="mt-24 md:mt-8 lg:mt-36 lg:min-h-201" />
              </div>
            );
          })}
        </section>

        <DuongKe trang="home" className="mt-40 md:mt-56 lg:mr-2 lg:mt-73" />
      </NoiDungTrang>
    </>
  );
}
