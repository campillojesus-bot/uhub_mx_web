import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBand } from "@/components/marketing/CredibilityBand";
import { Problem } from "@/components/sections/Problem";
import { SystemCycle } from "@/components/sections/SystemCycle";
import { WhatIsUhub } from "@/components/sections/WhatIsUhub";
import { Accompaniment } from "@/components/sections/Accompaniment";
import { HowToStart } from "@/components/sections/HowToStart";
import { TwoDoors } from "@/components/sections/TwoDoors";
import { Evidence } from "@/components/sections/Evidence";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CredibilityBand />
        <Problem />
        <SystemCycle />
        <WhatIsUhub />
        <Accompaniment />
        <HowToStart />
        <TwoDoors />
        <Evidence />
        <WhoWeAre />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
