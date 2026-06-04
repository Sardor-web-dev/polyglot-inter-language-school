import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex flex-col min-h-screen" aria-label="Главный экран">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt="Студенты на территории кампуса Polyglot International School"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/20" />
      </div>

      {/* Centered content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-7.5 pt-24 pb-8">
        <h1 className="font-serif font-semibold text-white leading-[1.06] max-w-5xl text-[52px] sm:text-[68px] md:text-[80px] lg:text-[92px] xl:text-[100px]">
          {t("heading")}
        </h1>

        <p className="mt-7 text-white/80 text-base md:text-[17px] leading-[1.7] max-w-170">
          {t("subtext")}
        </p>

        <div className="mt-11 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/admissions/apply"
            className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/60 hover:border-white hover:bg-white/10 px-9 py-3.5 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {t("cta1")}
          </Link>
          <Link
            href="/about"
            className="inline-block text-[11px] font-medium tracking-widest uppercase text-white border border-white/60 hover:border-white hover:bg-white/10 px-9 py-3.5 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            {t("cta2")}
          </Link>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="relative pb-9 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="block w-8 h-0.5 bg-white" />
        <span className="block w-8 h-0.5 bg-white/35" />
        <span className="block w-8 h-0.5 bg-white/35" />
      </div>
    </section>
  );
}
