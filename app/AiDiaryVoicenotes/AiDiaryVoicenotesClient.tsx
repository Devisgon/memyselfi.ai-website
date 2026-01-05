'use client';
import { PersonalUses } from "../pages-components/AIdiary-Voicenote/PersonalUses";
import { BusinessUses } from "../pages-components/AIdiary-Voicenote/BusinessUses";
import { ProductivityGain } from "../pages-components/AIdiary-Voicenote/ProductivityImpact";
import { Footer } from "../pages-components/landingPage/Footer";
import { KeyFeatures } from "../pages-components/AIdiary-Voicenote/KeyFeatures";
import HeroSection from "../pages-components/AIdiary-Voicenote/HeroSection";
export default function AiDiaryVoicenotes() {
  return(
  <>
<HeroSection/>
<KeyFeatures/>
<PersonalUses/>
<BusinessUses/>
<ProductivityGain/>
 <Footer/>
  </> 
  );
}
