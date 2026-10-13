import type { Metadata } from "next";
import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import ChuTach from "@/components/effects/ChuTach";
import LatManh from "@/components/effects/LatManh";
import { tieuDeDuAn } from "@/data/artwork/projects-title";
import { duAn } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

type LienKetProps = { ten: string; lienKet?: string };

// project name, underlined and clickable when it has somewhere to go.
// the padding makes it a thumb-sized target, the negative margin hands the space straight back
function TenDuAn({ ten, lienKet }: LienKetProps) {
  if (!lienKet) return <p className="type-label">{ten}</p>;
  return (
    <a href={lienKet} target="_blank" rel="noreferrer" className="type-label -my-11 block py-11 underline underline-offset-2 hover:no-underline">
      {ten}
    </a>
  );
}

type HoatDong = (typeof duAn.ngoaiKhoa.hang)[number][number];

// one club or charity. the role label wanders around the mockup, so kieuVaiTro says where it sits
function TheHoatDong({ hoatDong, thuTu }: { hoatDong: HoatDong; thuTu: number }) {
  const { anh, ten, vaiTro, kieuVaiTro, moTa } = hoatDong;
  const nhanVaiTro = vaiTro && <p className="type-label shrink-0">{vaiTro}</p>;
  return (
    <article className="grid md:row-span-4 md:grid-rows-subgrid">
      <div className="flex items-start justify-end md:pb-12 lg:pb-28">{kieuVaiTro === "tren" && nhanVaiTro}</div>
      <LatManh thuTu={thuTu}>
        <AnhGoc anh={anh} className="aspect-[560/390] h-auto w-full" />
      </LatManh>
      <div className="mt-20 lg:mt-34">
        <div className="relative">
          <h3 className="type-sub">
            {ten.map((dong) => (
              <span key={dong.chu} className="block">
                {dong.chu}
              </span>
            ))}
          </h3>
          {/* parked on the last line of the name, bottom right, like the mockup.
              a narrower card has no spare room on that line, so there it drops underneath */}
          {kieuVaiTro === "canh" && <div className="mt-4 lg:absolute lg:bottom-6 lg:right-0 lg:mt-0">{nhanVaiTro}</div>}
        </div>
        {kieuVaiTro === "duoiPhai" && <div className="mt-4 flex lg:mt-11 lg:justify-end">{nhanVaiTro}</div>}
        {kieuVaiTro === "duoiTrai" && <div className="mt-4">{nhanVaiTro}</div>}
      </div>
      <DoanVan dong={moTa} className="mt-16 lg:mt-18" />
    </article>
  );
}

export default function TrangDuAn() {
  const { nutKeuGoi, phatTrien, youtube, ngoaiKhoa } = duAn;
  return (
    <>
      <KhoiMoDau trang="projects">
        <h1 data-intro="tiles" className="mt-40 md:col-span-full md:mt-72 lg:absolute lg:left-71 lg:top-343 lg:mt-0 lg:w-1276">
          <HinhVe duLieu={tieuDeDuAn} moTa="Project" className="h-auto w-full" />
        </h1>
        <div data-intro="cta" className="mt-24 md:col-span-full md:mt-32 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
          <NutKeuGoi trang="projects" nhan={nutKeuGoi} />
        </div>
      </KhoiMoDau>

      <NoiDungTrang className="text-projects [--ink:var(--color-projects-ink)] lg:pl-110 lg:pr-132">
        <section className="pt-48 md:pt-64 lg:pt-117">
          <ChuTach className="type-display-64">{phatTrien.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          {phatTrien.muc.map((muc) => (
            <div key={muc.ten}>
              <div className={`grid gap-20 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:grid-cols-[673fr_525fr] lg:gap-0 ${muc.anh ? "lg:pb-48 lg:pt-39" : "lg:min-h-229 lg:pb-30 lg:pt-66"}`}>
                {muc.anh ? (
                  <div className="lg:w-589">
                    <LatManh>
                      <AnhGoc anh={muc.anh} className="aspect-[589/416] h-auto w-full bg-projects" />
                    </LatManh>
                  </div>
                ) : (
                  <div className="lg:w-525">
                    <TenDuAn ten={muc.ten} lienKet={muc.lienKet} />
                  </div>
                )}
                <div>
                  {muc.anh && <TenDuAn ten={muc.ten} lienKet={muc.lienKet} />}
                  <DoanVan dong={muc.moTa} className={muc.anh ? "mt-16 lg:mt-37" : ""} />
                </div>
              </div>
              <DuongKe trang="projects" />
            </div>
          ))}
        </section>

        <section className="pt-48 md:pt-64 lg:pt-72">
          <ChuTach className="type-display-64">{youtube.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          <div className="grid gap-20 pt-28 md:grid-cols-2 md:gap-x-40 md:pt-36 lg:min-h-291 lg:grid-cols-[681fr_517fr] lg:gap-0 lg:pt-65">
            <TenDuAn ten={youtube.ten} lienKet={youtube.lienKet} />
            <DoanVan dong={youtube.moTa} />
          </div>
          <div className="mt-24 grid gap-16 sm:grid-cols-2 md:mt-36 md:gap-24 lg:mt-18 lg:gap-x-84 lg:gap-y-34">
            {youtube.anh.map((anh, i) => (
              <LatManh key={anh.src} thuTu={i % 2}>
                <AnhGoc anh={anh} className="aspect-[557/290] h-auto w-full bg-projects" />
              </LatManh>
            ))}
          </div>
          <DuongKe trang="projects" className="mt-48 lg:mt-100" />
        </section>

        <section className="pt-48 md:pt-64 lg:pt-64">
          <ChuTach className="type-display-64">{ngoaiKhoa.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          <DuongKe trang="projects" className="mt-20 lg:mt-37" />
          {ngoaiKhoa.hang.map((hang, i) => (
            <div key={i}>
              <div className="relative grid gap-48 py-28 md:grid-cols-2 md:gap-x-48 md:gap-y-0 md:py-36 lg:gap-x-78 lg:pb-40 lg:pt-16">
                {hang.map((hoatDong, thuTu) => (
                  <TheHoatDong key={hoatDong.anh.src} hoatDong={hoatDong} thuTu={thuTu} />
                ))}
                <DuongKe trang="projects" doc className="absolute bottom-18 left-1/2 top-16 hidden md:block" />
              </div>
              {i < ngoaiKhoa.hang.length - 1 && <DuongKe trang="projects" />}
            </div>
          ))}
        </section>
      </NoiDungTrang>
    </>
  );
}
