"use client";
import { SlideRight, SlideLeft, SlideUp, Hovering } from "@/app/components/Animations";
import Image from "next/image";
import { Mic } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { useTheme } from "../../components/ThemeProvider";
import { useEffect, useState } from "react";
const carouselItems = [
  {
    image: "/Unified-inbox/Whatsapp-h.png",
     icon: (
    <img
      src="/Unified-inbox/wi.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    />),
    Text: '“Text Toby i’ll meet him At 11PM.”',
  },
  {
    image: "/Unified-inbox/Slack-h.png",
   icon: ( <img
      src="/Unified-inbox/si.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    /> ),
    Text: '“Remind me for my meeting tommorrow.”',
  },
  {
    image: "/Unified-inbox/Instagram-h.png",
         icon: (
    <img
      src="/Unified-inbox/ii.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    />),
    Text: '“Share file with client b.”',
  },
  {
    image: "/Unified-inbox/Gmail-h.png",
    icon: (
    <img
      src="/Unified-inbox/gi.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    /> ),
    Text: "Never miss an important message",
  },
  {
    image: "/Unified-inbox/Outlook-h.png",
         icon: (
    <img
      src="/Unified-inbox/oi.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    />),
    Text: "Never miss an important message",
  },
  {
    image: "/Unified-inbox/Facebook-h.png",
         icon: (
    <img
      src="/Unified-inbox/fi.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    />),
    Text: "Never miss an important message",
  },
  {
    image: "/Unified-inbox/Mesages-h.png",
     icon: (
    <img
      src="/Unified-inbox/mi.svg"
      alt="WhatsApp"
      width="40"
      height="40"
    />),
    Text: '“dinner at 8PM with Mari.”',
  },
];
export default function HeroSection() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);
  const currentItem = carouselItems[currentIndex];
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center overflow-hidden py-3 bg-(--bg-bg)"
      )}>
      <div
        className="absolute bottom-0 left-0 translate-x-0 w-[1200px] h-[500px] rounded-full blur-[140px] 
                   max-md:w-[700px] max-md:h-[350px] max-sm:w-[450px] max-sm:h-[250px]"
        style={{
          background: "var(--bg-button)",
          opacity: theme === "dark" ? 0.25 : 0.25,
          filter: "blur(140px)",
        }} />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10 items-center
                      max-md:gap-10 max-sm:gap-8 px-4 md:px-6">
        <div className="flex justify-center md:justify-start">
          <Image
            key={currentIndex}
            src={currentItem.image}
            alt="Unified Inbox"
            width={500}
            height={500}
            className="object-contain mt-4 max-md:w-[450px] max-sm:w-[320px]" />
        </div>
        <div className="space-y-2 max-md:text-center md:text-left">
          <SlideUp>
            <div
              className="w-[147px] h-[35px] bg-[#FFEF43] rounded-md flex items-center justify-center
                         max-md:mx-auto md:mx-0" >
              <p className="text-black font-semibold text-sm tracking-wide">
                UNIFIED INBOX
              </p>
            </div>
          </SlideUp>
          <SlideRight>
            <h1 className="text-4xl md:text-[42px] mb-6 font-bold text-(--text-primary)  max-sm:text-[32px] max-md:mb-4">
              One Inbox, Every Conversation
            </h1>
          </SlideRight>
          <SlideLeft>
            <p className="text-[16px] font-medium mb-5 text-(--text-primary) leading-relaxed max-sm:text-[16px] max-md:mb-4">
              No more switching between apps. All your business and personal
              messages flow into one organized hub. Stay on top of
              conversations, emails, and notifications without missing a beat.
            </p>
          </SlideLeft>

          <div className="flex items-center gap-1 max-md:justify-center md:justify-start">
           < Mic/>
            <p
              className="text-[15px] font-bold text-(--text-primary)"
              style={{ textShadow: "0 0 8px #FFEF43" }} >
              send a message through simple voice command
            </p>
          </div>

          <div className="flex items-center gap-4 max-md:flex-col max-md:gap-3 md:flex-row">
            <div  className="rounded-xl p-4  flex items-center g text-(--text-primary) justify-center
                         max-md:w-full md:w-[438px] md:h-[74px]"
              style={{
                height: "72px",
                background: "linear-gradient(90deg, #F3E43D, #EEE042, #FFEF3D)",
                opacity: 0.6,
              }} >
              <div className="flex items-center gap-3 max-md:justify-center md:justify-start">
            {currentItem.icon}
            <p
              className="text-[15px] font-bold text-(--text-primary)"
              style={{ textShadow: "0 0 8px #FFEF43" }} >
              {currentItem.Text}
            </p>
          </div>
            </div>
            <Hovering>
              <button
                className="px-6 py-2 text-[16px] rounded-lg font-semibold w-[159px] h-[74px] md:w-auto"
                style={{
                  backgroundColor: "#FFED29",
                  color: "#000000",
                }}>
                Get Started!
              </button>
            </Hovering>
          </div>
        </div>
      </div>
    </section>
  );
}
