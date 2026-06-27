import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sognatore | Индивидуальный пошив мужской одежды и обуви",
  description:
    "Бутик-ателье Sognatore в Москве: индивидуальный пошив костюмов, пальто, рубашек и обуви по вашим меркам.",
  icons: {
    icon: asset("/seo/sognatore-favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
