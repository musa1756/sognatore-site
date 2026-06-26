import Image from "next/image";
import { AccountIcon, CartIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <input id="mobile-menu-toggle" className="mobile-menu-toggle" type="checkbox" />
      <div className="header-shell">
        <div className="header-left">
          <label className="mobile-menu-button" htmlFor="mobile-menu-toggle" aria-label="Toggle menu">
            <MenuIcon />
          </label>
          <a className="icon-link icon-link--left-search" href="/search" aria-label="Search">
            <SearchIcon />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <a className="logo-link" href="/" aria-label="Edward Sexton home">
          <Image src="/images/edward-sexton.svg" alt="Edward Sexton" width={250} height={29} priority />
        </a>

        <div className="header-actions">
          <a className="icon-link" href="/account" aria-label="Account">
            <AccountIcon />
          </a>
          <a className="icon-link" href="/search" aria-label="Search">
            <SearchIcon />
          </a>
          <a className="icon-link" href="/cart" aria-label="Cart">
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
      </nav>
      <label className="mobile-drawer-backdrop" htmlFor="mobile-menu-toggle" aria-hidden="true" />
    </header>
  );
}
