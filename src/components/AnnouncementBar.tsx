import { PHONE, PHONE_TEL } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="bg-green-darkest text-cream">
      <div className="mx-auto flex h-[42px] max-w-[1800px] items-center justify-between gap-4 px-5 sm:px-8">
        <span className="hidden text-[13px] tracking-[0.04em] text-cream/80 sm:block">
          Бесплатный выезд мастера для снятия мерок по Москве
        </span>
        <a
          href={`tel:${PHONE_TEL}`}
          className="ml-auto text-[13px] tracking-[0.02em] text-cream/90 transition-opacity hover:opacity-70"
        >
          {PHONE}
        </a>
      </div>
    </div>
  );
}
