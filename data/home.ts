import type { Trang } from "./types";

export const trangChu = {
  loiChao: [
    {
      chu: "Hello! I'm Le Anh Thu, a high school student from Hanoi, Vietnam, who enjoys turning ideas into real projects."
    },
    {
      chu: "To me, learning and creating are much like mosaic art: every lesson, project, and experience is a small tile that adds to the bigger picture of who I am. I enjoy using business thinking, data, and technology to understand real-world problems and develop practical solutions."
    },
    {
      chu: "Beyond academics, I find meaning in leading community projects and sharing art, especially art that reflects the values of traditional Vietnamese culture. These experiences have connected me with people from different backgrounds, each adding a new tile to my mosaic."
    }
  ],
  nutKeuGoi: "Explore my portfolio",
  cot: [
    {
      trang: "academics" as Trang,
      ten: "Academics",
      duongDan: "/academics",
      anh: { src: "/images/home/academics.jpg", rong: 4096, cao: 2730, moTa: "Anh Thư with her WICO 2026 gold award in Seoul" },
      moTa: [
        {
          chu: "A showcase of my academic dedication, honors, and the subjects I have pursued. My academic journey focuses on business, data, and technology, supported by coursework, research, and academic achievements that lay the groundwork for my future studies in Data and Business."
        }
      ]
    },
    {
      trang: "arts" as Trang,
      ten: "Arts",
      duongDan: "/arts",
      anh: { src: "/images/home/arts.jpg", rong: 5328, cao: 4000, moTa: "Ceramic mosaic pieces made by Anh Thư" },
      moTa: [
        {
          chu: "Ceramic clay, piano keys, and zither strings – each has become a different way for me to express myself. From handcrafted ceramic mosaics to piano and Vietnamese zither (Đàn tranh), these are the art forms through which I explore ideas, emotions, and the culture I grew up with."
        }
      ]
    },
    {
      trang: "projects" as Trang,
      ten: "Projects",
      duongDan: "/projects",
      anh: { src: "/images/home/projects.jpg", rong: 1657, cao: 2488, moTa: "Portrait of Anh Thư" },
      moTa: [
        {
          chu: "A collection of my projects, leadership roles, community initiatives, and professional experiences. Together, they show how I work with others, apply what I learn to solve real-world problems, and strive to make a positive impact on communities."
        }
      ]
    }
  ]
};
