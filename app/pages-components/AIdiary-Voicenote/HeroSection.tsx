"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
const HeroSection: FC = () => {
  const { theme } = useTheme();
  return (
<SlideUp><section
      className="relative w-full pt-[120px] py-[25px] mt-[30px] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--bg-bg)">
<div
  className="absolute bottom-0  left-80  w-[400] h-[300px] rounded-full blur-[80px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(100px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute left-80 bottom-0  translate-x-0 w-[400] h-[300px] rounded-full blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity: 0.15,
      filter: "blur(180px)",
    }}
  />
)}
 {/* LEFT CONTENT  */}
      <div className="max-w-xl relative  pl-10 md:pl-15">
  <SlideUp><div className=" px-4 py-2 bg-[#FFEF43]  rounded-md w-[250px] h-[37] p-12" >
         <p className="text-black  font-semibold justify-center text-center text-sm tracking-wide">
              AI DIARY & VOICE NOTES
            </p> 
          </div></SlideUp>
<SlideLeft><h2 className="text-4xl md:text-5xl font-bold my-10 text-(--text-primary)">
        Document your days effortlessly with AI- powered Diary & Voice Notes Module
        </h2></SlideLeft>    

<SlideRight> <p className="text-(--text-primary) leading-relaxed mb-6">
Capture moments through text or voice, auto-organized by date, mood, and topic.
        </p></SlideRight>       

<SlideUp><div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-black">
            GET STARTED
          </span>
        </div></SlideUp> 
      </div>
{/* RIGHT IMAGE */}
<div className="relative -mb-6 bottom-0">
  <Image
    src="/AIdiary-Voicenote/diary-entry.png"
    alt="diary entery Preview"
    width={497}
    height={361}
    className="w-full h-auto rounded-tl-[60px] border-10 border-[#FFEF43] shadow-[0_10px_30px_#FFEF43]"
  />
</div>

    </section></SlideUp>
  );
};

export default HeroSection;
