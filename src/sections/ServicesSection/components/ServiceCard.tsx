export type ServiceCardProps = {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  services: Array<{
    text: string;
    href: string;
  }>;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative bg-gray-200 box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 z-[1] overflow-hidden p-4 rounded-xl md:p-6">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] z-[-1]">
        <img
          alt={props.imageAlt}
          src={props.imageUrl}
          className="box-border caret-transparent inline-block h-full max-h-[221px] max-w-full object-contain object-[50%_0%] w-full"
        />
      </div>
      <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
        <p
          aria-label={props.category}
          className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"
        ></p>
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
          {props.category}
        </div>
        <p className="box-border caret-transparent min-h-[auto] min-w-[auto]"></p>
        <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
          {props.title}
        </h3>
      </div>
      <div className="box-border caret-transparent gap-x-[5px] flex flex-wrap min-h-[auto] min-w-[auto] gap-y-[5px]">
        {props.services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="text-neutral-950 bg-white box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] px-2.5 py-[3px] rounded-[40px]"
          >
            <p className="text-neutral-600 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[18.2px]">
              {service.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
