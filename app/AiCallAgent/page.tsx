import { pageMetadata } from '@/app/lib/metadata';
export const metadata= pageMetadata.aiCallAgent;
import  AiCallAgent from './AiCallAgentClient';
export default function page(){
  return <AiCallAgent/>
}