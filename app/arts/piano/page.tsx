import type { Metadata } from "next";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import TietMuc from "@/components/arts/TietMuc";
import DuongKe from "@/components/common/DuongKe";
import XemTruoc from "@/components/common/XemTruoc";
import { ngheThuat } from "@/data/arts";

export const metadata: Metadata = { title: "Piano" };

export default function TrangPiano() {
  const { tieuDe, doan, tietMuc } = ngheThuat.piano;
  return (
    <KhungNgheThuat>
      <section className="pt-40 lg:pl-4 lg:pt-53">
        <TieuDeNgheThuat>{tieuDe}</TieuDeNgheThuat>
        <p className="type-body mt-20 max-w-[62ch] text-pretty lg:mt-21 lg:max-w-none">
          {doan.map((manh) =>
            typeof manh === "string" ? (
              manh
            ) : (
              <XemTruoc key={manh.lienKet} anh={manh.anh}>
                <a href={manh.lienKet} target="_blank" rel="noreferrer" className="text-arts underline underline-offset-2">
                  {manh.chu}
                </a>
              </XemTruoc>
            ),
          )}
        </p>
        <DuongKe trang="arts" className="mt-16 lg:mt-10" />
        {/* equal columns, so two 16:9 players side by side come out the same height */}
        <TietMuc
          tietMuc={tietMuc}
          className="mt-32 lg:mt-54 lg:grid-cols-2 lg:gap-x-34 lg:gap-y-64 lg:pl-2"
        />
        <DuongKe trang="arts" className="mt-40 lg:mt-153" />
      </section>
    </KhungNgheThuat>
  );
}
