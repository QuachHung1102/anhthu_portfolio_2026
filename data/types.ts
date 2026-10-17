export type Trang = "home" | "academics" | "arts" | "projects";

export type DongVan = { chu: string; gach?: number };

export type AnhDuLieu = {
  src: string;
  rong: number;
  cao: number;
  moTa: string;
  giaLap?: boolean;
};

export type ManhGhep = {
  d: string;
  mau?: string;
  chanLe?: boolean;
  anh?: { src: string; x: number; y: number; rong: number; cao: number };
};

export type HinhVeDuLieu = { rong: number; cao: number; manh: ManhGhep[] };

export type VideoDuLieu = { id: string; ten: string };
