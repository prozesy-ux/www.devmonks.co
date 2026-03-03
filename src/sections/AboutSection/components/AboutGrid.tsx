import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-[86px] md:grid-cols-[1fr_1fr] md:gap-y-[86px]">
      <AboutContent />
      <div className="box-border caret-transparent h-[340px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:h-auto">
        <img
          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_image hlder.png"
          alt=""
          className="aspect-[auto_597_/_504] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
    </div>
  );
};
