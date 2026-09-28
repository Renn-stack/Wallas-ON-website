import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 · Wallas On",
  description: "Página no encontrada · Page not found",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body>
        <main className="page">
          <div className="container page__head">
            <h1 className="h1">
              Página
              <br />
              <span className="accent-warn">no encontrada.</span>
            </h1>
            <p className="body-lg">La página que buscas no existe o ha cambiado de lugar.</p>
            <p className="body-lg" lang="en">
              Page not found. It doesn’t exist or has moved.
            </p>
            <div className="actions">
              <Link href="/" className="btn btn--outline">
                Volver al inicio
              </Link>
              <Link href="/en" className="btn btn--ghost" lang="en">
                Go to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
