import { pageMetadata } from "@/app/lib/metadata";
import Vault from "./VaultClient";
export const metadata = pageMetadata.aiVault;
export default function Page() {
  return <Vault/>;
}
