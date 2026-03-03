export const HeroText = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-start max-w-[765px] min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-10 md:gap-y-10">
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
        <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
          <p className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
            [ Product Development Services ]
          </p>
          <h1 className="text-[32px] font-medium box-border caret-transparent tracking-[-0.64px] leading-[35.2px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[56px] md:tracking-[-1.12px] md:leading-[61.6px]">
            Building AI-Powered Products that people love
          </h1>
        </div>
      </div>
      <a
        href="https://www.devmonks.co/freecall"
        className="text-neutral-950 items-center bg-white box-border caret-transparent gap-x-2.5 flex justify-center max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 px-5 py-3 rounded-lg"
      >
        <img
          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699bef4448c6b88097d3f7fb_Vector.svg"
          alt=""
          className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
        />
        <div className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[22.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
          Start Your Project
        </div>
      </a>
    </div>
  );
};
