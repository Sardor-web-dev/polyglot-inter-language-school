import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface" role="contentinfo">
      {/* ── Main ─────────────────────────────────────────── */}
      <div className="max-w-360 mx-auto px-[30px] pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_160px_220px_200px] gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="Polyglot International School">
              <Image
                src="/logo_footer.png"
                alt="Polyglot International School"
                width={130}
                height={72}
                className="object-contain mb-4"
              />
            </Link>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* ШКОЛА */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("schoolCol")}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {(["link1", "link2", "link3"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href="#"
                    className="text-[#444] hover:text-[#1a1a1a] text-sm transition-colors duration-200"
                  >
                    {t(k)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* КОНТАКТЫ */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("contactsCol")}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#444]" role="list">
              <li>{t("address")}</li>
              <li>
                <a
                  href="tel:+998000000000"
                  className="hover:text-[#1a1a1a] transition-colors"
                >
                  +998 (00) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@polyglot.uz"
                  className="hover:text-[#1a1a1a] transition-colors"
                >
                  info@polyglot.uz
                </a>
              </li>
            </ul>
          </div>

          {/* ПОСТУПЛЕНИЕ */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-widest uppercase mb-5 text-accent">
              {t("admissionsCol")}
            </h3>
            <p className="text-[#444] text-sm leading-snug mb-6">
              {t("enrollmentNote")}
            </p>
            <Link
              href="/admissions/apply"
              className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white bg-accent hover:bg-accent-hover px-6 py-3 transition-colors duration-200"
            >
              {t("applyBtn")}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="border-t border-[#ddd8cc]">
        <div className="max-w-360 mx-auto px-[30px] py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#aaa] text-xs">
            {t("copyright", { year })}
          </p>
          <p className="text-[#aaa] text-xs tracking-widest uppercase">
            {t("brand", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
