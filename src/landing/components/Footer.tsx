"use client";

import { bind } from "../lib/bind";
import {
  ariaLabelAttr,
  footerPillClass,
  footerPillLinkProps,
  linkTargetProps,
  readFooterMeta,
  svgPreserveAttr,
  type SectionComponentProps,
} from "../lib/helpers";

export function Footer({ block }: SectionComponentProps) {
  const meta = readFooterMeta(block);

  return (
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

      <div className="mx-auto max-w-[1400px] px-5 pt-4 pb-12 sm:px-7 sm:pt-6 sm:pb-14 lg:px-12 lg:pt-8 lg:pb-16">
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
                    <span>{bind(block, "extra.col_nav_0_label")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav1Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    <span>{bind(block, "extra.col_nav_1_label")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav2Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    <span>{bind(block, "extra.col_nav_2_label")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={meta.colNav3Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    <span>{bind(block, "extra.col_nav_3_label")}</span>
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
                    <span>{bind(block, "extra.action_order_label")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={meta.wholesaleWaHref}
                    {...linkTargetProps(true)}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    <span>{bind(block, "extra.action_wholesale_label")}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-8 md:col-span-6 lg:col-span-6 lg:items-end">
              <p className="text-[14px] text-[#D7C9BE] md:text-right">
                {bind(block, "description")}
              </p>

              <div
                {...ariaLabelAttr(meta.shortcutsAria)}
                className="flex flex-col items-start gap-2.5 pt-2 sm:items-center lg:items-end"
              >
                <div className="flex flex-wrap items-center gap-3 sm:mr-10 sm:gap-4">
                  {meta.topPills.map((item, idx) => (
                    <a
                      key={idx}
                      {...footerPillLinkProps(item, meta.phone, meta.orderWaHref)}
                      className={footerPillClass(idx, true)}
                    >
                      <span>{bind(item, "title")}</span>
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                  {meta.bottomPills.map((item, idx) => (
                    <a
                      key={idx}
                      {...footerPillLinkProps(item, meta.phone, meta.orderWaHref)}
                      className={footerPillClass(idx, false)}
                    >
                      <span>{bind(item, "title")}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
