import Link from "next/link";
import { useTranslations } from "next-intl";

export function EnrollmentSection() {
  const t = useTranslations("enrollment");

  return (
    <section
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
      aria-labelledby="enrollment-heading"
      style={{ backgroundColor: "var(--enrollment-bg)" }}
    >
      {/* Fabric texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 1px,transparent 50%)",
            "repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 50%)",
          ].join(","),
          backgroundSize: "6px 6px",
        }}
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative max-w-360 mx-auto px-7.5 text-center">
        <h2
          id="enrollment-heading"
          className="font-serif font-semibold text-white leading-[1.1] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] max-w-3xl mx-auto mb-6"
        >
          {t("heading")}
        </h2>

        <p className="text-white/50 text-[14px] md:text-[15px] leading-[1.75] max-w-lg mx-auto mb-11">
          {t("body")}
        </p>

        <Link
          href="/admissions/apply"
          className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/45 hover:border-white hover:bg-white/10 px-11 py-3.5 transition-colors duration-200"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
