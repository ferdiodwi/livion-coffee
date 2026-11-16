"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { bind } from "../lib/bind";
import { toggleLocale, useLocale } from "../lib/i18n";
import { FlagIcon } from "../ui/FlagIcon";
import {
  ariaLabelAttr,
  attachKeydown,
  attachWindowScroll,
  isEscapeKey,
  labelledByAttr,
  menuBtnA11y,
  mobileDrawerClass,
  navHeaderClass,
  navItemHref,
  readItemCopy,
  readNavbarMeta,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function Navbar({ block }: SectionComponentProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();

  const meta = readNavbarMeta(block, locale);
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

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" {...labelledByAttr(meta.navAria)}>
            {links.map((item, idx) => {
              const itemCopy = readItemCopy(item, locale);
              return (
                <a
                  key={idx}
                  href={navItemHref(item)}
                  className="inline-flex min-h-[48px] items-center whitespace-nowrap px-1 text-[14.5px] font-medium text-[#14110F]/80 transition-colors hover:text-[#A8401B] xl:text-[15.5px]"
                >
                  {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleLocale}
            {...ariaLabelAttr(meta.langSwitchAria)}
            className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#3E2216] px-4 py-1.5 text-[14.5px] leading-none font-semibold tracking-wide text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B] active:scale-[0.97] after:absolute after:-inset-y-2 after:inset-x-0 after:content-['']"
          >
            {meta.isEn ? (
              <span>{bind(block, "extra.lang_en_label")}</span>
            ) : (
              <span>{bind(block, "extra.lang_id_label")}</span>
            )}
            <FlagIcon isEn={meta.isEn} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            {...menuBtnA11y(mobileMenuOpen, meta.openAria, meta.closeAria, meta.drawerId)}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-full border border-[#14110F]/20 px-3.5 text-sm font-semibold text-[#14110F] transition-colors hover:border-[#14110F] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
            {meta.isEn ? <span>{meta.enMenuLabel}</span> : <span>{bind(block, "extra.menu_label")}</span>}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav-drawer"
        className={mobileDrawerClass(mobileMenuOpen)}
        {...labelledByAttr(meta.mobileNavAria)}
      >
        <div className="flex flex-col px-5 py-3.5">
          {links.map((item, idx) => {
            const itemCopy = readItemCopy(item, locale);
            return (
              <a
                key={idx}
                href={navItemHref(item)}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex min-h-[48px] items-center border-b border-[#14110F]/8 text-[15.5px] font-semibold text-[#14110F] transition-colors hover:text-[#A8401B] last:border-b-0"
              >
                {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
