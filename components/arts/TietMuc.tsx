import DoanVan from "@/components/common/DoanVan";
import VideoYoutube from "@/components/common/VideoYoutube";
import LatManh from "@/components/effects/LatManh";
import type { DongVan, VideoDuLieu } from "@/data/types";

type Props = {
  tietMuc: { video: VideoDuLieu; moTa: DongVan[] }[];
  className: string;
};

// performances side by side: the video with its programme note
export default function TietMuc({ tietMuc, className }: Props) {
  return (
    <div className={`grid gap-32 md:grid-cols-2 ${className}`}>
      {tietMuc.map((muc, i) => (
        <figure key={muc.video.id}>
          <LatManh thuTu={i % 2}>
            <VideoYoutube video={muc.video} />
          </LatManh>
          <figcaption className="mt-12 lg:mt-7">
            <DoanVan dong={muc.moTa} />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
