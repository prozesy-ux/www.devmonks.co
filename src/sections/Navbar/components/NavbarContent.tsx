import { Logo } from "@/components/Logo";
import { NavbarButton } from "@/sections/Navbar/components/NavbarButton";

export const NavbarContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex justify-between max-w-screen-xl gap-y-4 w-full mx-auto md:gap-x-20 md:gap-y-20">
      <Logo />
      <NavbarButton />
    </div>
  );
};
