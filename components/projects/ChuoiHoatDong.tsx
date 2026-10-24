"use client";

import { useRef, useState, type CSSProperties } from "react";
import AnhGoc from "@/components/common/AnhGoc";
import DuongKe from "@/components/common/DuongKe";
import LatManh from "@/components/effects/LatManh";
import type { HoatDong } from "@/data/projects";
import type { AnhDuLieu } from "@/data/types";

// the long arrow from the mockup. dai = the thin one next to "More detail"
function MuiTen({ trai, dai }: { trai?: boolean; dai?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 52 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={dai ? 3 : 4.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-auto shrink-0 ${dai ? "w-40 lg:w-50" : "w-44 lg:w-50"} ${trai ? "-scale-x-100" : ""}`}
    >
      <path d="M2 11h47M39 2l10 9-10 9" />
    </svg>
  );
}

type DaiAnhProps = { anh: AnhDuLieu[]; className?: string; nguoc?: boolean };

// photos drifting past in a strip. the list is laid twice and each tile carries the gap on its right,
// so sliding by exactly half lands on the copy and the loop has no seam.
// how many show at once comes from --so, the gap from --khe, both set by the caller
function DaiAnh({ anh, className = "", nguoc }: DaiAnhProps) {
  let ds = anh;
  while (ds.length < 4) ds = [...ds, ...anh]; // a short list still has to fill the strip
  const kieu = { "--cuon-lau": `${ds.length * 5}s`, animationDirection: nguoc ? "reverse" : undefined } as CSSProperties;
  return (
    <div className={`@container overflow-hidden motion-reduce:overflow-x-auto ${className}`}>
      <ul className="cuon-anh flex w-max" style={kieu}>
        {[...ds, ...ds].map((a, i) => {
          const banSao = i >= anh.length;
          return (
            <li
              key={i}
              aria-hidden={banSao || undefined}
              className={`w-[calc((100cqw+var(--khe))/var(--so))] shrink-0 pr-(--khe) ${banSao ? "motion-reduce:hidden" : ""}`}
            >
              <AnhGoc anh={a} className="aspect-[371/257] h-auto w-full rounded-[calc(var(--spacing)*13)]" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const ANH_LON = "aspect-[560/370] h-auto w-full";

// seven activities, one at a time. each has a short face (overview) and a long one (process and achievements)
export default function ChuoiHoatDong({ hoatDong }: { hoatDong: HoatDong[] }) {
  const [so, datSo] = useState(0);
  const [chiTiet, datChiTiet] = useState(false);
  // which side the new slide comes from: 1 = from the right, -1 = from the left, 0 = same slide, other face
  const [huong, datHuong] = useState(0);
  const diemCham = useRef<number | null>(null);

  const n = hoatDong.length;
  const den = (moi: number, tu: number) => {
    datHuong(tu);
    datSo((moi + n) % n);
    datChiTiet(false);
  };
  const lat = (moRa: boolean) => {
    datHuong(0);
    datChiTiet(moRa);
  };

  const hd = hoatDong[so];
  const nuaAnh = Math.ceil(hd.anhNho.length / 2);
  // too few photos to split into two different rows: both rows get all of them
  const [hang1, hang2] = hd.anhNho.length >= 8 ? [hd.anhNho.slice(0, nuaAnh), hd.anhNho.slice(nuaAnh)] : [hd.anhNho, hd.anhNho];

  const nut = "type-display-24 -m-8 flex items-center gap-12 p-8 transition-opacity hover:opacity-70";

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Extracurricular activities" className="mt-24 lg:mt-42">
      <div
        className="touch-pan-y rounded-[calc(var(--spacing)*22)] border-3 border-projects p-16 md:p-24 lg:min-h-694 lg:px-22 lg:pb-26 lg:pt-21"
        // a sideways swipe on a phone turns the page
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") diemCham.current = e.clientX;
        }}
        onPointerUp={(e) => {
          const x0 = diemCham.current;
          diemCham.current = null;
          if (x0 === null || Math.abs(e.clientX - x0) < 60) return;
          if (e.clientX < x0) den(so + 1, 1);
          else den(so - 1, -1);
        }}
      >
        <div
          key={`${so}-${chiTiet}`}
          aria-live="polite"
          className="truot-vao grid gap-20 md:grid-cols-2 md:gap-x-24 lg:grid-cols-[560fr_562fr] lg:gap-x-26 lg:gap-y-14"
          style={{ "--tu": `${huong * 40}px` } as CSSProperties}
        >
          <div>
            <LatManh className="rounded-[calc(var(--spacing)*13)]">
              <AnhGoc anh={hd.anh} className={ANH_LON} />
            </LatManh>
            {chiTiet && (
              <div className="mt-8 grid gap-8 [--khe:calc(var(--spacing)*8)] [--so:3] lg:mt-4 lg:gap-4">
                <DaiAnh anh={hang1} />
                <DaiAnh anh={hang2} nguoc />
              </div>
            )}
          </div>

          <div className="flex flex-col text-projects lg:pt-27">
            {/* overview face: name and overview sit in the middle of the column (Doc, 2026-10-21) */}
            <div className={chiTiet ? "" : "lg:my-auto"}>
              <h3 className="type-display-48">{hd.ten}</h3>
              {/* spelled out under the name: a link hidden in the title went unnoticed */}
              {hd.lienKet && (
                <a href={hd.lienKet} target="_blank" rel="noreferrer" className="type-body -my-11 inline-block py-11 underline underline-offset-2 hover:no-underline">
                  {hd.lienKet.replace(/^https?:\/\/(www\.)?/, "")} ↗
                </a>
              )}
              {chiTiet ? (
                <div className="type-body mt-12 lg:mt-26 lg:w-525">
                  <p className="font-bold">Process:</p>
                  <ul className="list-disc pl-27">
                    {hd.quaTrinh.map((dong) => (
                      <li key={dong}>{dong}</li>
                    ))}
                  </ul>
                  <p className="mt-8 font-bold">Achievements:</p>
                  <ul className="list-disc pl-27">
                    {hd.thanhTich.map((dong) => (
                      <li key={dong}>{dong}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="type-body mt-12 lg:mt-4 lg:w-525">
                  <p className="font-bold">Overview</p>
                  <p>{hd.tongQuan}</p>
                </div>
              )}
            </div>
            <div className="mt-24 flex pt-0 lg:mt-auto lg:pt-24">
              {chiTiet ? (
                <button type="button" className={`${nut} lg:ml-14`} aria-expanded onClick={() => lat(false)}>
                  <MuiTen trai dai />
                  Back overview
                </button>
              ) : (
                <button type="button" className={nut} aria-expanded={false} onClick={() => lat(true)}>
                  More detail
                  <MuiTen dai />
                </button>
              )}
            </div>
          </div>

          {!chiTiet && (
            <DaiAnh
              anh={hd.anhNho}
              className="[--khe:calc(var(--spacing)*12)] [--so:2] md:col-span-2 md:[--so:3] lg:[--khe:calc(var(--spacing)*17)]"
            />
          )}
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-40 text-projects lg:mt-26 lg:gap-41">
        <button type="button" aria-label="Previous activity" className="p-12 transition-transform hover:-translate-x-4" onClick={() => den(so - 1, -1)}>
          <MuiTen trai />
        </button>
        <button type="button" aria-label="Next activity" className="p-12 transition-transform hover:translate-x-4" onClick={() => den(so + 1, 1)}>
          <MuiTen />
        </button>
      </div>

      <DuongKe trang="projects" className="mt-20 lg:mt-26" />
      <ol className="flex flex-wrap justify-center gap-6 py-24 md:gap-12 lg:gap-19 lg:py-46">
        {hoatDong.map((muc, k) => {
          const dangXem = k === so;
          return (
            <li key={muc.ten}>
              <button
                type="button"
                aria-label={`${k + 1}. ${muc.ten}`}
                aria-current={dangXem || undefined}
                onClick={() => den(k, Math.sign(k - so))}
                className={`grid size-40 place-items-center rounded-full border border-projects font-display text-[1.375rem] leading-none transition-colors md:size-56 md:text-[1.75rem] lg:size-64 lg:text-[calc(var(--spacing)*48)] ${
                  dangXem ? "bg-white text-projects" : "bg-projects text-white hover:bg-white hover:text-projects"
                }`}
              >
                {k + 1}
              </button>
            </li>
          );
        })}
      </ol>
      <DuongKe trang="projects" />
    </div>
  );
}
