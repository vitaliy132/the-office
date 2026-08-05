"use client";

import { useEffect, useRef, useState } from "react";
import { ensureGsap, gsap } from "@/lib/gsap";
import { LogoMark } from "@/components/LogoMark";

ensureGsap();

export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setDone(true);
      document.documentElement.classList.add("intro-complete");
      return;
    }

    document.documentElement.classList.add("intro-locked");

    const root = rootRef.current;
    if (!root) return;

    const counter = { value: 0 };
    const letters = root.querySelectorAll<HTMLElement>(".intro-word-letter");

    gsap.set(".intro-logo-inner", {
      opacity: 0,
      scale: 1.08,
      filter: "blur(12px)",
    });
    gsap.set(".intro-logo-mask", { clipPath: "inset(100% 0 0 0)" });
    gsap.set(letters, { yPercent: 110, opacity: 0 });
    gsap.set(".intro-meta", { opacity: 0, y: 12 });
    gsap.set(".intro-rule", { scaleX: 0 });
    gsap.set(".intro-veil", { opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        document.documentElement.classList.remove("intro-locked");
        document.documentElement.classList.add("intro-complete");
        setDone(true);
      },
    });

    tl.to(".intro-veil", {
      opacity: 1,
      duration: 0.45,
      ease: "power1.out",
    })
      .to(
        ".intro-logo-mask",
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.15,
          ease: "power3.inOut",
        },
        "-=0.15",
      )
      .to(
        ".intro-logo-inner",
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1.05",
      )
      .to(
        letters,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.035,
          ease: "power3.out",
        },
        "-=0.55",
      )
      .to(
        ".intro-rule",
        { scaleX: 1, duration: 0.85, ease: "power2.inOut" },
        "-=0.55",
      )
      .to(
        ".intro-meta",
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "-=0.55",
      )
      .to(
        counter,
        {
          value: 100,
          duration: 1.2,
          ease: "power1.inOut",
          onUpdate: () => {
            if (progressRef.current) {
              progressRef.current.textContent = String(
                Math.round(counter.value),
              ).padStart(3, "0");
            }
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${counter.value / 100})`;
            }
          },
        },
        "-=0.35",
      )
      // brief hold on the mark
      .to(".intro-logo-inner", {
        scale: 1.02,
        duration: 0.55,
        ease: "sine.inOut",
      })
      .to(
        ".intro-content",
        {
          opacity: 0,
          y: -28,
          filter: "blur(6px)",
          duration: 0.55,
          ease: "power2.in",
        },
        "-=0.1",
      )
      .to(
        ".intro-panel-top",
        { yPercent: -101, duration: 1.05, ease: "power4.inOut" },
        "-=0.2",
      )
      .to(
        ".intro-panel-bottom",
        { yPercent: 101, duration: 1.05, ease: "power4.inOut" },
        "<",
      )
      .to(
        ".intro-veil",
        { opacity: 0, duration: 0.45, ease: "power2.out" },
        "-=0.55",
      );

    return () => {
      tl.kill();
      document.documentElement.classList.remove("intro-locked");
    };
  }, []);

  if (done) return null;

  const word = "THE OFFICE";

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] overflow-hidden"
      aria-hidden
    >
      {/* Soft grain veil over site while loading */}
      <div className="intro-veil pointer-events-none absolute inset-0 bg-black/40 backdrop-blur-md" />

      <div className="intro-panel-top absolute inset-x-0 top-0 z-[1] h-[51%] border-b border-white/10 bg-[#050505]/90 backdrop-blur-2xl" />
      <div className="intro-panel-bottom absolute inset-x-0 bottom-0 z-[1] h-[51%] bg-[#050505]/90 backdrop-blur-2xl" />

      <div className="intro-content pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <p className="mb-6 flex overflow-hidden font-sans text-[10px] tracking-[0.45em] text-white/40 uppercase">
          {word.split("").map((char, i) => (
            <span key={`${char}-${i}`} className="inline-block overflow-hidden">
              <span className="intro-word-letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </p>

        <div className="intro-logo-mask will-change-[clip-path]">
          <div className="intro-logo-inner will-change-transform">
            <LogoMark size="hero" priority />
          </div>
        </div>

        <div className="intro-rule mt-10 h-px w-44 origin-center scale-x-0 bg-gradient-to-r from-transparent via-white/50 to-transparent sm:w-64" />

        <div className="intro-meta mt-8 flex w-52 flex-col items-center gap-3 sm:w-64">
          <div className="flex w-full items-center justify-between font-sans text-[10px] tracking-[0.35em] text-white/40 uppercase">
            <span>Loading</span>
            <span
              ref={progressRef}
              className="tabular-nums text-white/55"
            >
              000
            </span>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/10">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-white/75"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
