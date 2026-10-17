import type { AnhDuLieu } from "./types";

// what the scores open up into on hover
const bangDiemAp: AnhDuLieu = { src: "/images/academics/ap-scores.png", rong: 1148, cao: 1144, moTa: "AP score report" };
// orphan blob in the .fig (no node uses it any more), copied by hand: b7395a85…
const bangDiemSat: AnhDuLieu = { src: "/images/academics/sat.png", rong: 307, cao: 146, moTa: "SAT score report" };
const bangDiemIelts: AnhDuLieu = { src: "/images/academics/ielts.png", rong: 1202, cao: 1694, moTa: "IELTS test report form" };

export const hocThuat = {
  nutKeuGoi: "View my art",
  hocVan: {
    tieuDe: "Education",
    hang: [
      [
        {
          x: 0,
          nhan: "GPA Grade 9-10-11:",
          giaTri: "9.5-9.5-9.7",
          ghiChu: "Academic years 2023-2026"
        },
        {
          x: 328,
          nhan: "IELTS",
          giaTri: "7.5",
          xem: bangDiemIelts,
          ghiChu: "Overall Band Score"
        },
        {
          x: 586,
          nhan: "SAT",
          giaTri: "1570",
          xem: bangDiemSat,
          ghiChu: "December 2025"
        }
      ],
      [
        {
          x: 0,
          nhan: "AP Calculus BC",
          giaTri: "5",
          xem: bangDiemAp,
          ghiChu: "May 2025"
        },
        {
          x: 221,
          nhan: "AP Microeconomics",
          giaTri: "5",
          xem: bangDiemAp,
          ghiChu: "May 2025"
        },
        {
          x: 486,
          nhan: "ABRSM Grade 6",
          giaTri: "137/150",
          ghiChu: "June 2023",
          kem: "(Distinction)"
        }
      ],
      [
        {
          x: 0,
          nhan: "Hanoi Chemistry Excellent Student Competition, City Level",
          giaTri: "Second Prize",
          ghiChu: "Jan 2024"
        },
        {
          x: 602,
          nhan: "Hanoi Chemistry Excellent Student Competition, District Level",
          giaTri: "Second Prize",
          ghiChu: "Oct 2023"
        }
      ]
    ]
  },
  giaiThuong: {
    tieuDe: "HONORS & AWARDS",
    hang: [
      [
        {
          anh: [
            {
              src: "/images/academics/wico-2026.png",
              rong: 1960,
              cao: 2814,
              moTa: "World Invention Creativity Olympics 2026 gold award certificate"
            }
          ],
          ten: [
            {
              chu: "World Invention Creativity Olympics (WICO) 2026: Gold Award"
            }
          ]
        },
        {
          anh: [
            {
              src: "/images/academics/axgo-2026.png",
              rong: 1990,
              cao: 2818,
              moTa: "AX Global Olympiad 2026 gold award certificate"
            }
          ],
          ten: [
            {
              chu: "AX Global Olympiad (AXGO) 2026:"
            },
            {
              chu: "Gold Award"
            }
          ]
        }
      ],
      [
        {
          anh: [
            {
              src: "/images/academics/wyef-2025-01.png",
              rong: 1994,
              cao: 2814,
              moTa: "World Youth Economics Forum 2025 certificate 1"
            },
            {
              src: "/images/academics/wyef-2025-02.png",
              rong: 1994,
              cao: 2814,
              moTa: "World Youth Economics Forum 2025 certificate 2"
            }
          ],          ten: [
            {
              chu: "World Youth Economics Forum (WYEF) 2025:"
            },
            {
              chu: "Special Awards in Marketing & Analysis"
            }
          ]
        },
        {
          anh: [
            {
              src: "/images/academics/abs-01.png",
              rong: 1782,
              cao: 2514,
              moTa: "ASEEDER Business Simulation certificate 1"
            },
            {
              src: "/images/academics/abs-02.png",
              rong: 1782,
              cao: 2514,
              moTa: "ASEEDER Business Simulation certificate 2"
            },
            {
              src: "/images/academics/abs-03.png",
              rong: 1782,
              cao: 2514,
              moTa: "ASEEDER Business Simulation certificate 3"
            }
          ],
          ten: [
            {
              chu: "ASEEDER Business Simulation (ABS):"
            },
            {
              chu: "Gold Medal"
            },
            {
              chu: "Vietnam Regional Round"
            }
          ]
        }
      ],
      [
        {
          anh: [
            {
              src: "/images/academics/abrsm-01.png",
              rong: 2032,
              cao: 2818,
              moTa: "ABRSM Grade 6 certificate"
            },
            {
              src: "/images/academics/abrsm-02.png",
              rong: 2020,
              cao: 2818,
              moTa: "ABRSM Grade 6 mark form"
            }
          ],
          ten: [
            {
              chu: "ABRSM Grade 6"
            },
            {
              chu: "Distinction: 137/150"
            },
            {
              chu: "June 2023"
            }
          ]
        }
      ]
    ]
  }
};
