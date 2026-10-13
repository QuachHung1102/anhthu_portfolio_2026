import type { DongVan } from "@/data/types";

type Props = { dong: DongVan[]; className?: string; canDeu?: boolean };

// plain lines become paragraphs, runs of bullets become one list.
// the mockup justifies everything. that only survives in a wide column, so: canDeu={false} for the narrow ones,
// bullets never, and below the mockup's width nothing is justified and the line is capped
export default function DoanVan({ dong, className = "", canDeu = true }: Props) {
  const khoi: (DongVan | DongVan[])[] = [];
  for (const d of dong) {
    const cuoi = khoi.at(-1);
    if (d.gach && Array.isArray(cuoi)) cuoi.push(d);
    else khoi.push(d.gach ? [d] : d);
  }
  return (
    <div
      className={`type-body max-w-[62ch] text-pretty lg:max-w-none ${canDeu ? "lg:text-justify lg:hyphens-auto" : ""} ${className}`}
    >
      {khoi.map((k, i) =>
        Array.isArray(k) ? (
          <ul key={i} className="list-disc pl-27 lg:text-start lg:hyphens-manual">
            {k.map((d, j) => (
              <li key={j} className={d.gach === 2 ? "ml-27" : undefined}>
                {d.chu}
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>{k.chu}</p>
        ),
      )}
    </div>
  );
}
