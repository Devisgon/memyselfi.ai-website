'use client';
import { RealTimeScenarios } from "../pages-components/Ai-CallAgent/RealLifeScenarios";
import { HowItWorks } from "../pages-components/Ai-CallAgent/HowWorks";
import { ProductivityImpact } from "../pages-components/Ai-CallAgent/ProductivityGains";
import { PrivacyPolicy } from "../pages-components/Ai-CallAgent/PrivacyPolicy";
import { ProductivityGainSecond } from "../pages-components/Ai-CallAgent/ProductivityImpactSecond";
import GoodbyeCalls from "../pages-components/Ai-CallAgent/GoodbyeCalls";
import { Footer } from "../pages-components/UnifiedInbox-components/Footer";
import {HeroSection} from "../pages-components/Ai-CallAgent/HeroSection";
export default function AiCallAgent() {
  return(
  <>
<HeroSection/>
<HowItWorks/>
<RealTimeScenarios/>
<ProductivityImpact/>
<PrivacyPolicy/>
<ProductivityGainSecond/>
<GoodbyeCalls/>
<Footer/>
  </> 
  );
}
