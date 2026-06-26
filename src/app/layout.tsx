import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edward Sexton",
  description:
    "Edward Sexton homepage clone: Savile Row bespoke tailoring and ready-to-wear collections.",
  icons: {
    icon: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
