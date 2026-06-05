"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function CertificatesSection() {
  const t = useTranslations("certificates");

  return (
    <section
      className="bg-white py-16 md:py-20 "
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-360 mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start">

          {/* LEFT column */}
          <div className="flex flex-col gap-10 lg:gap-12 flex-1">

            {/* Top row: photo (426×530) + text block */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="flex flex-col sm:flex-row gap-7 md:gap-9"
            >
              {/* photo with hover micro-float + zoom */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="group relative w-full sm:w-[426px] h-[420px] sm:h-[530px] shrink-0 overflow-hidden"
              >
                <Image
                  src="/boy.jpg"
                  alt={t("boyAlt")}
                  fill
                  className="object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
                  sizes="(max-width: 640px) 100vw, 426px"
                />
              </motion.div>

              {/* text block */}
              <div className="flex flex-col justify-center">
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
              </div>
            </motion.div>

            {/* Bottom row: Контент + 4 text blocks */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            >
              <p className="font-semibold text-[13px] text-[#1a1a1a] mb-5 tracking-wide">
                {t("contentLabel")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-[#dcdcdc] pt-6">
                {(["item1", "item2", "item3", "item4"] as const).map((key) => (
                  <p
                    key={key}
                    className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]"
                  >
                    {t(key)}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: big image (426×736) with hover float */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
            whileHover={{ y: -10 }}
            className="group relative w-full xl:w-[426px] h-[420px] sm:h-[560px] xl:h-[736px] shrink-0 overflow-hidden"
          >
            <Image
              src="/children.jpg"
              alt={t("girlAlt")}
              fill
              className="object-cover object-center transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
              sizes="(max-width: 1280px) 100vw, 426px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
