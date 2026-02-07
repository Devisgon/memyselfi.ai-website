'use client';
import { SlideLeft, SlideRight, SlideUp ,Hovering } from "@/app/components/Animations";
import { useTheme } from "../../components/ThemeProvider";
export const WhyMatters = () => {
   const { theme } = useTheme();
  return (
      <section className="relative w-full bg-(--bg-bg) py-20 px-6">
<div
  className="absolute bottom-0 right-40 translate-x-0 w-[400px] h-[400px] rounded-full blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-2">
  <div className="w-full md:w-1/2 flex justify-start">
      <img
        src="/Unified-inbox/mobile.png"
        alt="Inbox Visual"
        className="w-[480px] h-[500px] object-contain  "
      />
    </div>

<div className="w-full md:w-1/2 md:pr-20">
 <SlideLeft> <h1 className="text-4xl font-bold mb-4">
    Why  It Matters
  </h1></SlideLeft>

 <SlideRight> <p className="text-lg mb-6 opacity-90">
Whether you’re running a business, managing clients, or just trying to stay on top of your personal life’s constant notifications — Unified Inbox keeps it all in check.
  </p></SlideRight>

<SlideUp> <ul className="text-base text-[--text-primary] list-disc list-outside pl-6">
    <li>
      Save hours daily by cutting the app-hopping.
    </li>

    <li>
      Stay in control with notifications that prioritize what truly matters.
    </li>
    <li>
      Keep personal & professional worlds separate, but equally simplified.
    </li>

    <li>
       AI intelligently sorts emails, messages, and reminders, so you only see what’s relevant, when it matters
    </li>
  </ul></SlideUp>
</div>

  </div>
</section>
  );
};
