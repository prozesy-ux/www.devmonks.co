export const ClientTypes = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] max-w-[784px] min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-[117px] md:grid-cols-[1fr_1.2fr] md:gap-y-[117px]">
      <div className="box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3">
        <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.16px] leading-[20.8px] min-h-[auto] min-w-[auto]">
          We develop AI-powered products for
        </p>
        <div className="items-center box-border caret-transparent gap-x-1 flex justify-start min-h-[auto] min-w-[auto] gap-y-1">
          <a
            href="https://www.devmonks.co/"
            className="text-neutral-300 text-base font-medium box-border caret-transparent block tracking-[-0.16px] leading-[20.8px] min-h-[auto] min-w-[auto] border border-neutral-600 px-3 py-2 rounded-[100px] border-solid"
          >
            Startups
          </a>
          <a
            href="https://www.devmonks.co/"
            className="text-neutral-300 font-medium box-border caret-transparent block tracking-[-0.16px] min-h-[auto] min-w-[auto] border border-neutral-600 px-3 py-2 rounded-[100px] border-solid"
          >
            Scale-ups
          </a>
          <a
            href="https://www.devmonks.co/"
            className="text-neutral-300 font-medium box-border caret-transparent block tracking-[-0.16px] min-h-[auto] min-w-[auto] border border-neutral-600 px-3 py-2 rounded-[100px] border-solid"
          >
            Enterprise
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <p className="text-neutral-400 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
          We combine strong engineering and practical AI to develop reliable
          products people enjoy using every day.
        </p>
      </div>
    </div>
  );
};
