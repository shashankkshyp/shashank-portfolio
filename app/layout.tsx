import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientGlow from "@/components/AmbientGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashank Kashyap | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Shashank Kashyap, a Computer Science undergraduate focused on full-stack development, AI engineering, and modern web applications.",
  keywords: [
    "Shashank Kashyap",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "OpenAI API",
    "Cloud IDE",
    "WebContainer",
    "Convex",
    "Prisma",
  ],
  authors: [{ name: "Shashank Kashyap", url: "https://github.com/shashankkshyp" }],
  creator: "Shashank Kashyap",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/shashankkshyp",
    title: "Shashank Kashyap | Full-Stack Developer & AI Engineer",
    description:
      "Computer Science undergraduate focused on full-stack development, AI engineering, and building scalable, interactive web applications.",
    siteName: "Shashank Kashyap Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Kashyap | Full-Stack Developer & AI Engineer",
    description:
      "Computer Science undergraduate focused on full-stack development, AI engineering, and building scalable, interactive web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070709] text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-white relative">
        <ScrollProgress />
        <AmbientGlow />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
