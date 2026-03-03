export type SectionHeaderProps = {
  containerVariant: string;
  innerContainerVariant: string;
  label: string;
  labelClassName?: string;
  title: string;
  titleClassName: string;
  titleHighlight?: string;
  description?: string;
  descriptionClassName?: string;
  showBreak?: boolean;
  children?: React.ReactNode;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`box-border caret-transparent min-h-[auto] min-w-[auto] ${props.containerVariant}`}
    >
      <div
        className={`box-border caret-transparent min-h-[auto] min-w-[auto] ${props.innerContainerVariant}`}
      >
        <p className={props.labelClassName || "text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"}>
          [ {props.label} ]
        </p>
        <h2 className={props.titleClassName}>
          {props.titleHighlight && (
            <span className="text-neutral-400 box-border caret-transparent">
              {props.titleHighlight}
            </span>
          )}
          {props.titleHighlight ? " " : ""}
          {props.showBreak ? (
            <>
              {props.title.split("<br />")[0]}{" "}
              <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-6 md:text-[40px] md:tracking-[-0.4px] md:leading-10" />
              {props.title.split("<br />")[1]}
            </>
          ) : (
            props.title
          )}
        </h2>
        {props.description && (
          <p className={props.descriptionClassName}>{props.description}</p>
        )}
      </div>
      {props.children}
    </div>
  );
};
