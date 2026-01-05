"use client";
import Image from "next/image";
import { FC } from "react";
import { SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";
import { Lock, Target, Calendar } from "lucide-react";
export const HeroSection: FC = () => {
  return (
    <section
      className="relative w-full min-h-[1100px] bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: "url('/Ai-BudgetModule/herosection-bg.png')",
      }}>
 <div className="w-full max-w-[1200px] mx-auto rounded-2xl flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 p-5 sm:p-6 md:p-10 relative"
        style={{
          background: "linear-gradient(to bottom, #FFFCDF, #FFF36F)", }}
      >
        <div className="flex flex-col justify-center mt-10 sm:mt-12 md:mt-15 items-center">
          <SlideUp>
            <div className="px-2 py-2 bg-[#FFEF43] mb-4 rounded-md w-40 h-[37px] flex items-center justify-center">
              <p className="text-black font-semibold text-center text-sm tracking-wide">
                BUDGET TRACKING
              </p>
            </div>
          </SlideUp>

          <SlideLeft>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-black text-center">
              Take full control of your money,<br /> without the spreadsheets.
            </h2>
          </SlideLeft>

          <SlideRight>
            <p className="text-black leading-relaxed mb-4 text-center text-sm sm:text-base">
              AI-powered budget manager that is logged by voice commands, tracks income,<br />
              expenses, and savings in real time, auto-categorizes transactions, and provides<br />
              insights to help you spend smarter and save more.
            </p>
          </SlideRight>

          <SlideRight>
            <div className="flex-1 relative flex justify-center mt-8 sm:mt-10 w-full">
              <div className="absolute inset-0 blur-[120px] bg-[#FFE86A]/60 rounded-full"></div>
              <Image
                src="/Ai-BudgetModule/HeroImage.png"
                alt="Hero Image"
                width={800}
                height={500}
                className="relative z-10 rounded-2xl w-full max-w-[800px] h-auto drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]"
              />
            </div>
          </SlideRight>
          {/* --- 3-column row centered --- */}
          <div className="w-full mt-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="flex flex-col items-center text-center gap-1 max-w-[260px]">
              <Lock className="text-black w-7 h-7" />
              <h3 className="text-lg font-semibold text-black">
                Secure Data Encryption
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Track your progress and motivate<br /> your efforts every day.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1 max-w-[260px]">
              <Target className="text-black w-7 h-7" />
              <h3 className="text-lg font-semibold text-black">Goal Tracking</h3>
              <p className="text-black text-sm leading-relaxed">
                Set and monitor savings or<br /> investment targets.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-1 max-w-[260px]">
              <Calendar className="text-black w-7 h-7" />
              <h3 className="text-lg font-semibold text-black">Bill Reminders</h3>
              <p className="text-black text-sm leading-relaxed">
                Never miss a bill, AI auto-adds<br /> pending due dates from emails<br /> and messages to your calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
