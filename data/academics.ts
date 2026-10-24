import type { AnhDuLieu } from "./types";

// what the scores open up into on hover
const bangDiemAp: AnhDuLieu = { src: "/images/academics/ap-scores.png", rong: 1148, cao: 1144, moTa: "AP score report" };
// orphan blob in the .fig (no node uses it any more), copied by hand: b7395a85…
const bangDiemSat: AnhDuLieu = { src: "/images/academics/sat.png", rong: 307, cao: 146, moTa: "SAT score report" };
const bangDiemIelts: AnhDuLieu = { src: "/images/academics/ielts.png", rong: 1202, cao: 1694, moTa: "IELTS test report form" };
// the transcript PDF, one page per school year
const hocBa: AnhDuLieu[] = [
  { src: "/images/academics/gpa-01.jpg", rong: 1400, cao: 1949, moTa: "School transcript, grade 9" },
  { src: "/images/academics/gpa-02.jpg", rong: 1400, cao: 2048, moTa: "School transcript, grade 10" },
  { src: "/images/academics/gpa-03.jpg", rong: 1400, cao: 2025, moTa: "School transcript, grade 11" }
];
const giayKhenHoa: AnhDuLieu[] = [
  { src: "/images/academics/hsgtp-chemistry-01.jpg", rong: 2560, cao: 1831, moTa: "Hanoi Chemistry Excellent Student certificate, Vietnamese original" },
  { src: "/images/academics/hsgtp-chemistry-02.jpg", rong: 1755, cao: 1240, moTa: "Hanoi Chemistry Excellent Student certificate, English translation" }
];

export const hocThuat = {
  // the Doc pasted the arts blurb here (copy slip); the home page's academics blurb fits the page
  gioiThieu: [
    {
      chu: "A showcase of my academic dedication, honors, and the subjects I have pursued. My academic journey focuses on business, data, and technology, supported by coursework, research, and academic achievements that lay the groundwork for my future studies in Data and Business."
    }
  ],
  nutKeuGoi: "Explore my academics",
  anhBia: { src: "/images/home/academics.jpg", rong: 4096, cao: 2730, moTa: "Anh Thư with her WICO 2026 gold award in Seoul" },
  hocVan: {
    tieuDe: "Education",
    hang: [
      [
        {
          x: 0,
          nhan: "GPA Grade 9-10-11:",
          giaTri: "9.5-9.5-9.7",
          xem: hocBa,
          ghiChu: "Academic years 2023-2026"
        },
        {
          x: 328,
          nhan: "IELTS",
          giaTri: "7.5",
          xem: [bangDiemIelts],
          ghiChu: "Overall Band Score"
        },
        {
          x: 586,
          nhan: "SAT",
          giaTri: "1570",
          xem: [bangDiemSat],
          ghiChu: "December 2025"
        }
      ],
      [
        {
          x: 0,
          nhan: "AP Calculus BC",
          giaTri: "5",
          xem: [bangDiemAp],
          ghiChu: "May 2025"
        },
        {
          x: 221,
          nhan: "AP Microeconomics",
          giaTri: "5",
          xem: [bangDiemAp],
          ghiChu: "May 2025"
        },
        {
          x: 486,
          nhan: "ABRSM Grade 6",
          giaTri: "137/150",
          ghiChu: "July 2023",
          kem: "(Distinction)"
        }
      ],
      [
        {
          x: 0,
          nhan: "Hanoi Chemistry Excellent Student Competition, City Level",
          giaTri: "Second Prize",
          xem: giayKhenHoa,
          ghiChu: "Hanoi Department of Education and Training, March 2024"
        }
      ]
    ]
  },
  giaiThuong: {
    tieuDe: "HONORS & AWARDS",
    hang: [
      [
        {
          "anh": [
            {
              "src": "/images/academics/abs-01.png",
              "rong": 1782,
              "cao": 2514,
              "moTa": "ASEEDER Business Simulation certificate 1"
            },
            {
              "src": "/images/academics/abs-02.png",
              "rong": 1782,
              "cao": 2514,
              "moTa": "ASEEDER Business Simulation certificate 2"
            },
            {
              "src": "/images/academics/abs-03.png",
              "rong": 1782,
              "cao": 2514,
              "moTa": "ASEEDER Business Simulation certificate 3"
            },
          {"src":"/images/academics/abs-04.jpg","rong":1190,"cao":1683,"moTa":"ASEEDER Business Simulation Prototype Award certificate"}
          ],
          "anhThi": [{"src":"/images/academics/contest/abs-01.jpg","rong":4096,"cao":3072,"moTa":"Anh Thư's team on stage with the ABS Gold Award"},{"src":"/images/academics/contest/abs-02.jpg","rong":4608,"cao":3075,"moTa":"Anh Thư presenting at ASEEDER Business Simulation"}],
          "ten": [
            {
              "chu": "**ASEEDER Business Simulation (ABS) 2024-2025, Vietnam Regional Round, October 2024**"
            },
            {
              "chu": "**GOLD AWARD; TOP TRADING TEAMS; OPERATIONAL EXCELLENCE AWARD; PROTOTYPE AWARD**"
            },
            {
              "chu": "*Sole Gold Award-winning team; served as CEO*"
            },
            {
              "chu": "Official Award Announcement: [View on Facebook](https://www.facebook.com/story.php?story_fbid=122149791560272731&id=61558181954843)"
            },
            {
              "chu": "Media Coverage:"
            },
            {
              "chu": "[Dân trí (People's Knowledge)](https://dantri.com.vn/giao-duc/nhom-hoc-sinh-lop-10-vo-dich-cuoc-thi-gia-lap-doanh-nghiep-lon-nhat-chau-a-20241024122923513.htm) (in Vietnamese)",
              "gach": 1
            },
            {
              "chu": "[Giáo dục & Thời đại (Education & Times)](https://giaoducthoidai.vn/nhom-hoc-sinh-ha-noi-vo-dich-cuoc-thi-gia-lap-doanh-nghiep-lon-nhat-chau-a-post705882.html) (in Vietnamese)",
              "gach": 1
            },
            {
              "chu": "[VnBusiness](https://vnbusiness.vn/phong-cach/doi-the-visionaries-gianh-quan-quan-cuoc-thi-gia-lap-doanh-nghiep-aseeder-2024-tai-viet-nam-1103142.html) (in Vietnamese)",
              "gach": 1
            }
          ]
        },
        {
          "anh": [
            {
              "src": "/images/academics/wyef-2025-01.png",
              "rong": 1994,
              "cao": 2814,
              "moTa": "WYEF 2025 Experimentation Excellence Award certificate"
            },
            {
              "src": "/images/academics/wyef-2025-02.png",
              "rong": 1994,
              "cao": 2814,
              "moTa": "WYEF 2025 Marketing Visual Impact Award certificate"
            }
          ],
          "anhThi": [{"src":"/images/academics/contest/wyef-01.jpg","rong":4000,"cao":2666,"moTa":"Anh Thư's team presenting at WYEF 2025 in Shanghai"},{"src":"/images/academics/contest/wyef-02.jpg","rong":4000,"cao":2666,"moTa":"Anh Thư's team at work during WYEF 2025"}],
          "ten": [
            {
              "chu": "**World Youth Economic Forum (WYEF) 2025, Shanghai, China, August 2025**"
            },
            {
              "chu": "**EXPERIMENTATION EXCELLENCE AWARD; MARKETING VISUAL IMPACT AWARD**"
            }
          ]
        }
      ],
      [
        {
          "anh": [
            {
              "src": "/images/academics/axgo-2026.png",
              "rong": 1990,
              "cao": 2818,
              "moTa": "AX Global Olympiad 2026 gold award certificate"
            }
          ],
          "anhThi": [{"src":"/images/academics/contest/axgo-01.jpg","rong":4501,"cao":3376,"moTa":"Anh Thư with her AXGO 2026 gold award certificate"},{"src":"/images/academics/contest/axgo-02.jpg","rong":4096,"cao":2305,"moTa":"Anh Thư presenting at AXGO 2026 in Seoul"}],
          "ten": [
            {
              "chu": "**AX Global Olympiad (AXGO) 2026, Seoul, South Korea, July 2026**"
            },
            {
              "chu": "**GOLD AWARD**"
            },
            {
              "chu": "*Applying Business Analysis to Develop a Multi-Channel Marketing Strategy for LocReset by GTE Localize*"
            },
            {
              "chu": "*Co-hosted by Sogang University, Yonsei University, and Hacker Dojo*"
            }
          ]
        },
        {
          "anh": [
            {
              "src": "/images/academics/wico-2026.png",
              "rong": 1960,
              "cao": 2814,
              "moTa": "World Invention Creativity Olympics 2026 gold award certificate"
            }
          ],
          "anhThi": [{"src":"/images/academics/contest/wico-01.jpg","rong":4096,"cao":2731,"moTa":"Anh Thư with her WICO 2026 gold award in Seoul"},{"src":"/images/academics/contest/wico-02.jpg","rong":4096,"cao":3072,"moTa":"Anh Thư's team at the WICO 2026 exhibition"}],
          "ten": [
            {
              "chu": "**World Invention Creativity Olympics (WICO) 2026, Seoul, South Korea, July 2026**"
            },
            {
              "chu": "**GOLD AWARD**"
            },
            {
              "chu": "*High-Tech FDI Policy Analysis research*"
            }
          ]
        }
      ],
      [
        {
          "anh": [
            {
              "src": "/images/academics/abrsm-01.png",
              "rong": 2032,
              "cao": 2818,
              "moTa": "ABRSM Grade 6 certificate"
            },
            {
              "src": "/images/academics/abrsm-02.png",
              "rong": 2020,
              "cao": 2818,
              "moTa": "ABRSM Grade 6 mark form"
            }
          ],
          "ten": [
            {
              "chu": "**ABRSM Grade 6 Piano Performance, July 2023**"
            },
            {
              "chu": "**DISTINCTION: 137/150**"
            }
          ]
        }
      ]
    ]
  }
};
