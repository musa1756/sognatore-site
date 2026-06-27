import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { certificatePage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Подарочный сертификат | Sognatore",
  description:
    "Подарочный сертификат Sognatore на индивидуальный пошив одежды, обувь ручной работы и выбор тканей. Оформление в фирменном конверте с золотым тиснением.",
};

export default function CertificatePage() {
  return <ArticlePage content={certificatePage} />;
}
