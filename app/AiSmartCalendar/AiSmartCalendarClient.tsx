'use client';
import DailyCalendar from "../pages-components/AI-SmartCalendar/DailyCalendar";
import FamilySharing from "../pages-components/AI-SmartCalendar/FamilySharing";
import KeyFeatures from "../pages-components/AI-SmartCalendar/KeyFeatures";
import MonthlyCalendar from "../pages-components/AI-SmartCalendar/MonthlyCalendar";
import { WeeklyCalendar } from "../pages-components/AI-SmartCalendar/WeeklyCalendar";
import { YearlyCalendar } from "../pages-components/AI-SmartCalendar/YearlyCalendar";
import { Footer } from "../pages-components/landingPage/Footer";
import HeroSection from "../pages-components/AI-SmartCalendar/HeroSection";
export default function AiSmartCalendar() {
  return(
  <>
  <HeroSection/>
  <KeyFeatures/>
  <DailyCalendar/>
  <WeeklyCalendar/>
 <MonthlyCalendar/>
 <YearlyCalendar/>
 <FamilySharing/>
 <Footer/>
  </> 
  );
}
