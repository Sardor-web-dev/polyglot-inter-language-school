"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  RiBuildingLine,
  RiFlaskLine,
  RiCameraLine,
  RiWindyLine,
  RiRestaurantLine,
  RiCarLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Reveal } from "@/components/ui/Reveal";

const ACTIVE_COLOR = "#FC9A19";
const easeOut = [0.22, 1, 0.36, 1] as const;

export function CampusSection() {
  const t = useTranslations("campus");
  const [active, setActive] = useState(0);

  const stats: Array<{ Icon: IconType; value: string; label: string }> = [
    { Icon: RiBuildingLine, value: t("stat1Value"), label: t("stat1Label") },
    { Icon: RiFlaskLine, value: t("stat2Value"), label: t("stat2Label") },
    { Icon: RiCameraLine, value: t("stat3Value"), label: t("stat3Label") },
    { Icon: RiWindyLine, value: t("stat4Value"), label: t("stat4Label") },
    { Icon: RiRestaurantLine, value: t("stat5Value"), label: t("stat5Label") },
    { Icon: RiCarLine, value: t("stat6Value"), label: t("stat6Label") },
  ];

  return (
    <section className="bg-white" aria-labelledby="campus-heading">

      {/* Top text — narrow heading (397px) left, narrow body (768px) right, ~200px gap */}
      <div className="max-w-360 mx-auto px-[30px] pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <Reveal className="flex flex-col lg:flex-row lg:gap-[200px] gap-8">
          <h2
            id="campus-heading"
            className="font-serif font-semibold text-[#1a1a1a] leading-[1.12] text-[32px] md:text-[40px] lg:text-[44px] lg:w-[397px] shrink-0"
          >
            {t("heading")}
          </h2>
          <p className="text-[#444] text-[15px] md:text-[16px] leading-[1.75] lg:w-[768px] lg:pt-2">
            {t("body")}
          </p>
        </Reveal>
      </div>

      {/* Stats — interactive carousel with animated underline */}
      <div className="max-w-360 mx-auto px-[30px] pb-12 md:pb-16">
        <div className="border-t border-[#e2e2e2] pt-10">
          <Carousel opts={{ align: "start", dragFree: true }}>
            <CarouselContent className="-ml-4">
              {stats.map((stat, i) => {
                const isActive = i === active;
                return (
                  <CarouselItem key={i} className="pl-4 basis-[210px] md:basis-[250px]">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className="group relative flex flex-col gap-3.5 text-left w-full pb-5"
                    >
                      <motion.span
                        animate={{
                          color: isActive ? ACTIVE_COLOR : "#bdbdbd",
                          scale: isActive ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.4, ease: easeOut }}
                        className="inline-flex"
                      >
                        <stat.Icon size={40} aria-hidden="true" />
                      </motion.span>

                      <motion.span
                        animate={{ color: isActive ? "#1a1a1a" : "#666" }}
                        transition={{ duration: 0.4 }}
                        className="font-serif font-semibold text-[24px] md:text-[26px] leading-snug"
                      >
                        {stat.value}
                      </motion.span>

                      <span className="text-[#8a8a8a] text-[13px] leading-snug max-w-[200px]">
                        {stat.label}
                      </span>

                      {/* baseline + animated active underline */}
                      <span className="absolute bottom-0 left-0 right-3 h-[2px] bg-[#ececec]" />
                      {isActive && (
                        <motion.span
                          layoutId="campus-tab-underline"
                          className="absolute bottom-0 left-0 right-3 h-[2px]"
                          style={{ backgroundColor: ACTIVE_COLOR }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </button>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Campus render */}
      <Reveal direction="up" className="max-w-360 mx-auto px-[30px] pb-16 md:pb-20">
        <div className="relative w-full aspect-16/7 overflow-hidden">
          <Image
            src="/campus.png"
            alt={t("imageAlt")}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
