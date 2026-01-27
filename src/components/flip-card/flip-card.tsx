import type { ComponentChildren } from "preact";
import { useState, type ComponentPropsWithRef } from "preact/compat";
import { cn } from "../../utils";
import classes from "./flip-card.module.css";

type FlipCardProps = {
  front: (toggleCard: () => void) => ComponentChildren;
  back: (toggleCard: () => void) => ComponentChildren;
  mode?: "hover" | "click" | "custom-click";
} & ComponentPropsWithRef<"div">;

export function FlipCard({
  front,
  back,
  className,
  mode = "hover",
  ...rest
}: FlipCardProps) {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <div
      className={cn(classes.flipCard, className, { group: mode === "hover" })}
      {...(mode === "click" ? { onClick: handleClick } : {})}
      {...rest}
    >
      <div
        class={cn(classes.flipCardInner, {
          "group-hover:rotate-y-180 group-hover:transform": mode === "hover",
          "rotate-y-180 transform": toggled,
        })}
      >
        <div class={classes.flipCardFront}>{front(handleClick)}</div>
        <div class={classes.flipCardBack}>{back(handleClick)}</div>
      </div>
    </div>
  );
}
