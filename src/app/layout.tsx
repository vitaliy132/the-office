import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans } from "next/font/google";
import { BrandBackground } from "@/components/BrandBackground";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
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
      className={`${bodoni.variable} ${dmSans.variable} h-full antialiased`}
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
