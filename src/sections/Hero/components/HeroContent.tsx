import { HeroText } from "@/sections/Hero/components/HeroText";
import { ClientTypes } from "@/sections/Hero/components/ClientTypes";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-[42px] flex flex-col gap-y-[42px] md:gap-x-20 md:gap-y-20">
      <HeroText />
      <ClientTypes />
    </div>
  );
};
