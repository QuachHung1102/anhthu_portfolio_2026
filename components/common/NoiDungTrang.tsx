import { ViewTransition, type ReactNode } from "react";
import VeDauTrang from "../effects/VeDauTrang";

type Props = { children: ReactNode; className?: string };

// everything under the hero. on navigation the old one leaves fast and the new one rises in
export default function NoiDungTrang({ children, className = "" }: Props) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <main id="content" className={`mx-auto max-w-1440 px-20 pb-80 sm:px-32 md:px-48 md:pb-96 lg:pb-120 ${className}`}>
        {/* must stay first: it resets the scroll before the sections below set up their triggers */}
        <VeDauTrang />
        {children}
      </main>
    </ViewTransition>
  );
}
