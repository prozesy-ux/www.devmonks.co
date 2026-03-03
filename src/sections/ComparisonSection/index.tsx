import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonTable } from "@/sections/ComparisonSection/components/ComparisonTable";

export const ComparisonSection = () => {
  return (
    <div className="box-border caret-transparent px-4 md:px-5">
      <div className="border-b-zinc-50 border-l-zinc-800 border-r-zinc-800 border-t-zinc-50 box-border caret-transparent border-l border-r">
        <div className="box-border caret-transparent px-4 md:px-5">
          <div className="box-border caret-transparent py-[42px] md:py-[88px]">
            <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
              <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                <SectionHeader
                  containerVariant="items-center gap-x-4 flex flex-col justify-start gap-y-4"
                  innerContainerVariant="blur-0"
                  label="Comparison"
                  labelClassName="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] text-center uppercase font-space_grotesk"
                  title="Where Others Stop, We Continue"
                  titleClassName="text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10"
                />
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] overflow-auto md:overflow-visible">
                  <ComparisonTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
