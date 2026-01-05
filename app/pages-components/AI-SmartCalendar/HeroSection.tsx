"use client";
import Image from "next/image";
import { FC } from "react";
import { useTheme } from "../../components/ThemeProvider";
import HeroCarousel from "./HeroCarousal";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";

const HeroSection: FC = () => {
  const { theme } = useTheme();
  return (
    <SlideUp>
      <section
        className="relative w-full min-h-vh py-0 flex flex-col md:flex-row items-center justify-between bg-(--dw-bg) overflow-hidden mt-16" >
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-[200px] sm:w-[350px] md:w-[500px] h-[150px] sm:h-[300px] md:h-[400px] rounded-full blur-[70px] sm:blur-[100px] md:blur-[140px]"
          style={{
            background: "var(--bg-button)",
            opacity: 0.25,
            filter: "blur(180px)",
          }} />
        {theme === "dark" && (
          <div
            className="absolute left-0 top-0 w-[200px] sm:w-[350px] md:w-[500px] h-[150px] sm:h-[300px] md:h-[400px] rounded-full blur-[90px] sm:blur-[140px] md:blur-[180px]"
            style={{
              background: "var(--bg-button)",
              opacity: 0.15,
              filter: "blur(180px)",
            }} />
        )}
        {/* Left content */}
        <div className="max-w-xl relative mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8">
          <div className="px-3 sm:px-4 py-2 mb-2 bg-[#FFEF43] rounded-md w-[180px] sm:w-[210px] md:w-[230px] h-7 sm:h-8 md:h-[35px]">
            <p className="text-black font-semibold text-center text-xs sm:text-sm">
              AI SMART CALENDAR
            </p>
          </div>
          <SlideLeft>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-(--text-primary)">
              YOUR PERSONAL AND PROFESSIONAL LIFE, PERFECTLY SCHEDULED.
            </h2>
          </SlideLeft>
          <SlideRight>
            <p className="text-(--text-secondary) leading-relaxed mb-6 text-sm sm:text-base">
              Simply Ask your AI Assistant "What are my plans tomorrow?" and your
              AI instantly reads out your day — from morning coffee dates and client
              meetings to the kids’ activities and dinner plans.
            </p>
          </SlideRight>
          <SlideUp>
            <div
              className="inline-block px-4 py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative text-sm sm:text-base"
              style={{ background: "var(--bg-button)" }} >
              <span className="font-semibold text-black">GET STARTED</span>
            </div>
          </SlideUp>
        </div>
        {/* Carousel */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
          <HeroCarousel />
        </div>
      </section>
    </SlideUp>
  );
};
export default HeroSection;
