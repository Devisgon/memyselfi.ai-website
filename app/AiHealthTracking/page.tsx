import { pageMetadata } from '@/app/lib/metadata';
export const metadata= pageMetadata.aiHealthTracking;
import AiHealthTracking from './AiHealthTrackingClient';
export default function page(){
  return <AiHealthTracking/>
}