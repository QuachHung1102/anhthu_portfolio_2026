import Image from "next/image";
import type { AnhDuLieu } from "@/data/types";

type Props = { anh: AnhDuLieu; className?: string; uuTien?: boolean };

// the file exactly as uploaded. next/image is only here for lazy loading and sizing
export default function AnhGoc({ anh, className = "", uuTien }: Props) {
  return (
    <Image
      src={anh.src}
      width={anh.rong}
      height={anh.cao}
      alt={anh.moTa}
      draggable={false}
      preload={uuTien}
      className={`object-cover ${className}`}
    />
  );
}
