"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CornerHeader,
  cornerListClass,
  cornerListStyle,
} from "@/components/CornerHeader";
import type { ArtistEntry } from "@/lib/artists";

export function ArtistsFeed({ artists }: { artists: ArtistEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-svh bg-white text-black">
      <CornerHeader currentHref="/artists" onOpenChange={setMenuOpen} />

      <ul
        className={`fixed right-5 bottom-5 z-20 text-right md:right-[75px] md:bottom-[75px] ${cornerListClass}`}
        style={cornerListStyle(menuOpen)}
        onMouseLeave={() => setActiveId(null)}
      >
        {artists.map((artist) => {
          const active = activeId === artist.id;
          const dimmed = activeId !== null && !active;
          return (
            <li key={artist.id} className="mt-2.5 first:mt-0">
              <button
                type="button"
                className={`block font-sans text-[15px] leading-[15px] uppercase transition-opacity duration-300 ease-linear ${
                  dimmed ? "opacity-20" : "opacity-100"
                }`}
                onMouseEnter={() => setActiveId(artist.id)}
                onFocus={() => setActiveId(artist.id)}
                onClick={() => setActiveId(artist.id)}
              >
                {artist.name}
              </button>
              <div
                className="pointer-events-none fixed top-[10%] left-[30%] z-0 h-[80%] w-[40%] transition-opacity duration-300 ease-linear"
                style={{ opacity: active ? 1 : 0 }}
                aria-hidden={!active}
              >
                <Image
                  src={artist.image}
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-contain"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
