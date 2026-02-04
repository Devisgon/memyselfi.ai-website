'use client';
import { FC } from "react";
import { SlideUp, Hovering, SlideLeft, SlideRight } from "../../components/Animations";
import { RefreshCcw } from "lucide-react";
import { FaEye ,FaCalendarAlt ,FaShieldAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import {ChatBubbleLeftRightIcon} from "@heroicons/react/24/solid"

const cards = [
  {
    icon: <ChatBubbleLeftRightIcon className="text-[#16A34A] w-10 h-10 " />,
    bgColor: "bg-[#DCFCE7]/80 mb-8",
    desc: "We don’t have access to your data. We just display it.",
    bg: "/landingpage-images/dontworry-icon-bg1.jpg",
    subIcon: <MdVerified size={28} className="text-[#16A34A] " />,
    subText: <span className="text-[#16A34A]">Zero data access</span>,
  },
  {
    icon: <FaCalendarAlt size={40} className="text-[#2563EB]" />,
    bgColor: "bg-[#DBEAFE]/80",
    desc: "Your SMS, Email, WhatsApp, Slack, and social messages remain with their original providers.",
    bg: "/landingpage-images/dontworry-icon-bg2.png",
    subIcon: <RefreshCcw size={28} className="text-[#2563EB]" />,
    subText: <span className="text-[#2563EB]">Real-time viewing</span>,
  },
  {
    icon: <FaEye size={40} className="text-[#9333EA]" />,
    bgColor: "bg-[#F3E8FF]/80",
    desc: "Our App is simply a secure viewing window, so only you can read, organize, and reply without switching apps.",
    bg: "/landingpage-images/dontworry-icon-bg1.jpg",
    subIcon: <FaShieldAlt  size={28} className="text-[#9333EA]" />,
    subText: <span className="text-[#9333EA]">API-only access</span>,
  },
];

export const DontWorrySection: FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 bg-(--dw-bg)">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-inter font-bold text-[32px] sm:text-[42px] md:text-[55px] leading-tight mb-6">
          Don't Worry, We don’t have <br className="hidden sm:block" /> access to your personal data
        </h1>

        <SlideLeft>
          <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] text-(--mheading-color) max-w-3xl mx-auto mb-3">
            At MeMyselfI.ai , your privacy isn't just a feature— it's the foundation.
          </p>
        </SlideLeft>

        <SlideRight>
          <p className="font-inter text-[15px] sm:text-[17px] md:text-[18px] text-(--mheading-color) max-w-2xl mx-auto mb-16">
            We don’t have access to your personal data, chats, or SMS. When you connect messaging services like SMS (Apple & Android), Gmail, Outlook, WhatsApp, Instagram, Slack, or Facebook Messenger, our secure API connections let only you manage and view everything in one unified inbox.
          </p>
        </SlideRight>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 place-items-center">
          {cards.map((item, i) => {
            return (
            <SlideUp key={i}>
  <div
    className="rounded-2xl overflow-hidden relative hover:-translate-y-6 duration-500 w-[349px] h-64 sm:h-60 md:h-64"
    style={{
      backgroundImage: `url(${item.bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col items-center justify-center text-center">
        
<SlideLeft>
  <div className={`w-16 h-16 sm:w-16 sm:h-16 ${item.bgColor} backdrop-blur rounded-2xl flex items-center justify-center mb-3`}>
  {item.icon}
</div>
</SlideLeft>    

        {/* Description */}
 <SlideRight><p className="font-inter text-[13px] sm:text-[14px] md:text-[15px] text-black mb-3 max-w-[260px] px-2">
          {item.desc}
        </p></SlideRight>

        <div className="flex items-center mt-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center mb-1">
            {item.subIcon}
          </div>
          <p className="font-inter text-[12px] sm:text-[13px] max-w-[220px] px-2">
            {item.subText}
          </p>
        </div>

      </div>
    </div>
  </div>
</SlideUp>

            );
          })}
        </div>
      </div>
    </section>
  );
};
