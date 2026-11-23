export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith("/en")) {
    return "en";
  }
  return "es";
}

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const isEnglish = currentPath.startsWith("/en");
  
  if (targetLocale === "en") {
    if (isEnglish) return currentPath;
    return currentPath === "/" ? "/en" : `/en${currentPath}`;
  }
  
  if (!isEnglish) return currentPath;
  return currentPath === "/en" ? "/" : currentPath.replace(/^\/en/, "");
}

export const siteConfig = {
  name: "NoMadLab",
  url: "https://nomadlab.es",
  description: {
    es: "Tecnología creativa para marcas. De la idea al lanzamiento.",
    en: "Creative technology for brands. From idea to launch.",
  },
  ogImage: "/og-image.jpg",
};
