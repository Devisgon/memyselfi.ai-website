"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
const DailyCalendar: FC = () => {
  const { theme } = useTheme();
  return (
<SlideUp><section className="relative  w-full py-10 lg:px-20 px-4 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--dw-bg)">
{/* ==== MAIN SECTION GLOW (Left Bottom → Mid) ==== */}
<div
  className="absolute bottom-0 left-10 sm:left-20 md:left-30 translate-x-0 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(80px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute bottom-0 left-10 sm:left-20 md:left-30 translate-x-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full blur-[100px] sm:blur-[140px] md:blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity: 0.15,
      filter: "blur(80px)",
    }}
  />
)}
 {/* LEFT CONTENT WITH GLOW */}
      <div className="max-w-full sm:max-w-xl relative pl-4 sm:pl-6 md:pl-10 lg:pl-15 mb-8 md:mb-8">
<SlideLeft><h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-(--text-primary)">
          Daily Calendar
        </h2></SlideLeft>    

<SlideRight> <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm sm:text-base">
         Your entire day at a glance. See every meeting, task, and reminder in a clean, time-blocked layout. Simply ask your AI assistant,
          <span className="font-semibold text-(--text-primary)">
            {" "}
            What’s on tomorrow?
          </span>{" "}
            and it reads out your schedule, from work calls and errands to  <span className="font-semibold text-(--text-primary)">
            {" "}
            gym time </span>{" "} and <span className="font-semibold text-(--text-primary)"> {" "}  Family activities </span>{" "}   while suggesting the best slots for breaks or focus time so your day flows without overbooking.
        </p></SlideRight>       

<SlideUp><div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-(--text-primary)">
            Productivity Impact:
          </span>
        </div></SlideUp> 
        <ul className="text-(--text-secondary) space-y-2 relative text-sm sm:text-base">
          <li>• Save 15–20 min/day with AI-optimized scheduling.</li>
          <li>• Reduce daily task clashes by 70%.</li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
<SlideLeft><div className="relative w-[600px] h-[410px] mb-9">
  <Image
    src="/Smart-ai-calendar/daily-calendar.png"
    alt="weekly  Calendar Preview"
    fill
    className="object-contain drop-shadow-[0_0_40px_rgba(255,239,67,0.8)]"
  />
</div></SlideLeft>
    </section></SlideUp>
  );
};

export default DailyCalendar;
