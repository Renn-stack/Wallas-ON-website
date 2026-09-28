import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/components/SiteShell";

export const metadata = pageMetadata("es", "home");

export default function Page() {
  return <HomePage lang="es" />;
}
