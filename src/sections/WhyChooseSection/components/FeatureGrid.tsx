import { FeatureCard } from "@/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] max-w-screen-xl gap-y-0 mx-auto md:grid-cols-[1fr_1fr_1fr]">
      <FeatureCard
        variant="items-center border-b-neutral-200 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 px-4 py-6 border-r-0 border-b md:border-b-zinc-50 md:border-r-neutral-200 md:gap-x-10 md:gap-y-10 md:px-6 md:py-14 md:border-b-0 md:border-r"
        title="Product-First Engineering "
        description="Built around real product outcomes"
        iconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cc3d184e371ec8cf44d8d_Frame 2147257878.svg"
        iconClassName="translate-x-[-0.2038px] translate-y-[2.1493px] rotate-[-0.8904984070851913deg]"
      />
      <FeatureCard
        variant="items-center border-b-neutral-200 border-l-zinc-50 border-r-zinc-50 border-t-zinc-50 box-border caret-transparent gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 px-4 py-6 border-r-0 border-b md:border-b-zinc-50 md:border-r-neutral-200 md:gap-x-10 md:gap-y-10 md:px-6 md:py-14 md:border-b-0 md:border-r"
        title="Growth-Ready System"
        description="Design infrastructure prepared for scaling"
        iconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d67ec6a9500f2ee2ff3b9_Group.svg"
        iconClassName="translate-x-[7.9406px] translate-y-[6.6369px] rotate-[2.0947013568284807deg]"
      />
      <FeatureCard
        variant="items-center box-border caret-transparent gap-x-6 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-6 px-4 py-6 md:gap-x-10 md:gap-y-10 md:px-6 md:py-14"
        title="Human-Guided AI Decisions"
        description="Automation balanced with expert judgment"
        iconUrl="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d681c63fd64071af61583_Group (1).svg"
        iconClassName="translate-x-[1.8203px] translate-y-[-2.3988px] rotate-[-0.11800015411704691deg]"
      />
    </div>
  );
};
