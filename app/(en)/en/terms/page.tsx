import { TermsPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("en", "terms", dictionaries.en.termsPage);

export default function Page() {
  return <TermsPage lang="en" />;
}
