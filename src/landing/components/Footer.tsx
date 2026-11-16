"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import { OrderChannelLogo } from "../ui/BrandLogos";
import { SocialIcon } from "../ui/SocialIcon";
import {
  ariaLabelAttr,
  attachKeydown,
  attachOutsidePointerDown,
  floatingExpandGridClass,
  floatingExpandTextClass,
  floatingFabClass,
  footerPillClass,
  footerPillLinkProps,
  isEscapeKey,
  linkTargetProps,
  orderMenuBtnA11y,
  readBlockCopy,
  readFooterMeta,
  readItemCopy,
  svgPreserveAttr,
  type FloatingOrderChannel,
  type SectionComponentProps,
} from "../lib/helpers";

function ChannelRowContent({ ch }: { ch: FloatingOrderChannel }) {
  return (
    <span className="flex items-center gap-3">
      <span className={ch.badgeBoxClass} aria-hidden="true">
        <OrderChannelLogo isWa={ch.isWa} isShopee={ch.isShopee} />
      </span>
      <span className="font-sans text-[14.5px] leading-tight font-bold text-[#3E2216]">
        {ch.channelName}
      </span>
    </span>
  );
}

export function Footer({ block }: SectionComponentProps) {
  const [orderMenuOpen, setOrderMenuOpen] = useState(false);
  const menuWrapRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const meta = readFooterMeta(block, locale);
  const copy = readBlockCopy(block, locale);

  useEffect(() => {
    if (!orderMenuOpen) return;
    const detachKeys = attachKeydown((key) => {
      if (isEscapeKey(key)) setOrderMenuOpen(false);
    });
    const detachOutside = attachOutsidePointerDown(menuWrapRef.current, () => {
      setOrderMenuOpen(false);
    });
    return () => {
      detachKeys();
      detachOutside();
    };
  }, [orderMenuOpen]);

  return (
    <>
      <footer className="relative bg-[#2C1810] text-[#F5F0EA]">
        <div className="-mb-px w-full overflow-hidden bg-[#F5F0EA] leading-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 120"
            {...svgPreserveAttr()}
            className="block h-[56px] w-full sm:h-[84px] lg:h-[116px]"
          >
            <path d={meta.wavePath} fill="#2C1810" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1400px] px-5 pt-4 pb-24 sm:px-7 sm:pt-6 sm:pb-24 lg:px-12 lg:pt-8 lg:pb-24">
        <div className="overflow-hidden py-4 sm:py-6">
          <p className="text-center font-hero text-[clamp(6rem,26vw,21.5rem)] leading-[0.82] font-extrabold lowercase tracking-[-0.045em] text-[#B05D44] select-none">
            {bind(block, "title")}
          </p>
        </div>

        <div className="mt-8 border-t border-[#F5F0EA]/16 pt-8 sm:mt-10 sm:pt-10 lg:mt-12 lg:pt-11">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <nav
              {...ariaLabelAttr(meta.footerNavAria)}
              className="md:col-span-3 lg:col-span-3"
            >
              <ul className="space-y-1">
                <li>
                  <a
                    href={meta.colNav0Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enColNav0}</span> : <span>{bind(block, "extra.col_nav_0_label")}</span>}
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav1Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enColNav1}</span> : <span>{bind(block, "extra.col_nav_1_label")}</span>}
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav2Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enColNav2}</span> : <span>{bind(block, "extra.col_nav_2_label")}</span>}
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav3Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enColNav3}</span> : <span>{bind(block, "extra.col_nav_3_label")}</span>}
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav4Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enColNav4}</span> : <span>{bind(block, "extra.col_nav_4_label")}</span>}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="md:col-span-3 lg:col-span-3">
              <ul className="space-y-1">
                <li>
                  <a
                    href={meta.orderWaHref}
                    {...linkTargetProps(true)}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enActionOrder}</span> : <span>{bind(block, "extra.action_order_label")}</span>}
                  </a>
                </li>
                <li>
                  <a
                    href={meta.wholesaleWaHref}
                    {...linkTargetProps(true)}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    {meta.isEn ? <span>{meta.enActionWholesale}</span> : <span>{bind(block, "extra.action_wholesale_label")}</span>}
                  </a>
                </li>
                {meta.shopeeHref && (
                  <li>
                    <a
                      href={meta.shopeeHref}
                      {...linkTargetProps(true)}
                      className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                    >
                      {meta.isEn ? <span>{meta.enActionShopee}</span> : <span>{bind(block, "extra.action_shopee_label")}</span>}
                    </a>
                  </li>
                )}
                {meta.tokopediaHref && (
                  <li>
                    <a
                      href={meta.tokopediaHref}
                      {...linkTargetProps(true)}
                      className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                    >
                      {meta.isEn ? <span>{meta.enActionTokopedia}</span> : <span>{bind(block, "extra.action_tokopedia_label")}</span>}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-8 md:col-span-6 lg:col-span-6 lg:items-end">
              <p className="text-[14px] text-[#D7C9BE] md:text-right">
                {copy.isEn ? <span>{copy.bodyCopy}</span> : <span>{bind(block, "description")}</span>}
              </p>

              <div
                {...ariaLabelAttr(meta.shortcutsAria)}
                className="flex flex-wrap items-center gap-3 pt-2 md:justify-end"
              >
                {meta.socialItems.map((item, idx) => {
                  const itemCopy = readItemCopy(item, locale);
                  return (
                    <a
                      key={idx}
                      {...footerPillLinkProps(item, meta.phone, meta.orderWaHref, locale)}
                      className={footerPillClass()}
                    >
                      <SocialIcon item={item} />
                      {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

      <div
        ref={menuWrapRef}
        className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3 sm:right-7 sm:bottom-7"
      >
        {orderMenuOpen && (
          <div
            id={meta.floatingMenuId}
            {...ariaLabelAttr(meta.popoverHead)}
            className="w-[min(86vw,272px)] rounded-[22px] border border-[#3E2216]/14 bg-[#FBF8F4] p-3.5 text-[#14110F] shadow-[0_22px_50px_rgba(36,29,24,0.22)]"
          >
            <p className="mb-2.5 px-1 font-hero text-[15.5px] leading-tight font-extrabold tracking-[-0.015em] text-[#3E2216]">
              {meta.popoverHead}
            </p>

            <div className="flex flex-col gap-2">
              {meta.floatingOrderChannels.map((ch, idx) =>
                ch.available ? (
                  <a
                    key={idx}
                    href={ch.href}
                    {...linkTargetProps(true)}
                    onClick={() => setOrderMenuOpen(false)}
                    className={ch.rowClass}
                  >
                    <ChannelRowContent ch={ch} />
                  </a>
                ) : (
                  <div key={idx} className={ch.rowClass}>
                    <ChannelRowContent ch={ch} />
                    <span className="shrink-0 rounded-full bg-[#EFE7DE] px-2.5 py-1 text-[11px] font-bold whitespace-nowrap text-[#575049]">
                      {ch.badgeText}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOrderMenuOpen((prev) => !prev)}
          {...orderMenuBtnA11y(
            orderMenuOpen,
            meta.floatingWaAria,
            meta.floatingCloseAria,
            meta.floatingMenuId,
          )}
          className={floatingFabClass(orderMenuOpen)}
        >
          {orderMenuOpen ? (
            <X className="h-6 w-6 shrink-0" aria-hidden="true" />
          ) : (
            <ShoppingBag className="h-6 w-6 shrink-0" aria-hidden="true" />
          )}

          <span className={floatingExpandGridClass(orderMenuOpen)}>
            <span className="overflow-hidden">
              <span className={floatingExpandTextClass(orderMenuOpen)}>
                {meta.isEn ? <span>{meta.enFloatingLabel}</span> : <span>{bind(block, "extra.floating_cta_label")}</span>}
              </span>
            </span>
          </span>
        </button>
      </div>
    </>
  );
}
