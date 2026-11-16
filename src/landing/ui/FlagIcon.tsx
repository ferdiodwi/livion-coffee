"use client";

import { useId } from "react";
import { flagGlyphSpec } from "../lib/helpers";

/** Waving flag glyph matching ID / EN language pill states without OS emoji drift. */
export function FlagIcon({ isEn }: { isEn: boolean }) {
  const clipId = useId();
  const spec = flagGlyphSpec(clipId);

  return (
    <svg
      viewBox="0 0 28 20"
      width={22}
      height={16}
      aria-hidden="true"
      className="h-4 w-[22px] shrink-0"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={spec.wavePath} />
        </clipPath>
      </defs>

      {isEn ? (
        <g clipPath={spec.clipUrl}>
          <rect x="0" y="0" width="28" height="20" fill="#012169" />
          <path d={spec.diagPath} stroke="#FFFFFF" strokeWidth="4.4" />
          <path d={spec.diagPath} stroke="#C8102E" strokeWidth="1.9" />
          <path d={spec.horizonPath} fill="none" stroke="#FFFFFF" strokeWidth="5.2" />
          <path d={spec.verticalPath} fill="none" stroke="#FFFFFF" strokeWidth="5.2" />
          <path d={spec.horizonPath} fill="none" stroke="#C8102E" strokeWidth="3.0" />
          <path d={spec.verticalPath} fill="none" stroke="#C8102E" strokeWidth="3.0" />
        </g>
      ) : (
        <g clipPath={spec.clipUrl}>
          <rect x="0" y="0" width="28" height="20" fill="#FFFFFF" />
          <path d={spec.idRedPath} fill="#EF1923" />
        </g>
      )}
    </svg>
  );
}
