"use client";

import type { ReactNode } from "react";
import {
  CornerHeader,
  cornerListClass,
  cornerListStyle,
} from "@/components/CornerHeader";

export function WorshipPanel({
  currentHref,
  children,
}: {
  currentHref: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-svh bg-white text-black">
      <CornerHeader currentHref={currentHref} />
      <div
        className={`fixed right-5 bottom-5 left-5 z-10 md:right-[75px] md:bottom-[75px] md:left-auto md:min-w-[55%] ${cornerListClass}`}
        style={cornerListStyle()}
      >
        {children}
      </div>
    </div>
  );
}
