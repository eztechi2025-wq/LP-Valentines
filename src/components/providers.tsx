"use client";

import { ThemeProvider } from "next-themes";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";

import { AudioProvider } from "@/context/audio-context";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { setLenis } from "@/lib/lenis";
import {
  initHashNavigation,
  scrollToInitialHash,
} from "@/lib/navigation/scroll-to-hash";
import { registerGsapPlugins } from "@/lib/motion/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

registerGsapPlugins();

export function Providers({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      scrollToInitialHash();
      const removeHashNav = initHashNavigation();
      return () => {
        removeHashNav();
      };
    }

    const lenis = new Lenis({
      duration: 1,
      smoothWheel: true,
      allowNestedScroll: true,
    });

    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    const removeHashNav = initHashNavigation();
    scrollToInitialHash();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      cancelAnimationFrame(frame);
      removeHashNav();
      lenis.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AudioProvider>
        <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
          <div className="flex min-h-full w-full flex-1 flex-col">
            <HashScrollHandler />
            {children}
          </div>
        </MotionConfig>
      </AudioProvider>
    </ThemeProvider>
  );
}
