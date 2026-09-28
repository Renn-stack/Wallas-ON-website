import { CompatPage } from "@/components/InfoPages";
import { pageMetadata } from "@/components/SiteShell";
import { dictionaries } from "@/lib/i18n";

export const metadata = pageMetadata("en", "compat", dictionaries.en.compatPage);

export default function Page() {
  return <CompatPage lang="en" />;
}
