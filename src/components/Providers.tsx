"use client";

import { IntroLoader } from "@/components/IntroLoader";
import { PageTransition } from "@/components/PageTransition";
import { SmoothScroll } from "@/lib/lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <IntroLoader />
      <PageTransition>{children}</PageTransition>
    </SmoothScroll>
  );
}
