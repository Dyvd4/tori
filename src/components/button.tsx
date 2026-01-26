import type { ComponentPropsWithRef, PropsWithChildren } from "preact/compat";
import { cn } from "../utils";

type ButtonProps = PropsWithChildren<{
  disabled?: boolean;
}> &
  ComponentPropsWithRef<"button">;

export function Button({
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn("", className)} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
