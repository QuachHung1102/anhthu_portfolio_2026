"use client";

import type { ReactNode } from "react";

type Props = { id: string; className: string; children: ReactNode };

// the small-screen menu panel. the browser opens and closes it, we only add one manner:
// put it away once a link is tapped, or it is still hanging open when the visitor comes back
export default function BangMenu({ id, className, children }: Props) {
  return (
    <div
      id={id}
      popover="auto"
      className={className}
      onClick={(e) => {
        if ((e.target as Element).closest("a")) e.currentTarget.hidePopover();
      }}
    >
      {children}
    </div>
  );
}
