"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AccountIcon,
  CartIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(18,18,18,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[69px] max-w-[1800px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Left: mobile menu toggle + logo */}
        <div className="flex flex-1 items-center gap-4">
          <button
            type="button"
            aria-label="Open menu"
            className="text-ink-strong lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          <a href="/" aria-label="Sognatore" className="block">
            <Image
              src="/images/sognatore-logo.svg"
              alt="Sognatore"
              width={180}
              height={34}
              priority
              className="h-[30px] w-auto sm:h-[34px]"
            />
          </a>
        </div>

        {/* Center: nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-serif text-[16px] leading-none text-ink-strong transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: utility icons */}
        <div className="flex flex-1 items-center justify-end gap-5 text-ink-strong">
          <button type="button" aria-label="Account" className="transition-opacity hover:opacity-60">
            <AccountIcon />
          </button>
          <button type="button" aria-label="Search" className="transition-opacity hover:opacity-60">
            <SearchIcon />
          </button>
          <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-60">
            <CartIcon />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-strong/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[82%] max-w-sm bg-cream px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-ink-strong">Меню</span>
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <CloseIcon className="text-ink-strong" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-serif text-2xl text-ink-strong"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
