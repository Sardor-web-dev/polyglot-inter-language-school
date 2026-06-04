import Image from "next/image";
import { useTranslations } from "next-intl";

export function FeaturesSection() {
  const t = useTranslations("features");

  const cards = [
    { image: "/frendly1.jpg", alt: t("card1Alt"), title: t("card1Title"), body: t("card1Body") },
    { image: "/frendly2.png", alt: t("card2Alt"), title: t("card2Title"), body: t("card2Body") },
    { image: "/frendly3.png", alt: t("card3Alt"), title: t("card3Title"), body: t("card3Body") },
  ] as const;

  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" aria-labelledby="features-heading">
      <div className="max-w-360 mx-auto px-7.5">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-10 lg:gap-14 xl:gap-16 items-start">

          {/* Left — heading + description */}
          <div className="lg:pt-1">
            <h2
              id="features-heading"
              className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[36px] md:text-[42px] lg:text-[46px] mb-5"
            >
              {t("heading")}
            </h2>
            <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.7]">
              {t("subtext")}
            </p>
          </div>

          {/* Right — 3 cards, horizontally scrollable on mobile */}
          <div className="overflow-x-auto -mx-7.5 md:mx-0 px-7.5 md:px-0">
            <div className="grid grid-cols-3 gap-5 md:gap-7 min-w-160 lg:min-w-0">
              {cards.map((card) => (
                <article key={card.title} className="flex flex-col">
                  <div className="relative aspect-4/3 overflow-hidden mb-4">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-semibold text-[#1a1a1a] text-[15px] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#555] text-[13px] md:text-[14px] leading-[1.65]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
