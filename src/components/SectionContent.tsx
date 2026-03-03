import { SectionHeader } from "@/components/SectionHeader";
import { FeatureCard } from "@/components/FeatureCard";

export const SectionContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
      <SectionHeader
        containerVariant="gap-x-6 flex flex-col gap-y-6"
        innerContainerVariant="gap-x-3 flex flex-col max-w-[829px] gap-y-3 md:gap-x-4 md:gap-y-4"
        label="ai powered workflow"
        labelClassName="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"
        title="It’s built into how DevMonks engineers software, shaping decisions, workflows, and the way products come to life."
        titleClassName="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-1.2px] leading-[26.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-2px] md:leading-[44px]"
        titleHighlight="AI isn’t an add-on for us."
      />
      <FeatureCard
        variant="gap-x-4 grid auto-cols-[1fr] grid-cols-[1.2fr] grid-rows-[auto] gap-y-4 md:grid-cols-[1.2fr_1fr]"
        title="AI inside our process"
        description="Our AI-driven approach improves speed, accuracy, and decisions. So that we can develop scalable products without sacrificing quality or usability."
        contentImageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cbf37bd38cf8ef48a7f37_Content (2).png"
        techStackImageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cbfb38dac7c53e1c5f0c2_Frame 2147257882.png"
        techStackText="Modern, Proven Technology Stack"
        bottomImageUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cc0946de8bbcbd24e2233_Content (3).png"
        bottomImageAlt=""
      />
    </div>
  );
};
