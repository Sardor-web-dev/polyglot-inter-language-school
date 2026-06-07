"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CertificatesSection() {
  const t = useTranslations("certificates");

  return (
    <section
      className="bg-white py-16 md:py-20"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start">

          {/* LEFT column */}
          <div className="flex flex-col gap-10 lg:gap-12 flex-1">

            {/* Top row: photo + text — staggered */}
            <RevealGroup stagger={0.13} amount={0.2}>
              <div className="flex flex-col sm:flex-row gap-7 md:gap-9">

                {/* photo */}
                <RevealItem direction="up">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="group relative w-full sm:w-106.5 h-105 sm:h-132.5 shrink-0 overflow-hidden"
                  >
                    <Image
                      src="/boy.jpg"
                      alt={t("boyAlt")}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      sizes="(max-width: 640px) 100vw, 426px"
                    />
                  </motion.div>
                </RevealItem>

                {/* text */}
                <RevealItem direction="up" className="flex flex-col justify-center">
                  <h2
                    id="certificates-heading"
                    className="font-serif font-normal text-[#1a1a1a] leading-[1.13] text-[32px] md:text-[40px] lg:text-[44px] mb-5"
                  >
                    {t("heading")}
                  </h2>
                  <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.7] mb-4">
                    {t("body")}
                  </p>
                  <p className="text-[#777] text-[14px] md:text-[15px] leading-[1.7]">
                    {t("bodyExtra")}
                  </p>
                </RevealItem>

              </div>
            </RevealGroup>

            {/* Bottom: label + 4 items staggered in 2-col grid */}
            <RevealGroup stagger={0.1} delayChildren={0.05} amount={0.2}>
              <RevealItem>
                <p className="font-semibold text-[13px] text-[#1a1a1a] mb-5 tracking-wide">
                  {t("contentLabel")}
                </p>
              </RevealItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-[#dcdcdc] pt-6">
                {(["item1", "item2", "item3", "item4"] as const).map((key) => (
                  <RevealItem key={key}>
                    <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]">
                      {t(key)}
                    </p>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

          </div>

          {/* RIGHT: big image slides in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            whileHover={{ y: -10 }}
            className="group relative w-full xl:w-106.5 h-105 sm:h-140 xl:h-184 shrink-0 overflow-hidden"
          >
            <Image
              src="/children.jpg"
              alt={t("girlAlt")}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              sizes="(max-width: 1280px) 100vw, 426px"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
