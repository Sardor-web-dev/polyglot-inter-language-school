"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
          <h2
            id="school-choice-heading"
            className="font-serif font-semibold text-white leading-[1.1] text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] max-w-3xl"
          >
            {t("heading")}
          </h2>
          <div className="hidden md:flex gap-3 shrink-0 pb-2">
            <CarouselPrevious className="border-white/40 hover:bg-white/10" />
            <CarouselNext className="border-white/40 hover:bg-white/10" />
          </div>
        </div>

        {/* Photos — left aligned to gutter, bleed right */}
        <div className="pl-7.5">
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
        </div>
      </Carousel>
    </section>
  );
}
