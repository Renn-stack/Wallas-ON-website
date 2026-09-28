import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header, Footer } from "@/components/Chrome";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wallas ON — Tu audio. Siempre activo.",
    template: "%s · Wallas ON",
  },
  description:
    "Wallas ON mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
  openGraph: {
    title: "Wallas ON — Tu audio. Siempre activo.",
    description:
      "Wallas ON mantiene abierta la sesión de audio de tu dispositivo auditivo, incluso durante los silencios.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
