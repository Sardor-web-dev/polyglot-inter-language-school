import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Polyglot — Академическая среда для реальной жизни",
  description:
    "Международная частная школа в Самарканде. Международные сертификаты без репетиторов. Набор на 2026–2027 учебный год открыт.",
  keywords: [
    "частная школа Самарканд",
    "Polyglot International School",
    "международные сертификаты",
    "SAT IELTS подготовка",
  ],
  openGraph: {
    title: "Polyglot International School",
    description:
      "Академическая среда для реальной жизни. Самарканд, Узбекистан.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="pl-7 pr-7">
            <Header />
            <main>{children}</main>
          </div>
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
