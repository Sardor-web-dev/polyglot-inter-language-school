"use client";

import { useCallback, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const PARALLAX_FACTOR = 0.14;

/**
 * Applies a subtle parallax translate to elements marked with
 * `data-parallax-layer` inside each embla slide, based on scroll progress.
 */
export function useEmblaParallax(api: EmblaCarouselType | undefined) {
  const apply = useCallback((embla: EmblaCarouselType) => {
    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();
    const slides = embla.slideNodes();

    embla.scrollSnapList().forEach((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[index];

      slidesInSnap.forEach((slideIndex) => {
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const translate = diffToTarget * (-1 * PARALLAX_FACTOR) * 100;
        const layer = slides[slideIndex]?.querySelector<HTMLElement>(
          "[data-parallax-layer]"
        );
        if (layer) layer.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!api) return;
    apply(api);
    api.on("scroll", apply);
    api.on("reInit", apply);
    return () => {
      api.off("scroll", apply);
      api.off("reInit", apply);
    };
  }, [api, apply]);
}
