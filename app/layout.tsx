import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Nisarg Solanki — CS Student & Full Stack Developer",
  description:
    "Portfolio of Nisarg Solanki, a Computer Science student and Full Stack Developer passionate about building beautiful, performant web experiences.",
  keywords: ["portfolio", "developer", "react", "nextjs", "full stack", "computer science"],
  openGraph: {
    title: "Nisarg Solanki — CS Student & Full Stack Developer",
    description: "Building the future, one line of code at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background font-inter antialiased">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
