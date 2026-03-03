export type StatCardProps = {
  statValue: string;
  statLabel: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="items-center bg-gray-200 box-border caret-transparent gap-x-1 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-1 p-4 rounded-xl md:px-6 md:py-5">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <p className="text-orange-600 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
          {props.statValue}
        </p>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <p className="text-neutral-600 text-sm font-medium box-border caret-transparent leading-[21px] text-center uppercase font-space_grotesk">
          {props.statLabel}
        </p>
      </div>
    </div>
  );
};
