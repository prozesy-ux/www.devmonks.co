import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed box-border caret-transparent z-[555] top-0 inset-x-0">
      <div className="fixed bg-zinc-800 box-border caret-transparent hidden z-[-1] inset-[0%]"></div>
      <NavbarContainer />
      <div className="box-border caret-transparent before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"></div>
    </div>
  );
};
