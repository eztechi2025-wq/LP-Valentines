"use client";

import { RouteViewTransition } from "@/components/layout/route-view-transition";
import { SkipLink } from "@/components/ui/skip-link";

type AppChromeProps = {
  children: React.ReactNode;
};

export function AppChrome({ children }: AppChromeProps) {
  return (
    <>
      <SkipLink />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-col flex-1"
      >
        <RouteViewTransition>
          {children}
        </RouteViewTransition>
      </main>
    </>
  );
}
