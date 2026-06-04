import Image from "next/image";
import { useTranslations } from "next-intl";

export function FounderSection() {
  const t = useTranslations("founder");

  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24" aria-labelledby="founder-heading">
      <div className="max-w-360 mx-auto px-7.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left — text (centered as in design) */}
          <div className="text-center">
            <h2
              id="founder-heading"
              className="font-serif font-semibold text-[#1a1a1a] leading-[1.12] text-[36px] md:text-[44px] lg:text-[50px] mb-10"
            >
              {t("heading")}
            </h2>

            <p className="text-[#999] text-[13px] md:text-[14px] leading-[1.85] mb-5 max-w-md mx-auto">
              Polyglot основан{" "}
              <strong className="text-[#1a1a1a] font-semibold">
                {t("founderName")}
              </strong>{" "}
              — выпускником{" "}
              <strong className="text-[#1a1a1a] font-semibold">
                {t("founderUnis")}
              </strong>
              , с управленческим и государственным опытом, ориентированным на образование как стратегический ресурс.
            </p>

            <p className="text-[#999] text-[13px] md:text-[14px] leading-[1.85] max-w-md mx-auto">
              Команда школы — специалисты с международной практикой (
              <strong className="text-[#1a1a1a] font-semibold">
                {t("teamUnis")}
              </strong>
              ) и более чем десятилетним опытом в школьном образовании.
            </p>
          </div>

          {/* Right — portrait */}
          <div>
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src="/succes.png"
                alt={t("photoAlt")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
