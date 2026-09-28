import { SupportPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("en", "support", dictionaries.en.supportPage);

export default function Page() {
  return <SupportPage lang="en" />;
}
