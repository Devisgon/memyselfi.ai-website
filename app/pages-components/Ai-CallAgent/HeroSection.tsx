"use client";
import Image from "next/image";
import { FC } from "react";
import { Hovering, SlideLeft, SlideRight, SlideUp } from "@/app/components/Animations";
export const HeroSection: FC = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: "url('/Ai-CallAgent/hero-bg.png')",
      }} >
      <div className="absolute mt-10 inset-0 flex items-center">
        <div className="w-full max-w-[1100px] h-auto mx-auto mt-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 rounded-2xl"
          style={{
            background: "linear-gradient(to bottom, #FFFCDF, #FFF36F)",
          }} >
          <div className="flex flex-col mt-20 items-center lg:items-start text-center lg:text-left">
            <SlideUp>
              <div className="px-2 py-2 bg-[#FFEF43] mb-4 rounded-md w-[150px] h-[37px] flex items-center justify-center">
                <p className="text-black font-semibold text-center text-sm tracking-wide">
                  AI Call Agent
                </p>
              </div>
            </SlideUp>
            <SlideLeft>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mb-4 text-black">
                Answer Calls. Book <br />Appointments. <br />
                Handle It All, Automatically.
              </h2>
            </SlideLeft>
            <SlideRight>
              <p className="text-black leading-relaxed mb-6 text-sm sm:text-base">
                Your AI Call Agent handles calls so you don’t have to.<br />
                From screening unknown numbers to booking <br />
                appointments and giving polite responses, it works like <br />
                your personal receptionist 24/7. With simple prompt<br />
                knowledge training to suit your specific needs.
              </p>
            </SlideRight>
            <SlideUp><Hovering>        <a href="https://app.memyselfi.ai/signup" target="blank">

              <div
                className="inline-block px-4 cursor-pointer py-2 rounded-lg shadow-[0_0_20px_var(--bg-button)] mb-4 relative"
                style={{
                  background: "var(--bg-button)",
                }}
              >
                <span className="font-semibold text-black">GET STARTED</span>
              </div></a></Hovering>
            </SlideUp>
          </div>
          <SlideRight> <div className="flex-1 relative flex justify-center w-full max-w-[500px]">
              <div className="absolute inset-0 blur-[120px] bg-[#FFE86A]/60 rounded-full"></div>
              <img
                src="Ai-CallAgent/herosection.png"
                alt="Hero Image"
                width={400}
                height={400}
                className="relative z-10 rounded-2xl w-full h-auto"
              />
            </div> </SlideRight>
        </div>
      </div>
    </section>
  );};
