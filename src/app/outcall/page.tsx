import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { outcallPage } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Выездной сервис | Sognatore",
  description:
    "Портной Sognatore приедет к вам домой или в офис: снятие мерок и подбор тканей в удобное время. Москва и область, корпоративные заказы.",
};

export default function OutcallPage() {
  return <ArticlePage content={outcallPage} />;
}
