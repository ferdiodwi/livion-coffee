"use client";

import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import { WhatsAppLogo } from "../ui/BrandLogos";
import { SocialIcon } from "../ui/SocialIcon";
import {
  ariaLabelAttr,
  footerPillClass,
  footerPillLinkProps,
  linkTargetProps,
  readBlockCopy,
  readFooterMeta,
  readItemCopy,
  svgPreserveAttr,
  type SectionComponentProps,
} from "../lib/helpers";

export function Footer({ block }: SectionComponentProps) {
  const locale = useLocale();
  const meta = readFooterMeta(block, locale);
  const copy = readBlockCopy(block, locale);

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

      <a
        href={meta.floatingWaHref}
        {...linkTargetProps(true)}
        {...ariaLabelAttr(meta.floatingWaAria)}
        className="group fixed right-5 bottom-5 z-40 inline-flex h-14 min-w-14 items-center rounded-full bg-[#168341] px-3.5 text-[#FFFFFF] shadow-[0_12px_28px_rgba(22,131,65,0.34)] transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-[#147339] hover:shadow-[0_16px_34px_rgba(22,131,65,0.42)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#168341] active:scale-[0.97] sm:right-7 sm:bottom-7 motion-reduce:transition-none"
      >
        <WhatsAppLogo className="h-7 w-7 shrink-0" />

        <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] motion-reduce:transition-none">
          <span className="overflow-hidden">
            <span className="inline-block pr-2 pl-2.5 font-sans text-[15px] font-bold tracking-tight whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
              {meta.isEn ? <span>{meta.enFloatingLabel}</span> : <span>{bind(block, "extra.floating_cta_label")}</span>}
            </span>
          </span>
        </span>
      </a>
    </>
  );
}
