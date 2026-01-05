'use client';
import { BusinessUses } from "../pages-components/Ai-VoiceAssistant/BusinessUses";
import HeroSection from "../pages-components/Ai-VoiceAssistant/HeroSection";
import { HowItWorks } from "../pages-components/Ai-VoiceAssistant/HowWorks";
import { KeyBenefits } from "../pages-components/Ai-VoiceAssistant/KeyBenefits";
import { PersonalUses } from "../pages-components/Ai-VoiceAssistant/PersonalUses";
import { Footer } from "../pages-components/UnifiedInbox-components/Footer";

export default function AiVoiceAssistant() {
  return(
  <> 
  <HeroSection/>
  <HowItWorks/>
  <KeyBenefits/>
  <PersonalUses/>
  <BusinessUses/>
  <Footer/>
  </> 
  );
}
