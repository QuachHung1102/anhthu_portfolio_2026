import Link from "next/link";
import { site } from "@/data/site";
import type { Trang } from "@/data/types";
import BangMenu from "./BangMenu";
import { mauChu, mauNen } from "./colors";

type Props = { trang: Trang };

const VIEN_THUOC = "type-display-24 flex h-44 items-center rounded-full px-20 transition-transform duration-200 hover:-translate-y-2 lg:h-51 lg:px-25";

function DanhSach({ trang, className }: Props & { className: string }) {
  return (
    <ul className={className}>
      {site.dieuHuong.map((muc) => {
        const dangXem = muc.trang === trang;
        return (
          <li key={muc.trang}>
            <Link
              href={muc.duongDan}
              aria-current={dangXem ? "page" : undefined}
              className={`${VIEN_THUOC} ${
                dangXem ? "border-2 border-cream text-cream" : `bg-cream ${mauChu[muc.trang]}`
              }`}
            >
              {muc.nhan}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// tablets and up get the pills, phones get a native popover. zero state to babysit
export default function ThanhDieuHuong({ trang }: Props) {
  // Next keeps visited pages in the DOM (hidden), one per route, so the menu id has to differ per page.
  // useId is no help here: every page hands out the same one
  const maMenu = `menu-${trang}`;
  return (
    <nav aria-label="Main" className="flex h-70 items-center justify-between border-y-[3px] border-cream lg:h-97">
      {/* the name is one line of type, so the link is padded out to a thumb's height */}
      <Link href="/" className="type-display-24 flex min-h-44 items-center text-cream lg:min-h-0">
        {site.ten}
      </Link>
      <DanhSach trang={trang} className="hidden gap-8 md:flex lg:gap-11" />
      <button
        type="button"
        popoverTarget={maMenu}
        className={`type-display-24 flex h-44 items-center rounded-full bg-cream px-20 md:hidden ${mauChu[trang]}`}
      >
        Menu
      </button>
      <BangMenu
        id={maMenu}
        className={`inset-auto right-16 top-92 m-0 rounded-[20px] border-[3px] border-cream p-16 backdrop:bg-black/30 md:hidden ${mauNen[trang]}`}
      >
        <DanhSach trang={trang} className="flex flex-col items-stretch gap-10" />
      </BangMenu>
    </nav>
  );
}
