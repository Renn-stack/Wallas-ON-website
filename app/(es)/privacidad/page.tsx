import { PrivacyPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("es", "privacy", dictionaries.es.privacyPage);

export default function Page() {
  return <PrivacyPage lang="es" />;
}
