export type FeatureCardProps = {
  variant: string;
  title: string;
  description: string;
  iconUrl?: string;
  iconClassName?: string;
  contentImageUrl?: string;
  bottomImageUrl?: string;
  bottomImageAlt?: string;
  techStackImageUrl?: string;
  techStackText?: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  if (
    props.variant ===
    "gap-x-4 grid auto-cols-[1fr] grid-cols-[1.2fr] grid-rows-[auto] gap-y-4 md:grid-cols-[1.2fr_1fr]"
  ) {
    return (
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] gap-x-4 grid auto-cols-[1fr] grid-cols-[1.2fr] grid-rows-[auto] gap-y-4 md:grid-cols-[1.2fr_1fr]">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] bg-zinc-800/60 bg-[url('https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cbe355cad1373cdc62a36_Content%20%281')] bg-no-repeat bg-cover gap-x-8 flex flex-col gap-y-8 bg-center p-4 rounded-xl md:gap-x-[54px] md:gap-y-[54px] md:pt-12 md:pb-[18px] md:px-12">
          <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[460px] min-h-[auto] min-w-[auto] gap-y-3">
            <h3 className="text-xl font-bold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-[auto] min-w-[auto] font-space_grotesk md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
              {props.title}
            </h3>
            <p className="text-neutral-400 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
              {props.description}
            </p>
          </div>
          <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-4 md:flex-row">
            <img
              src={props.contentImageUrl}
              alt=""
              className="box-border caret-transparent hidden max-w-full min-h-0 min-w-0 object-contain w-[150px] md:block md:min-h-[auto] md:min-w-[auto]"
            />
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4">
              <img
                src={props.techStackImageUrl}
                alt=""
                className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[356px]"
              />
              <p className="text-neutral-400 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] text-center uppercase font-space_grotesk">
                {props.techStackText}
              </p>
            </div>
          </div>
        </div>
        <img
          src={props.bottomImageUrl}
          alt={props.bottomImageAlt}
          className="box-border caret-transparent h-full justify-self-end max-w-full min-h-[auto] min-w-[auto] object-cover object-[50%_100%] w-full rounded-lg md:w-80"
        />
      </div>
    );
  }

  return (
    <div
      className={`box-border caret-transparent min-h-[auto] min-w-[auto] ${props.variant}`}
    >
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <img
          src={props.iconUrl}
          alt={props.title}
          className={`box-border caret-transparent inline-block h-20 max-w-full object-contain w-full md:h-[150px] ${props.iconClassName}`}
        />
      </div>
      <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-2">
        <h3 className="text-neutral-950 text-xl font-bold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-[auto] min-w-[auto] text-center font-space_grotesk md:text-2xl md:tracking-[-0.48px] md:leading-[28.8px]">
          {props.title}
        </h3>
        <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto] text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};
