import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import localFont from "next/font/local";
import NhapChuot from "@/components/effects/NhapChuot";
import { site } from "@/data/site";
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
    default: "ANH THU LE | PORTFOLIO",
    template: "%s | ANH THU LE | PORTFOLIO",
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
        {/* small and quiet, the way the Doc asked. the address is the one thing on the site you may copy */}
        <footer className="px-20 pb-32 text-center text-sm text-black/70 select-text">
          Contact:{" "}
          <a href={`mailto:${site.email}`} className="underline-offset-2 hover:underline">
            {site.email}
          </a>{" "}
          · © 2026 Anh Thu Le
        </footer>
        <NhapChuot />
      </body>
    </html>
  );
}
