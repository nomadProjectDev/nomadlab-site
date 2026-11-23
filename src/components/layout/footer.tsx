import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

interface FooterColumn {
  title: string;
  links: { href: string; label: string }[];
}

interface FooterProps {
  locale?: "es" | "en";
}

const footerContent: Record<string, { columns: FooterColumn[]; copyright: string }> = {
  es: {
    columns: [
      {
        title: "Trabajo",
        links: [
          { href: "/trabajo", label: "Casos" },
          { href: "/metodo", label: "Método" },
        ],
      },
      {
        title: "Contacto",
        links: [
          { href: "/contacto", label: "Escríbenos" },
          { href: "https://www.linkedin.com/company/nomadlab", label: "LinkedIn" },
        ],
      },
      {
        title: "Legal",
        links: [
          { href: "/legal/privacidad", label: "Privacidad" },
          { href: "/legal/aviso", label: "Aviso legal" },
        ],
      },
    ],
    copyright: "NoMadLab",
  },
  en: {
    columns: [
      {
        title: "Work",
        links: [
          { href: "/en/work", label: "Cases" },
          { href: "/en/method", label: "Method" },
        ],
      },
      {
        title: "Contact",
        links: [
          { href: "/en/contact", label: "Get in touch" },
          { href: "https://www.linkedin.com/company/nomadlab", label: "LinkedIn" },
        ],
      },
      {
        title: "Legal",
        links: [
          { href: "/en/legal/privacy", label: "Privacy" },
          { href: "/en/legal/terms", label: "Terms" },
        ],
      },
    ],
    copyright: "NoMadLab",
  },
};

export function Footer({ locale = "es" }: FooterProps) {
  const content = footerContent[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-[var(--nml-color-border-default)]",
        "py-[var(--nml-space-48)] md:py-[var(--nml-space-64)]"
      )}
    >
      <div className="page-wrapper">
        <div className="grid-container">
          {/* Footer columns */}
          {content.columns.map((column, index) => (
            <div
              key={column.title}
              className={cn(
                "col-span-2 md:col-span-2",
                index === 0 && "col-start-1",
                "mb-[var(--nml-space-32)] md:mb-0"
              )}
            >
              <h3
                className={cn(
                  "text-[var(--nml-type-label-sm-size)]",
                  "leading-[var(--nml-type-label-sm-line)]",
                  "font-[var(--nml-font-weight-medium)]",
                  "text-[var(--nml-color-text-primary)]",
                  "mb-[var(--nml-space-16)]"
                )}
              >
                {column.title}
              </h3>
              <ul className="space-y-[var(--nml-space-8)]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      variant="nav"
                      className={cn(
                        "text-[var(--nml-type-label-sm-size)]",
                        "leading-[var(--nml-type-label-sm-line)]",
                        "font-[var(--nml-type-label-sm-regular-weight)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Language switcher */}
          <div className="col-span-2 md:col-span-2 md:col-start-7">
            <h3
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-font-weight-medium)]",
                "text-[var(--nml-color-text-primary)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              {locale === "es" ? "Idioma" : "Language"}
            </h3>
            <ul className="space-y-[var(--nml-space-8)]">
              <li>
                <Link
                  href="/"
                  variant="nav"
                  active={locale === "es"}
                  className={cn(
                    "text-[var(--nml-type-label-sm-size)]",
                    "leading-[var(--nml-type-label-sm-line)]",
                    "font-[var(--nml-type-label-sm-regular-weight)]"
                  )}
                >
                  Español
                </Link>
              </li>
              <li>
                <Link
                  href="/en"
                  variant="nav"
                  active={locale === "en"}
                  className={cn(
                    "text-[var(--nml-type-label-sm-size)]",
                    "leading-[var(--nml-type-label-sm-line)]",
                    "font-[var(--nml-type-label-sm-regular-weight)]"
                  )}
                >
                  English
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={cn(
            "mt-[var(--nml-space-48)]",
            "pt-[var(--nml-space-24)]",
            "border-t border-[var(--nml-color-border-default)]"
          )}
        >
          <p
            className={cn(
              "text-[var(--nml-type-label-sm-size)]",
              "leading-[var(--nml-type-label-sm-line)]",
              "font-[var(--nml-type-label-sm-regular-weight)]",
              "text-[var(--nml-color-text-secondary)]"
            )}
          >
            &copy; {currentYear} {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
