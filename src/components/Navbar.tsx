"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { EDITORIAL_EASE } from "./MotionPrimitives";

const NAV_LINKS = [
  { label: "Beans", href: "#beans" },
  { label: "Origin", href: "#origin" },
  { label: "Brew Guide", href: "#brew-guide" },
  { label: "Wholesale", href: "#wholesale" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "border-b border-[#14110F]/10 bg-[#F5F0EA]/95"
          : "bg-[#F5F0EA]/85"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-7 lg:px-12 lg:py-5">
        <a
          href="#top"
          className="inline-flex min-h-[48px] items-center whitespace-nowrap font-hero text-[22px] font-extrabold tracking-tight text-[#3E2216] sm:text-[27px]"
        >
          Livion Coffee
        </a>

        <div className="flex items-center gap-4 sm:gap-7 lg:gap-10">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[48px] items-center px-1 text-[15.5px] font-medium text-[#14110F]/80 transition-colors hover:text-[#A8401B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#beans"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B8421B] px-7 py-2.5 text-[15.5px] font-semibold text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#3E2216] active:scale-[0.97]"
          >
            Shop
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-full border border-[#14110F]/20 px-3.5 text-sm font-semibold text-[#14110F] transition-colors hover:border-[#14110F] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
            <span>Menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-nav-drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: EDITORIAL_EASE }}
            className="overflow-hidden border-t border-[#14110F]/10 bg-[#F5F0EA] md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col px-5 py-3.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex min-h-[48px] items-center border-b border-[#14110F]/8 text-[15.5px] font-semibold text-[#14110F] transition-colors hover:text-[#A8401B] last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
