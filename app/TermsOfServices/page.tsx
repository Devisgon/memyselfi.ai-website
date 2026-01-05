import { pageMetadata } from "@/app/lib/metadata";
import TermOfServices from "./TermsOfServicesClient";
export const metadata = pageMetadata.aiTermsServices;
export default function Page() {
  return <TermOfServices/>;
}
