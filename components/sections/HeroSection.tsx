"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const slowDecel = [0.16, 0, 0.3, 1] as const;
const easeOut   = [0.22, 1, 0.36, 1] as const;
const crossFade = [0.25, 1, 0.5, 1] as const;
const textEase  = [0.16, 1, 0.3, 1] as const;

const SLIDE_INTERVAL = 7500;

export function HeroSection() {
  const t = useTranslations("hero");
  const [active, setActive] = useState(0);

  const slides = [
    { image: "/hero.png", heading: t("heading"), subtext: t("subtext") },
    { image: "/children.jpg", heading: t("heading2"), subtext: t("subtext2") },
    { image: "/school3.png", heading: t("heading3"), subtext: t("subtext3") },
  ] as const;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="bg-white p-7.5" aria-label="Главный экран">
      <div className="relative overflow-hidden flex flex-col min-h-[calc(100svh-60px)]">

        {/* Background — cross-fading slideshow, each layer slowly breathes out */}
        <div className="absolute inset-0">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.image}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.06 }}
              transition={{ duration: 1.4, ease: crossFade }}
            >
              <Image
                src={slide.image}
                alt="Студенты на территории кампуса Polyglot International School"
                fill
                className="object-cover object-center"
                priority={i === 0}
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/20" />

          {/* Cinematic "lights on" — scene opens from darkness, plays once */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0.88 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: slowDecel }}
            aria-hidden="true"
          />
        </div>

        {/* Centered content — heading & subtext cross-fade with each slide */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 pt-24 pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: textEase }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif font-semibold text-white leading-[1.06] max-w-5xl text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px] xl:text-[100px] 2xl:text-[110px]">
                {slides[active].heading}
              </h1>

              <p className="mt-7 text-white/80 text-base md:text-[17px] leading-[1.7] max-w-170">
                {slides[active].subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: easeOut }}
            className="mt-11 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/admissions/apply"
              className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/60 hover:border-white hover:bg-white/15 hover:backdrop-blur-md px-9 py-3.5 transition duration-300 w-full sm:w-auto text-center"
            >
              {t("cta1")}
            </Link>
            <Link
              href="/about"
              className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/60 hover:border-white hover:bg-white/15 hover:backdrop-blur-md px-9 py-3.5 transition duration-300 w-full sm:w-auto text-center"
            >
              {t("cta2")}
            </Link>
          </motion.div>
        </div>

        {/* Slider indicators — clickable, jump to any slide */}
        <motion.div
          className="relative z-10 pb-9 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: easeOut }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показать слайд ${i + 1}`}
              aria-current={active === i}
              className="group relative py-2 px-1"
            >
              <span className="block w-8 h-0.5 bg-white/35 overflow-hidden">
                <motion.span
                  className="block h-full bg-white origin-left"
                  initial={false}
                  animate={{ scaleX: active === i ? 1 : 0 }}
                  transition={{ duration: active === i ? SLIDE_INTERVAL / 1000 : 0.3, ease: "linear" }}
                />
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
