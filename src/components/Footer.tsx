import { ChevronDownIcon, PAYMENTS, SOCIALS } from "@/components/icons";
import { CURRENCY_LABEL, FOOTER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-green-darkest text-footer-text">
      <div className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Quote */}
          <p className="max-w-xs text-[17px] leading-relaxed text-footer-text/90">
            {FOOTER.quote}
          </p>

          {/* Newsletter */}
          <div>
            <p className="max-w-xs text-[17px] leading-relaxed">{FOOTER.newsletterText}</p>
            <form className="mt-6 max-w-xs">
              <input
                type="email"
                placeholder="Enter email"
                aria-label="Email"
                className="w-full border border-footer-text/40 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-footer-text/60 focus:border-cream focus:outline-none"
              />
              <button type="submit" className="es-btn es-btn--ghost-light mt-4">
                Sign Up
              </button>
            </form>
            <div className="mt-7 flex items-center gap-4">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-footer-text transition-opacity hover:opacity-70"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Information links */}
          <nav aria-label="Footer information">
            <ul className="space-y-3.5 text-[17px]">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-opacity hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-4 text-[17px]">
            <a href={`mailto:${FOOTER.contact.email}`} className="block transition-opacity hover:opacity-70">
              {FOOTER.contact.email}
            </a>
            <p>{FOOTER.contact.phone}</p>
            <p>{FOOTER.contact.whatsapp}</p>
            <p className="leading-relaxed">
              {FOOTER.contact.address}
              <br />
              {FOOTER.contact.hours}
            </p>
            <p>{FOOTER.contact.usa}</p>
            <a href="/pages/returns" className="block transition-opacity hover:opacity-70">
              {FOOTER.contact.returns}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-text/15">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: currency + copyright */}
          <div className="space-y-4">
            <button
              type="button"
              className="flex items-center gap-1.5 border border-footer-text/30 px-4 py-2.5 text-[14px] text-footer-text transition-opacity hover:opacity-80"
            >
              {CURRENCY_LABEL}
              <ChevronDownIcon width={14} height={14} />
            </button>
            <p className="text-[13px] text-footer-text/70">{FOOTER.copyright}</p>
          </div>

          {/* Right: payments + policies */}
          <div className="space-y-4 lg:text-right">
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {PAYMENTS.map((p) => (
                <span
                  key={p}
                  title={p}
                  className="flex h-[26px] min-w-[40px] items-center justify-center rounded-[3px] bg-cream px-1.5 text-[8px] font-semibold uppercase tracking-tight text-green-deep"
                >
                  {p.split(" ")[0]}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-footer-text/80 lg:justify-end">
              {FOOTER.policies.map((p) => (
                <a key={p.label} href={p.href} className="transition-opacity hover:opacity-70">
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
