import { Hero } from "@/components/sections/Hero";
import { CredibilityBand } from "@/components/marketing/CredibilityBand";
import { Problem } from "@/components/sections/Problem";
import { Quadrant } from "@/components/sections/Quadrant";
import { SystemCycle } from "@/components/sections/SystemCycle";
import { WhatIsUhub } from "@/components/sections/WhatIsUhub";
import { Accompaniment } from "@/components/sections/Accompaniment";
import { Evidence } from "@/components/sections/Evidence";
import { HowToStart } from "@/components/sections/HowToStart";
import { TwoDoors } from "@/components/sections/TwoDoors";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { AcBridge } from "@/components/sections/AcBridge";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <Problem />
      <Quadrant />
      <SystemCycle />
      <WhatIsUhub />
      <Accompaniment />
      <Evidence />
      <HowToStart />
      <TwoDoors />
      <WhoWeAre />
      <ClosingCta />
      <NewsletterSection />
      <AcBridge />
    </>
  );
}
