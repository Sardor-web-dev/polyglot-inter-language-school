import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  RiBuildingLine,
  RiFlaskLine,
  RiCameraLine,
  RiWindyLine,
  RiRestaurantLine,
  RiCarLine,
} from "react-icons/ri";
import type { IconType } from "react-icons";

export function CampusSection() {
  const t = useTranslations("campus");

  const stats: Array<{ Icon: IconType; value: string; label: string }> = [
    { Icon: RiBuildingLine, value: t("stat1Value"), label: t("stat1Label") },
    { Icon: RiFlaskLine,    value: t("stat2Value"), label: t("stat2Label") },
    { Icon: RiCameraLine,   value: t("stat3Value"), label: t("stat3Label") },
    { Icon: RiWindyLine,    value: t("stat4Value"), label: t("stat4Label") },
    { Icon: RiRestaurantLine, value: t("stat5Value"), label: t("stat5Label") },
    { Icon: RiCarLine,      value: t("stat6Value"), label: t("stat6Label") },
  ];

  return (
    <section className="bg-surface" aria-labelledby="campus-heading">

      {/* Text row */}
      <div className="max-w-360 mx-auto px-7.5 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          <h2
            id="campus-heading"
            className="font-serif font-semibold text-[#1a1a1a] leading-[1.1] text-[34px] md:text-[40px] lg:text-[44px]"
          >
            {t("heading")}
          </h2>
          <p className="text-[#444] text-[15px] md:text-[17px] leading-[1.75] lg:pt-1">
            {t("body")}
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-360 mx-auto px-7.5 pb-12 md:pb-16">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 border-t border-[#d5d0c5] pt-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <stat.Icon size={22} className="text-accent" aria-hidden="true" />
              <dt className="font-serif font-semibold text-[#1a1a1a] text-[19px] leading-snug">
                {stat.value}
              </dt>
              <dd className="text-[#666] text-xs leading-snug">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Campus render — contained within page gutters */}
      <div className="max-w-360 mx-auto px-7.5 pb-16 md:pb-20">
        <div className="relative w-full aspect-16/7 overflow-hidden">
          <Image
            src="/campus.png"
            alt={t("imageAlt")}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
