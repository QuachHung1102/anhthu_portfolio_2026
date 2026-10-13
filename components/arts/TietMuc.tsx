import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import LatManh from "@/components/effects/LatManh";
import type { AnhDuLieu, DongVan } from "@/data/types";

type Props = {
  tietMuc: { anh: AnhDuLieu; moTa: DongVan[]; dam?: boolean }[];
  className: string;
  coAnh: string;
};

// performances side by side: a still (video later) with its programme note
export default function TietMuc({ tietMuc, className, coAnh }: Props) {
  return (
    <div className={`grid gap-32 md:grid-cols-2 ${className}`}>
      {tietMuc.map((muc, i) => (
        <figure key={muc.anh.src}>
          <LatManh thuTu={i}>
            <AnhGoc anh={muc.anh} className={`h-auto w-full bg-slot ${coAnh}`} />
          </LatManh>
          <figcaption className="mt-12 lg:mt-7">
            <DoanVan dong={muc.moTa} className={muc.dam ? "font-bold" : ""} />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
