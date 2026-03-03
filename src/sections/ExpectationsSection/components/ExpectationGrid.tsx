import { ExpectationCard } from "@/sections/ExpectationsSection/components/ExpectationCard";

export const ExpectationGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-4 md:grid-cols-[1fr_1fr] md:gap-y-4">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <div className="box-border caret-transparent max-w-[500px]">
          <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6">
            <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
                            <p className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                              [ OUR OFFERING ]
                            </p>
              <h2 className="text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                What to Expect from Us
              </h2>
            </div>
            <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
              We provide product development services for small startups and
              large enterprises to help them build scalable, reliable, and
              user-loved products.
            </p>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-4 md:grid-cols-[1fr_1fr_1fr]">
        <ExpectationCard text="AI-Driven Development" />
        <ExpectationCard text="Scalable Architecture" />
        <ExpectationCard text="Transparent Communication" />
        <ExpectationCard text="Human-Centered Design" />
        <ExpectationCard text={"Full-Cycle\nSupport"} showBreak={true} />
        <ExpectationCard text="Faster Time-to-Market" />
      </div>
    </div>
  );
};
