import { CTAContent } from "@/sections/CTASection/components/CTAContent";

export const FinalCTASection = () => {
  return (
    <section className="bg-white bg-[url('https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c0dd760e7f039bd3e2197_Final%20CTA.png')] bg-cover box-border caret-transparent bg-center">
      <div className="box-border caret-transparent py-[42px] md:py-[88px]">
        <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
          <CTAContent
            variant="md:gap-x-10 md:gap-y-10"
            heading="It’s Time to Bring Your Idea Alive"
            description="Connect with us to start your project, with full transparency, no hidden fees, and expert support."
            buttonUrl="https://www.devmonks.co/freecall"
            buttonText="book a strategy call"
            buttonIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c14b48317a32ea5f1d63b_Vector (5).svg"
            showDecorations={true}
          />
        </div>
      </div>
    </section>
  );
};
