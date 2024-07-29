import { ComponentProps } from "react";
import cx from "classnames";

const Button = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cx(
        "rounded bg-white p-3 text-slate-600 outline-none outline-[3px] outline-offset-0 transition-all duration-300 focus:outline-slate-600",
        className,
      )}
      {...props}
    />
  );
};
export default Button;
