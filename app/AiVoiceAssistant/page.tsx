import { pageMetadata } from '@/app/lib/metadata';
export const metadata= pageMetadata.aiVoiceAssistant;
import AiVoiceAssistant from './AiVoiceAssistantClient';
export default function page(){
  return <AiVoiceAssistant/>
}