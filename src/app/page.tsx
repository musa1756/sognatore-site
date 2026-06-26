import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SplitPanels } from "@/components/SplitPanels";
import { CategoryGrid } from "@/components/CategoryGrid";
import { CoutureSection } from "@/components/CoutureSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <SplitPanels />
        <CategoryGrid />
        <CoutureSection />
      </main>
      <Footer />
    </>
  );
}
