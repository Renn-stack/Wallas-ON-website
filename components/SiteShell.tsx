import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { dictionaries, routes, type Lang, type RouteKey } from "@/lib/i18n";
import { Footer, Header } from "./Chrome";
import { RevealObserver } from "./RevealObserver";

/** html/body compartido por las raíces de cada idioma. */
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = dictionaries[lang];
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          {t.a11y.skip}
        </a>
        <Header lang={lang} />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer lang={lang} />
        <RevealObserver />
      </body>
    </html>
  );
}

/** Metadatos de una página, con enlaces hreflang a su equivalente en el otro idioma. */
export function pageMetadata(
  lang: Lang,
  key: RouteKey,
  page?: { title: string; description: string },
): Metadata {
  const t = dictionaries[lang].meta;
  const description = page?.description ?? t.description;
  return {
    title: page ? page.title : { absolute: t.title },
    description,
    alternates: {
      canonical: routes[lang][key],
      languages: { es: routes.es[key], en: routes.en[key] },
    },
    openGraph: {
      title: page ? `${page.title} · Wallas ON` : t.title,
      description,
      type: "website",
      locale: t.locale,
    },
  };
}
