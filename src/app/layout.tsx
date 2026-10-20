import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
  keywords: [
    "transportconsultant",
    "transport",
    "logistiek",
    "mobiliteit",
    "laadinfrastructuur",
    "zero-emissie",
    "open data",
    "advies",
    "Nederland",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    url: site.domain,
    siteName: site.name,
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
