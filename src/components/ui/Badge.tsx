import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-brand-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        neutral: "bg-surface-2 text-midnight-700",
        energy: "bg-energy-50 text-energy-700",
        success:
          "bg-[color-mix(in_srgb,var(--color-success)_12%,white)] text-[var(--color-success)]",
        warning:
          "bg-[color-mix(in_srgb,var(--color-warning)_12%,white)] text-[var(--color-warning)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
