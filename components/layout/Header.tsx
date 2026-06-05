"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────── */}
      <header className="absolute top-7.5 left-0 right-0 z-50">
        <div className="max-w-360 mx-auto px-7.5 lg:px-12.5">
          <div className="flex items-center justify-between h-18 lg:h-21">

            {/* Left: hamburger + label */}
            <button
              className="flex items-center gap-2.5 text-white group shrink-0"
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={open}
            >
              <RiMenuLine size={18} className="group-hover:opacity-70 transition-opacity" />
              <span className="text-[11px] font-medium tracking-widest uppercase hidden sm:inline">
                {t("menu")}
              </span>
            </button>

            {/* Center: logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
              aria-label="Polyglot International School — главная"
            >
              <Image
                src="/logo_header.png"
                alt="Polyglot International School"
                width={54}
                height={54}
                className="object-contain"
                priority
              />
            </Link>

            {/* Right: lang switcher + ВОЙТИ */}
            <div className="flex items-center gap-5 shrink-0">
              <LocaleSwitcher />
              <Link
                href="/login"
                className="text-[11px] font-medium tracking-widest uppercase text-white border border-white/55 hover:border-white hover:bg-white/15 hover:backdrop-blur-md px-5 py-2.25 transition duration-300"
              >
                {t("login")}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Side drawer ─────────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-100 transition-all duration-300",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/55 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-80 bg-primary flex flex-col transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-7.5 py-7 border-b border-white/10">
            <span className="text-white text-[11px] font-medium tracking-widest uppercase">
              {t("menu")}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Закрыть меню"
            >
              <RiCloseLine size={22} />
            </button>
          </div>

          <nav className="flex-1 px-7.5 py-8">
            <ul className="flex flex-col gap-0.5" role="list">
              {(
                ["about", "education", "campus", "life", "admissions", "contacts"] as const
              ).map((key) => (
                <li key={key}>
                  <Link
                    href={`/${key === "about" ? "about" : key}`}
                    className="block text-white/75 hover:text-white font-serif text-[26px] py-3 transition-colors duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-7.5 pb-10">
            <Link
              href="/admissions/apply"
              className="block w-full text-center text-[11px] font-semibold tracking-widest uppercase text-white bg-accent hover:bg-accent-hover py-4 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {t("apply")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
