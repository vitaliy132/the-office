import type { Metadata } from "next";
import localFont from "next/font/local";
import { BrandBackground } from "@/components/BrandBackground";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import "./globals.css";

const ttTravelsNext = localFont({
  src: [
    {
      path: "../fonts/TTTravelsNext-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TTTravelsNext-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/TTTravelsNext-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/TTTravelsNext-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-travels-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Office",
  description: "The Office — music, events, and culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ttTravelsNext.variable} ${ttTravelsNext.className} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col text-white">
        <BrandBackground />
        <Providers>
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Nav />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
