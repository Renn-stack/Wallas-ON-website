import { PrivacyPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("en", "privacy", dictionaries.en.privacyPage);

export default function Page() {
  return <PrivacyPage lang="en" />;
}
