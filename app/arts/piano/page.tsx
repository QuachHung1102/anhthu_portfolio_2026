import type { Metadata } from "next";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import TietMuc from "@/components/arts/TietMuc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import { ngheThuat } from "@/data/arts";

export const metadata: Metadata = { title: "Piano" };

export default function TrangPiano() {
  const { tieuDe, doan, tietMuc } = ngheThuat.piano;
  return (
    <KhungNgheThuat>
      <section className="pt-40 lg:pl-4 lg:pt-53">
        <TieuDeNgheThuat>{tieuDe}</TieuDeNgheThuat>
        <DoanVan dong={doan} className="mt-20 lg:mt-21" />
        <DuongKe trang="arts" className="mt-16 lg:mt-10" />
        <TietMuc
          tietMuc={tietMuc}
          className="mt-32 lg:mt-54 lg:grid-cols-[621fr_635fr] lg:gap-34 lg:pl-2"
          coAnh="aspect-[635/423]"
        />
        <DuongKe trang="arts" className="mt-40 lg:mt-153" />
      </section>
    </KhungNgheThuat>
  );
}
