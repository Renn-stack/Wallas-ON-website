import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/Chrome";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-mono",
  display: "swap",
});

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
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
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
