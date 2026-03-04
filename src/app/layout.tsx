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
    "AI Engineer & Full-Stack Developer specializing in scalable machine learning applications and modern web technologies. Explore the portfolio of Lahcen Ait Zetta.",
  keywords: ["AI Engineer", "Full-Stack Developer", "MLOps", "Azure", "Python", "React", "Data Engineering"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lahcen Ait Zetta | AI & Full-Stack Engineer",
    description: "Specializing in scalable machine learning applications and modern web technologies.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lahcen Ait Zetta",
    "jobTitle": "AI & Full-Stack Engineer",
    "url": "https://lahcenaitzetta.vercel.app/",
    "sameAs": [
      "https://github.com/Lhcenzetta",
      "https://linkedin.com/in/laitzetta"
    ],
    "description": "AI Engineer & Full-Stack Developer specializing in scalable machine learning applications and modern web technologies."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
