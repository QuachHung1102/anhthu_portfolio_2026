import type { ReactNode } from "react";
import DuongKe from "@/components/common/DuongKe";
import NoiDungTrang from "@/components/common/NoiDungTrang";
import ChuTach from "@/components/effects/ChuTach";
import BoMon from "./BoMon";

// your section on top, the three doors to the other disciplines at the bottom
export default function KhungNgheThuat({ children }: { children: ReactNode }) {
  return (
    <NoiDungTrang className="lg:pl-71 lg:pr-80">
      {children}
      <BoMon coKeTren className="mt-24 lg:mt-33" />
    </NoiDungTrang>
  );
}

type TieuDeProps = { children: ReactNode; coKeTren?: boolean };

// red heading sitting on a rule (or between two)
export function TieuDeNgheThuat({ children, coKeTren }: TieuDeProps) {
  return (
    <>
      {coKeTren && <DuongKe trang="arts" />}
      <ChuTach className="type-display-64 pl-4 text-arts lg:mt-16">{children}</ChuTach>
      <DuongKe trang="arts" className="mt-3" />
    </>
  );
}
