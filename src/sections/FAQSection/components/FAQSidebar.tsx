export const FAQSidebar = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] order-last md:order-none">
      <div className="sticky items-stretch bg-[url('https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fe2d4a1ea53611c80c81f_Content.png')] bg-cover box-border caret-transparent flex justify-between max-w-full z-[1] overflow-hidden bg-[position:left_50%] p-3 rounded-xl top-[120px] md:max-w-[430px] md:pl-[7px] md:pr-6 md:py-6">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] pointer-events-none w-[137px] z-[-1] mt-auto -mb-3 md:w-[200px] md:-mb-7">
          <img
            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fdce125fd33046eab98b3_freepik__background__65344 (1).png"
            alt=""
            className="box-border caret-transparent inline-block h-full max-w-full object-contain object-[50%_100%] w-full"
          />
        </div>
        <div className="box-border caret-transparent gap-x-9 flex flex-col justify-between max-w-40 min-h-[auto] min-w-[auto] gap-y-9 md:gap-x-[70px] md:gap-y-[70px]">
          <div className="items-start box-border caret-transparent gap-x-[18px] flex flex-col justify-start max-w-[156px] min-h-[auto] min-w-[auto] gap-y-[18px] md:gap-x-6 md:max-w-none md:gap-y-6">
            <p className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
              Do You Have{" "}
              <br className="text-base box-border caret-transparent tracking-[-0.48px] leading-[19.2px] md:text-xl md:tracking-[-0.6px] md:leading-6" />
              More Questions?
            </p>
            <a
              href="https://www.devmonks.co/freecall"
              className="items-center bg-neutral-800 box-border caret-transparent gap-x-2.5 flex justify-center max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 px-4 py-2.5 rounded-lg md:px-5 md:py-3"
            >
              <div className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[22.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                Reach  me out
              </div>
            </a>
          </div>
          <div className="text-neutral-950 items-start box-border caret-transparent gap-x-2 flex flex-col justify-end min-h-[auto] min-w-[auto] gap-y-2">
            <p className="text-base box-border caret-transparent min-h-[auto] min-w-[auto] md:text-lg">
              Saiful Islam
            </p>
            <p className="text-neutral-400 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[18.2px] min-h-[auto] min-w-[auto]">
              Chief Technical Officer
              <br className="box-border caret-transparent" />
              Dev Monks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
