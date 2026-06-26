import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { COUTURE } from "@/lib/site";

export function CoutureSection() {
  return (
    <section className="relative flex h-[58vh] min-h-[420px] items-center justify-center overflow-hidden lg:h-[560px]">
      <Image
        src={COUTURE.image}
        alt={COUTURE.title}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />

      <Reveal className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center text-cream">
        <span className="eyebrow text-cream">{COUTURE.eyebrow}</span>
        <h2 className="mt-4 font-serif text-[clamp(1.9rem,3vw,38px)] leading-tight text-cream">
          {COUTURE.title}
        </h2>
        <a href={COUTURE.cta.href} className="es-btn mt-7">
          {COUTURE.cta.label}
        </a>
      </Reveal>
    </section>
  );
}
