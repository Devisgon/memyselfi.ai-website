"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideUp, SlideLeft, SlideRight, Hovering } from "@/app/components/Animations";
const MonthlyCalendar: FC = () => {
  const { theme } = useTheme();
  return (
   <SlideUp> 
     <section className="relative w-full lg:py-10 lg:px-20 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--dw-bg)">
{/* ==== MAIN SECTION GLOW (Left Bottom → Mid) ==== */}
<div
  className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[80px] sm:blur-[120px] md:blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] rounded-full blur-[120px] sm:blur-[160px] md:blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity: 0.15,
      filter: "blur(180px)",
    }}
  />
)}
 {/* LEFT CONTENT WITH GLOW */}
      <div className="max-w-full sm:max-w-xl relative pl-4 sm:pl-6 md:pl-10 mb-8 md:mb-0">
 <SlideLeft>   <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-(--text-primary)">
          Monthly Calendar
        </h2> </SlideLeft>

 <SlideRight> <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm sm:text-base">
          Big picture planning made simple. Track upcoming deadlines, birthdays,
          trips, and recurring events in one grid. Perfect for balancing long-term
          goals with everyday life while spotting busy weeks early. Just say,
          <span className="font-semibold text-(--text-primary)">
            {" "}
            “Please schedule swimming lessons for the next 4 weeks at 4 PM for
            30 minutes on Thursday for my daughter Florence,”
          </span>{" "}
          and your AI adds it instantly.
        </p></SlideRight> 

<SlideUp> <div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-black">
            Productivity Impact:
          </span>
        </div></SlideUp>  

        <ul className="text-(--text-secondary) space-y-2 relative text-sm sm:text-base">
          <li>• Reduce missed events by 85%.</li>
          <li>• Cut last-minute planning by 50%.</li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
 <Hovering> <div className="relative w-[500px] h-[450px] mb-9">
   <Image
     src="/Smart-ai-calendar/Monthly.png"
     alt="monthly Calendar Preview"
     fill
     className="object-contain drop-shadow-[0_0_40px_rgba(255,239,67,0.8)]"
   />
 </div></Hovering> 
    </section> </SlideUp>
  );
};

export default MonthlyCalendar;
