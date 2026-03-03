export type ExpectationCardProps = {
  text: string;
  showBreak?: boolean;
};

export const ExpectationCard = (props: ExpectationCardProps) => {
  return (
    <div className="items-center bg-zinc-800/60 box-border caret-transparent gap-x-3 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-3 p-4 rounded-xl md:p-6">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <img
          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c1fdd68c6fd6afebb97c7_Check.svg"
          alt=""
          className="box-border caret-transparent inline-block h-6 max-w-full w-6"
        />
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <p className="text-neutral-300 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] text-center md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
          {props.showBreak ? (
            <>
              {props.text.split("\n")[0]}
              <br className="text-base box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]" />
              {props.text.split("\n")[1]}
            </>
          ) : (
            props.text
          )}
        </p>
      </div>
    </div>
  );
};
