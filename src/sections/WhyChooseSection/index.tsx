import { SectionHeader } from "@/components/SectionHeader";

export const WhyChooseSection = () => {
  return (
    <div className="box-border caret-transparent px-4 md:px-5">
      <div className="border-b-zinc-50 border-l-neutral-200 border-r-neutral-200 border-t-zinc-50 box-border caret-transparent border-l border-r">
        <div className="box-border caret-transparent px-4 md:px-5">
          <div className="box-border caret-transparent pt-[42px] pb-14 md:pt-[88px]">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
              <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 md:items-end md:gap-x-14 md:flex-row md:gap-y-14">
                <SectionHeader
                  containerVariant="items-start gap-x-8 flex flex-col justify-start gap-y-8"
                  innerContainerVariant="gap-x-3 flex flex-col max-w-[800px] gap-y-3 md:gap-x-4 md:gap-y-4"
                  label="why choose us"
                  labelClassName="text-orange-600 text-sm font-medium leading-[21px] uppercase font-space_grotesk"
                  title="Because Serious Products <br />Need the Right Team"
                  titleClassName="text-neutral-950 text-2xl font-medium tracking-[-0.24px] leading-6 uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10"
                  showBreak={true}
                />
                <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] md:max-w-[416px]">
                  <p className="text-neutral-600 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
                    Our AI-driven process helps teams ship faster without
                    sacrificing thoughtful product decisions or human-centered
                    design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 box-border caret-transparent h-px w-full"></div>
    </div>
  );
};
