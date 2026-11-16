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
                <li>
                  <a
                    href={meta.colNav4Href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    <span>{bind(block, "extra.col_nav_4_label")}</span>
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

      <a
        href={meta.floatingWaHref}
        {...linkTargetProps(true)}
        {...ariaLabelAttr(meta.floatingWaAria)}
        className="group fixed right-5 bottom-5 z-40 inline-flex h-14 min-w-14 items-center rounded-full bg-[#168341] px-3.5 text-[#FFFFFF] shadow-[0_12px_28px_rgba(22,131,65,0.34)] transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-[#147339] hover:shadow-[0_16px_34px_rgba(22,131,65,0.42)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#168341] active:scale-[0.97] sm:right-7 sm:bottom-7 motion-reduce:transition-none"
      >
        <svg
          viewBox="0 0 24 24"
          width={28}
          height={28}
          fill="currentColor"
          aria-hidden="true"
          className="h-7 w-7 shrink-0"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
        </svg>

        <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] motion-reduce:transition-none">
          <span className="overflow-hidden">
            <span className="inline-block pr-2 pl-2.5 font-sans text-[15px] font-bold tracking-tight whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
              {bind(block, "extra.floating_cta_label")}
            </span>
          </span>
        </span>
      </a>
    </>
  );
}
