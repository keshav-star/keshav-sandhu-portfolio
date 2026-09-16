import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { metadataBase, siteName, siteUrl } from "@/lib/site";

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
  metadataBase,
  applicationName: siteName,
  title: "Keshav Sandhu — Full-Stack Product Engineer",
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
    "Product Engineer",
  ],
  authors: [{ name: "Keshav Sandhu" }],
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteName,
    description: "Multi-tenant SaaS and applied-AI products that hold up in production.",
    type: "website",
    locale: "en_US",
    url: siteUrl?.toString(),
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: "Multi-tenant SaaS and applied-AI products that hold up in production.",
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
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Keshav Sandhu",
                jobTitle: "Full-Stack Product Engineer",
                address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
                sameAs: ["https://linkedin.com/in/keshavsandhu"],
                url: siteUrl?.toString(),
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
