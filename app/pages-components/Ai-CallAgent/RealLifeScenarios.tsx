"use client";
import Image from "next/image";
import { SlideLeft, SlideRight , SlideUp} from "@/app/components/Animations";
import { useTheme } from "@/app/components/ThemeProvider";
import {  CalendarClock, ShieldCheck } from "lucide-react";
import { FaSchool ,FaShield } from "react-icons/fa6";

const scenarios = [
  {
    icon: <FaSchool size={24} />,
    title: "School Call",
    desc: "Your child’s school calls — AI takes the message and sends you the details while you're in a meeting.",
  },
  {
    icon: <CalendarClock size={24} />,
    title: "Client Reschedule",
    desc: "Client needs to reschedule — AI handles it, updates your calendar, and sends confirmation.",
  },
  {
    icon: <FaShield  size={24} />,
    title: "Spam Protection",
    desc: "Unknown number? AI screens the call and blocks spam automatically.",
  },
];

export const RealTimeScenarios = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full py-20 pl-10 bg-(--bg-bg)">
      {/* Center Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
 <SlideUp> <h2 className="text-4xl font-bold text-(--text-primary) mb-4">
          Real-Time Scenarios
        </h2>
        <p className="text-(--text-secondary) text-lg leading-relaxed">
         See how AI Call Agent handles different situations
        </p></SlideUp> 
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Cards */}
        <SlideLeft>
          <div className="flex flex-col gap-6 w-full lg:w-4/5">
            {scenarios.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-6 rounded-2xl shadow-lg 
                  ${theme === "dark" ? "bg-(--bg-card) text-(--text-primary)" : "bg-[rgba(200,210,224,0.2)] text-(--text-primary)"}`}
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#FFEF43] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-[15px] text-(--text-secondary) leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideLeft>

        {/* Right Side Image */}
        <SlideRight>
          <div className="w-full lg:w-4/5 flex justify-center">
            <Image
              src="/Ai-CallAgent/real_life.png"
              alt="Real Time Scenarios"
              width={600}
              height={500}
              className=""
            />
          </div>
        </SlideRight>
      </div>
    </section>
  );
};
