import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function CertificatesSection() {
  const t = useTranslations("certificates");

  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-360 mx-auto px-7.5">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* LEFT column */}
          <div className="flex flex-col flex-1 gap-10 lg:gap-12">

            {/* Top row: photo + heading/text */}
            <Reveal direction="up" className="flex flex-col sm:flex-row gap-6 md:gap-8">
              <div className="relative w-full sm:w-52.5 shrink-0 aspect-4/5 overflow-hidden">
                <Image
                  src="/boy.jpg"
                  alt={t("boyAlt")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 210px"
                />
              </div>
              <div className="flex flex-col">
                <h2
                  id="certificates-heading"
                  className="font-serif font-normal text-[#1a1a1a] leading-[1.15] text-[32px] md:text-[40px] lg:text-[44px] mb-4"
                >
                  {t("heading")}
                </h2>
                <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.7] max-w-md">
                  {t("body")}
                </p>
              </div>
            </Reveal>

            {/* Bottom row: Контент + two texts */}
            <Reveal direction="up" delay={0.1} className="mt-auto">
              <p className="font-semibold text-[13px] text-[#1a1a1a] mb-4 tracking-wide">
                {t("contentLabel")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 border-t border-[#dcdcdc] pt-6">
                <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]">
                  {t("item1")}
                </p>
                <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]">
                  {t("item2")}
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT column: one big image */}
          <Reveal
            direction="left"
            delay={0.15}
            className="w-full lg:w-110 shrink-0"
          >
            <div className="relative w-full h-72 sm:h-96 lg:h-full min-h-100 overflow-hidden">
              <Image
                src="/children.jpg"
                alt={t("girlAlt")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
