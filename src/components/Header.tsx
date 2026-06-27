import Image from "next/image";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { contact, navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <input id="mobile-menu-toggle" className="mobile-menu-toggle" type="checkbox" />
      <div className="header-shell">
        <div className="header-brand">
          <label className="mobile-menu-button" htmlFor="mobile-menu-toggle" aria-label="Toggle menu">
            <MenuIcon />
          </label>
          <a className="logo-link" href="https://sognatore.ru/" aria-label="Sognatore home">
            <Image src="/images/sognatore-logo.svg" alt="Sognatore" width={792} height={147} priority />
          </a>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-contact-link" href={contact.phoneHref}>
            {contact.phone}
          </a>
          <a className="header-whatsapp-link" href={contact.whatsapp}>
            WhatsApp
          </a>
        </div>
      </div>

      <nav className="mobile-drawer" aria-label="Mobile navigation">
        <label className="mobile-drawer__close" htmlFor="mobile-menu-toggle" aria-label="Close menu">
          <CloseIcon />
        </label>
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <label className="mobile-drawer-backdrop" htmlFor="mobile-menu-toggle" aria-hidden="true" />
    </header>
  );
}
