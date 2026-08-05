"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function BrandBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced || !ref.current) return;

      gsap.to(".brand-watermark", {
        y: -10,
        scale: 1.015,
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="brand-watermark absolute top-1/2 left-1/2 w-[min(70vw,860px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.09]">
        <Image
          src="/brand/logo.png"
          alt=""
          width={1200}
          height={600}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
