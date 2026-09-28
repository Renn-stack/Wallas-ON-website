"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, type Lang } from "@/lib/i18n";

/** Enlace discreto a la misma página en el otro idioma. */
export function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname() ?? "/";
  const to: Lang = lang === "es" ? "en" : "es";
  return (
    <Link
      href={alternatePath(pathname, to)}
      hrefLang={to}
      lang={to}
      className="lang-switch"
      aria-label={label}
    >
      {to.toUpperCase()}
    </Link>
  );
}
