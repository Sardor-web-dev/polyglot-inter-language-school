import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function EnrollmentSection() {
  const t = useTranslations("enrollment");

  return (
    // White-framed section (30px side gutters)
    <section className="bg-white px-7.5 py-2" aria-labelledby="enrollment-heading">
      <div
        className="relative overflow-hidden max-w-360 mx-auto"
        style={{ backgroundColor: "var(--enrollment-bg)" }}
      >
        {/* Fabric background image */}
        <Image
          src="/enrollment-bg.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-[#0B1B36]/45" aria-hidden="true" />

        {/* Content */}
        <Reveal
          direction="up"
          className="relative px-7.5 py-20 md:py-28 lg:py-36 text-center"
        >
          <h2
            id="enrollment-heading"
            className="font-serif font-semibold text-white leading-[1.1] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] max-w-3xl mx-auto mb-6"
          >
            {t("heading")}
          </h2>

          <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.75] max-w-lg mx-auto mb-11">
            {t("body")}
          </p>

          {/* Semi-transparent glass button (~40% see-through) */}
          <Link
            href="/admissions/apply"
            className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white border border-white/40 bg-white/18 backdrop-blur-md hover:bg-white/30 px-11 py-4 transition-colors duration-300"
          >
            {t("cta")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
