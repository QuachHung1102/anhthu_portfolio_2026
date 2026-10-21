export const ngheThuat = {
  // the hero copy and button change with the page under it (MoDauNgheThuat picks by path)
  gioiThieu: {
    "/arts": [
      {
        chu: "Ceramic clay, piano keys, and zither strings – each has become a different way for me to express myself. From handcrafted ceramic mosaics to piano and Vietnamese zither (Đàn tranh), these are the art forms through which I explore ideas, emotions, and the culture I grew up with."
      }
    ],
    "/arts/mosaic": [
      {
        chu: "For me, mosaic art lies in the process of turning individual ceramic fragments into a composition of my own. I enjoy working with different shapes, colors, and textures, carefully fitting each piece into place until the artwork reveals itself. What fascinates me most is how fragments that may seem unrelated at first can come together to form a cohesive piece, with each arrangement opening up a different possibility for creation."
      }
    ],
    "/arts/vietnamese-zither": [
      {
        chu: "Since I began learning the Vietnamese zither (đàn tranh) in March 2026, I have explored the stories and emotions carried through traditional folk melodies, alongside my experience with Western music. As I learn and perform each piece, I have the opportunity to deepen my understanding of the Vietnamese zither’s distinctive tones and the character of the music itself. By sharing these performances with others, I could bring a part of my cultural heritage into spaces where it can be heard and appreciated anew."
      }
    ],
    "/arts/piano": [
      {
        chu: "Having played the piano since the age of five, I have spent years learning how music can carry emotion, from the delicate phrasing of a quiet passage to the changing mood of an entire movement. Over time, the piano has become a familiar part of my life, giving me room to explore different interpretations and develop my own relationship with every piece I play."
      }
    ]
  },
  nutKeuGoi: {
    "/arts": "Explore my arts",
    "/arts/mosaic": "Discover my mosaic",
    "/arts/vietnamese-zither": "Explore my performances",
    "/arts/piano": "Explore my performances"
  },
  // the big framed photo beside the title. doc = where the face sits, 0 top .. 1 bottom
  anhBia: {
    "/arts": { anh: { src: "/images/home/arts.jpg", rong: 5328, cao: 4000, moTa: "Ceramic mosaic pieces made by Anh Thư" }, doc: 0.5 },
    "/arts/mosaic": { anh: { src: "/images/arts/mosaic/hero.jpg", rong: 5328, cao: 4000, moTa: "Anh Thư holding two of her mosaic pieces" }, doc: 0.5 },
    "/arts/vietnamese-zither": { anh: { src: "/images/arts/zither/hero.jpg", rong: 1636, cao: 2181, moTa: "Anh Thư in a pink áo dài" }, doc: 0.3 },
    "/arts/piano": { anh: { src: "/images/arts/piano/hero.jpg", rong: 1254, cao: 1254, moTa: "Anh Thư at the piano" }, doc: 0.4 }
  },
  boMon: [
    {
      ten: "Mosaic",
      duongDan: "/arts/mosaic",
      anh: { src: "/images/arts/columns/mosaic.jpg", rong: 2016, cao: 1512, moTa: "Ceramic mosaic pieces laid out on a wooden table" },
      moTa: [
        {
          chu: "A creative process of **patience and transformation**, where individual ceramic fragments, each cut and placed by hand, come together into one cohesive work."
        }
      ]
    },
    {
      ten: "Vietnamese Zither",
      // the Doc's fallback for when the long name does not fit one line
      tenNgan: "Viet Zither",
      duongDan: "/arts/vietnamese-zither",
      anh: { src: "/images/arts/columns/zither.jpg", rong: 4672, cao: 6229, moTa: "Anh Thư performing on the Vietnamese zither" },
      moTa: [
        {
          chu: "Playing the Vietnamese zither (Đàn tranh) connects me with my **cultural roots** and allows me to express stories through music. Through each performance, I hope to share the beauty of **traditional** Vietnamese music with others."
        }
      ]
    },
    {
      ten: "Piano",
      duongDan: "/arts/piano",
      anh: { src: "/images/arts/columns/piano.jpg", rong: 1137, cao: 853, moTa: "Young Anh Thư playing at the Sun Music Piano Festival 2016" },
      moTa: [
        {
          chu: "A constant companion throughout my growth, shaping my discipline and emotional expression. Through years of practice and performance, the piano offers me a personal space to explore **creative interpretations** and **emotional depth**."
        }
      ]
    }
  ],
  mosaic: {
    hanhTrinh: {
      tieuDe: "LEARNING JOURNEY",
      doan: [
        {
          chu: "In May 2026, I spent three sessions per week at Bat Trang Pottery Village (Hanoi), one of Vietnam's most iconic traditional ceramic villages, to learn the craft before starting my own mosaic works. There, I observed the production process and learned how to select colors, cut and arrange ceramic pieces, compose designs, and complete mosaic artworks. This hands-on experience gave me a deeper appreciation of the techniques, patience, craftsmanship, and dedication behind every ceramic piece."
        }
      ],
      anhTren: [
        {
          src: "/images/arts/mosaic/journey-01.png",
          rong: 1900,
          cao: 1448,
          moTa: "Learning mosaic at Bat Trang pottery village"
        },
        {
          src: "/images/arts/mosaic/journey-02.png",
          rong: 1852,
          cao: 1448,
          moTa: "Practising mosaic at Bat Trang pottery village"
        }
      ],
      anhDuoi: [
        {
          src: "/images/arts/mosaic/journey-03.png",
          rong: 1370,
          cao: 1324,
          moTa: "Mosaic learning journey, photo 3"
        },
        {
          src: "/images/arts/mosaic/journey-04.png",
          rong: 1370,
          cao: 1324,
          moTa: "Mosaic learning journey, photo 4"
        },
        {
          src: "/images/arts/mosaic/journey-05.png",
          rong: 1804,
          cao: 1820,
          moTa: "Mosaic learning journey, photo 5"
        },
        {
          src: "/images/arts/mosaic/journey-06.png",
          rong: 1804,
          cao: 1488,
          moTa: "Mosaic learning journey, photo 6"
        }
      ]
    },
    tacPham: {
      tieuDe: "ARTWORKS",
      doan: [
        {
          chu: "After my learning journey, I designed and completed 14 mosaic pieces featuring a wide range of subjects, from animals and plants to cultural motifs and everyday objects. Through each piece, I express the beauty of mosaic art through vivid imagery, diverse colors, and stories about Vietnamese culture, nature, and everyday life. Many of them, such as the lotus and bird tea set, are made to be used every day."
        }
      ],
      // A -> B -> C -> D, cut off the desk so only the trays show
      quyTrinh: [
        {
          "ten": "Kumquat tree",
          "buoc": [
            {
              "src": "/images/arts/mosaic/process/quat-1.png",
              "rong": 1388,
              "cao": 1918,
              "moTa": "Kumquat tree, step A: the bare tray"
            },
            {
              "src": "/images/arts/mosaic/process/quat-2.png",
              "rong": 1374,
              "cao": 1902,
              "moTa": "Kumquat tree, step B: tiles set in"
            },
            {
              "src": "/images/arts/mosaic/process/quat-3.png",
              "rong": 1346,
              "cao": 1808,
              "moTa": "Kumquat tree, step C: grout spread over"
            },
            {
              "src": "/images/arts/mosaic/process/quat-4.png",
              "rong": 1322,
              "cao": 1825,
              "moTa": "Kumquat tree, step D: wiped clean and finished"
            }
          ]
        },
        {
          "ten": "Dragon",
          "buoc": [
            {
              "src": "/images/arts/mosaic/process/rong-1.png",
              "rong": 1962,
              "cao": 1278,
              "moTa": "Dragon, step A: the bare tray"
            },
            {
              "src": "/images/arts/mosaic/process/rong-2.png",
              "rong": 2052,
              "cao": 1337,
              "moTa": "Dragon, step B: tiles set in"
            },
            {
              "src": "/images/arts/mosaic/process/rong-3.png",
              "rong": 2165,
              "cao": 1488,
              "moTa": "Dragon, step C: grout spread over"
            },
            {
              "src": "/images/arts/mosaic/process/rong-4.png",
              "rong": 2155,
              "cao": 1393,
              "moTa": "Dragon, step D: wiped clean and finished"
            }
          ]
        }
      ],
      anhCuoi: [
        {
          "src": "/images/arts/mosaic/tea-set.jpg",
          "rong": 5328,
          "cao": 4000,
          "moTa": "The lotus and bird mosaic tea set"
        },
        {
          "src": "/images/arts/mosaic/with-all-pieces.jpg",
          "rong": 4096,
          "cao": 3075,
          "moTa": "Anh Thư with all of her mosaic pieces"
        },
        {
          "src": "/images/arts/mosaic/with-pieces-01.jpg",
          "rong": 3076,
          "cao": 4096,
          "moTa": "Anh Thư holding the dragon and kumquat tree pieces"
        },
        {
          "src": "/images/arts/mosaic/with-pieces-02.jpg",
          "rong": 3075,
          "cao": 4096,
          "moTa": "Anh Thư with the tea tray in a mosaic garden"
        }
      ]
    },
    xuong: {
      tieuDe: "WORKSHOP",
      doan: [
        {
          chu: "I have organized two mosaic workshops in Hanoi: one at QMosaic Artspace in Bat Trang Pottery Village with 23 participants, and another at Read Station in central Hanoi with 36 participants. Across both workshops, 59 participants experienced the creative process and took home pieces they made themselves. Through these workshops, I hope to bring traditional culture closer to the community and encourage more people to explore, use, and support Vietnamese ceramics."
        }
      ],
      buoi: [
        {
          "ten": "Workshop 1",
          "anh": [
            {
              "src": "/images/arts/mosaic/workshop/workshop1-01.jpg",
              "rong": 5120,
              "cao": 3412,
              "moTa": "Workshop 1 at QMosaic Artspace, Bat Trang, photo 1"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop1-02.jpg",
              "rong": 5120,
              "cao": 3412,
              "moTa": "Workshop 1 at QMosaic Artspace, Bat Trang, photo 2"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop1-03.jpg",
              "rong": 5120,
              "cao": 3412,
              "moTa": "Workshop 1 at QMosaic Artspace, Bat Trang, photo 3"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop1-04.jpg",
              "rong": 5120,
              "cao": 3412,
              "moTa": "Workshop 1 at QMosaic Artspace, Bat Trang, photo 4"
            }
          ]
        },
        {
          "ten": "Workshop 2",
          "anh": [
            {
              "src": "/images/arts/mosaic/workshop/workshop2-01.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 1"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-02.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 2"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-03.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 3"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-04.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 4"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-05.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 5"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-06.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 6"
            },
            {
              "src": "/images/arts/mosaic/workshop/workshop2-07.jpg",
              "rong": 1616,
              "cao": 1080,
              "moTa": "Workshop 2 at Read Station, Hanoi, photo 7"
            }
          ]
        }
      ]
    }
  },
  piano: {
    tieuDe: "Piano",
    // plain text with three linked bits; each link peeks at its certificate on hover (the Doc: show the picture, not the Drive page)
    doan: [
      "In 2017, I traveled to Singapore to take part in the ",
      {
        chu: "Asia Pacific Arts Festival (APAF)",
        lienKet: "https://drive.google.com/file/d/1FTXg97toT7xkPO2Sk9GiFpwtGT0aC4CD/view?usp=drive_link",
        anh: { src: "/images/arts/piano/apaf-2017.jpg", rong: 2560, cao: 1821, moTa: "Asia Pacific Arts Festival 2017 gold certificate" },
      },
      ", where I received a Gold Prize. I also performed at the ",
      {
        chu: "ABRSM High Scorers’ Concert",
        lienKet: "https://drive.google.com/file/d/11b_8Dp-YJoDP-2Pc1IoBZl_m189TblTt/view?usp=drive_link",
        anh: { src: "/images/arts/piano/high-scorers-concert-2018.jpg", rong: 1786, cao: 2526, moTa: "ABRSM High Scorers’ Concert 2018 certificate" },
      },
      " in 2018 and completed the ",
      {
        chu: "ABRSM Grade 6",
        lienKet: "https://drive.google.com/file/d/1SCUAxCNxeIzMalu1LbC6jM33NDq1DQBF/view?usp=drive_link",
        anh: { src: "/images/arts/piano/abrsm-grade-6.jpg", rong: 1850, cao: 2560, moTa: "ABRSM Grade 6 piano certificate" },
      },
      " Piano Performance with Distinction in 2023, a memorable milestone in my piano journey.",
    ],
    tietMuc: [
      {
        video: { id: "J40vXTsRFtQ", ten: "Sonatina in G Major, Beethoven" },
        moTa: [
          { chu: "**Ludwig van Beethoven – Sonatina in G Major**" },
          { chu: "*Performed at the Asia Pacific Arts Festival (APAF) Singapore 2017, where I received a Gold Prize.*" },
        ],
      },
      {
        video: { id: "lddC4G76vnM", ten: "Prelude in C-sharp Minor, Stephen Heller" },
        moTa: [
          { chu: "**Stephen Heller – Prelude in C-sharp Minor**" },
          { chu: "*One of the pieces I performed for the ABRSM Grade 6 Piano Performance 2023, in which I earned Distinction.*" },
        ],
      },
    ],
  },
  danTranh: {
    tieuDe: "Vietnamese Zither",
    tietMuc: [
      {
        video: { id: "_pIt2s_vXhI", ten: "Trống Cơm, Vietnamese zither cover" },
        moTa: [
          {
            chu: "In this video, I perform **“Trống Cơm”**, a familiar Vietnamese folk song and one of the first pieces I learned. Learning this piece introduced me to the distinctive rhythms and sounds of traditional Vietnamese music.",
          },
        ],
      },
      {
        video: { id: "mos4Cw3aTC4", ten: "Một Vòng Việt Nam, Vietnamese zither cover" },
        moTa: [
          {
            chu: "I also perform **“Một Vòng Việt Nam,”** a song that celebrates the beauty, the landscapes, and the people of Vietnam. Learning and performing this piece have deepened my appreciation for Vietnamese music and the cultural stories behind each melody.",
          },
        ],
      },
    ],
  },
};
