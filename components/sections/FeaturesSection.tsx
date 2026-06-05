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
import { Reveal } from "@/components/ui/Reveal";

export function FeaturesSection() {
  const t = useTranslations("features");

  const cards = [
    { image: "/frendly1.jpg", alt: t("card1Alt"), title: t("card1Title"), body: t("card1Body") },
    { image: "/frendly2.png", alt: t("card2Alt"), title: t("card2Title"), body: t("card2Body") },
    { image: "/frendly3.png", alt: t("card3Alt"), title: t("card3Title"), body: t("card3Body") },
  ] as const;

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="features-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">
        <Carousel opts={{ align: "start", dragFree: true }} className="text-[#1a1a1a]">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 xl:gap-16 items-start">

            {/* Left — heading + description + controls */}
            <Reveal direction="right" className="lg:pt-1">
              <h2
                id="features-heading"
                className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[36px] md:text-[42px] lg:text-[46px] mb-5"
              >
                {t("heading")}
              </h2>
              <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.7] mb-8">
                {t("subtext")}
              </p>
              <div className="flex gap-3">
                <CarouselPrevious className="border-[#1a1a1a]/25 hover:bg-[#1a1a1a]/5" />
                <CarouselNext className="border-[#1a1a1a]/25 hover:bg-[#1a1a1a]/5" />
              </div>
            </Reveal>

            {/* Right — cards carousel (w-[400px], h-auto) */}
            <CarouselContent className="-ml-6">
              {cards.map((card) => (
                <CarouselItem
                  key={card.title}
                  className="pl-6 basis-auto"
                >
                  <article className="group flex flex-col w-75 sm:w-100 h-auto">
                    <div className="relative w-full h-75 overflow-hidden mb-4">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        sizes="400px"
                      />
                    </div>
                    <h3 className="font-semibold text-[#1a1a1a] text-[16px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#555] text-[14px] leading-[1.65]">
                      {card.body}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
