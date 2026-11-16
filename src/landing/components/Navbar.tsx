"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { bind } from "../lib/bind";
import {
  attachKeydown,
  attachWindowScroll,
  isEscapeKey,
  labelledByAttr,
  menuBtnA11y,
  mobileDrawerClass,
  navHeaderClass,
  navItemHref,
  readNavbarMeta,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function Navbar({ block }: SectionComponentProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const meta = readNavbarMeta(block);
  const links = sortedItems(block.items);

  useEffect(() => {
    return attachWindowScroll(18, setScrolled);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    return attachKeydown((key) => {
      if (isEscapeKey(key)) setMobileMenuOpen(false);
    });
  }, [mobileMenuOpen]);

  return (
    <header className={navHeaderClass(scrolled)}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-7 lg:px-12 lg:py-5">
        <a
          href={meta.homeHref}
          className="inline-flex min-h-[48px] items-center whitespace-nowrap font-hero text-[22px] font-extrabold tracking-tight text-[#3E2216] sm:text-[27px]"
        >
          <span>{bind(block, "title")}</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-9">
          <nav className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-8" {...labelledByAttr(meta.navAria)}>
            {links.map((item, idx) => (
              <a
                key={idx}
                href={navItemHref(item)}
                className="inline-flex min-h-[48px] items-center whitespace-nowrap px-1 text-[14.5px] font-medium text-[#14110F]/80 transition-colors hover:text-[#A8401B] lg:text-[15.5px]"
              >
                <span>{bind(item, "title")}</span>
              </a>
            ))}
          </nav>

          <a
            href={meta.ctaHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B8421B] px-7 py-2.5 text-[15.5px] font-semibold text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#3E2216] active:scale-[0.97]"
          >
            <span>{bind(block, "extra.cta_label")}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            {...menuBtnA11y(mobileMenuOpen, meta.openAria, meta.closeAria, meta.drawerId)}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-full border border-[#14110F]/20 px-3.5 text-sm font-semibold text-[#14110F] transition-colors hover:border-[#14110F] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
            <span>{bind(block, "extra.menu_label")}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav-drawer"
        className={mobileDrawerClass(mobileMenuOpen)}
        {...labelledByAttr(meta.mobileNavAria)}
      >
        <div className="flex flex-col px-5 py-3.5">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={navItemHref(item)}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex min-h-[48px] items-center border-b border-[#14110F]/8 text-[15.5px] font-semibold text-[#14110F] transition-colors hover:text-[#A8401B] last:border-b-0"
            >
              <span>{bind(item, "title")}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
