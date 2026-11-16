"use client";

import { type KeyboardEvent, useState } from "react";
import { bind } from "../lib/bind";
import {
  beanImageClass,
  beanParallaxAttr,
  beanWrapperClass,
  buildBeanWhatsAppUrl,
  childBlocks,
  heroEnterAttr,
  heroRibbonAttr,
  heroStageAttr,
  imgPerfProps,
  isArrowNextKey,
  isArrowPrevKey,
  isMainBlock,
  livePoliteAttrs,
  readHeroConfig,
  readHeroLot,
  ribbonStrokeAttrs,
  rotateStyle,
  STAGE_BEAN_SPECS,
  svgPreserveAttr,
  tabButtonClass,
  tabItemA11y,
  tablistAttrs,
  type LandingBlock,
  type LandingSection,
  type SectionComponentProps,
} from "../lib/helpers";
import { SealBadge } from "../ui/SealBadge";

function HeroActiveCopy({
  block,
  originPrefix,
}: {
  section?: LandingSection;
  block: LandingBlock;
  originPrefix: string;
}) {
  return (
    <div key={block.order ?? 0} className="livion-swap-copy max-w-[355px]">
      <p className="text-[17px] font-bold text-[#14110F] sm:text-lg">
        <span>{originPrefix}</span>
        <span> · </span>
        <span>{bind(block, "subtitle")}</span>
      </p>
      <p className="mt-2 text-[15.5px] leading-relaxed text-[#575049] sm:text-[16.5px]">
        <span>{bind(block, "description")}</span>
      </p>
    </div>
  );
}

function HeroActivePouch({ block }: { section?: LandingSection; block: LandingBlock }) {
  const lot = readHeroLot(block);
  return (
    <div
      key={block.order ?? 0}
      className="livion-swap-pouch relative z-20 flex h-full w-full items-center justify-center p-4"
    >
      <img
        src={bind(block, "image_url")}
        alt={lot.imageAlt}
        width={lot.pouchWidth}
        height={lot.pouchHeight}
        {...imgPerfProps()}
        className="h-[88%] w-auto object-contain select-none drop-shadow-[0_26px_30px_rgba(36,29,24,0.24)]"
      />
    </div>
  );
}

function HeroRightSpec({
  block,
  roastPrefix,
  bestForPrefix,
}: {
  section?: LandingSection;
  block: LandingBlock;
  roastPrefix: string;
  bestForPrefix: string;
}) {
  return (
    <div className="relative z-30 order-3 hidden flex-col items-end pb-7 text-right lg:col-span-3 lg:flex">
      <p className="font-display text-xl font-bold uppercase text-[#14110F]">
        <span>{roastPrefix}</span>
        <span> </span>
        <span>{bind(block, "extra.roast_level")}</span>
      </p>
      <p className="mt-0.5 text-[13.5px] text-[#575049]">
        <span>{bestForPrefix}</span>
        <span>: </span>
        <span>{bind(block, "extra.best_for")}</span>
      </p>
    </div>
  );
}

function HeroTabButton({
  block,
  isActive,
  onSelect,
}: {
  section?: LandingSection;
  block: LandingBlock;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      {...tabItemA11y(isActive)}
      onClick={onSelect}
      className={tabButtonClass(isActive)}
    >
      <span>{bind(block, "extra.short_label")}</span>
    </button>
  );
}

export function Hero({ section, block }: SectionComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isMainBlock(block)) return null;

  const cfg = readHeroConfig(block);
  const lots = childBlocks(section);
  const safeLots = lots.length > 0 ? lots : [block];
  const currentLot = safeLots[activeIndex % safeLots.length] ?? block;
  const lotInfo = readHeroLot(currentLot);
  const whatsappUrl = buildBeanWhatsAppUrl(
    cfg.whatsappPhone,
    lotInfo.name,
    cfg.defaultWeight,
    cfg.defaultGrind,
    1,
    lotInfo.price200g,
  );

  const handleStageKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isArrowNextKey(e.key)) {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % safeLots.length);
    } else if (isArrowPrevKey(e.key)) {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + safeLots.length) % safeLots.length);
    }
  };

  return (
    <section id={cfg.sectionId} className="relative bg-[#F5F0EA] text-[#14110F]">
      <div {...heroStageAttr()} className="relative overflow-x-clip">
        <div
          aria-hidden="true"
          className="hero-dot-field pointer-events-none absolute inset-y-0 right-0 w-[48%]"
        />

        {/* Back SVG ribbon layer */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 720"
          {...svgPreserveAttr()}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        >
          <path
            d={cfg.mobileRibbon}
            {...ribbonStrokeAttrs(3.3)}
            {...heroRibbonAttr(0, 1.0)}
            className="opacity-78 lg:hidden"
          />
          <path
            d={cfg.desktopBackRibbon}
            {...ribbonStrokeAttrs(3.3)}
            {...heroRibbonAttr(0, 0.9)}
            className="hidden opacity-78 lg:block"
          />
        </svg>

        {/* Front SVG wrap segment across pouch lower area */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 720"
          {...svgPreserveAttr()}
          className="pointer-events-none absolute inset-0 z-[25] hidden h-full w-full lg:block"
        >
          <path
            d={cfg.desktopFrontRibbon}
            {...ribbonStrokeAttrs(3.3)}
            {...heroRibbonAttr(0.55, 0.55)}
            className="opacity-78"
          />
        </svg>

        <div className="relative mx-auto flex min-h-0 max-w-[1400px] flex-col justify-center px-5 pt-7 pb-11 sm:px-9 sm:pt-9 sm:pb-14 lg:min-h-[calc(100svh-84px)] lg:px-12 lg:pt-7 lg:pb-14">
          {STAGE_BEAN_SPECS.map((spec, idx) => (
            <div
              key={idx}
              aria-hidden="true"
              {...beanParallaxAttr(spec.depth)}
              className={beanWrapperClass(spec)}
            >
              <img
                src={spec.src}
                alt=""
                width={spec.width}
                height={spec.height}
                {...imgPerfProps()}
                style={rotateStyle(spec.rotate)}
                className={beanImageClass(spec)}
              />
            </div>
          ))}

          {/* Monumental Display Headline */}
          <h1
            {...heroEnterAttr()}
            className="relative z-10 mx-auto max-w-[1140px] text-center font-hero font-extrabold tracking-[-0.04em] text-[#3E2216] select-none"
          >
            <span className="flex flex-wrap items-baseline justify-center gap-x-3.5 sm:gap-x-6">
              <span className="text-[clamp(1.8rem,4.1vw,3.65rem)] leading-none font-bold tracking-[-0.03em] text-[#3E2216]">
                {bind(block, "title")}
              </span>
              <span className="text-[clamp(3.95rem,11.8vw,10.1rem)] leading-[0.86] font-extrabold text-[#3E2216]">
                {bind(block, "subtitle")}
              </span>
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[clamp(3.15rem,12.2vw,10.45rem)] leading-[0.86] font-extrabold text-[#3E2216]">
              {bind(block, "description")}
            </span>
          </h1>

          <div className="relative -mt-1 grid grid-cols-1 items-end gap-8 sm:-mt-3 lg:-mt-[70px] lg:grid-cols-12 lg:gap-5 xl:-mt-[78px]">
            <div className="relative z-30 order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-4 lg:items-start lg:pb-5 lg:text-left">
              <HeroActiveCopy
                section={section}
                block={currentLot}
                originPrefix={cfg.originPrefix}
              />

              <div
                {...tablistAttrs(cfg.tablistAria)}
                onKeyDown={handleStageKeyDown}
                className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start"
              >
                {safeLots.map((itemBlock, idx) => (
                  <HeroTabButton
                    key={idx}
                    section={section}
                    block={itemBlock}
                    isActive={idx === activeIndex}
                    onSelect={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </div>

            <div className="relative order-1 flex justify-center lg:order-2 lg:col-span-5">
              <div className="relative flex aspect-[4/4.6] w-[286px] items-center justify-center sm:w-[340px] lg:w-[412px]">
                <HeroActivePouch section={section} block={currentLot} />

                <div className="absolute bottom-[5%] left-[2%] z-30 sm:bottom-[6%] sm:-left-[2%] lg:bottom-[4%] lg:-left-[6%]">
                  <SealBadge
                    href={whatsappUrl}
                    label={lotInfo.orderAria}
                    className="h-[106px] w-[106px] -rotate-12 sm:h-[124px] sm:w-[124px] lg:h-[136px] lg:w-[136px]"
                    topSlot={<span>{bind(block, "extra.seal_top")}</span>}
                    bottomSlot={<span>{bind(block, "extra.seal_bottom")}</span>}
                  />
                </div>
              </div>
            </div>

            <HeroRightSpec
              section={section}
              block={currentLot}
              roastPrefix={cfg.roastPrefix}
              bestForPrefix={cfg.bestForPrefix}
            />
          </div>

          <p className="sr-only" {...livePoliteAttrs()}>
            {lotInfo.srAnnouncement}
          </p>
        </div>
      </div>
    </section>
  );
}
