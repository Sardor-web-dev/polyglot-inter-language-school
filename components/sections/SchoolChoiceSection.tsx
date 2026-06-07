"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEmblaParallax } from "@/components/ui/useEmblaParallax";

export function SchoolChoiceSection() {
  const t = useTranslations("schoolChoice");
  const [api, setApi] = useState<CarouselApi>();
  useEmblaParallax(api);

  const photos = [
    { src: "/school1.png", alt: t("photo1Alt"), w: "w-[830px]" },
    { src: "/school2.png", alt: t("photo2Alt"), w: "w-[299px]" },
    { src: "/school3.png", alt: t("photo3Alt"), w: "w-[486px]" },
  ] as const;

  return (
    // Full-bleed — breaks out of the global 30px page gutters
    <section
      className="w-full overflow-hidden pt-14 md:pt-18 lg:pt-20 pb-14 md:pb-18"
      style={{ backgroundColor: "#0E4170" }}
      aria-labelledby="school-choice-heading"
    >
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
        className="text-white"
      >
        {/* Heading + controls */}
        <div className="max-w-360 mx-auto px-7.5 pb-10 md:pb-12 flex items-end justify-between gap-6">
          <motion.h2
            id="school-choice-heading"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-semibold text-white leading-[1.1] text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] max-w-3xl"
          >
            {t("heading")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex gap-3 shrink-0 pb-2"
          >
            <CarouselPrevious className="border-white/40 hover:bg-white/10" />
            <CarouselNext className="border-white/40 hover:bg-white/10" />
          </motion.div>
        </div>

        {/* Photos — left aligned to gutter, bleed right */}
        <motion.div
          className="pl-7.5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <CarouselContent className="ml-0">
            {photos.map((photo, i) => (
              <CarouselItem
                key={i}
                className={`pl-0 mr-2.5 basis-auto ${photo.w} max-w-[88vw]`}
              >
                <div className="relative h-105 md:h-120 overflow-hidden">
                  {/* parallax layer */}
                  <div data-parallax-layer className="absolute inset-0">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover object-center scale-[1.3]"
                      sizes="(max-width: 768px) 88vw, 830px"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </section>
  );
}
