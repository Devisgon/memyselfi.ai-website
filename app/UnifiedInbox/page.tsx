import { pageMetadata } from "@/app/lib/metadata";
import UnifiedInbox from "./UnifiedInboxClient";
export const metadata = pageMetadata.aiUnifiedInbox;
export default function Page() {
  return <UnifiedInbox/>;
}
