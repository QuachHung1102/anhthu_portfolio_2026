import { vaoChanDung } from "@/data/khungAnh";
import type { AnhDuLieu } from "@/data/types";
import HinhVe from "./HinhVe";

type Props = { anh: AnhDuLieu; doc?: number; className?: string };

// the big framed photo on the right of a hero, cut like the About me portrait.
// wide screens: exactly where the home portrait sits. tablets: the right half, rows set by the page
export default function AnhMoDau({ anh, doc, className = "" }: Props) {
  return (
    <div
      data-intro="media"
      className={`mx-auto mt-28 max-w-520 md:col-span-6 md:col-start-7 md:mx-0 md:mt-20 md:max-w-none md:self-center tl:col-span-5 tl:col-start-8 lg:absolute lg:left-722 lg:top-136 lg:mt-0 lg:w-708 ${className}`}
    >
      <HinhVe duLieu={vaoChanDung(anh, doc)} moTa={anh.moTa} className="h-auto w-full" />
    </div>
  );
}
