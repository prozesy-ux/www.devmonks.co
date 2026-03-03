import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-16 flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-between gap-y-16 md:gap-x-4 md:flex-row md:gap-y-4">
      <FooterBrand />
      <FooterLinks />
    </div>
  );
};
