import Image from "next/image";
import { useTranslations } from "next-intl";

export function SchoolChoiceSection() {
  const t = useTranslations("schoolChoice");

  const photos = [
    { src: "/school1.png", alt: t("photo1Alt") },
    { src: "/school2.png", alt: t("photo2Alt") },
    { src: "/school3.png", alt: t("photo3Alt") },
  ] as const;

  return (
    <section className="bg-navy-section pt-14 md:pt-18 lg:pt-20 overflow-hidden" aria-labelledby="school-choice-heading">
      {/* Heading */}
      <div className="max-w-360 mx-auto px-7.5 pb-10 md:pb-14">
        <h2
          id="school-choice-heading"
          className="font-serif font-semibold text-white leading-[1.1] text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] max-w-3xl"
        >
          {t("heading")}
        </h2>
      </div>

      {/* Interior photos — flush edge to edge */}
      <div className="grid grid-cols-3 h-80 md:h-100 lg:h-120">
        {photos.map((photo, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-center"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
