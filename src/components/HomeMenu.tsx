"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { navLinks } from "@/lib/nav";

const SLIDE = 32;
const COPIES = 3;

function Caret({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 320 512"
      className="h-[15px] w-[9px]"
      aria-hidden="true"
      fill="currentColor"
    >
      {direction === "up" ? (
        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
      ) : (
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      )}
    </svg>
  );
}

export function HomeMenu() {
  const count = navLinks.length;
  const slides = Array.from({ length: COPIES }, (_, copy) =>
    navLinks.map((link) => ({ ...link, copy })),
  ).flat();
  const [index, setIndex] = useState<number>(count);
  const [motionOn, setMotionOn] = useState(true);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index >= count && index < count * 2) return;

    const normalized = ((index % count) + count) % count + count;
    const timeout = window.setTimeout(() => {
      setMotionOn(false);
      setIndex(normalized);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setMotionOn(true));
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [index, count]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let locked = false;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (locked || Math.abs(event.deltaY) < 4) return;
      locked = true;
      const direction = event.deltaY > 0 ? 1 : -1;
      setMotionOn(true);
      setIndex((current) => current + direction);
      window.setTimeout(() => {
        locked = false;
      }, 500);
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setMotionOn(true);
      setIndex((current) => current + direction);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const move = (direction: number) => {
    setMotionOn(true);
    setIndex((current) => current + direction);
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-black text-white">
      <div className="flex w-[min(80%,42rem)] flex-col items-center gap-8 md:w-auto md:flex-row md:items-center md:gap-0">
        <Link href="/" aria-label="The Office" className="shrink-0">
          <LogoMark
            size="custom"
            priority
            alt=""
            className="h-24 w-auto md:h-32"
          />
        </Link>

        <ul className="flex flex-col items-center gap-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-center font-sans text-[22px] leading-none uppercase transition-opacity duration-300 ease-linear hover:opacity-20"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          ref={scrollerRef}
          className="relative hidden text-[30px] leading-none uppercase md:ml-[100px] md:block"
        >
          <button
            type="button"
            aria-label="Previous tab"
            onClick={() => move(-1)}
            className="absolute top-[-22.5px] left-1/2 -translate-x-1/2 text-white transition-opacity duration-300 ease-linear hover:opacity-20"
          >
            <Caret direction="up" />
          </button>

          <div className="box-border h-[62px] w-max min-w-[13.25rem] overflow-hidden py-[15px]">
            <ul
              className="will-change-transform"
              style={{
                transform: `translate3d(0, ${-index * SLIDE}px, 0)`,
                transition: motionOn ? "transform 500ms ease" : "none",
              }}
            >
              {slides.map((link) => (
                <li key={`${link.copy}-${link.href}`} className="h-8">
                  <Link
                    href={link.href}
                    aria-current={link.href === "/home" ? "page" : undefined}
                    className="block h-8 text-center font-sans text-[30px] leading-[30px] whitespace-nowrap uppercase transition-opacity duration-300 ease-linear hover:opacity-20"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            aria-label="Next tab"
            onClick={() => move(1)}
            className="absolute bottom-[-22.5px] left-1/2 -translate-x-1/2 text-white transition-opacity duration-300 ease-linear hover:opacity-20"
          >
            <Caret direction="down" />
          </button>
        </div>
      </div>
    </div>
  );
}
