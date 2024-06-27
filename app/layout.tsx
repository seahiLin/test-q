import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Nav from "./nav";
import "./globals.css";
import Logo from "@/public/imgs/AGII-black.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGII",
  description:
    "AGII is to bridge the gap between AI innovation and societal impact by creating a vibrant community dedicated to educating, inspiring, and empowering individuals to harness the transformative potential of AI for human betterment.",
  icons: [
    {
      rel: "icon",
      url: "/imgs/AGII-black.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 flex gap-0 justify-between px-16 bg-sky-950 max-md:flex-wrap max-md:px-5">
          <Link href="/" className="flex gap-2.5 items-center my-auto">
            <div className="flex gap-px self-stretch my-auto">
              <Image
                src={Logo}
                alt="logo"
                width={95}
                height={32}
                className="h-8 shrink-0 fill-white"
              />
            </div>
            <div className="shrink-0 self-stretch my-auto w-px h-8 bg-white bg-opacity-80" />
            <div className="text-xs font-light tracking-wide text-white uppercase">
              Augmented General <br /> Intelligence for Innovations
            </div>
          </Link>
          <Nav />
        </header>
        {children}
        <footer className="text-center px-16 py-12 mt-10 w-full text-sm leading-4 bg-sky-950 text-white text-opacity-80 max-md:px-5 max-md:max-w-full">
          Copyright © 2024 AGII
        </footer>
      </body>
    </html>
  );
}
