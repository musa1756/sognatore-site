import Image from "next/image";
import { AccountIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { catalogMenuColumns } from "@/lib/catalog";
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
          <a className="logo-link" href="/" aria-label="Sognatore home">
            <Image src="/images/sognatore-logo.svg" alt="Sognatore" width={792} height={147} priority />
          </a>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.label === "Пошив" ? (
              <div className="mega-menu" key={item.label}>
                <a className="mega-menu__trigger" href={item.href}>
                  {item.label}
                </a>
                <div className="mega-menu__panel">
                  <div className="mega-menu__inner">
                    {catalogMenuColumns.map((column) => (
                      <section className="mega-menu__column" key={column.title}>
                        <h2>{column.title}</h2>
                        {column.links.map((link) => (
                          <a href={link.href} key={link.label}>
                            {link.label}
                          </a>
                        ))}
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="header-actions">
          <a className="icon-link" href="/#contacts" aria-label="Contacts">
            <AccountIcon />
          </a>
          <a className="icon-link" href="/catalog/all" aria-label="Catalog search">
            <SearchIcon />
          </a>
          <a className="icon-link" href={contact.whatsapp} aria-label="WhatsApp">
            <CartIcon />
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
        <div className="mobile-catalog-links">
          {catalogMenuColumns.map((column) => (
            <section key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </section>
          ))}
        </div>
      </nav>
      <label className="mobile-drawer-backdrop" htmlFor="mobile-menu-toggle" aria-hidden="true" />
    </header>
  );
}
