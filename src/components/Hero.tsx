import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { HERO } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[540px] w-full overflow-hidden lg:h-[680px]">
      <Image
        src={HERO.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility overlay — darker through the centre where the headline sits */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.55))]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
        <Reveal as="h1" className="font-serif leading-[1.1] text-cream text-[clamp(2.75rem,7vw,84px)]">
          {HERO.title}
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="mt-3 max-w-2xl text-[clamp(1.05rem,1.5vw,24px)] leading-snug"
        >
          {HERO.subtitle}
        </Reveal>
        <Reveal
          delay={240}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          {HERO.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className="es-btn">
              {cta.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
