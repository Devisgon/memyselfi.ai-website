import { pageMetadata } from '@/app/lib/metadata';
import AiDiaryVoicenotes from './AiDiaryVoicenotesClient';
export const metadata = pageMetadata.aiDiaryVoiceNotes;
export default  function page(){
  return <AiDiaryVoicenotes/>
}