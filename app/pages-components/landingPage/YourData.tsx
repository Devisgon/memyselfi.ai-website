'use client';
import React from "react";
import { FaShieldAlt  ,FaCheckCircle } from "react-icons/fa";
import { FaInbox ,FaVault} from "react-icons/fa6";
import { Hovering, SlideLeft,SlideRight,SlideUp } from "../../components/Animations";

export const YourData: React.FC = () => {
  return (
 <section className="w-full py-20 flex flex-col items-center gap-10 px-5 bg-(--dw-bg)">
  <SlideUp>
    <h1 className="text-[32px] sm:text-[42px] md:text-[49px] font-bold text-center">
      Your data. Your control. Always.
    </h1>
  </SlideUp>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 w-full max-w-5xl">
    {/* Card 1 */}
   <SlideRight>
     <div className="rounded-2xl p-6 flex flex-col justify-center gap-4 border-l-4 w-full sm:w-[450px] md:w-[503px] h-auto sm:h-[152px] border-[#27DA68] bg-(--bg-card-YD) text-(--text-primary)">
      <div className="flex items-center gap-3">
        <FaCheckCircle className="w-7 h-7  text-[#27DA68]" />
        <h3 className="text-lg sm:text-xl font-bold">Messages & Calendars</h3>
      </div>
      <p className="text-sm sm:text-base opacity-80">Stay with original providers (Google, Apple,Microsoft, Meta, etc.)</p>
    </div>
   </SlideRight>

    {/* Card 2 */}
   <SlideLeft>
    <div className="rounded-2xl p-6 flex flex-col justify-center gap-4 border-l-4 w-full sm:w-[450px] md:w-[503px] h-auto sm:h-[152px] border-[#3C74ED]  bg-(--bg-cardd-YD) text-(--text-primary)">
      <div className="flex items-center gap-3 ">
        <FaVault className="w-7 h-7 text-[#3C74ED]" />
        <h3 className="text-lg sm:text-xl font-bold ">Vault Uploads</h3>
      </div>
      <p className="text-sm sm:text-base opacity-80">Encrypted & accessible only to you with biometric authentication</p>
    </div>
   </SlideLeft>
  </div>

 <Hovering>
   <button className="flex items-center gap-3 px-6 py-4 rounded-2xl text-[16px] sm:text-[18px] text-black bg-(--bg-button)" >
    <FaShieldAlt  className="w-6 h-6" />
    Privacy-First Architecture
   </button>
 </Hovering> 
</section>
  );
};
