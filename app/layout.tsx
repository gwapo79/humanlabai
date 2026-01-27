import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "HumanLab AI",
  description: "우리는 광고가 멈추지 않게 합니다. 브랜드와 캐릭터를 위한 지속 가능한 운영 솔루션.",
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
