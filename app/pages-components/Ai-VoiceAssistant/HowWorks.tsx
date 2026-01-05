"use client";
import Image from "next/image";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";

const items = [
  {
    title: "Ask Anything",
    desc: "Speak or type your request — from “Plan my day” to “Draft a client email.",
    icon: "1 ",
  },
  {
    title: "Understands Your World",
    desc: "The assistant reads your schedule, tasks, and priorities, making context-aware suggestions.",
    icon: "2",
  },
  {
    title: "Takes Action",
    desc: "Never miss importantIt schedules events, sets reminders, drafts messages, or finds information instantly. dates and celebrations again.",
    icon: "3",
  },
  {
    title: "AI Memory",
    desc: "Securely stores and organizes every conversation, booking, email, and message, so it can recall context and details whenever you need them.",
    icon: "4",
  },
];

export const HowItWorks= () => {
  return (
    <section className="w-full py-20 px-6 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-6 w-full"> 
          <SlideRight>
            <h1 className="text-(--text-primary) text-left text-4xl mb-10 font-bold">How It Works</h1>
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">

<div
  className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full
             bg-[#FFEF43] text-black font-bold
             shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
>
  {item.icon}
</div>
                  <div>
                    <h3 className="text-xl font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>
                    <p className="text-(--text-secondary) mt-1 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </SlideRight>

              <SlideLeft>
            <div className="w-full flex justify-center">
              <Image
                src="/Ai-VoiceAssistant/howWorks.png" 
                alt="How it works Dashboard"
                width={760}
                height={550}
              />
            </div>
          </SlideLeft>

        </div>
      </div>
    </section>
  );
};
