import type { Metadata } from "next";
import localFont from "next/font/local";
import { BrandBackground } from "@/components/BrandBackground";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../../ppneuemontreal-thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../ppneuemontreal-book.otf",
      weight: "375",
      style: "normal",
    },
    {
      path: "../../ppneuemontreal-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../ppneuemontreal-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../ppneuemontreal-semibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../ppneuemontreal-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
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
      className={`${neueMontreal.variable} ${neueMontreal.className} h-full antialiased`}
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
