import Link from "next/link";
import DoanVan from "@/components/common/DoanVan";
import DuongKe from "@/components/common/DuongKe";
import HinhVe from "@/components/common/HinhVe";
import LatManh from "@/components/effects/LatManh";
import { ngheThuat } from "@/data/arts";
import { vaoKhung } from "@/data/khungAnh";

type Props = { className?: string; coKeTren?: boolean };

// Mosaic / Zither / Piano: the three doors out of every art page
export default function BoMon({ className = "", coKeTren }: Props) {
  return (
    <nav aria-label="Art disciplines" className={className}>
      {coKeTren && <DuongKe trang="arts" />}
      <div className={`grid gap-40 md:gap-48 lg:grid-cols-3 lg:gap-24 ${coKeTren ? "mt-24 lg:mt-12" : ""}`}>
        {ngheThuat.boMon.map((mon, i) => (
          // tablets read each door as a row: name on the left, what is behind it on the right
          <div key={mon.duongDan} className="md:grid md:grid-cols-2 md:gap-x-40 lg:block">
            <div>
              {/* same framed photos as the home columns, so the two pages rhyme */}
              <Link href={mon.duongDan} tabIndex={-1} className="mb-16 block lg:mb-24">
                <LatManh thuTu={i}>
                  <HinhVe duLieu={vaoKhung(i as 0 | 1 | 2, mon.anh, 0.3)} moTa={mon.anh.moTa} className="h-auto w-full" />
                </LatManh>
              </Link>
              <Link
                href={mon.duongDan}
                className="type-display-64 block py-4 text-arts transition-transform duration-300 ease-out hover:translate-x-8 active:translate-x-3 lg:whitespace-nowrap lg:py-0"
              >
                {"tenNgan" in mon ? (
                  <>
                    <span className="lg:hidden">{mon.ten}</span>
                    <span className="hidden lg:inline">{mon.tenNgan}</span>
                  </>
                ) : (
                  mon.ten
                )}
              </Link>
              <DuongKe trang="arts" className="mt-6 lg:mt-13" />
            </div>
            {/* the mockup gives this copy a 201px box and measures the rule below from it. min, so longer copy pushes the rule instead of running into it */}
            <DoanVan dong={mon.moTa} className="mt-16 md:mt-8 lg:mt-16 lg:min-h-201" />
          </div>
        ))}
      </div>
      <DuongKe trang="arts" className="mt-40 lg:mt-73" />
    </nav>
  );
}
