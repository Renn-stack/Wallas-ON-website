import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";
import "../globals.css";

const t = dictionaries.es.meta;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: t.title, template: "%s · Wallas ON" },
  description: t.description,
};

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  colorScheme: "dark",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
