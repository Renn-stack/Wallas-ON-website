import { TermsPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("es", "terms", dictionaries.es.termsPage);

export default function Page() {
  return <TermsPage lang="es" />;
}
