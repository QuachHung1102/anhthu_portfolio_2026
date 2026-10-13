import AnhGoc from "@/components/common/AnhGoc";
import DoanVan from "@/components/common/DoanVan";
import HinhVe from "@/components/common/HinhVe";
import KhoiMoDau from "@/components/common/KhoiMoDau";
import NutKeuGoi from "@/components/common/NutKeuGoi";
import { ngheThuat } from "@/data/arts";
import { tieuDeNgheThuat } from "@/data/artwork/arts-title";

// same red hero on all four art pages. it lives in the arts layout, so it stays put between them
export default function MoDauNgheThuat() {
  const { gioiThieu, nutKeuGoi, anhBia } = ngheThuat;
  return (
    <KhoiMoDau trang="arts">
      {/* tablets: words on the left, the photo takes the rest and matches their height */}
      <h1 data-intro="tiles" className="mt-24 md:col-span-6 md:row-start-2 md:mt-32 tl:col-span-5 lg:absolute lg:left-70 lg:top-190 lg:mt-0 lg:w-460">
        <HinhVe duLieu={tieuDeNgheThuat} moTa="Art" className="h-auto w-full max-w-300 tl:max-w-none" />
      </h1>
      <div data-intro="text" className="mt-16 text-cream md:col-span-6 md:row-start-3 tl:col-span-5 lg:absolute lg:left-75 lg:top-418 lg:mt-0 lg:w-414">
        <DoanVan dong={gioiThieu} canDeu={false} />
      </div>
      <div data-intro="cta" className="mt-24 md:col-span-6 md:row-start-4 md:self-start tl:col-span-5 lg:absolute lg:left-71 lg:top-632 lg:mt-0">
        <NutKeuGoi trang="arts" nhan={nutKeuGoi} />
      </div>
      <div
        data-intro="media"
        className="relative mt-28 overflow-hidden rounded-[24px] md:col-span-6 md:col-start-7 md:row-span-3 md:row-start-2 md:mt-32 md:min-h-260 tl:col-span-7 tl:col-start-6 lg:absolute lg:left-564 lg:top-178 lg:mt-0 lg:h-537 lg:min-h-0 lg:w-796 lg:rounded-photo"
      >
        <AnhGoc anh={anhBia} uuTien className="aspect-[796/537] h-auto w-full md:absolute md:inset-0 md:aspect-auto md:h-full" />
      </div>
    </KhoiMoDau>
  );
}
