import type { Trang } from "./types";

export const trangChu = {
  loiChao: [
    {
      chu: "Hello! I'm Le Anh Thu, a high school student with a deep passion for economics, community engagement, Vietnamese culture, and traditional crafts. To me, learning and creating are much like mosaic art: every lesson, project, and hand-crafted piece is a unique tile that contributes to a bigger picture - myself. Through my journey of exploring and learning the art of ceramic mosaic, combined with organizing hands-on workshops, I hope to bring Vietnamese ceramics closer to more people while also sharing the beauty and value of Vietnam's traditional ceramic!"
    }
  ],
  nutKeuGoi: "Introduct my portfolio",
  cot: [
    {
      trang: "academics" as Trang,
      ten: "Academics",
      duongDan: "/academics",
      moTa: [
        {
          chu: "A showcase of my academic dedication, honors, and subject pursuits, reflecting my continuous drive for intellectual growth and analytical problem-solving."
        },
        {
          chu: "A reflection of my academic journey and dedication to my future career path in data and business. It highlights my core coursework, scholarly achievements, and intellectual pursuits that lay the groundwork for my professional aspirations."
        }
      ]
    },
    {
      trang: "arts" as Trang,
      ten: "Art",
      duongDan: "/arts",
      moTa: [
        {
          chu: "An exploration of my artistic journey, from handcrafted ceramic mosaics and piano performances to capturing daily moments through film photography. Each medium reflects my creative process and serves as a quiet space for my personal reflection and self-discovery."
        }
      ]
    },
    {
      trang: "projects" as Trang,
      ten: "Project",
      duongDan: "/projects",
      moTa: [
        {
          chu: "A dedicated collection of extracurricular initiatives, leadership, and community projects. Driven by a desire to create positive impacts for communities, these endeavors represent my commitment to collaboration, social responsibility, and problem-solving."
        }
      ]
    }
  ]
};
