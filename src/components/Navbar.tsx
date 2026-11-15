"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "./CartContext";

const NAV_LINKS = [
  { label: "Signature", href: "#signature" },
  { label: "Beans", href: "#beans" },
  { label: "Origin & Craft", href: "#origin" },
  { label: "Brew Guide", href: "#brew-guide" },
  { label: "Wholesale", href: "#wholesale" },
];

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#14110F]/12 bg-[#F5F0EA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-1.5 font-display text-xl font-bold tracking-tight uppercase text-[#14110F]"
        >
          <span>LIVION</span>
          <span className="text-[#C4552D]">/ COFFEE</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#14110F]/80 transition-colors hover:text-[#C4552D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#beans"
            className="hidden border-b border-[#14110F] pb-0.5 text-sm font-semibold text-[#14110F] transition-colors hover:border-[#C4552D] hover:text-[#C4552D] sm:inline-block"
          >
            Order Beans
          </a>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Buka keranjang (${totalItems} item)`}
            className="relative inline-flex items-center gap-2 rounded-sm bg-[#14110F] px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C49B63] px-1.5 font-mono text-[11px] font-bold text-[#14110F]">
              {totalItems}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex items-center justify-center rounded-sm border border-[#14110F]/20 p-2 text-[#14110F] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-[#14110F]/10 bg-[#F5F0EA] px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#14110F]/8 pb-2 text-sm font-semibold uppercase tracking-wider text-[#14110F]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
