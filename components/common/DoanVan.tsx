import type { ReactNode } from "react";
import type { DongVan } from "@/data/types";

type Props = { dong: DongVan[]; className?: string };

// tiny inline markup for the copy: **bold**, *italic*, [words](https://link). nothing nests, nothing else
const DAU = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
function NoiDung({ chu }: { chu: string }) {
  const ra: ReactNode[] = [];
  let tu = 0;
  for (const m of chu.matchAll(DAU)) {
    ra.push(chu.slice(tu, m.index));
    const k = m.index;
    if (m[1]) ra.push(<strong key={k}>{m[1]}</strong>);
    else if (m[2]) ra.push(<em key={k}>{m[2]}</em>);
    else
      ra.push(
        <a key={k} href={m[4]} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:no-underline">
          {m[3]}
        </a>,
      );
    tu = k + m[0].length;
  }
  ra.push(chu.slice(tu));
  return ra;
}

// plain lines become paragraphs, runs of bullets become one list.
// ragged right everywhere: justified lines stretched the word gaps (asked to go on 2026-10-21)
export default function DoanVan({ dong, className = "" }: Props) {
  const khoi: (DongVan | DongVan[])[] = [];
  for (const d of dong) {
    const cuoi = khoi.at(-1);
    if (d.gach && Array.isArray(cuoi)) cuoi.push(d);
    else khoi.push(d.gach ? [d] : d);
  }
  return (
    <div className={`type-body max-w-[62ch] text-pretty lg:max-w-none ${className}`}>
      {khoi.map((k, i) =>
        Array.isArray(k) ? (
          <ul key={i} className="list-disc pl-27">
            {k.map((d, j) => (
              <li key={j} className={d.gach === 2 ? "ml-27" : undefined}>
                <NoiDung chu={d.chu} />
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>
            <NoiDung chu={k.chu} />
          </p>
        ),
      )}
    </div>
  );
}
