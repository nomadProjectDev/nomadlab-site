import type { Metadata } from "next";

import { type Locale, siteConfig, getAlternateUrl } from "./i18n";

interface PageMetadataParams {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  pathname,
  noIndex = false,
}: PageMetadataParams): Metadata {
  const url = `${siteConfig.url}${pathname}`;
  const alternateEs = `${siteConfig.url}${getAlternateUrl(pathname, "es")}`;
  const alternateEn = `${siteConfig.url}${getAlternateUrl(pathname, "en")}`;

  return {
    title,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
      languages: {
        es: alternateEs,
        en: alternateEn,
        "x-default": alternateEs,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  };
}

interface OrganizationSchemaParams {
  locale: Locale;
}

export function generateOrganizationSchema({ locale }: OrganizationSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description[locale],
    logo: `${siteConfig.url}/logo.svg`,
  };
}

interface WebPageSchemaParams {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
}

export function generateWebPageSchema({
  title,
  description,
  locale,
  pathname,
}: WebPageSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.url}${pathname}`,
    inLanguage: locale === "es" ? "es" : "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
