import type { Metadata } from "next";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import TietMuc from "@/components/arts/TietMuc";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import { ngheThuat } from "@/data/arts";

export const metadata: Metadata = { title: "Vietnamese Zither" };

export default function TrangDanTranh() {
  const { tieuDe, doan, tietMuc } = ngheThuat.danTranh;
  return (
    <KhungNgheThuat>
      <section className="pt-40 lg:pl-4 lg:pt-53">
        <TieuDeNgheThuat>{tieuDe}</TieuDeNgheThuat>
        <DoanVan dong={doan} className="mt-20 lg:mt-21 lg:w-525" />
        <TietMuc
          tietMuc={tietMuc}
          className="mt-24 lg:mt-20 lg:grid-cols-2 lg:gap-19"
          coAnh="aspect-[638/435]"
        />
        <DuongKe trang="arts" className="mt-40 lg:mt-76" />
      </section>
    </KhungNgheThuat>
  );
}
