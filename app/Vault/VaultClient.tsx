'use client';
import HeroSection from "../pages-components/Vault/HeroSection";
import  BoostEfficiency  from "../pages-components/Vault/BoostEfficiency";
import { Footer } from "../pages-components/landingPage/Footer";
import { KeyFeatures } from "../pages-components/Vault/KeyFeatures";
import { PersonalUses } from "../pages-components/Vault/PersonalUses";
import { BusinessUses } from "../pages-components/Vault/BusinessUses";
import Productivity from "../pages-components/Vault/Productivity";
export default function Vault() {
  return(
<>
<HeroSection/>
<KeyFeatures/>
<PersonalUses/>
<BusinessUses/>
<Productivity/>
<BoostEfficiency/>
<Footer/>
  </> 
  );
}
