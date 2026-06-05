"use client";

import { useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function EnrollmentSection() {
  const t = useTranslations("enrollment");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // soft parallax on the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    // White-framed section (30px side gutters)
    <section className="bg-white px-[30px] py-2" aria-labelledby="enrollment-heading">
      <div
        ref={ref}
        className="relative overflow-hidden max-w-360 mx-auto"
        style={{ backgroundColor: "var(--enrollment-bg)" }}
      >
        {/* Parallax background video (cover / center) */}
        <motion.div
          style={{ y }}
          className="absolute -top-[10%] left-0 right-0 h-[120%] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <iframe
            src="https://player.mux.com/pzuwvNz95ZVJty7tBX3UG6toFKmTbvdt01G9007PPuCcY?metadata-video-title=IMG_3457&video-title=IMG_3457&autoplay=muted&muted=true&loop=true&controls=false"
            title="IMG_3457"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full aspect-[4/5] border-0"
          />
        </motion.div>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-[#0B1B36]/45" aria-hidden="true" />

        {/* Content */}
        <Reveal
          direction="up"
          className="relative px-[30px] py-20 md:py-28 lg:py-36 text-center"
        >
          <h2
            id="enrollment-heading"
            className="font-serif font-semibold text-white leading-[1.1] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] max-w-3xl mx-auto mb-6"
          >
            {t("heading")}
          </h2>

          <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.75] max-w-lg mx-auto mb-11">
            {t("body")}
          </p>

          {/* Semi-transparent button (~40%) */}
          <Link
            href="/admissions/apply"
            className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white border border-white/50 bg-white/40 backdrop-blur-md hover:bg-white/50 px-11 py-4 transition-colors duration-300"
          >
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
