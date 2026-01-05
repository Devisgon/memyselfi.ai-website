import { pageMetadata } from "@/app/lib/metadata";
import AiBudgetModule from "./AiBudgetModuleClient";
export const metadata = pageMetadata.aiBudgetModule;
export default function Page() {
  return <AiBudgetModule/>;
}
