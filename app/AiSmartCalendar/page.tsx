import { pageMetadata } from "@/app/lib/metadata";
import AiSmartCalendarClient from "./AiSmartCalendarClient";
export const metadata = pageMetadata.aiSmartCalendar;
export default function Page() {
  return <AiSmartCalendarClient />;
}
