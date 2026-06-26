import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SPLIT_PANELS } from "@/lib/site";

export function SplitPanels() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {SPLIT_PANELS.map((panel) => (
        <a
          key={panel.title}
          href={panel.cta.href}
          className="group relative flex h-[70vh] min-h-[460px] items-end justify-center overflow-hidden lg:h-[760px]"
        >
          <Image
            src={panel.image}
            alt={panel.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />

          <Reveal className="relative z-10 flex flex-col items-center px-6 pb-[12%] text-center text-cream [text-shadow:0_2px_22px_rgba(0,0,0,0.5)]">
            <span className="eyebrow text-cream">{panel.eyebrow}</span>
            <h2 className="mt-4 font-serif text-[clamp(1.75rem,2.4vw,30px)] leading-tight text-cream">
              {panel.title}
            </h2>
            <span className="es-link mt-6 inline-block">{panel.cta.label}</span>
          </Reveal>
        </a>
      ))}
    </section>
  );
}
