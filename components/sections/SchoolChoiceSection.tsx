"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function SchoolChoiceSection() {
  const t = useTranslations("schoolChoice");

  const photos = [
    { src: "/school1.png", alt: t("photo1Alt"), w: "w-[830px]" },
    { src: "/school2.png", alt: t("photo2Alt"), w: "w-[299px]" },
    { src: "/school3.png", alt: t("photo3Alt"), w: "w-[486px]" },
  ] as const;

  return (
    <section
      className="pt-14 md:pt-18 lg:pt-20 pb-14 md:pb-18 overflow-hidden"
      style={{ backgroundColor: "#0E4170" }}
      aria-labelledby="school-choice-heading"
    >
      <Carousel opts={{ align: "start", dragFree: true }} className="text-white">
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
          <CarouselContent className="ml-0 gap-20">
            {photos.map((photo, i) => (
              <CarouselItem
                key={i}
                className={`pl-0 basis-auto ${photo.w} max-w-[88vw]`}
              >
                <div className="relative h-105 md:h-120 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 88vw, 830px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
