"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

function ensureRegistered() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

function reducedMotionActive(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Root GSAP motion hook matching CMS-SITE template-engine (prefers-reduced-motion, revert, ScrollTrigger.refresh). */
export function usePageMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    ensureRegistered();
    if (reducedMotionActive()) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      // Hero ribbon draw on initial entry
      const heroRibbons = root.querySelectorAll<SVGPathElement>("[data-hero-ribbon]");
      heroRibbons.forEach((path) => {
        const len = path.getTotalLength();
        const delay = Number(path.dataset.ribbonDelay || "0");
        const duration = Number(path.dataset.ribbonDuration || "0.95");
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration,
          delay,
          ease: "power2.out",
        });
      });

      // Scroll-triggered closing ribbon draw
      const scrollRibbons = root.querySelectorAll<SVGPathElement>("[data-scroll-ribbon]");
      scrollRibbons.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path.closest("section") ?? path,
            start: "top 82%",
            once: true,
          },
        });
      });

      // Immediate mount reveals for hero elements
      const heroEnters = root.querySelectorAll<HTMLElement>("[data-hero-enter]");
      if (heroEnters.length > 0) {
        gsap.from(heroEnters, {
          opacity: 0,
          y: 14,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
        });
      }

      // Section scroll-reveals without hiding content before JS executes
      const reveals = root.querySelectorAll<HTMLElement>("[data-reveal]");
      reveals.forEach((el) => {
        const dir = el.dataset.reveal;
        const delay = Number(el.dataset.revealDelay || "0");
        const x = dir === "left" ? -28 : dir === "right" ? 28 : 0;
        const y = x === 0 ? 18 : 0;

        gsap.from(el, {
          opacity: 0,
          x,
          y,
          duration: 0.58,
          delay,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Mouse parallax for floating coffee beans in Hero stage
      const heroStage = root.querySelector<HTMLElement>("[data-hero-stage]");
      const beans = root.querySelectorAll<HTMLElement>("[data-bean-depth]");
      if (heroStage && beans.length > 0) {
        const movers = Array.from(beans).map((bean) => ({
          depth: Number(bean.dataset.beanDepth || "0"),
          xTo: gsap.quickTo(bean, "x", { duration: 0.45, ease: "power2.out" }),
          yTo: gsap.quickTo(bean, "y", { duration: 0.45, ease: "power2.out" }),
        }));

        const onPointerMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const rect = heroStage.getBoundingClientRect();
          const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          movers.forEach((m) => {
            m.xTo(nx * m.depth);
            m.yTo(ny * m.depth);
          });
        };

        const onPointerLeave = () => {
          movers.forEach((m) => {
            m.xTo(0);
            m.yTo(0);
          });
        };

        heroStage.addEventListener("pointermove", onPointerMove);
        heroStage.addEventListener("pointerleave", onPointerLeave);
        cleanups.push(() => {
          heroStage.removeEventListener("pointermove", onPointerMove);
          heroStage.removeEventListener("pointerleave", onPointerLeave);
        });
      }
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = window.setTimeout(refresh, 450);

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [rootRef]);
}
