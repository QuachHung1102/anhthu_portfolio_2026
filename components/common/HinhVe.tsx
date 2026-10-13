import { useId } from "react";
import type { HinhVeDuLieu } from "@/data/types";

type Props = { duLieu: HinhVeDuLieu; className?: string; moTa?: string };

// inline SVG, one path per tile, so the tiles can move on their own later
export default function HinhVe({ duLieu, className, moTa }: Props) {
  const ma = useId();
  return (
    <svg
      viewBox={`0 0 ${duLieu.rong} ${duLieu.cao}`}
      className={className}
      role={moTa ? "img" : undefined}
      aria-label={moTa}
      aria-hidden={moTa ? undefined : true}
    >
      {duLieu.manh.map((manh, i) =>
        manh.anh ? (
          <g key={i}>
            <clipPath id={`${ma}-${i}`}>
              <path d={manh.d} />
            </clipPath>
            <image
              href={manh.anh.src}
              x={manh.anh.x}
              y={manh.anh.y}
              width={manh.anh.rong}
              height={manh.anh.cao}
              preserveAspectRatio="none"
              clipPath={`url(#${ma}-${i})`}
            />
          </g>
        ) : (
          <path
            key={i}
            d={manh.d}
            fill={manh.mau}
            fillRule={manh.chanLe ? "evenodd" : undefined}
            data-piece={manh.mau}
          />
        ),
      )}
    </svg>
  );
}
