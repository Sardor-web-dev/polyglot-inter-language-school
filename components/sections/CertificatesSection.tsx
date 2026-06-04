import Image from "next/image";
import { useTranslations } from "next-intl";

export function CertificatesSection() {
  const t = useTranslations("certificates");

  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" aria-labelledby="certificates-heading">
      <div className="max-w-360 mx-auto px-7.5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10 xl:gap-12 items-start">

          {/* Left image — boy with violin (shorter) */}
          <div className="hidden lg:block">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/boy.jpg"
                alt={t("boyAlt")}
                fill
                className="object-cover object-center"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Center — text */}
          <div className="flex flex-col lg:min-h-130">
            <h2
              id="certificates-heading"
              className="font-serif font-normal text-[#1a1a1a] leading-[1.15] text-[34px] md:text-[40px] lg:text-[44px] mb-5"
            >
              {t("heading")}
            </h2>

            <p className="text-[#555] text-[15px] md:text-[16px] leading-[1.7]">
              {t("body")}
            </p>

            {/* Контент block — pushed to bottom */}
            <div className="mt-auto pt-16">
              <p className="font-semibold text-[13px] text-[#1a1a1a] mb-4 tracking-wide">
                {t("contentLabel")}
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-[#c9c3b5] pt-5">
                <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]">
                  {t("item1")}
                </p>
                <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.65]">
                  {t("item2")}
                </p>
              </div>
            </div>
          </div>

          {/* Right image — girl in uniform (taller) */}
          <div className="hidden lg:block">
            <div className="relative aspect-5/9 overflow-hidden">
              <Image
                src="/children.jpg"
                alt={t("girlAlt")}
                fill
                className="object-cover object-center"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Mobile: single image */}
          <div className="lg:hidden mt-8">
            <div className="relative aspect-3/2 overflow-hidden">
              <Image
                src="/boy.jpg"
                alt={t("boyAlt")}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
