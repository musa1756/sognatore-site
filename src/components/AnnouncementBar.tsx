import { ChevronDownIcon } from "@/components/icons";
import { CURRENCY_LABEL } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="bg-green-darkest text-cream">
      <div className="mx-auto flex h-[42px] max-w-[1800px] items-center justify-end px-5 sm:px-8">
        <button
          type="button"
          className="flex items-center gap-1.5 text-[13px] tracking-[0.01em] text-cream/90 transition-opacity hover:opacity-70"
        >
          {CURRENCY_LABEL}
          <ChevronDownIcon className="mt-px" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
