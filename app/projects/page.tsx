import type { Metadata } from "next";
import BangTruot from "@/components/arts/BangTruot";
import AnhGoc from "@/components/common/AnhGoc";
import AnhMoDau from "@/components/common/AnhMoDau";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import VideoYoutube from "@/components/common/VideoYoutube";
import ChuTach from "@/components/effects/ChuTach";
import LatManh from "@/components/effects/LatManh";
import ChuoiHoatDong from "@/components/projects/ChuoiHoatDong";
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

export default function TrangDuAn() {
  const { gioiThieu, nutKeuGoi, anhBia, phatTrien, thucTap, truyenThong, ngoaiKhoa } = duAn;
  return (
    <>
      <KhoiMoDau trang="projects">
        <h1 data-intro="tiles" className="mt-40 md:col-span-6 md:row-start-2 md:mt-32 md:self-end tl:col-span-7 lg:absolute lg:left-71 lg:top-190 lg:mt-0 lg:w-620">
          <HinhVe duLieu={tieuDeDuAn} moTa="Projects" className="h-auto w-full" />
        </h1>
        <div data-intro="text" className="mt-16 md:col-span-6 md:row-start-3 tl:col-span-7 lg:absolute lg:left-71 lg:top-380 lg:mt-0 lg:w-600">
          <DoanVan dong={gioiThieu} className="text-cream" />
        </div>
        <div data-intro="cta" className="relative z-10 mt-24 md:col-span-6 md:row-start-4 md:self-start tl:col-span-7 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
          <NutKeuGoi trang="projects" nhan={nutKeuGoi} />
        </div>
        <AnhMoDau anh={anhBia} doc={0.15} className="md:row-span-3 md:row-start-2" />
      </KhoiMoDau>

      <NoiDungTrang className="text-projects [--ink:var(--color-projects-ink)] lg:pl-110 lg:pr-132">
        <section className="pt-48 md:pt-64 lg:pt-117">
          <ChuTach className="type-display-64">{phatTrien.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          {phatTrien.muc.map((muc) => (
            <div key={muc.ten}>
              {muc.video && muc.anh ? (
                // Budget Buddy: the demo plays on the left (like the zither videos), its two certificates under it
                <div className="grid gap-20 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:grid-cols-[640fr_558fr] lg:gap-x-40 lg:pb-60 lg:pt-29">
                  <div className="lg:mt-9">
                    <LatManh>
                      <VideoYoutube video={muc.video} />
                    </LatManh>
                    <div className="mt-8 flex gap-1">
                      {muc.anh.map((anh, i) => (
                        <LatManh key={anh.src} thuTu={i} className="w-0 flex-1">
                          <AnhGoc anh={anh} className="aspect-[359/254] h-auto w-full" />
                        </LatManh>
                      ))}
                    </div>
                  </div>
                  <div>
                    <TenDuAn ten={muc.ten} />
                    <DoanVan dong={muc.moTa} className="mt-16 lg:mt-38" />
                  </div>
                </div>
              ) : (
                <div className="grid gap-20 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:min-h-229 lg:grid-cols-[673fr_525fr] lg:gap-0 lg:pb-30 lg:pt-66">
                  <div className="lg:w-525">
                    <TenDuAn ten={muc.ten} />
                  </div>
                  <DoanVan dong={muc.moTa} />
                </div>
              )}
              <DuongKe trang="projects" />
            </div>
          ))}
        </section>

        <section className="pt-48 md:pt-64 lg:pt-72">
          <ChuTach className="type-display-64">{thucTap.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          {/* words left, certificates right: the Vietnamese original and its notarized English copy slide */}
          <div className="grid gap-20 py-28 md:grid-cols-2 md:gap-x-40 md:py-36 lg:grid-cols-[525fr_589fr] lg:gap-x-84 lg:pb-66 lg:pt-40">
            <div>
              <TenDuAn ten={thucTap.ten} />
              <DoanVan dong={thucTap.moTa} className="mt-16 lg:mt-26" />
            </div>
            <LatManh>
              <BangTruot nhan="Internship certificates" mau="projects">
                {thucTap.anh.map((anh) => (
                  <AnhGoc key={anh.src} anh={anh} className="aspect-[589/416] h-auto w-full bg-projects object-contain" />
                ))}
              </BangTruot>
            </LatManh>
          </div>
          <DuongKe trang="projects" />
        </section>

        <section className="pt-48 md:pt-64 lg:pt-72">
          <ChuTach className="type-display-64">{truyenThong.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          <div className="grid gap-20 pt-28 md:grid-cols-2 md:gap-x-40 md:pt-36 lg:min-h-291 lg:grid-cols-[681fr_517fr] lg:gap-0 lg:pt-65">
            <TenDuAn ten={truyenThong.ten} lienKet={truyenThong.lienKet} />
            <DoanVan dong={truyenThong.moTa} />
          </div>
          <div className="mt-24 grid gap-16 sm:grid-cols-2 md:mt-36 md:gap-24 lg:mt-18 lg:gap-x-84 lg:gap-y-34">
            {truyenThong.video.map((video, i) => (
              <LatManh key={video.id} thuTu={i % 2}>
                <VideoYoutube video={video} />
              </LatManh>
            ))}
          </div>
          <DuongKe trang="projects" className="mt-48 lg:mt-100" />
        </section>

        <section className="pt-48 md:pt-64 lg:pt-64">
          <ChuTach className="type-display-64">{ngoaiKhoa.tieuDe}</ChuTach>
          <DuongKe trang="projects" className="mt-12 lg:mt-28" />
          <DuongKe trang="projects" className="mt-20 lg:mt-37" />
          <ChuoiHoatDong hoatDong={ngoaiKhoa.hoatDong} />
        </section>
      </NoiDungTrang>
    </>
  );
}
