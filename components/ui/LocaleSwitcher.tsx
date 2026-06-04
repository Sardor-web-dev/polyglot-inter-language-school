"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export function LocaleSwitcher() {
  const current = useLocale() as LocaleCode;
  const router = useRouter();

  const setLocale = (locale: LocaleCode) => {
    if (locale === current) return;
    document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div
      className="flex items-center"
      role="group"
      aria-label="Language selector"
    >
      {LOCALES.map(({ code, label }, i) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          aria-label={`Switch to ${label}`}
          aria-pressed={current === code}
          className={cn(
            "text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 transition-colors duration-200",
            current === code ? "text-white" : "text-white/40 hover:text-white/70",
            i < LOCALES.length - 1 && "border-r border-white/20"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
