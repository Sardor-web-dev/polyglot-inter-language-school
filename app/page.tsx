import { HeroSection } from "@/components/sections/HeroSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { SchoolChoiceSection } from "@/components/sections/SchoolChoiceSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CampusSection } from "@/components/sections/CampusSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { EnrollmentSection } from "@/components/sections/EnrollmentSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CertificatesSection />
      <SchoolChoiceSection />
      <FeaturesSection />
      <CampusSection />
      <FounderSection />
      <EnrollmentSection />
    </>
  );
}
