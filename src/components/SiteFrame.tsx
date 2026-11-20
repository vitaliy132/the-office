"use client";

import { usePathname } from "next/navigation";
import { BrandBackground } from "@/components/BrandBackground";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { isBareRoute } from "@/lib/nav";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const gate = pathname === "/";
  const menuHome = pathname === "/home";
  const bare = isBareRoute(pathname);

  return (
    <>
      {bare ? null : <BrandBackground />}
      <div className="relative z-10 flex min-h-full flex-1 flex-col">
        {bare ? null : <Nav />}
        <main
          className={`flex flex-1 flex-col ${gate || menuHome ? "bg-black" : ""} ${menuHome ? "text-white" : ""}`}
        >
          {children}
        </main>
        {bare ? null : <Footer />}
      </div>
    </>
  );
}
