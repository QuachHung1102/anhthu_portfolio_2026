import type { Metadata } from "next";
import KhungNgheThuat, { TieuDeNgheThuat } from "@/components/arts/KhungNgheThuat";
import TietMuc from "@/components/arts/TietMuc";
import DuongKe from "@/components/common/DuongKe";
import { ngheThuat } from "@/data/arts";

export const metadata: Metadata = { title: "Vietnamese Zither" };

export default function TrangDanTranh() {
  const { tieuDe, tietMuc } = ngheThuat.danTranh;
  return (
    <KhungNgheThuat>
      <section className="pt-40 lg:pl-4 lg:pt-53">
        <TieuDeNgheThuat>{tieuDe}</TieuDeNgheThuat>
        {/* the intro moved up into the hero, so the videos sit right under the title */}
        <TietMuc
          tietMuc={tietMuc}
          className="mt-24 lg:mt-40 lg:grid-cols-2 lg:gap-19"
        />
        <DuongKe trang="arts" className="mt-40 lg:mt-76" />
      </section>
    </KhungNgheThuat>
  );
}
