import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";

import { AppChrome } from "@/components/layout/app-chrome";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { FloatingMusicPlayer } from "@/components/layout/floating-music-player";
import { Providers } from "@/components/providers";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nossa Retrospectiva ❤️",
    template: "%s | Nossa Retrospectiva ❤️",
  },
  description: "Nossa retrospectiva especial de relacionamento.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <AppChrome>{children}</AppChrome>
          <FloatingMusicPlayer />
          <CustomCursor />
        </Providers>
      </body>
    </html>
  );
}
