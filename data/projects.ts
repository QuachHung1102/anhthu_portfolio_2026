import type { AnhDuLieu } from "./types";

// photos from the shared Drive folder, numbered in the order they came. sizes measured from the files
const anhNho = (thuMuc: string, ten: string, kichThuoc: [number, number][]): AnhDuLieu[] =>
  kichThuoc.map(([rong, cao], i) => ({
    src: `/images/projects/activities/${thuMuc}/${String(i + 1).padStart(2, "0")}.jpg`,
    rong,
    cao,
    moTa: `${ten}, photo ${i + 1}`,
  }));

export const duAn = {
  // the Doc pasted the arts blurb here (copy slip); the home page's projects blurb fits the page
  gioiThieu: [
    {
      chu: "A collection of my projects, leadership roles, community initiatives, and professional experiences. Together, they show how I work with others, apply what I learn to solve real-world problems, and strive to make a positive impact on communities."
    }
  ],
  nutKeuGoi: "Explore my projects",
  anhBia: { src: "/images/home/projects.jpg", rong: 1657, cao: 2488, moTa: "Portrait of Anh Thư" },
  phatTrien: {
    tieuDe: "RESEARCH & INITIATIVES",
    muc: [
      {
        ten: "The Impact of Fintech and Digital Financial Literacy on Financial Inclusion: Evidence from Vietnam",
        moTa: [
          { chu: "**Research Summary:** [View Summary](/files/fintech-research-summary.pdf)" },
          { chu: "**Full Research Paper:** [Read Full Paper](https://ijeber.com/uploads2026/ijeber_06_465.pdf)" },
          { chu: "*Second Author & Student Researcher*" },
          {
            chu: "*Published in the International Journal of Education, Business and Economics Research (IJEBER), Vol. 6, Issue 5, 2026, pp. 58–74.*",
            gach: 1,
          },
          {
            chu: "*Analyzed 340 survey responses using Stata and multiple regression to examine the relationships between digital financial literacy, Fintech adoption, and financial inclusion in Vietnam.*",
            gach: 1,
          },
        ],
      },
      {
        ten: "Attracting Foreign Direct Investment into High-Tech Industries in Hanoi in the Context of Hoa Lac High-Tech Park Development: Current Status, Opportunities, and Policy Implications",
        moTa: [
          { chu: "*Student Researcher*" },
          { chu: "Gold Award, World Invention Creativity Olympics (WICO) 2026, Seoul", gach: 1 },
          {
            chu: "Collaborated with teammates to research high-tech FDI in Hanoi using 17 sources and comparing four Asian tech hubs; developed six policy recommendations.",
            gach: 1,
          },
        ],
      },
      {
        video: { id: "dtDW4A3qiB4", ten: "Budget Buddy 2.0 app demo" },
        anh: [
          {
            src: "/images/projects/cs50-sql.png",
            rong: 1196,
            cao: 922,
            moTa: "CS50 Introduction to Databases with SQL certificate",
          },
          {
            src: "/images/projects/cs50-python.png",
            rong: 1196,
            cao: 922,
            moTa: "CS50 Introduction to Programming with Python certificate",
          },
        ],
        ten: "Budget Buddy 2.0 – Bilingual AI-Assisted Personal Finance Web App",
        moTa: [
          { chu: "**App Demo Video:** [Watch on YouTube](https://www.youtube.com/watch?v=dtDW4A3qiB4)" },
          { chu: "**Project Summary (PDF):** [View Project Summary](/files/budget-buddy-summary.pdf)" },
          { chu: "*Founder, Developer & User Researcher*" },
          {
            chu: "Built and deployed a bilingual personal finance web app. Surveyed 76 users to guide the development of transaction tracking, budget alerts, spending visualizations, and an AI Coach. Beta-tested the app with 25 users.",
            gach: 1,
          },
          { chu: "Independently learned and applied Python and SQL through Harvard's CS50P and CS50 SQL courses.", gach: 1 },
        ],
      },
    ],
  },
  thucTap: {
    tieuDe: "INTERNSHIP EXPERIENCE",
    // the Vietnamese original first, then the notarized English copy; they slide
    anh: [
      { src: "/images/projects/batik.png", rong: 1200, cao: 848, moTa: "BATIK International internship certificate, Vietnamese original" },
      { src: "/images/projects/batik-en.jpg", rong: 3509, cao: 2481, moTa: "BATIK International internship certificate, notarized English translation" },
    ],
    ten: "Association BATIK International (Vietnam Office)",
    moTa: [
      { chu: "*High School Intern | July 2026*" },
      {
        chu: "Developed a marketing campaign proposal to raise awareness of online scams and digital safety, aimed at reaching 300+ high school students.",
        gach: 1,
      },
      {
        chu: "Led a team of interns in collecting and analyzing survey data on students’ awareness and understanding of gender equality across several high schools.",
        gach: 1,
      },
    ],
  },
  truyenThong: {
    tieuDe: "MEDIA & CONTENT",
    ten: "U.S. Travel Series – Charlotte Le",
    lienKet: "https://youtube.com/playlist?list=PLW7UjHY7I56pCCQ_fKYu9M55blFkinmD3&si=16mAKXpLllugvPtj",
    moTa: [
      { chu: "Creator, Content Researcher & Video Editor | June 2025– June 2026" },
      {
        chu: "Flew solo to the U.S. at the age of 16 and filmed landmarks and university campuses in Washington, D.C., Boston, and New York City",
        gach: 1,
      },
      {
        chu: "Researched, scripted, and edited a 14-episode YouTube series (16,000+ views) introducing these destinations to Vietnamese viewers, featuring Vietnamese narration with English subtitles.",
        gach: 1,
      },
    ],
    // the four episodes the Doc picked
    video: [
      { id: "zHknH3M8ya8", ten: "My First Solo Trip to the U.S." },
      { id: "t6oRubz4T_M", ten: "US Capitol Tour, Washington D.C." },
      { id: "rG4uQZlI3eE", ten: "Downtown Boston" },
      { id: "YPZtYPLqLbY", ten: "New York City: One World Trade Center, 9/11 Memorial, Times Square" },
    ],
  },
  ngoaiKhoa: {
    tieuDe: "EXTRACURRICULAR ACTIVITIES",
    hoatDong: [
      {
        ten: "EconFarmers",
        lienKet: "https://www.facebook.com/econfarmers",
        vaiTro: "Co-Founder & Project Leader",
        anh: {
          // the Doc asked for the group photo in white shirts here
          src: "/images/projects/activities/econfarmers/05.jpg",
          rong: 2048,
          cao: 2048,
          moTa: "EconFarmers team in white shirts at the Ban Ten volunteer camp",
        },
        anhNho: anhNho("econfarmers", "EconFarmers", [
          [3750, 1969], [2560, 1920], [4032, 2268], [2048, 2048], [2048, 2048], [2048, 1588], [6000, 4000],
          [2048, 2048], [3000, 4000], [3000, 4000], [6000, 4000], [3362, 1891], [1276, 956], [6000, 4000],
        ]),
        tongQuan:
          "A student-led social enterprise initiative aimed at promoting sustainable agricultural products from Vietnam’s highland communities while providing youth with business and venture management knowledge.",
        quaTrinh: [
          "Co-founded and led strategy, product marketing, and operations to bridge highland artisanal products with urban consumers.",
          "Built cross-organizational partnerships to expand distribution channels, run e-commerce campaigns, and secure offline trade show presences.",
        ],
        thanhTich: [
          "Partnered with organizations to generate over 190 online orders and join a six-day trade fair, earning over VND 23 million in profits shared by partners with EconFarmers.",
          "Allocated profits and in-kind donations to support pediatric patients, their families, and highland children in Bản Tèn, Thái Nguyên: delivering 250 meals and 140 educational supply kits.",
          "Grew EconFarmers’ online community to 5,600+ followers.",
        ],
      },
      {
        ten: "Guiding Stars",
        vaiTro: "Co-Founder & Vice President",
        anh: {
          src: "/images/projects/guiding-stars.png",
          rong: 1910,
          cao: 1332,
          moTa: "Guiding Stars volunteers with students",
        },
        anhNho: anhNho("guiding-stars", "Guiding Stars", [[2048, 1365], [2048, 2048], [2048, 1717]]),
        tongQuan:
          "A student-run social initiative dedicated to providing educational and financial support to underserved children, including those with disabilities and serious illnesses.",
        quaTrinh: [
          "Co-founded and managed core operations, overseeing fundraising, financial planning, student enrollment, and resource allocation.",
          "Launched and operated four educational classes, generating VND 34 million in revenue to support children and partner organizations.",
        ],
        thanhTich: [
          "Contributed VND 12 million to Hương La Center, supporting 20+ children with disabilities, and VND 11 million to Quỳnh Hoa Charity Vocational Training Center.",
          "Organized activities for 30+ children undergoing heart surgery at Hospital E; held a birthday celebration and provided gifts worth VND 6 million for 20–25 pediatric oncology patients at Vietnam National Children’s Hospital.",
        ],
      },
      {
        ten: "Hanoi Amsterdam Entrepreneurz Club (HAEC)",
        vaiTro: "Head of Finance",
        anh: {
          src: "/images/projects/haec.png",
          rong: 1212,
          cao: 810,
          moTa: "Hanoi Amsterdam Entrepreneurz Club members",
        },
        anhNho: anhNho("haec", "HAEC", [[810, 540], [526, 765], [590, 394], [584, 417], [2048, 1152]]),
        tongQuan:
          "An entrepreneurship club at Hanoi-Amsterdam High School, dedicated to fostering business mindset, financial literacy, and startup initiatives among youth.",
        quaTrinh: [
          "Oversaw comprehensive financial planning, expense tracking, and resource allocation across club operations.",
          "Mentored and coached finance team members on sponsor outreach strategies and negotiating corporate partnerships.",
          "Budgeted three major business and entrepreneurship events for 250+ Hanoi students.",
        ],
        thanhTich: [
          "Managed a VND 50 million budget combining sponsorships and camp profit, overseeing financial planning and expense tracking.",
          "Enabled execution of three business competitions and workshops for over 250 high school participants.",
        ],
      },
      {
        ten: "Future Impact Leader Camp, Ban Ten, Thai Nguyen",
        vaiTro: "Core Organizer & Team Project Manager",
        anh: {
          src: "/images/projects/future-impact-leader-camp.png",
          rong: 1502,
          cao: 1090,
          moTa: "Future Impact Leader Camp in Ban Ten, Thai Nguyen",
        },
        anhNho: anhNho("future-impact-leader-camp", "Future Impact Leader Camp", [
          [1918, 2560], [6000, 4000], [2560, 1816], [6000, 4000], [1276, 956], [3362, 1891], [6000, 4000],
        ]),
        tongQuan:
          "A community service camp focused on empowering local youth and providing essential support for highland families in Ban Ten.",
        quaTrinh: [
          "Led team operations, oversaw logistics, and coordinated cross-functional efforts from fundraising to on-site execution.",
          "Designed and delivered training sessions for local students, equipping them with hospitality and communication skills for engaging with visitors.",
        ],
        thanhTich: [
          "Led a team that raised total VND 39.5 million in sponsorships and donations (including VND 10 million from EconFarmers) to run a free essentials and school-supply fair for highland families, distributing 500+ welfare packages and nutritious meals.",
          "Coordinated the planting of 120 trees and installation of 6 solar-powered lights, supporting long-term community and environmental development.",
        ],
      },
      {
        ten: "Society of Open Science (SOS)",
        vaiTro: "Member of Expertise & Finance Departments",
        anh: {
          src: "/images/projects/sos.png",
          rong: 1812,
          cao: 1344,
          moTa: "Society of Open Science members",
        },
        anhNho: anhNho("sos", "Society of Open Science", [
          [2048, 1365], [2048, 1365], [2048, 1365], [2048, 1366], [2048, 1365], [2048, 1365], [2048, 1365],
          [803, 540], [2048, 1151], [2048, 1151], [1183, 803], [1177, 805], [1140, 803],
        ]),
        tongQuan:
          "A science club at Hanoi-Amsterdam High School, dedicated to promoting STEM education and inspiring young students through interactive experiments and large-scale science exhibitions.",
        quaTrinh: [
          "Designed and demonstrated interactive chemistry experiments for students ages 6–15, including “Silver Ornament” at Science Tornado, an event with 2,000+ attendees.",
          "Coordinated logistics, material procurement, and budget control to ensure smooth execution across multiple science outreach programs.",
        ],
        thanhTich: [
          "Secured approximately VND 15 million in funding and managed the budget and procurement for exhibition activities.",
          "Led a Science Tour at Nguyễn Tuân Primary School, coordinating experiment demonstrations and interactive STEM activities for 700 students.",
        ],
      },
      {
        ten: "Ams Baking Club",
        vaiTro: "Finance Team Member",
        anh: {
          src: "/images/projects/ams-baking-club.png",
          rong: 2032,
          cao: 1228,
          moTa: "Ams Baking Club",
        },
        anhNho: anhNho("ams-baking-club", "Ams Baking Club", [
          [796, 540], [2048, 1366], [295, 590], [295, 590], [1027, 724], [1155, 784],
        ]),
        tongQuan:
          "A culinary and charity club dedicated to promoting culinary arts and running fundraising workshops to support underprivileged schools and humanitarian organizations.",
        quaTrinh: [
          "Managed budget allocation, and oversaw financial planning for major fundraising campaigns.",
          "Instructed interactive baking modules at Culinary Camp 2025, covering basic techniques, food safety, and practical nutrition.",
        ],
        thanhTich: [
          "Secured VND 8 million in sponsorships and managed budgeting for fundraising initiatives that raised VND 40 million+ for Tân Mỹ Chánh Lower Secondary School and the Vietnam Red Cross.",
          "Taught basic baking techniques and nutrition to approximately 60 elementary and middle school students through hands-on workshops at Culinary Camp 2025.",
        ],
      },
      {
        ten: "GreenLife 2025",
        vaiTro: "Logistics Volunteer",
        anh: {
          src: "/images/projects/greenlife-2025.png",
          rong: 1868,
          cao: 1346,
          moTa: "GreenLife 2025 event",
        },
        anhNho: anhNho("greenlife-2025", "GreenLife 2025", [
          [720, 510], [1280, 852], [2048, 1366], [2048, 1362], [2048, 1363],
        ]),
        tongQuan:
          "An environmental campaign aimed at promoting sustainable waste management, recycling habits, and ecological awareness across local communities.",
        quaTrinh: [
          "Coordinated logistics, event operations, and volunteer activities for environmental awareness and recycling campaigns.",
        ],
        thanhTich: [
          "Helped collect 500+ kilograms of recyclable paper, encouraging community participation in sustainable waste management.",
        ],
      },
    ],
  },
};

export type HoatDong = (typeof duAn.ngoaiKhoa.hoatDong)[number];
