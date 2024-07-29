import { ComponentProps } from "react";
import cx from "classnames";

const Textarea = ({ className, title, placeholder, ...props }: ComponentProps<"textarea">) => {
  return (
    <div className="flex w-full flex-col">
      <h2 className={cx("mb-4 text-4xl", props.disabled ? "text-right" : "text-left")}>{title}</h2>
      <textarea
        {...props}
        className={cx(
          "min-h-96 w-full resize-none rounded bg-slate-800 p-3 outline-none outline-[3px] outline-offset-0 transition-all duration-300 focus:outline-white/50 disabled:text-white/60",
          className,
        )}
        title={title}
        placeholder={title || placeholder || "enter..."}
      />
    </div>
  );
};
export default Textarea;
