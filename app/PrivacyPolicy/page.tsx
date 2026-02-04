import { pageMetadata } from "@/app/lib/metadata";
import PrivacyPolicy from "./PrivacyPolicyClient";
import {Footer} from "@/app/pages-components/landingPage/Footer"
export const metadata = pageMetadata.aiPrivacyPolicy;
export default function Page() {
  return(
  <> <PrivacyPolicy/>
  <Footer /> </>
  );
}
