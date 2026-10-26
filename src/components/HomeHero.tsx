"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { InkButton } from "@/components/InkButton";
import { ensureGsap, gsap } from "@/lib/gsap";

ensureGsap();

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-complete")) {
      setReady(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains("intro-complete")) {
        setReady(true);
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!ready) return;

      gsap.fromTo(
        ".hero-copy",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        ".hero-scroll-copy",
        { x: 88, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "top -25%",
            scrub: 0.6,
          },
        },
      );
    },
    { scope: ref, dependencies: [ready] },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="grain" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <h1 className="sr-only">The Office — Event Organizer</h1>

        <div className="hero-copy w-full opacity-0">
          <p className="max-w-2xl font-display text-3xl leading-tight tracking-[-0.02em] text-white/95 md:text-4xl">
            <span className="title-highlight">
              Born in Leeds, we build nights that bring people together. Clock
              into your next rave.
            </span>
          </p>
          <div className="hero-scroll-copy mt-8 ml-auto w-[min(34rem,100%)] opacity-0">
            <p className="max-w-xl text-right font-sans text-sm leading-relaxed text-white/50">
              Curating forward-thinking lineups, supporting local creatives and
              artists, we remain dedicated to championing the true heartbeat of
              the underground. Join our community and lose yourself at The
              Office.
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <InkButton href="/events">Upcoming Events</InkButton>
              <InkButton
                href="https://chat.whatsapp.com/J10JggUuroq3DJrfS6hxgT?mode=gi_t"
                variant="outline"
              >
                Join Our Community
              </InkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
