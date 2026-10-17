import type { VideoDuLieu } from "@/data/types";

type Props = { video: VideoDuLieu; className?: string };

// the no-cookie player, and it only loads once you scroll near it
export default function VideoYoutube({ video, className = "" }: Props) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
      title={video.ten}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className={`block aspect-video h-auto w-full border-0 bg-black ${className}`}
    />
  );
}
