import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/ui/MobileNav";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lahcen Ait Zetta | AI & Full-Stack Engineer",
  description:
    "Portfolio of Lahcen Ait Zetta, specializing in AI, Machine Learning, and Full-Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-emerald-500/30 font-sans`}
      >
        {children}
        <MobileNav />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
