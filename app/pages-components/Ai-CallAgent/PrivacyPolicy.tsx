"use client";
import Image from "next/image";
import { FC } from "react";
import { FaLock, FaUserShield } from "react-icons/fa";
import { useTheme } from "@/app/components/ThemeProvider";
import { FaEyeSlash } from "react-icons/fa6";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
interface PrivacyPolicyProps {}
const privacyFeatures = [
  {
    icon: <FaLock size={24} color="#FFD93D" />,
    text: "End-to-end encryption",
  },
  {
    icon: < FaUserShield size={24} color="#FFD93D" />,
    text: "Local data processing",
  },
  {
    icon: <FaEyeSlash size={24} color="#FFD93D" />,
    text: "No third-party sharing",
  },
];

export const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full py-10 px-6 ${
        theme === "dark" ?"bg-(--bg-bg)" : "bg-(--bg-dark)"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"> 
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col md:pl-20 gap-6">
 <SlideLeft>     <h1
            className={`text-4xl font-bold ${
              theme === "dark" ? "text-(--text-primary)" : "text-(--text-primary)"
            }`}
          >
            Privacy & Security First
          </h1></SlideLeft>    
<SlideRight><p
            className={`text-[15px] leading-relaxed ${
              theme === "dark" ? "text-(--text-secondary)" : "text-(--text-secondary)"
            }`}
          >
            All calls are securely encrypted. Your AI never shares<br/> details outside your device unless you approve it.
          </p></SlideRight> 
          <div className="flex flex-col gap-1 mt-3">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {feature.icon}
                <p
                  className={`text-[15px] leading-relaxed ${
                    theme === "dark" ? "text-(--text-secondary)" : "text-(--text-secondary)"
                  }`}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
<Hovering> <div className="flex-1 flex justify-center">
          <Image
            src="/Ai-CallAgent/privacyPolicy.png"
            alt="Privacy Policy Illustration"
            width={500}
            height={400}          
          />
        </div></Hovering>       
      </div>
    </section>
  );
};
