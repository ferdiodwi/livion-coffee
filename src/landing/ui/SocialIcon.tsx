"use client";

import { socialItemMeta, type LandingItem } from "../lib/helpers";

/** Clean monochrome social icon for Footer social pills (Instagram & TikTok). */
export function SocialIcon({ item }: { item: LandingItem }) {
  const spec = socialItemMeta(item);

  if (spec.isTikTok) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="currentColor"
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0"
      >
        <path d={spec.tiktokPath} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      {...spec.igSvgProps}
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
