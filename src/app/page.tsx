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
        <div id="bespoke" className="scroll-mt-[120px]">
          <SplitPanels />
        </div>
        <div id="catalog" className="scroll-mt-[120px]">
          <CategoryGrid />
        </div>
        <div id="about" className="scroll-mt-[120px]">
          <CoutureSection />
        </div>
      </main>
      <div id="contacts">
        <Footer />
      </div>
    </>
  );
}
