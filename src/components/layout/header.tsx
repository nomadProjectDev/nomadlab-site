"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

interface HeaderProps {
  locale?: "es" | "en";
}

const navItems: Record<string, NavItem[]> = {
  es: [
    { href: "/trabajo", label: "Trabajo" },
    { href: "/metodo", label: "Método" },
    { href: "/contacto", label: "Contacto" },
  ],
  en: [
    { href: "/en/work", label: "Work" },
    { href: "/en/method", label: "Method" },
    { href: "/en/contact", label: "Contact" },
  ],
};

const ctaText = {
  es: "Contar la idea",
  en: "Share your idea",
};

export function Header({ locale = "es" }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = navItems[locale];
  const cta = ctaText[locale];
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--nml-z-sticky)]",
        "h-[var(--nml-layout-header-height)]",
        "bg-[var(--nml-color-bg-page)]",
        "border-b border-transparent",
        "transition-[border-color] duration-[var(--nml-duration-fast)] ease-[var(--nml-easing-standard)]",
        isScrolled && "border-[var(--nml-color-alpha-black-10)]"
      )}
    >
      <div className="page-wrapper header-container">
        {/* Wordmark */}
        <Link
          href={homeHref}
          variant="nav"
          className={cn(
            "text-[var(--nml-type-label-sm-size)]",
            "leading-[var(--nml-type-label-sm-line)]",
            "font-[var(--nml-font-weight-medium)]",
            "tracking-[-0.01em]",
            "text-[var(--nml-color-text-primary)]",
            "no-underline hover:text-[var(--nml-color-text-primary)]"
          )}
        >
          NoMadLab
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              variant="nav"
              active={pathname === item.href}
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-regular-weight)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="desktop-cta">
          <Button variant="primary" size="sm" asChild>
            <Link
              href={locale === "en" ? "/en/contact" : "/contacto"}
              className="no-underline text-inherit hover:text-inherit"
            >
              {cta}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={cn(
            "mobile-menu-btn",
            "w-[var(--nml-control-hit-min)] h-[var(--nml-control-hit-min)]",
            "items-center justify-center",
            "focus-visible:outline-none",
            "focus-visible:shadow-[var(--nml-focus-ring)]",
            "focus-visible:rounded-[var(--nml-radius-sm)]"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            isMobileMenuOpen
              ? locale === "es"
                ? "Cerrar menú"
                : "Close menu"
              : locale === "es"
                ? "Abrir menú"
                : "Open menu"
          }
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className={cn(
            "mobile-menu-overlay",
            "fixed inset-0 top-[var(--nml-layout-header-height)]",
            "z-[var(--nml-z-overlay)]",
            "bg-[var(--nml-color-bg-page)]"
          )}
        >
          <nav
            className="page-wrapper py-[var(--nml-space-32)] flex flex-col gap-[var(--nml-space-24)]"
            aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="nav"
                active={pathname === item.href}
                className={cn(
                  "text-[var(--nml-type-title-md-size)]",
                  "leading-[var(--nml-type-title-md-line)]",
                  "font-[var(--nml-type-title-md-weight)]",
                  "tracking-[var(--nml-type-title-md-tracking)]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-[var(--nml-space-16)]">
              <Button variant="primary" size="md" asChild>
                <Link
                  href={locale === "en" ? "/en/contact" : "/contacto"}
                  className="no-underline text-inherit hover:text-inherit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {cta}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
