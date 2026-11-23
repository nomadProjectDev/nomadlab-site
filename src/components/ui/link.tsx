"use client";

import NextLink from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "inline" | "nav";
  active?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant = "inline", active, children, ...props }, ref) => {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const Component = isExternal ? "a" : NextLink;

    const baseStyles = [
      "transition-[text-decoration-color,color]",
      "duration-[var(--nml-duration-fast)]",
      "ease-[var(--nml-easing-standard)]",
      "focus-visible:outline-none",
      "focus-visible:shadow-[var(--nml-focus-ring)]",
      "focus-visible:rounded-[var(--nml-radius-sm)]",
    ];

    const variantStyles = {
      inline: [
        "text-[var(--nml-color-text-link)]",
        "underline",
        "decoration-[var(--nml-color-underline-link)]",
        "decoration-1",
        "underline-offset-[3px]",
        "visited:text-[var(--nml-color-text-link-visited)]",
        "hover:decoration-[var(--nml-color-underline-link-hover)]",
        "hover:decoration-2",
      ],
      nav: [
        "text-[var(--nml-color-text-secondary)]",
        "no-underline",
        "hover:text-[var(--nml-color-text-primary)]",
        active && "text-[var(--nml-color-text-primary)]",
      ],
    };

    return (
      <Component
        ref={ref}
        href={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Link.displayName = "Link";

export { Link };
