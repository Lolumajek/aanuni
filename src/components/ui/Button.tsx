import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-brand-full font-medium transition-colors duration-base ease-brand disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-energy-500 text-white hover:bg-energy-600",
        secondary: "bg-midnight-800 text-white hover:bg-midnight-700",
        outline:
          "border border-midnight-800 text-midnight-800 hover:bg-midnight-50",
        ghost: "text-midnight-800 hover:bg-midnight-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type ButtonProps = (ButtonAsButton | ButtonAsLink) &
  VariantProps<typeof buttonVariants>;

/** Renders a <button> normally, or a Next.js <Link> when given an `href`. */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href !== undefined) {
    return <Link className={classes} {...(props as ButtonAsLink)} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
