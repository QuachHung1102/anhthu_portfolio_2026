import { khungCot } from "./artwork/column-frames";
import { chanDung } from "./artwork/home-portrait";
import type { AnhDuLieu, HinhVeDuLieu } from "./types";

const KEM = "#FFF7BC";

// drops a photo into one of the three column frames from the mockup: cream card, photo cut to the shards.
// the photo covers the shards' box like CSS object-cover; doc slides it up (0) or down (1) when faces sit high
// one card size for all three: the mockup drew them 410x285, 421x296 and 411x296, so the titles under them
// never lined up. each frame is stretched into this box (3% at most); the photo is placed after, so it keeps its shape
const RONG = 412;
const CAO = 294;
const gian = (d: string, sx: number, sy: number) => {
  let i = 0;
  return d.replace(/-?d+(.d+)?/g, (n) => String(Math.round(+n * (i++ % 2 ? sy : sx) * 100) / 100));
};

export function vaoKhung(so: 0 | 1 | 2, anh: AnhDuLieu, doc = 0.5): HinhVeDuLieu {
  const goc = khungCot[so];
  const sx = RONG / goc.rong;
  const sy = CAO / goc.cao;
  const k = { rong: RONG, cao: CAO, nen: gian(goc.nen, sx, sy) };
  const o = { d: gian(goc.anh.d, sx, sy), x: goc.anh.x * sx, y: goc.anh.y * sy, rong: goc.anh.rong * sx, cao: goc.anh.cao * sy };
  const ty = Math.max(o.rong / anh.rong, o.cao / anh.cao);
  const rong = anh.rong * ty;
  const cao = anh.cao * ty;
  return {
    rong: k.rong,
    cao: k.cao,
    manh: [
      { d: k.nen, mau: KEM },
      { d: o.d, anh: { src: anh.src, x: o.x + (o.rong - rong) / 2, y: o.y + (o.cao - cao) * doc, rong, cao } },
    ],
  };
}

// box around a straight-edged path (the shard outlines here are M/L only)
function hop(d: string) {
  const so = d.match(/-?\d+(\.\d+)?/g)!.map(Number);
  const xs = so.filter((_, i) => i % 2 === 0);
  const ys = so.filter((_, i) => i % 2 === 1);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, rong: Math.max(...xs) - x, cao: Math.max(...ys) - y };
}

// the About me frame with another photo in it, for the big picture on every other hero
export function vaoChanDung(anh: AnhDuLieu, doc = 0.5): HinhVeDuLieu {
  return {
    ...chanDung,
    manh: chanDung.manh.map((m) => {
      if (!m.anh) return m;
      const o = hop(m.d);
      const ty = Math.max(o.rong / anh.rong, o.cao / anh.cao);
      const rong = anh.rong * ty;
      const cao = anh.cao * ty;
      return { ...m, anh: { src: anh.src, x: o.x + (o.rong - rong) / 2, y: o.y + (o.cao - cao) * doc, rong, cao } };
    }),
  };
}
