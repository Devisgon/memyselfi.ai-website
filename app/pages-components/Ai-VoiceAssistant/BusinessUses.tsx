"use client";
import Image from "next/image";
import { BarChart3 } from "lucide-react";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";
import { FaClipboardList,FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const items = [
  {
    title: "Prepare Meeting Notes",
    desc: "Generate comprehensive meeting summaries and action items.",
    icon: <FaClipboardList size={22} strokeWidth={2} />,
  },
  {
    title: "Analyze Data",
    desc: "Get insights from complex datasets with AI-powered analysis.",
    icon: <BarChart3 size={22} strokeWidth={2} />,
  },
  {
    title: "Manage Emails",
    desc: "Automate email responses and prioritize important messages.",
    icon: <MdEmail  size={22}  />,
  },
  {
    title: "Schedule Client Calls",
    desc: "Coordinate meetings across time zones effortlessly.",
    icon: <FaPhoneAlt size={22} strokeWidth={2} />,
  },
];
export const BusinessUses = () => {
  return (
    <section className="w-full py-20 px-6 bg-(--bg-bg)">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SlideUp>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) text-center">
            Business Uses
          </h2>
          <p className="text-(--text-secondary) mt-3 text-center text-lg">
            Streamline your professional workflow
          </p>
        </SlideUp>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <SlideLeft>
            <div className="w-full flex justify-center">
              <Image
                src="/Ai-VoiceAssistant/voiceassistant.png" 
                alt="Business Dashboard"
                width={480}
                height={350}
                className="rounded-3xl"
              />
            </div>
          </SlideLeft>
          <SlideRight>
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-5">
 <div     className="w-12 h-12 flex items-center justify-center rounded-xl    bg-[#FFD93D]/10  shrink-0 text-[#FFD600]  shadow-[0_2px_8px_rgba(0,0,0,0.08)]  ">
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

        </div>
      </div>
    </section>
  );
};
