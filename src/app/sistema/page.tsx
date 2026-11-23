import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sistema de diseño - NoMadLab",
  description: "Muestra del sistema de diseño v1.1",
  robots: { index: false, follow: false },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-[var(--nml-space-64)] border-b border-[var(--nml-color-border-default)]">
      <div className="page-wrapper">
        <h2
          className={cn(
            "text-[var(--nml-type-title-md-size)]",
            "leading-[var(--nml-type-title-md-line)]",
            "font-[var(--nml-type-title-md-weight)]",
            "tracking-[var(--nml-type-title-md-tracking)]",
            "mb-[var(--nml-space-32)]"
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function ColorSwatch({
  name,
  value,
  textDark = false,
}: {
  name: string;
  value: string;
  textDark?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "w-full h-16 rounded-[var(--nml-radius-sm)]",
          "border border-[var(--nml-color-border-default)]",
          "flex items-end p-2"
        )}
        style={{ backgroundColor: value }}
      >
        <span
          className={cn(
            "text-[var(--nml-type-mono-sm-size)]",
            "leading-[var(--nml-type-mono-sm-line)]",
            "font-mono",
            textDark
              ? "text-[var(--nml-color-text-primary)]"
              : "text-[var(--nml-color-text-inverse)]"
          )}
        >
          {value}
        </span>
      </div>
      <span
        className={cn(
          "mt-2",
          "text-[var(--nml-type-label-sm-size)]",
          "leading-[var(--nml-type-label-sm-line)]",
          "font-[var(--nml-type-label-sm-weight)]"
        )}
      >
        {name}
      </span>
    </div>
  );
}

function SpacingBlock({ size, value }: { size: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "w-12",
          "text-[var(--nml-type-mono-sm-size)]",
          "leading-[var(--nml-type-mono-sm-line)]",
          "font-mono",
          "text-[var(--nml-color-text-secondary)]",
          "tabular-nums"
        )}
      >
        {size}
      </span>
      <div
        className="h-4 bg-[var(--nml-color-neutral-1000)]"
        style={{ width: value }}
      />
    </div>
  );
}

export default function SistemaPage() {
  return (
    <>
      {/* Page Title */}
      <section className="py-[var(--nml-space-64)] border-b border-[var(--nml-color-border-default)]">
        <div className="page-wrapper">
          <p
            className={cn(
              "text-[var(--nml-type-mono-sm-size)]",
              "leading-[var(--nml-type-mono-sm-line)]",
              "font-mono",
              "text-[var(--nml-color-text-secondary)]",
              "mb-[var(--nml-space-16)]"
            )}
          >
            v1.1 · 23-11-2026
          </p>
          <h1
            className={cn(
              "text-[length:var(--nml-role-display-size)]",
              "leading-[var(--nml-role-display-line)]",
              "font-[var(--nml-type-display-lg-weight)]",
              "tracking-[var(--nml-role-display-tracking)]"
            )}
          >
            Sistema de diseño
          </h1>
          <p className="mt-[var(--nml-space-16)] text-[var(--nml-color-text-secondary)] measure">
            Muestra del sistema. No es una pantalla.
          </p>
        </div>
      </section>

      {/* Typography */}
      <Section title="Tipografía">
        <div className="space-y-[var(--nml-space-48)]">
          {/* Display */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Display · 64/64 · -0,04em · 500
            </p>
            <p
              className={cn(
                "text-[length:var(--nml-type-display-lg-size)]",
                "leading-[var(--nml-type-display-lg-line)]",
                "font-[var(--nml-type-display-lg-weight)]",
                "tracking-[var(--nml-type-display-lg-tracking)]"
              )}
            >
              Display de muestra
            </p>
          </div>

          {/* Headline */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Headline · 56/56 · 48/56 · 32/40 · 500
            </p>
            <p
              className={cn(
                "text-[length:var(--nml-role-headline-size)]",
                "leading-[var(--nml-role-headline-line)]",
                "font-[var(--nml-type-headline-lg-weight)]",
                "tracking-[var(--nml-role-headline-tracking)]"
              )}
            >
              Titular de muestra
            </p>
          </div>

          {/* Title */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Title · 24/32 · -0,01em · 500
            </p>
            <p
              className={cn(
                "text-[var(--nml-type-title-md-size)]",
                "leading-[var(--nml-type-title-md-line)]",
                "font-[var(--nml-type-title-md-weight)]",
                "tracking-[var(--nml-type-title-md-tracking)]"
              )}
            >
              Título de muestra en 24
            </p>
          </div>

          {/* Body */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Body · 16/24 · 0 · 400
            </p>
            <p className="measure">
              Cuerpo de muestra. Sirve para ver medida, interlineado y color.
              Máximo 520px, entre 68 y 74 caracteres por línea.
            </p>
          </div>

          {/* Body Strong */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Body Strong · 16/24 · 0 · 500
            </p>
            <p
              className={cn(
                "font-[var(--nml-type-body-strong-weight)]",
                "measure"
              )}
            >
              Línea destacada de muestra.
            </p>
          </div>

          {/* Label */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Label · 14/20 · 500
            </p>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]"
              )}
            >
              Etiqueta de muestra
            </p>
          </div>

          {/* Mono */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-mono",
                "text-[var(--nml-color-text-secondary)]",
                "mb-[var(--nml-space-8)]"
              )}
            >
              Mono · 12/20 · tnum · 500
            </p>
            <p
              className={cn(
                "font-mono",
                "text-[var(--nml-type-mono-sm-size)]",
                "leading-[var(--nml-type-mono-sm-line)]",
                "font-[var(--nml-type-mono-sm-weight)]",
                "text-[var(--nml-color-text-secondary)]"
              )}
            >
              0000 · 01
            </p>
          </div>
        </div>
      </Section>

      {/* Colors */}
      <Section title="Color">
        <div className="space-y-[var(--nml-space-32)]">
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Neutrales
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <ColorSwatch name="neutral-0" value="#ffffff" textDark />
              <ColorSwatch name="neutral-50" value="#fafafa" textDark />
              <ColorSwatch name="neutral-100" value="#f2f2f2" textDark />
              <ColorSwatch name="neutral-200" value="#ebebeb" textDark />
              <ColorSwatch name="neutral-300" value="#e6e6e6" textDark />
              <ColorSwatch name="neutral-500" value="#c9c9c9" textDark />
              <ColorSwatch name="neutral-700" value="#8f8f8f" textDark />
              <ColorSwatch name="neutral-800" value="#7d7d7d" />
              <ColorSwatch name="neutral-900" value="#4d4d4d" />
              <ColorSwatch name="neutral-950" value="#383838" />
              <ColorSwatch name="neutral-1000" value="#171717" />
            </div>
          </div>

          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Semánticos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="bg.page" value="#fafafa" textDark />
              <ColorSwatch name="bg.surface" value="#ffffff" textDark />
              <ColorSwatch name="text.primary" value="#171717" />
              <ColorSwatch name="text.secondary" value="#4d4d4d" />
            </div>
          </div>

          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Bordes
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="border.default" value="#00000014" textDark />
              <ColorSwatch name="border.control" value="#ebebeb" textDark />
            </div>
          </div>
        </div>
      </Section>

      {/* Spacing */}
      <Section title="Espaciado">
        <div className="space-y-[var(--nml-space-16)]">
          <SpacingBlock size="4" value="4px" />
          <SpacingBlock size="8" value="8px" />
          <SpacingBlock size="16" value="16px" />
          <SpacingBlock size="24" value="24px" />
          <SpacingBlock size="32" value="32px" />
          <SpacingBlock size="48" value="48px" />
          <SpacingBlock size="64" value="64px" />
          <SpacingBlock size="96" value="96px" />
          <SpacingBlock size="128" value="128px" />
        </div>
      </Section>

      {/* Grid Overlay */}
      <Section title="Rejilla">
        <div className="relative">
          <div className="grid-container">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-24 bg-[var(--nml-color-neutral-100)]",
                  "border border-[var(--nml-color-border-default)]",
                  "flex items-center justify-center",
                  "text-[var(--nml-type-mono-sm-size)]",
                  "font-mono",
                  "text-[var(--nml-color-text-secondary)]"
                )}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="mt-[var(--nml-space-16)] text-[var(--nml-color-text-secondary)]">
            12 columnas · margen 24px · gutter 24px · máx. 1448px
          </p>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Botones">
        <div className="space-y-[var(--nml-space-32)]">
          {/* Primary */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Primario · 40px ratón · 44px táctil
            </p>
            <div className="flex flex-wrap items-center gap-[var(--nml-space-16)]">
              <Button variant="primary">Acción</Button>
              <Button variant="primary" className="hover:bg-[var(--nml-color-action-primary-bg-hover)]">
                Hover
              </Button>
              <Button variant="primary" className="shadow-[var(--nml-focus-ring)]">
                Foco
              </Button>
              <Button variant="primary" className="bg-[var(--nml-color-action-primary-bg-pressed)]">
                Pulsado
              </Button>
              <Button variant="primary" disabled>
                Desact.
              </Button>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Secundario
            </p>
            <div className="flex flex-wrap items-center gap-[var(--nml-space-16)]">
              <Button variant="secondary">Acción</Button>
              <Button variant="secondary" className="bg-[var(--nml-color-action-secondary-bg-hover)]">
                Hover
              </Button>
              <Button variant="secondary" className="shadow-[var(--nml-control-ring),var(--nml-focus-ring)]">
                Foco
              </Button>
              <Button variant="secondary" className="bg-[var(--nml-color-action-secondary-bg-pressed)]">
                Pulsado
              </Button>
              <Button variant="secondary" disabled>
                Desact.
              </Button>
            </div>
          </div>

          {/* Small */}
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              Pequeño · 32px · área táctil 44px
            </p>
            <div className="flex flex-wrap items-center gap-[var(--nml-space-16)]">
              <Button variant="primary" size="sm">
                Acción
              </Button>
              <Button variant="secondary" size="sm">
                Acción
              </Button>
            </div>
          </div>

          <p className="text-[var(--nml-color-text-secondary)]">
            Foco: anillo doble, 2px del fondo y 2px #171717 (17,2:1). Sin acento.
          </p>
        </div>
      </Section>

      {/* Links */}
      <Section title="Enlaces">
        <div className="space-y-[var(--nml-space-24)]">
          <div>
            <p
              className={cn(
                "text-[var(--nml-type-label-sm-size)]",
                "leading-[var(--nml-type-label-sm-line)]",
                "font-[var(--nml-type-label-sm-weight)]",
                "mb-[var(--nml-space-16)]"
              )}
            >
              En línea · neutro
            </p>
            <div className="flex flex-wrap items-center gap-[var(--nml-space-24)]">
              <div className="flex flex-col gap-1">
                <span className="text-[var(--nml-type-mono-sm-size)] font-mono text-[var(--nml-color-text-secondary)]">
                  Reposo
                </span>
                <Link href="#">enlace</Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--nml-type-mono-sm-size)] font-mono text-[var(--nml-color-text-secondary)]">
                  Hover
                </span>
                <Link
                  href="#"
                  className="decoration-[var(--nml-color-underline-link-hover)] decoration-2"
                >
                  enlace
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--nml-type-mono-sm-size)] font-mono text-[var(--nml-color-text-secondary)]">
                  Visitado
                </span>
                <Link
                  href="#"
                  className="text-[var(--nml-color-text-link-visited)]"
                >
                  enlace
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--nml-type-mono-sm-size)] font-mono text-[var(--nml-color-text-secondary)]">
                  Foco
                </span>
                <Link
                  href="#"
                  className="shadow-[var(--nml-focus-ring)] rounded-[var(--nml-radius-sm)]"
                >
                  enlace
                </Link>
              </div>
            </div>
          </div>

          <p className="text-[var(--nml-color-text-secondary)]">
            Texto #171717 con subrayado 1px #7d7d7d (3,9:1). Hover: subrayado
            #171717 de 2px, sin moverse.
          </p>
        </div>
      </Section>

      {/* Header Preview */}
      <Section title="Header">
        <div className="border border-[var(--nml-color-border-default)] rounded-[var(--nml-radius-sm)] overflow-hidden">
          <div
            className={cn(
              "h-[var(--nml-layout-header-height)]",
              "bg-[var(--nml-color-bg-page)]",
              "border-b border-[var(--nml-color-alpha-black-10)]",
              "px-[var(--nml-space-24)]",
              "flex items-center justify-between"
            )}
          >
            <span className="font-[var(--nml-font-weight-medium)] text-[var(--nml-type-label-sm-size)] tracking-[-0.01em]">
              NoMadLab
            </span>
            <nav className="hidden md:flex items-center gap-[var(--nml-space-24)]">
              <span className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                Trabajo
              </span>
              <span className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                Método
              </span>
              <span className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                Contacto
              </span>
            </nav>
            <Button variant="primary" size="sm">
              Contar la idea
            </Button>
          </div>
        </div>
        <p className="mt-[var(--nml-space-16)] text-[var(--nml-color-text-secondary)]">
          64px sticky · borde 1px en scroll · nav en 14/400 secundario
        </p>
      </Section>

      {/* Footer Preview */}
      <Section title="Footer">
        <div className="border border-[var(--nml-color-border-default)] rounded-[var(--nml-radius-sm)] overflow-hidden">
          <div className="bg-[var(--nml-color-bg-page)] p-[var(--nml-space-24)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--nml-space-24)]">
              <div>
                <p className="text-[var(--nml-type-label-sm-size)] font-[var(--nml-font-weight-medium)] mb-[var(--nml-space-8)]">
                  Trabajo
                </p>
                <p className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                  Casos
                </p>
              </div>
              <div>
                <p className="text-[var(--nml-type-label-sm-size)] font-[var(--nml-font-weight-medium)] mb-[var(--nml-space-8)]">
                  Contacto
                </p>
                <p className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                  Escríbenos
                </p>
              </div>
            </div>
            <div className="mt-[var(--nml-space-24)] pt-[var(--nml-space-16)] border-t border-[var(--nml-color-border-default)]">
              <p className="text-[var(--nml-type-label-sm-size)] text-[var(--nml-color-text-secondary)]">
                &copy; 2026 NoMadLab
              </p>
            </div>
          </div>
        </div>
        <p className="mt-[var(--nml-space-16)] text-[var(--nml-color-text-secondary)]">
          Título 14/500 · enlaces 14/400 secundario
        </p>
      </Section>

      {/* Specifications */}
      <Section title="Especificaciones">
        <div className="grid gap-[var(--nml-space-16)]">
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Contraste texto</span>
            <span>≥7,55:1 · Foco 17,2:1 · Subrayado 3,9:1</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Táctil</span>
            <span>44px hasta 1023px y en táctil. Área del botón sm: 44px</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Foco</span>
            <span>Visible con el teclado en las seis anchuras y sobre fondo oscuro</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Movimiento</span>
            <span>Con reduced-motion: transiciones a 0, sin scroll suave</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Hover</span>
            <span>Sin saltos de layout</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Responsive</span>
            <span>Sin scroll horizontal. Hero con proporción exacta (16:9 o 1:1)</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Línea</span>
            <span>68–74 car. en escritorio, 40–49 en móvil</span>
          </div>
          <div className="flex justify-between py-[var(--nml-space-8)] border-b border-[var(--nml-color-border-default)]">
            <span className="text-[var(--nml-color-text-secondary)]">Breakpoints</span>
            <span>375 · 390 · 768 · 834 · 1024 · 1440</span>
          </div>
        </div>
      </Section>

      {/* Prohibited */}
      <Section title="Prohibido">
        <ul className="space-y-[var(--nml-space-8)] text-[var(--nml-color-text-secondary)]">
          <li>No HUD o terminal</li>
          <li>No etiquetas de sistema falsas</li>
          <li>No cifras y specs inventadas</li>
          <li>No 3 tarjetas redondeadas</li>
          <li>No Inter (no Tight) por defecto</li>
          <li>No Glassmorphism</li>
          <li>No degradados</li>
          <li>No color de acento</li>
        </ul>
      </Section>
    </>
  );
}
