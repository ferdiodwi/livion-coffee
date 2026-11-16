"use client";

import { useRef, type ComponentType } from "react";
import "./styles.css";
import { Collection } from "./components/Collection";
import { Crafted } from "./components/Crafted";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OrderCta } from "./components/OrderCta";
import { OriginShowcase } from "./components/OriginShowcase";
import { site } from "./content/site";
import { usePageMotion } from "./gsap/use-page-motion";
import {
  blockRenderKey,
  sortedBlocks,
  type SectionComponentProps,
} from "./lib/helpers";

const views: Record<string, ComponentType<SectionComponentProps>> = {
  Navbar,
  Hero,
  Crafted,
  Collection,
  OriginShowcase,
  OrderCta,
  Footer,
};

export function Landing() {
  const rootRef = useRef<HTMLElement>(null);
  usePageMotion(rootRef);

  const pages = [...(site.pages ?? [])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <main ref={rootRef} id="main-content" tabIndex={-1} className="livion-landing focus:outline-none">
      {pages.map((page, pIdx) =>
        [...(page.sections ?? [])]
          .filter((section) => section.is_active !== false)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((section, sIdx) => {
            const View = views[section.type];
            if (!View) return null;
            return sortedBlocks(section.blocks).map((block, bIdx) => (
              <View
                key={blockRenderKey(pIdx, sIdx, bIdx)}
                section={section}
                block={block}
              />
            ));
          }),
      )}
    </main>
  );
}

export default Landing;
