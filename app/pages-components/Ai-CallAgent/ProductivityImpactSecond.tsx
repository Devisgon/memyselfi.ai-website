"use client";
import { FC } from "react";
import { useTheme } from "@/app/components/ThemeProvider";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
interface ProductivityGainSecondProps {}
import { FaClock ,FaHeart ,FaCalendarAlt} from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";

const items = [
  {
    icon: <FaClock size={26} color="#000" />,     
    title: "Time Saved",
    desc: "Up to 3 hours per week on call management",
  },
  {
    icon: <FaRobot size={26} color="#000" />,  
    title: "Calls Handled",
    desc: "100% automated screening and routing",
  },
  {
    icon: <FaCalendarAlt size={26} color="#000" />, 
    title: "Appointment",
    desc: "Meetings and appointments seamlessly scheduled by your AI.",
  },
  {
    icon: <FaHeart size={26} color="#000" />,      
    title: "Stress Reduction",
    desc: "No more interruptions during focus time",
  },
];

export const ProductivityGainSecond: FC<ProductivityGainSecondProps> = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`w-full py-20 px-6 ${
        theme === "dark" ? "bg-(--bg-bg)" : "bg-(--bg-dark)"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-(--text-primary) mb-16">
          Productivity Impact
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-6"
            >
   <SlideUp><div className="w-14 h-14 rounded-full bg-(--bg-button) flex items-center justify-center shadow-md mb-4">
                {item.icon}
              </div></SlideUp> 

  <SlideLeft><h3 className="text-xl font-semibold text-(--text-primary)">
                {item.title}
              </h3></SlideLeft>            
        <SlideRight> <p className="text-[15px] text-(--text-secondary) mt-2 leading-relaxed">
                {item.desc}
              </p></SlideRight> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
