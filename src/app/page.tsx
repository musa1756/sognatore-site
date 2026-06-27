import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { galleryItems } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GalleryGrid items={galleryItems} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
