import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { generateOrganizationSchema } from "@/lib/metadata";

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema({ locale: "es" });

  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <Header locale="es" />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale="es" />
      </body>
    </html>
  );
}
