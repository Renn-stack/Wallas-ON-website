import Link from "next/link";
import { site } from "@/lib/site";
import { PowerIcon } from "./Icons";
import { LogoMark } from "./Logo";
import { Year } from "./Year";

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="Wallas ON, inicio">
          <LogoMark size={20} />
          Wallas ON
        </Link>
        <nav aria-label="Principal" className="header__nav">
          <ul className="header__links">
            <li><Link href="/#como-funciona">Cómo funciona</Link></li>
            <li><Link href="/#compatibilidad">Compatibilidad</Link></li>
            <li><Link href="/soporte">Soporte</Link></li>
          </ul>
          <Link href={site.downloadUrl ?? "/#descargar"} className="btn btn--primary btn--sm">
            Descargar
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">
            <LogoMark size={18} />
            Wallas ON
          </p>
          <p className="footer__eco">Parte del ecosistema Wallas.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="footer__links">
            <li><Link href="/compatibilidad">Compatibilidad</Link></li>
            <li><Link href="/privacidad">Privacidad</Link></li>
            <li><Link href="/soporte">Soporte</Link></li>
          </ul>
        </nav>
        <p className="footer__copy">
          © <Year /> Wallas ON
        </p>
      </div>
    </footer>
  );
}

/** CTA de descarga. Si aún no hay enlace de tienda, se muestra como "Próximamente". */
export function DownloadButton({ fallbackHref = "/#descargar" }: { fallbackHref?: string | null }) {
  if (site.downloadUrl) {
    return (
      <a href={site.downloadUrl} className="btn btn--primary">
        <PowerIcon />
        Descargar Wallas ON
      </a>
    );
  }
  if (fallbackHref) {
    return (
      <Link href={fallbackHref} className="btn btn--primary">
        <PowerIcon />
        Descargar Wallas ON
      </Link>
    );
  }
  return (
    <span className="btn btn--primary" aria-disabled="true">
      <PowerIcon />
      Descargar Wallas ON
    </span>
  );
}
