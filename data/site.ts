import type { Trang } from "./types";

export const site = {
  ten: "Anh Thư folio",
  dieuHuong: [
    {
      trang: "home" as Trang,
      nhan: "Home",
      duongDan: "/"
    },
    {
      trang: "academics" as Trang,
      nhan: "Academics",
      duongDan: "/academics"
    },
    {
      trang: "arts" as Trang,
      nhan: "Arts",
      duongDan: "/arts"
    },
    {
      trang: "projects" as Trang,
      nhan: "Projects",
      duongDan: "/projects"
    }
  ]
};
