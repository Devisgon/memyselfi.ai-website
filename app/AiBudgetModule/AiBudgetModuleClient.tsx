'use client';
import { Footer } from "../pages-components/UnifiedInbox-components/Footer";
import {HeroSection} from "../pages-components/Ai-BudgetModule/HeroSection";
import { PersonalUses } from "../pages-components/Ai-BudgetModule/PersonalUses";
import { BusinessUses } from "../pages-components/Ai-BudgetModule/BusinessUses";
import ProductivityImpact from "../pages-components/Ai-BudgetModule/ProductivityImpact";
import ManageGoals from "../pages-components/Ai-BudgetModule/ManageGoals";
export default function AiBudgetModule() {
  return(
<>
<HeroSection/>
<PersonalUses/>
<BusinessUses/>
<ProductivityImpact/>
<ManageGoals/>
<Footer/>
  </> 
  );
}
