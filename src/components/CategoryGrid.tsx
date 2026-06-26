import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES } from "@/lib/site";

export function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {CATEGORIES.map((cat) => (
        <a
          key={cat.title}
          href={cat.href}
          className="group relative flex h-[64vh] min-h-[440px] flex-col items-center justify-center overflow-hidden lg:h-[620px]"
        >
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

          <Reveal className="relative z-10 flex flex-col items-center px-6 text-center text-cream">
            <h2 className="font-serif text-[clamp(1.75rem,2.4vw,30px)] leading-tight text-cream">
              {cat.title}
            </h2>
            <span className="es-btn mt-6">{cat.cta}</span>
          </Reveal>
        </a>
      ))}
    </section>
  );
}
