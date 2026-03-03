import { ProcessTimeline } from "@/sections/ProcessSection/components/ProcessTimeline";

export const ProcessGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr]">
      <div className="box-border caret-transparent h-[340px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:h-[632px]">
        <img
          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d1ac3da9a1ee8953ef95d_Content.jpg"
          alt=""
          className="aspect-[auto_620_/_632] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-8">
        <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
          <p
            aria-label="[ our process ]"
            className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"
          ></p>
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
            [
          </div>
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
            our
          </div>
          <div className="relative box-border caret-transparent blur-[0.002px] min-h-[auto] min-w-[auto] opacity-[0.9999] translate-y-[0.0002px]">
            gweuSgK
          </div>
          <div className="relative box-border caret-transparent blur-[0.032px] min-h-[auto] min-w-[auto] opacity-[0.9984] translate-y-[0.0032px]">
            O
          </div>
          <p className="box-border caret-transparent min-h-[auto] min-w-[auto]"></p>
          <h2 className="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
            The Dev Monks{" "}
            <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-6 md:text-[40px] md:tracking-[-0.4px] md:leading-10" />
            Development Journey
          </h2>
        </div>
        <ProcessTimeline />
      </div>
    </div>
  );
};
