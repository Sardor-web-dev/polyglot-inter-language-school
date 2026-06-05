"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;
// fast → slow → fast velocity profile
const fastSlowFast = [0.16, 0.5, 0.84, 0.5] as const;

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    // 30px frame on every side
    <section className="bg-white p-7.5" aria-label="Главный экран">
      {/* Whole framed box grows from small → large */}
      <motion.div
        initial={{ scale: 0.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: fastSlowFast }}
        style={{ transformOrigin: "center" }}
        className="relative overflow-hidden flex flex-col min-h-[calc(100svh-60px)]"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Студенты на территории кампуса Polyglot International School"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/20" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 pt-24 pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: easeOut }}
            className="font-serif font-semibold text-white leading-[1.06] max-w-5xl text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px] xl:text-[100px]"
          >
            {t("heading")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: easeOut }}
            className="mt-7 text-white/80 text-base md:text-[17px] leading-[1.7] max-w-170"
          >
            {t("subtext")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: easeOut }}
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

        {/* Slider indicators */}
        <motion.div
          className="relative z-10 pb-9 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15, ease: easeOut }}
          aria-hidden="true"
        >
          <span className="block w-8 h-0.5 bg-white" />
          <span className="block w-8 h-0.5 bg-white/35" />
          <span className="block w-8 h-0.5 bg-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
