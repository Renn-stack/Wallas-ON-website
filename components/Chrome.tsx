import Link from "next/link";
import { anchorHref, dictionaries, routes, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { PowerIcon } from "./Icons";
import { LangSwitch } from "./LangSwitch";
import { LogoMark } from "./Logo";
import { Year } from "./Year";

export function Header({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const r = routes[lang];
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href={r.home} className="header__logo" aria-label={t.a11y.home}>
          <LogoMark size={20} />
          Wallas On
        </Link>
        <nav aria-label={t.a11y.nav} className="header__nav">
          <ul className="header__links">
            <li><Link href={anchorHref(lang, "how")}>{t.nav.how}</Link></li>
            <li><Link href={anchorHref(lang, "compat")}>{t.nav.compat}</Link></li>
            <li><Link href={r.support}>{t.nav.support}</Link></li>
          </ul>
          <LangSwitch lang={lang} label={t.a11y.switchTo} />
          <Link href={site.downloadUrl ?? anchorHref(lang, "download")} className="btn btn--primary btn--sm">
            {t.nav.download}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const r = routes[lang];
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">
            <LogoMark size={18} />
            Wallas On
          </p>
          <p className="footer__eco">{t.footer.eco}</p>
        </div>
        <nav aria-label={t.a11y.footerNav}>
          <ul className="footer__links">
            <li><Link href={r.compat}>{t.footer.compat}</Link></li>
            <li><Link href={r.privacy}>{t.footer.privacy}</Link></li>
            <li><Link href={r.support}>{t.footer.support}</Link></li>
          </ul>
        </nav>
        <p className="footer__copy">
          © <Year /> Wallas On
        </p>
      </div>
    </footer>
  );
}

/** CTA de descarga. Si aún no hay enlace de tienda, apunta a la sección final o queda inactivo. */
export function DownloadButton({ lang, fallbackHref }: { lang: Lang; fallbackHref: string | null }) {
  const label = dictionaries[lang].cta.download;
  if (site.downloadUrl) {
    return (
      <a href={site.downloadUrl} className="btn btn--primary">
        <PowerIcon />
        {label}
      </a>
    );
  }
  if (fallbackHref) {
    return (
      <Link href={fallbackHref} className="btn btn--primary">
        <PowerIcon />
        {label}
      </Link>
    );
  }
  return (
    <span className="btn btn--primary" aria-disabled="true">
      <PowerIcon />
      {label}
    </span>
  );
}
