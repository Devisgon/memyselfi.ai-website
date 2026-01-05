'use client';
import { SlideLeft, SlideRight, SlideUp ,Hovering } from "@/app/components/Animations";
import Image from "next/image";
export const ProductivityGain = () => {
  return (
    <section className="relative w-full flex items-center justify-center  py-10 p-30">
      <section className="relative  w-[1150] h-[550] rounded-2xl py-8 px-6 md:px-20 overflow-hidden">
<Hovering><div className="absolute inset-0 -z-10">
        <Image
          src="/AIdiary-Voicenote/productivityImpact.png"   
          alt="section background"
          fill
          className="object-cover object-center  opacity-100"
          priority
        />
      </div></Hovering> 
<div className="flex gap-6">
<div className="w-150"></div>
 <div className="flex  justify-center items-start ">
 <SlideLeft> 
<h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black  transition-colors duration-500">
  Productivity Impact:
        </h2>
   <ul className="text-black space-y-2  relative">
          <li>• Save up to 50% more time by dictating notes instead of &nbsp;&nbsp;&nbsp;typing.</li>
          <li>• Retrieve by AI assistant by voice when asked about that &nbsp;&nbsp;&nbsp;day’s diary entry.</li>
          <li>• Improve goal tracking and project memory by keeping all &nbsp;&nbsp;&nbsp;personal reflections in one organized space.</li>
          <li>• Turn scattered thoughts into clear, actionable steps with AI &nbsp;&nbsp;&nbsp;summarization.</li>
          <li>• Turn scattered thoughts into clear, actionable steps with AI &nbsp;&nbsp;&nbsp;summarization.</li>
          <li>• Record meetings, AI captures key points and generates smart &nbsp;&nbsp;&nbsp;summaries.</li>
        </ul>
     </SlideLeft> 
 </div>
</div>
    </section>
    </section>
  );
};
