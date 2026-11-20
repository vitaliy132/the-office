"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LogoMark } from "@/components/LogoMark";
import { navLinks } from "@/lib/nav";

const menuRow = 24;
const menuGap = 24;

export const cornerListClass =
  "overflow-y-auto max-h-[calc(100svh-var(--corner-max))] md:max-h-[calc(100svh-var(--corner-max-md))]";

export function cornerListStyle(open: boolean): CSSProperties {
  const rows = open ? navLinks.length : 1;
  const block = rows * menuRow + menuGap;
  return {
    "--corner-max": `${20 + 20 + block}px`,
    "--corner-max-md": `${75 + 75 + block}px`,
  } as CSSProperties;
}

export function CornerHeader({
  currentHref,
  onOpenChange,
}: {
  currentHref: string;
  onOpenChange?: (open: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentLink = navLinks.find((link) => link.href === currentHref);
  const otherLinks = navLinks.filter((link) => link.href !== currentHref);

  useEffect(() => {
    onOpenChange?.(menuOpen);
  }, [menuOpen, onOpenChange]);

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
      <Link
        href="/"
        aria-label="The Office"
        className="fixed top-5 left-5 z-20 md:top-[75px] md:left-[75px]"
      >
        <LogoMark
          size="custom"
          priority
          alt=""
          className="h-[65px] w-auto brightness-0"
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
            {menuOpen
              ? otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block opacity-20 transition-opacity duration-300 ease-linear hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative mt-[3px] h-[18px] w-[30px] shrink-0"
          >
            <span className="absolute top-0 right-0 h-0.5 w-full bg-black" />
            <span className="absolute top-1/2 right-0 h-0.5 w-4/5 -translate-y-1/2 bg-black" />
            <span className="absolute right-0 bottom-0 h-0.5 w-3/5 bg-black" />
          </button>
        </div>
      </div>
    </>
  );
}
