import { CTAContent } from "@/sections/CTASection/components/CTAContent";

export const CTASection = () => {
  return (
    <section className="bg-stone-950 bg-[url('https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c96c29da61b3614f4158d_Initial%20CTA.png')] bg-no-repeat bg-cover box-border caret-transparent bg-center">
      <div className="box-border caret-transparent px-4 md:px-5">
        <div className="box-border caret-transparent py-[42px] md:py-[88px]">
          <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
            <CTAContent
              variant="md:gap-x-14 md:gap-y-14"
              logoUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c995c113670e677de9c2a_Content.svg"
              logoLink="https://www.devmonks.co/"
              rating="4.9"
              ratingIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c9a5799c1b8a4db91b368_Content (1).svg"
              tagline="Globally Leading Development Agency"
              heading="Full-cycle MVP development services for founders & teams building websites and applications that must perform, scale smoothly, and serve real users."
              description=""
              buttonUrl="https://www.devmonks.co/freecall"
              buttonText="Let’s plan your project"
              buttonIconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699bef4448c6b88097d3f7fb_Vector.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
