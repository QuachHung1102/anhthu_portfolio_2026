import type { Metadata } from "next";
import BoMon from "@/components/arts/BoMon";
import DuongKe from "@/components/common/DuongKe";
import NoiDungTrang from "@/components/common/NoiDungTrang";

export const metadata: Metadata = { title: "Arts" };

export default function TrangNgheThuat() {
  return (
    <NoiDungTrang className="pt-32 lg:pl-71 lg:pr-80 lg:pt-45">
      <BoMon />
      {/* the mockup ends on a double rule, so we do too */}
      <DuongKe trang="arts" className="mt-29" />
    </NoiDungTrang>
  );
}
