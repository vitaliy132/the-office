"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LogoMark } from "@/components/LogoMark";
import { navLinks } from "@/lib/nav";

const menuRow = 24;
const menuGap = 24;

export const cornerListClass =
  "overflow-y-auto max-h-[calc(100svh-var(--corner-max))] md:max-h-[calc(100svh-var(--corner-max-md))]";

export function cornerListStyle(): CSSProperties {
  const block = menuRow + menuGap;
  return {
    "--corner-max": `${20 + 20 + block}px`,
    "--corner-max-md": `${75 + 75 + block}px`,
  } as CSSProperties;
}

export function CornerHeader({ currentHref }: { currentHref: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentLink = navLinks.find((link) => link.href === currentHref);
  const otherLinks = navLinks.filter((link) => link.href !== currentHref);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <>
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[25] bg-white transition-opacity duration-[400ms] ease-linear motion-reduce:transition-none ${
          menuOpen ? "opacity-[0.98]" : "pointer-events-none opacity-0"
        }`}
      />
      <Link
        href="/"
        aria-label="The Office"
        className="fixed top-5 left-5 z-30 md:top-[75px] md:left-[75px]"
      >
        <LogoMark
          size="custom"
          priority
          alt=""
          className="h-[80px] w-auto brightness-0"
        />
      </Link>

      <div
        ref={menuRef}
        className="fixed top-5 right-5 z-30 md:top-[75px] md:right-[75px]"
      >
        <div className="flex items-start justify-end gap-5">
          <ul className="text-right font-sans text-[14px] leading-6 uppercase">
            {currentLink ? (
              <li>
                <Link
                  href={currentLink.href}
                  aria-current="page"
                  className="block opacity-100 transition-opacity duration-300 ease-linear"
                >
                  {currentLink.label}
                </Link>
              </li>
            ) : null}
            {otherLinks.map((link) => (
              <li
                key={link.href}
                inert={menuOpen ? undefined : true}
                className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] motion-reduce:transition-none ${
                  menuOpen ? "grid-rows-[1fr]" : "pointer-events-none grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <Link
                    href={link.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className="block opacity-20 transition-opacity duration-300 ease-linear hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative mt-[3px] h-[18px] w-[30px] shrink-0"
          >
            <span
              className={`absolute right-0 h-0.5 bg-black transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                menuOpen
                  ? "top-1/2 w-full -translate-y-1/2 rotate-45"
                  : "top-0 w-full"
              }`}
            />
            <span
              className={`absolute top-1/2 right-0 h-0.5 -translate-y-1/2 bg-black transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                menuOpen ? "w-0 opacity-0" : "w-4/5 opacity-100"
              }`}
            />
            <span
              className={`absolute right-0 h-0.5 bg-black transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                menuOpen
                  ? "top-1/2 w-full -translate-y-1/2 -rotate-45"
                  : "top-4 w-3/5"
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
