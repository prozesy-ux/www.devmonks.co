export type CTAContentProps = {
  variant: string;
  logoUrl?: string;
  logoLink?: string;
  rating?: string;
  ratingIconUrl?: string;
  tagline?: string;
  heading: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
  buttonIconUrl: string;
  showDecorations?: boolean;
};

export const CTAContent = (props: CTAContentProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent gap-x-8 flex flex-col justify-start gap-y-8 ${props.variant}`}
    >
      {props.variant === "md:gap-x-14 md:gap-y-14" && (
        <>
          <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-x-2 justify-center gap-y-2">
            <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] items-center gap-x-1.5 justify-start gap-y-1.5">
              <a
                href={props.logoLink}
                className="box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto]"
              >
                <img
                  src={props.logoUrl}
                  alt=""
                  className="box-border caret-transparent inline-block h-8 max-w-full object-contain w-14"
                />
              </a>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-neutral-950 font-semibold items-center bg-zinc-100 gap-x-1 flex justify-center tracking-[-0.16px] gap-y-1 px-[13px] py-1 rounded-[5px]">
                <p className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  {props.rating}
                </p>
                <img
                  src={props.ratingIconUrl}
                  alt=""
                  className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-[88px]"
                />
              </div>
            </div>
            <p className="text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] text-center md:text-lg md:tracking-[-0.36px] md:leading-[23.4px] text-neutral-400">
              {props.tagline}
            </p>
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] items-center gap-x-8 justify-start max-w-[940px] gap-y-8 md:gap-x-10 md:gap-y-10">
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
              <h2 className="text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                {props.heading}
              </h2>
            </div>
            <a
              href={props.buttonUrl}
              className="items-center box-border caret-transparent gap-x-2.5 flex justify-center max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 px-5 py-3 rounded-lg text-neutral-950 bg-white"
            >
              <img
                src={props.buttonIconUrl}
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
              />
              <div className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[22.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                {props.buttonText}
              </div>
            </a>
          </div>
        </>
      )}
      {props.variant === "md:gap-x-10 md:gap-y-10" && (
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-x-3 max-w-[800px] gap-y-3 md:gap-x-4 md:gap-y-4">
            <h2 className="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
              {props.heading}
            </h2>
          </div>
          <p className="text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] text-center md:text-lg md:tracking-[-0.36px] md:leading-[23.4px] text-neutral-600">
            {props.description}
          </p>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] items-stretch gap-x-3 justify-center gap-y-3 md:items-center md:flex-row">
            <a
              href={props.buttonUrl}
              className="items-center box-border caret-transparent gap-x-2.5 flex justify-center max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 px-5 py-3 rounded-lg bg-orange-600"
            >
              <img
                src={props.buttonIconUrl}
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
              />
              <div className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[22.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                {props.buttonText}
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
