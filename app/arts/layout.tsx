import type { ReactNode } from "react";
import MoDauNgheThuat from "@/components/arts/MoDauNgheThuat";

// one hero for the whole arts section: moving between mosaic, zither and piano only swaps what is under it
export default function BoCucNgheThuat({ children }: { children: ReactNode }) {
  return (
    <>
      <MoDauNgheThuat />
      {children}
    </>
  );
}
