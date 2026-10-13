import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import localFont from "next/font/local";
import NhapChuot from "@/components/effects/NhapChuot";
import "./globals.css";

const chuThan = Funnel_Sans({
  variable: "--font-funnel",
  subsets: ["latin", "latin-ext"],
});

// the loud one, used for every heading
const chuTieuDe = localFont({
  src: "./fonts/DFVN GLD Display Black.otf",
  variable: "--font-gld",
  weight: "900",
});

export const metadata: Metadata = {
  title: {
    default: "Anh Thư folio",
    template: "%s | Anh Thư folio",
  },
  description:
    "Portfolio of Le Anh Thu: academics, ceramic mosaic art, music and community projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next switch smooth scrolling off while it changes pages
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${chuThan.variable} ${chuTieuDe.variable} antialiased`}
    >
      <body>
        {children}
        <NhapChuot />
      </body>
    </html>
  );
}
