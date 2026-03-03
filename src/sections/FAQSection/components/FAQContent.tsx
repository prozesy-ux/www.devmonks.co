import { FAQSidebar } from "@/sections/FAQSection/components/FAQSidebar";
import { FAQList } from "@/sections/FAQSection/components/FAQList";

export const FAQContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
      <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6">
        <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
          <p
            aria-label="[ faq ]"
            className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"
          ></p>
          <div className="relative box-border caret-transparent blur-[0.1283px] min-h-[auto] min-w-[auto] opacity-[0.9936] translate-y-[0.0128px]">
            V
          </div>
          <div className="relative box-border caret-transparent blur-[0.4304px] min-h-[auto] min-w-[auto] opacity-[0.9785] translate-y-[0.043px]">
            SgX
          </div>
          <div className="relative box-border caret-transparent blur-[1.0885px] min-h-[auto] min-w-[auto] opacity-[0.9456] translate-y-[0.1088px]">
            G
          </div>
          <p className="box-border caret-transparent min-h-[auto] min-w-[auto]"></p>
          <h2 className="text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
            Have a Question?{" "}
            <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-6 md:text-[40px] md:tracking-[-0.4px] md:leading-10" />
            Here’s the Answers
          </h2>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 md:grid-cols-[1fr_1fr]">
        <FAQSidebar />
        <FAQList />
      </div>
    </div>
  );
};
