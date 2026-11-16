"use client";

import { ArrowRight, Star } from "lucide-react";
import { bind } from "../lib/bind";
import {
  childBlocks,
  imgPerfProps,
  isMainBlock,
  labelledByAttr,
  readTestimonialCard,
  readTestimonialsMeta,
  revealUp,
  testimonialAuthorClass,
  testimonialAvatarClass,
  testimonialAvatarImgClass,
  testimonialCardClass,
  testimonialQuoteClass,
  testimonialRatingLabelClass,
  testimonialRoleClass,
  testimonialStarClass,
  type LandingBlock,
  type LandingSection,
  type SectionComponentProps,
} from "../lib/helpers";

function TestimonialCard({
  block,
  index,
}: {
  section?: LandingSection;
  block: LandingBlock;
  index: number;
}) {
  const card = readTestimonialCard(block, index);

  return (
    <article
      {...revealUp(Number((index * 0.05).toFixed(2)))}
      className={testimonialCardClass(index, card.featured)}
    >
      <figure className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          {card.hasAvatar ? (
            <img
              src={bind(block, "image_url")}
              alt={card.avatarAlt}
              width={44}
              height={44}
              {...imgPerfProps()}
              className={testimonialAvatarImgClass(card.featured)}
            />
          ) : (
            <div aria-hidden="true" className={testimonialAvatarClass(card.featured)}>
              <span>{bind(block, "extra.initials")}</span>
            </div>
          )}

          {card.hasRating && (
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-hero text-[14.5px] font-bold tracking-tight tabular-nums">
                {bind(block, "icon")}
              </span>
              <Star className={testimonialStarClass(card.featured)} aria-hidden="true" />
              <span className={testimonialRatingLabelClass(card.featured)}>
                <span>{bind(block, "extra.rating_label")}</span>
              </span>
            </div>
          )}
        </div>

        <blockquote className={testimonialQuoteClass(card.featured)}>
          “<span>{bind(block, "description")}</span>”
        </blockquote>

        <figcaption className="mt-auto pt-3">
          <p className={testimonialAuthorClass(card.featured)}>
            <span>{bind(block, "title")}</span>
          </p>
          <p className={testimonialRoleClass(card.featured)}>
            <span>{bind(block, "subtitle")}</span>
          </p>
        </figcaption>
      </figure>
    </article>
  );
}

export function Testimonials({ section, block }: SectionComponentProps) {
  if (!isMainBlock(block)) return null;

  const meta = readTestimonialsMeta(block);
  const cards = childBlocks(section);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] py-14 text-[#14110F] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div {...revealUp(0)}>
            <h2
              id="testimonials-heading"
              className="font-hero text-[clamp(2.2rem,4.3vw,3.9rem)] leading-[1.03] font-extrabold tracking-[-0.03em]"
            >
              <span className="text-[#7A6252]">{bind(block, "title")}</span>{" "}
              <span className="text-[#3E2216]">{bind(block, "subtitle")}</span>
            </h2>
          </div>

          <a
            href={meta.ctaHref}
            {...revealUp(0.05)}
            className="group inline-flex min-h-[48px] shrink-0 items-center gap-2 self-start rounded-full border border-[#3E2216]/18 bg-[#FFFFFF] px-5 py-2.5 text-[14.5px] font-bold text-[#3E2216] transition-[background-color,border-color,color,transform] hover:border-[#B8421B] hover:bg-[#B8421B] hover:text-[#FFFFFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] active:scale-[0.98] sm:self-auto"
          >
            <span>{bind(block, "extra.cta_label")}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {cards.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {cards.map((cardBlock, idx) => (
              <TestimonialCard
                key={idx}
                block={cardBlock}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[24px] border border-[#3E2216]/12 bg-[#EDE4DC]/70 p-8 text-center">
            <p className="text-[15px] text-[#575049]">
              <span>{bind(block, "extra.empty_state")}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
