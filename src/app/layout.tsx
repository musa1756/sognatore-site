import type { Metadata } from "next";
import { Playfair_Display, Libre_Franklin } from "next/font/google";
import "./globals.css";

// Body / UI — exact match to the source site.
const libreFranklin = Libre_Franklin({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Headings + nav — substitute for Adobe "Big Moore" (a high-contrast Didone).
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sognatore — индивидуальный пошив мужской одежды и обуви",
  description:
    "Sognatore — премиальное ателье в Москве. Индивидуальный пошив костюмов, пиджаков, пальто, верхней одежды и обуви по вашей мерке. Выезд мастера для снятия мерок.",
  icons: { icon: "/images/sognatore-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${libreFranklin.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
