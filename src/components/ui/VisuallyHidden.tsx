import type { ElementType, HTMLAttributes } from "react";

/**
 * Visually hides content while keeping it in the accessibility tree —
 * e.g. for icon-only button labels or supplementary screen-reader text.
 */
export function VisuallyHidden({
  as: Component = "span",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { as?: ElementType }) {
  return (
    <Component className={`sr-only ${className ?? ""}`.trim()} {...props} />
  );
}
