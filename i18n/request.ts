import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const SUPPORTED_LOCALES = ["ru", "en", "uz"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupported(v: string | undefined): v is SupportedLocale {
  return SUPPORTED_LOCALES.includes(v as SupportedLocale);
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const raw = cookieStore.get("locale")?.value;
  const locale: SupportedLocale = isSupported(raw) ? raw : "ru";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
