"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  Check,
  MessageSquarePlus,
  Star,
  X,
} from "lucide-react";
import { bind } from "../lib/bind";
import {
  REVIEW_STARS,
  activeElementRef,
  ariaInvalidAttrs,
  ariaLabelAttr,
  ariaModalAttrs,
  attachKeydown,
  buildReviewWhatsAppUrl,
  childBlocks,
  contactFieldClass,
  focusElement,
  formatReviewScore,
  imgPerfProps,
  initialsFromName,
  inputChangeValue,
  isEscapeKey,
  isMainBlock,
  labelledByAttr,
  linkTargetProps,
  livePoliteAttrs,
  lockDocumentScroll,
  openExternalUrl,
  pressedAttr,
  readTestimonialCard,
  readTestimonialsMeta,
  removeReviewAria,
  revealUp,
  reviewScoreSummary,
  reviewStarBtnClass,
  reviewStarIconClass,
  starOptionAria,
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
  type SubmittedReview,
  type SubmittedReviewDraft,
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

function PreviewReviewCard({
  block,
  review,
  onRemove,
}: {
  section?: LandingSection;
  block: LandingBlock;
  review: SubmittedReview;
  onRemove: (id: string) => void;
}) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-[#B8421B]/25 bg-[#FFFFFF] p-6 text-[#14110F] shadow-[0_8px_22px_rgba(36,29,24,0.05)] sm:p-7">
      <figure className="flex h-full flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div aria-hidden="true" className={testimonialAvatarClass(false)}>
              <span>{review.initials}</span>
            </div>

            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-hero text-[14.5px] font-bold tracking-tight tabular-nums">
                {review.ratingDisplay}
              </span>
              <Star className={testimonialStarClass(false)} aria-hidden="true" />
              <span className={testimonialRatingLabelClass(false)}>
                <span>{bind(block, "extra.rating_unit")}</span>
              </span>
            </div>
          </div>

          <span className="inline-flex items-center rounded-full border border-[#B8421B]/25 bg-[#FFF4EF] px-3 py-1 text-[12px] font-bold text-[#9C3513]">
            <span>{bind(block, "extra.preview_section_badge")}</span>
          </span>
        </div>

        <blockquote className={testimonialQuoteClass(false)}>
          “<span>{review.quote}</span>”
        </blockquote>

        <figcaption className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div>
            <p className={testimonialAuthorClass(false)}>{review.author}</p>
            <p className={testimonialRoleClass(false)}>{review.role}</p>
          </div>

          <button
            type="button"
            onClick={() => onRemove(review.id)}
            {...ariaLabelAttr(removeReviewAria(review.author))}
            className="inline-flex min-h-[44px] shrink-0 items-center rounded-full border border-[#3E2216]/16 px-3.5 py-1.5 text-[12.5px] font-semibold text-[#575049] transition-colors hover:border-[#B8421B] hover:text-[#9C3513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B]"
          >
            <span>{bind(block, "extra.preview_remove_label")}</span>
          </button>
        </figcaption>
      </figure>
    </article>
  );
}

function ReviewModal({
  block,
  onClose,
  onSubmitted,
}: {
  section?: LandingSection;
  block: LandingBlock;
  onClose: () => void;
  onSubmitted: (review: SubmittedReviewDraft) => void;
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [quoteInvalid, setQuoteInvalid] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [sentHref, setSentHref] = useState("");

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const quoteRef = useRef<HTMLTextAreaElement>(null);

  const meta = readTestimonialsMeta(block);

  useEffect(() => {
    const previous = activeElementRef();
    const unlockScroll = lockDocumentScroll(true);
    focusElement(closeBtnRef.current);

    const detachKeys = attachKeydown((key) => {
      if (isEscapeKey(key)) onClose();
    });

    return () => {
      unlockScroll();
      detachKeys();
      focusElement(previous);
    };
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanRole = role.trim();
    const cleanQuote = quote.trim();
    const missingName = cleanName.length === 0;
    const missingQuote = cleanQuote.length === 0;

    setNameInvalid(missingName);
    setQuoteInvalid(missingQuote);

    if (missingName || missingQuote) {
      setHasError(true);
      setSentHref("");
      focusElement(missingName ? nameRef.current : quoteRef.current);
      return;
    }

    const created: SubmittedReviewDraft = {
      author: cleanName,
      role: cleanRole || meta.roleDefault,
      rating,
      ratingDisplay: formatReviewScore(rating),
      initials: initialsFromName(cleanName),
      quote: cleanQuote,
    };

    const waHref = buildReviewWhatsAppUrl(
      meta.whatsappPhone,
      cleanName,
      cleanRole,
      rating,
      cleanQuote,
    );

    onSubmitted(created);
    setHasError(false);
    setSentHref(waHref);
    setName("");
    setRole("");
    setQuote("");
    setRating(5);
    openExternalUrl(waHref);
  };

  const handleReset = () => {
    setHasError(false);
    setSentHref("");
    setNameInvalid(false);
    setQuoteInvalid(false);
    focusElement(nameRef.current);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C1810]/65 p-3 backdrop-blur-xs sm:p-6"
      role="dialog"
      {...ariaModalAttrs(meta.modalTitleId)}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="livion-dialog-in relative z-10 max-h-[90svh] w-full max-w-[600px] overflow-y-auto rounded-[28px] border border-[#FFFFFF]/80 bg-[#F5F0EA] p-6 text-[#14110F] shadow-[0_28px_72px_rgba(36,29,24,0.34)] sm:rounded-[34px] sm:p-8">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          {...ariaLabelAttr(meta.closeAria)}
          className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#3E2216]/15 bg-[#F4EEE8] text-[#3E2216] transition-colors hover:bg-[#3E2216] hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] sm:top-5 sm:right-5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="pr-12">
          <span className="inline-flex items-center rounded-full bg-[#4E2716] px-3.5 py-1.5 font-display text-[13px] font-bold tracking-[-0.01em] text-[#FBF8F4]">
            <span>{bind(block, "extra.form_badge")}</span>
          </span>

          <h3
            id={meta.modalTitleId}
            className="mt-3 font-hero text-[clamp(1.65rem,3vw,2.2rem)] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#3E2216]"
          >
            <span>{bind(block, "extra.form_title")}</span>
          </h3>

          <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4A423C] sm:text-[15.5px]">
            {bind(block, "extra.form_subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="review-author-name"
                className="block text-[13.5px] font-semibold text-[#3E2216]"
              >
                <span>{bind(block, "extra.name_label")}</span>
              </label>
              <input
                ref={nameRef}
                id="review-author-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(inputChangeValue(e));
                  if (nameInvalid) setNameInvalid(false);
                  if (hasError) setHasError(false);
                }}
                placeholder={meta.namePlaceholder}
                {...ariaInvalidAttrs(nameInvalid, meta.feedbackId)}
                className={contactFieldClass(nameInvalid)}
              />
            </div>

            <div>
              <label
                htmlFor="review-author-role"
                className="block text-[13.5px] font-semibold text-[#3E2216]"
              >
                <span>{bind(block, "extra.role_label")}</span>
              </label>
              <input
                id="review-author-role"
                type="text"
                value={role}
                onChange={(e) => setRole(inputChangeValue(e))}
                placeholder={meta.rolePlaceholder}
                className={contactFieldClass(false)}
              />
            </div>
          </div>

          <div role="group" {...labelledByAttr(meta.ratingLabelId)}>
            <span
              id={meta.ratingLabelId}
              className="block text-[13.5px] font-semibold text-[#3E2216]"
            >
              <span>{bind(block, "extra.rating_label")}</span>
            </span>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              {REVIEW_STARS.map((star) => {
                const active = star <= rating;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    {...pressedAttr(active)}
                    {...ariaLabelAttr(starOptionAria(star))}
                    className={reviewStarBtnClass(active)}
                  >
                    <Star className={reviewStarIconClass(active)} aria-hidden="true" />
                  </button>
                );
              })}

              <span className="ml-2 font-hero text-[15px] font-bold text-[#3E2216] tabular-nums">
                {reviewScoreSummary(rating)}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="review-quote"
              className="block text-[13.5px] font-semibold text-[#3E2216]"
            >
              <span>{bind(block, "extra.quote_label")}</span>
            </label>
            <textarea
              ref={quoteRef}
              id="review-quote"
              rows={4}
              value={quote}
              onChange={(e) => {
                setQuote(inputChangeValue(e));
                if (quoteInvalid) setQuoteInvalid(false);
                if (hasError) setHasError(false);
              }}
              placeholder={meta.quotePlaceholder}
              {...ariaInvalidAttrs(quoteInvalid, meta.feedbackId)}
              className={contactFieldClass(quoteInvalid)}
            />
          </div>

          <div id={meta.feedbackId} role="status" {...livePoliteAttrs()}>
            {hasError && (
              <div className="flex items-start gap-2.5 rounded-[12px] border border-[#B8421B] bg-[#FFF4EF] px-4 py-3 text-[14px] font-medium text-[#9C3513]">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{bind(block, "extra.error_text")}</span>
              </div>
            )}

            {!hasError && sentHref && (
              <div className="rounded-[12px] border border-[#234B35]/30 bg-[#EFF6F1] px-4 py-3.5 text-[14px] text-[#234B35]">
                <div className="flex items-start gap-2.5 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{bind(block, "extra.success_text")}</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2.5 pl-6">
                  <a
                    href={sentHref}
                    {...linkTargetProps(true)}
                    className="inline-flex min-h-[44px] items-center rounded-[10px] bg-[#234B35] px-4 py-2 text-[13.5px] font-bold text-[#FFFFFF] transition-colors hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                  >
                    <span>{bind(block, "extra.open_wa_fallback_label")}</span>
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex min-h-[44px] items-center rounded-[10px] border border-[#234B35]/35 bg-[#FFFFFF] px-4 py-2 text-[13.5px] font-bold text-[#234B35] transition-colors hover:bg-[#EFF6F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                  >
                    <span>{bind(block, "extra.close_form_label")}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[44px] items-center rounded-[10px] border border-[#3E2216]/20 bg-[#FFFFFF] px-4 py-2 text-[13.5px] font-bold text-[#3E2216] transition-colors hover:border-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216]"
                  >
                    <span>{bind(block, "extra.reset_label")}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#B8421B] px-7 py-2.5 font-hero text-[15px] font-bold text-[#FFFFFF] shadow-[0_8px_20px_rgba(184,66,27,0.26)] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.98]"
            >
              <span>{bind(block, "extra.submit_label")}</span>
            </button>

            <p className="text-[13px] text-[#575049]">
              <span>{bind(block, "extra.form_note")}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Testimonials({ section, block }: SectionComponentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState<SubmittedReview[]>([]);
  const nextIdRef = useRef(0);

  if (!isMainBlock(block)) return null;

  const meta = readTestimonialsMeta(block);
  const cards = childBlocks(section);

  const handleSubmitted = (review: SubmittedReviewDraft) => {
    nextIdRef.current += 1;
    const id = String(nextIdRef.current);
    setSubmittedReviews((prev) => [{ ...review, id }, ...prev]);
  };

  const handleRemovePreview = (id: string) => {
    setSubmittedReviews((prev) => prev.filter((item) => item.id !== id));
  };

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

          <button
            type="button"
            {...revealUp(0.05)}
            onClick={() => setModalOpen(true)}
            className="inline-flex min-h-[48px] shrink-0 self-start items-center gap-2 rounded-full bg-[#B8421B] px-5 py-2.5 text-[14.5px] font-bold text-[#FFFFFF] shadow-[0_8px_20px_rgba(184,66,27,0.22)] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] active:scale-[0.98] sm:self-auto"
          >
            <MessageSquarePlus className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{bind(block, "extra.write_cta_label")}</span>
          </button>
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

        {submittedReviews.length > 0 && (
          <div className="mt-6">
            <p className="text-[14px] font-semibold text-[#575049]">
              <span>{bind(block, "extra.preview_section_note")}</span>
            </p>

            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {submittedReviews.map((review) => (
                <PreviewReviewCard
                  key={review.id}
                  block={block}
                  review={review}
                  onRemove={handleRemovePreview}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {modalOpen && (
        <ReviewModal
          block={block}
          onClose={() => setModalOpen(false)}
          onSubmitted={handleSubmitted}
        />
      )}
    </section>
  );
}
