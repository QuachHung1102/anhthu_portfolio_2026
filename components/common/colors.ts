import type { Trang } from "@/data/types";

// spelled out in full so Tailwind can actually find the class names
export const mauNen: Record<Trang, string> = {
  home: "bg-home",
  academics: "bg-academics",
  arts: "bg-arts",
  projects: "bg-projects",
};

export const mauChu: Record<Trang, string> = {
  home: "text-home",
  academics: "text-academics",
  arts: "text-arts",
  projects: "text-projects",
};
