import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full antialiased">
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
