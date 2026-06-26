import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";

// Body / UI — exact match to the source site.
const libreFranklin = Libre_Franklin({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Headings + nav — substitute for Adobe "Big Moore" (a high-contrast Didone).
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edward Sexton",
  description:
    "Edward Sexton — Savile Row tailoring. Bespoke and ready-to-wear suits, jackets, shirts and casual wear, sculpted around you.",
  icons: { icon: "/seo/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
