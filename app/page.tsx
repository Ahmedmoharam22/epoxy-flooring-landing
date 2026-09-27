import { Hero } from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyEpoxy  from "@/components/sections/WhyEpoxy";
import Projects from "@/components/sections/Projects";
import  Process  from "@/components/sections/Process";
import { CTA }   from "@/components/sections/CtaSection";
import { Faq } from "@/components/sections/Faq";
import {FinalCTA} from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyEpoxy />
      <Projects />
      <Process />
      <CTA />
      <Faq />
      <FinalCTA />
      <Footer />
    </>

  );
}