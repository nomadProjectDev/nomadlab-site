import type { Metadata } from "next";

import { generatePageMetadata, generateWebPageSchema } from "@/lib/metadata";
import { siteConfig } from "@/lib/i18n";

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} - Tecnología creativa para marcas`,
  description: siteConfig.description.es,
  locale: "es",
  pathname: "/",
});

export default function HomePage() {
  const pageSchema = generateWebPageSchema({
    title: `${siteConfig.name} - Tecnología creativa para marcas`,
    description: siteConfig.description.es,
    locale: "es",
    pathname: "/",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="py-[var(--nml-space-96)] md:py-[var(--nml-space-128)]">
        <div className="page-wrapper">
          <h1
            className="text-[length:var(--nml-role-display-size)] leading-[var(--nml-role-display-line)] font-[var(--nml-type-display-lg-weight)] tracking-[var(--nml-role-display-tracking)] text-[var(--nml-color-text-primary)] max-w-[12ch]"
          >
            Tecnología creativa para marcas
          </h1>
          <p className="mt-[var(--nml-space-24)] text-[var(--nml-color-text-secondary)] measure">
            De la idea al lanzamiento.
          </p>
        </div>
      </section>
    </>
  );
}
