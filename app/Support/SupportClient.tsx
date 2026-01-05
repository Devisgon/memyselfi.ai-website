'use client';
import LiveChatAssistant from "../pages-components/Support/ChatAssistant";
import ContactUs from "../pages-components/Support/ContactUs";
import EmailUsDirectly from "../pages-components/Support/EmailUs";
import HeroSection from "../pages-components/Support/HeroSection";
import { Footer } from "../pages-components/UnifiedInbox-components/Footer";

export default function Support() {
  return(
  <>
  <HeroSection/>
  <LiveChatAssistant/>
  <EmailUsDirectly/>
  <ContactUs/>
  <Footer/>
  </> 
  );
}
