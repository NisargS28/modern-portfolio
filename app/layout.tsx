import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Nisarg Solanki — AI Solutions & Full-Stack Engineer",
  description:
    "Portfolio of Nisarg Solanki, a Computer Engineering student building AI-enabled full-stack products, RAG systems and workflow automation.",
  keywords: ["Nisarg Solanki", "AI engineer", "full stack developer", "RAG", "Next.js", "automation"],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Nisarg Solanki — AI Solutions & Full-Stack Engineer",
    description: "AI-enabled products, RAG systems and workflow automation built for real-world impact.",
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
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TCYR5DZYYQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TCYR5DZYYQ');
          `}
        </Script>
        <Script 
          id="chatbase-script" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="EBX6-R5SQxzsDouXcfZGI";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `
          }} 
        />
      </body>
    </html>
  );
}
