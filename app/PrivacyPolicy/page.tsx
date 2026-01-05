import { pageMetadata } from "@/app/lib/metadata";
import PrivacyPolicy from "./PrivacyPolicyClient";
export const metadata = pageMetadata.aiPrivacyPolicy;
export default function Page() {
  return <PrivacyPolicy/>;
}
