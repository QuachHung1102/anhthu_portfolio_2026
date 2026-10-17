"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// the hero lives in the arts layout, so it cannot read the page. this little thing can
export default function TheoMon({ ban }: { ban: Record<string, ReactNode> }) {
  return ban[usePathname()] ?? ban["/arts"];
}
