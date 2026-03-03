import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { AIWorkflowSection } from "@/sections/AIWorkflowSection";
import { CTASection } from "@/sections/CTASection";
import { ServicesSection } from "@/sections/ServicesSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ExpectationsSection } from "@/sections/ExpectationsSection";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-zinc-50 text-base not-italic normal-nums font-normal accent-auto bg-stone-950 box-border caret-transparent block tracking-[normal] leading-[20.8px] list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"></div>
      <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"></div>
      <Navbar />
      <Hero />
      <AIWorkflowSection />
      <CTASection />
      <ServicesSection />
      <IndustriesSection />
      <TechStackSection />
      <ExpectationsSection />
      <FinalCTASection />
      <Footer />
      <div className="box-border caret-transparent">
        <div className="caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
