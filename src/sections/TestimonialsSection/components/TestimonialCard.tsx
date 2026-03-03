export type TestimonialCardProps = {
  ariaLabel: string;
  quoteIconUrl: string;
  highlightedQuote: string;
  fullTestimonial: string;
  quoteIconBottomUrl: string;
  authorImageUrl: string;
  authorName: string;
  authorTitle: string;
  industry: string;
  services: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className="relative box-border caret-transparent shrink-0 h-[stretch] min-h-[auto] min-w-[auto] w-[632px] mr-4"
    >
      <div className="backdrop-blur-[25px] bg-zinc-800/60 box-border caret-transparent gap-x-6 flex flex-col h-full min-h-full gap-y-6 p-4 rounded-xl md:gap-x-12 md:gap-y-12 md:pl-8 md:pr-[34px] md:py-8">
        <div className="box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-6 md:gap-y-6">
          <img
            alt={props.authorName}
            src={props.quoteIconUrl}
            className="box-border caret-transparent h-6 max-w-full min-h-[auto] min-w-[auto] object-contain w-6 md:h-10 md:w-10"
          />
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-none before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-none after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
            <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
              <strong className="text-zinc-50 text-xl font-bold box-border caret-transparent tracking-[-0.4px] leading-6 font-space_grotesk md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
                {props.highlightedQuote}
              </strong>
            </p>
            <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
              ‍
            </p>
            <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
              {props.fullTestimonial}
            </p>
          </div>
          <img
            alt={props.authorName}
            src={props.quoteIconBottomUrl}
            className="box-border caret-transparent h-6 max-w-full min-h-[auto] min-w-[auto] object-contain w-6 ml-auto md:h-10 md:w-10"
          />
        </div>
        <div className="bg-stone-950 box-border caret-transparent h-0.5 min-h-[auto] min-w-[auto] w-full mt-auto"></div>
        <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-[30px] md:gap-y-[30px]">
          <div className="items-center box-border caret-transparent gap-x-3 flex justify-start min-h-[auto] min-w-[auto] gap-y-3">
            <img
              alt={props.authorName}
              src={props.authorImageUrl}
              className="box-border caret-transparent shrink-0 h-14 max-w-full min-h-[auto] min-w-[auto] object-cover object-[50%_20%] w-14 rounded-[100px]"
            />
            <div className="box-border caret-transparent gap-x-0.5 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-0.5">
              <p className="text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
                {props.authorName}
              </p>
              <p className="text-neutral-400 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                {props.authorTitle}
              </p>
            </div>
          </div>
          <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent gap-x-[5px] flex flex-col min-h-[auto] min-w-[auto] gap-y-[5px] md:gap-x-2 md:gap-y-2">
              <p className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                INDUSTRY
              </p>
              <p className="text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                {props.industry}
              </p>
            </div>
            <div className="box-border caret-transparent gap-x-[5px] flex flex-col min-h-[auto] min-w-[auto] gap-y-[5px] md:gap-x-2 md:gap-y-2">
              <p className="text-neutral-400 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                SERVICES
              </p>
              <p className="text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                {props.services}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
