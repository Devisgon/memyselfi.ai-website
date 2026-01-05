'use client';
import HeroSection from '../pages-components/UnifiedInbox-components/HeroSection';
import { BusinessInbox } from '../pages-components/UnifiedInbox-components/BussinessInbox';
import { PersonalInbox } from '../pages-components/UnifiedInbox-components/Personal-Inbox';
import {WhyMatters} from '../pages-components/UnifiedInbox-components/whyMatters';
import ControllConversation from '../pages-components/UnifiedInbox-components/ControllConversation';
import IntegratedChannels from '../pages-components/UnifiedInbox-components/IntegratedChannels';
import { Footer } from '../pages-components/UnifiedInbox-components/Footer';
import { KeyBenefits } from '../pages-components/UnifiedInbox-components/KeyBenefits';

export default function UnifiedInbox() {
  return(
  <>
  <HeroSection/>
  <PersonalInbox />
  <IntegratedChannels/>
  <KeyBenefits/>
  <BusinessInbox/>
  <WhyMatters/>
  <ControllConversation/>
  <Footer/>
  </> 
  );
}
