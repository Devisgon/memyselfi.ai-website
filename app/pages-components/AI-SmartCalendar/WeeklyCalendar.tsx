"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { SlideRight, SlideLeft, SlideUp, Hovering } from "@/app/components/Animations";
export  const WeeklyCalendar: FC = () => {
  const { theme } = useTheme();
  return (
 <SlideUp>   <section
      className="relative w-full py-35 lg:px-20 sm:px-6 md:px-15 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto bg-(--dw-bg)">
{/* ==== MAIN SECTION GLOW (Left Bottom → Mid) ==== */}
<div
  className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[450px] md:h-[400px] rounded-full blur-[80px] sm:blur-[120px] md:blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>
{theme === "dark" && (
  <div
    className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[550px] md:h-[600px] rounded-full blur-[120px] sm:blur-[160px] md:blur-[180px]"
    style={{
      background: "var(--bg-button)",
      opacity: 0.15,
      filter: "blur(180px)",
    }}
  />
)}
      {/* RIGHT IMAGE */}
<SlideRight><div className="relative w-[500px] h-[450px] mb-9">
  <Image
    src="/Smart-ai-calendar/weekly-calendar.png"
    alt="Daily Calendar Preview"
    fill
    className="object-contain drop-shadow-[0_0_40px_rgba(255,239,67,0.8)]"
  />
</div></SlideRight>
      <div className="max-w-full sm:max-w-xl relative pr-4 sm:pr-6 md:pr-10">
<SlideRight><h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-(--text-primary)">
          Weekly Calendar
        </h2></SlideRight>

<SlideLeft> <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm sm:text-base">
          Plan ahead without losing the details. View all your week’s events, deadlines, and personal plans side by side. Quickly drag and drop events to reschedule, or simply tell your AI assistant, 
          <span className="font-semibold text-(--text-primary)">
            {" "}
“Schedule my client meeting for Thursday afternoon,”
          </span>{" "}
          and it’s done. Avoid conflicts between work and family commitments effortlessly.
        </p></SlideLeft> 

 <Hovering>  
         <div
          className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
          style={{
            background: "var(--bg-button)",
          }}
        >
          <span className="font-semibold text-(--text-primary)">
            Productivity Impact:
          </span>
        </div></Hovering>     
        <ul className="text-(--text-secondary) relative text-sm sm:text-base space-y-2">
          <li>• Save 15-20 min/day with AI-optimized scheduling.</li>
          <li>• reduce daily task clashes by 70%.</li>
          <li>• Save 5–10 min/event by scheduling or adjusting plans with a single voice command.</li>
          <li>• NEVER MISS A MEETING:30-minute reminders & smart rescheduling that boost on-time completion by 40%.</li>
        </ul>
      </div>
    </section></SlideUp>
  );
};
