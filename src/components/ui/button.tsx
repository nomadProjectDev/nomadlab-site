import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2",
    "border-0 rounded-[var(--nml-radius-sm)]",
    "font-[var(--nml-type-label-md-weight)]",
    "text-[length:var(--nml-type-label-md-size)]",
    "leading-[var(--nml-type-label-md-line)]",
    "font-[family-name:var(--nml-font-family-sans)]",
    "no-underline cursor-pointer",
    "transition-[background-color,color,box-shadow]",
    "duration-[var(--nml-duration-fast)]",
    "ease-[var(--nml-easing-standard)]",
    "disabled:opacity-[var(--nml-state-disabled-opacity)]",
    "disabled:cursor-not-allowed disabled:pointer-events-none",
    "focus-visible:outline-none",
    "focus-visible:shadow-[var(--nml-focus-ring)]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--nml-color-action-primary-bg)]",
          "text-[var(--nml-color-action-primary-fg)]",
          "hover:bg-[var(--nml-color-action-primary-bg-hover)]",
          "active:bg-[var(--nml-color-action-primary-bg-pressed)]",
        ],
        secondary: [
          "bg-[var(--nml-color-action-secondary-bg)]",
          "text-[var(--nml-color-action-secondary-fg)]",
          "shadow-[var(--nml-control-ring)]",
          "hover:bg-[var(--nml-color-action-secondary-bg-hover)]",
          "active:bg-[var(--nml-color-action-secondary-bg-pressed)]",
          "focus-visible:shadow-[var(--nml-control-ring),var(--nml-focus-ring)]",
        ],
      },
      size: {
        md: [
          "h-[var(--nml-role-control-height)]",
          "px-[var(--nml-space-16)]",
        ],
        sm: [
          "h-[var(--nml-control-height-sm)]",
          "px-[var(--nml-space-8)]",
          "text-[length:var(--nml-type-label-sm-size)]",
          "leading-[var(--nml-type-label-sm-line)]",
          "before:content-['']",
          "before:absolute before:inset-y-1/2 before:inset-x-auto",
          "before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
          "before:w-[max(100%,var(--nml-control-hit-min))]",
          "before:h-[var(--nml-control-hit-min)]",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
