import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Keshav Sandhu — Engineering Practice",
  title: "Keshav Sandhu — Editorial Engineering Studio | Full-Stack & AI Systems",
  description:
    "Personal engineering practice of Keshav Sandhu. Full-Stack Engineer specializing in AI integrations, multi-tenant architectures, and high-performance web systems. From idea to working product.",
  keywords: [
    "Keshav Sandhu",
    "Full-Stack Engineer",
    "AI Systems",
    "Multi-Tenant Architecture",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "LangChain",
    "Engineering Studio",
  ],
  authors: [{ name: "Keshav Sandhu" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Keshav Sandhu — Editorial Engineering Studio",
    description: "From idea to working product. High-craft full-stack and AI engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Keshav Sandhu — Editorial Engineering Studio",
    description: "From idea to working product. High-craft full-stack and AI engineering.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
