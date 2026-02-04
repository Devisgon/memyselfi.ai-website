'use client';

import { FC, useEffect, useState } from 'react';
import { FadeIn, SlideUp, SlideLeft, SlideRight, Hovering } from "../../components/Animations";
export const HeroSection: FC = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      setIsDark(body.classList.contains('dark'));
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
    setIsDark(body.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return (
       <section className="w-full min-h-[calc(100vh-80px)] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 transition-colors duration-500 pt-20"
 style={{
        backgroundImage: `url(${isDark
          ? '/landingpage-images/Hero-Section-bg.png'
          : '/landingpage-images/Hero-Section-bg.png'
          })`,
      }} >
      <div className="text-center  max-w-4xl">
        {/* HEADING */}
        <SlideUp>
          <h1
            className="font-bold  text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-snug md:leading-tight lg:leading-[1.1] tracking-tight lg:tracking-[-2px] text-[#FFFFFF] ">
            Your Life. All in One Place,{" "}
            <span className="text-(--bg-button) px-[10]">
              Powered by your Personal AI Assistant.
            </span>
          </h1>
        </SlideUp>
        {/* PARAGRAPH */}
        <FadeIn>
          <p
            className="font-inter  text-regular sm:text-lg md:text-[18px]  mt-4 opacity-90 px-4 sm:px-10 md:px-20  leading-relaxed text-[#FFFFFF]">
            Tired of juggling apps, calendars, messages, and endless to-dos? Meet your AI
            assistant that brings everything together. From syncing both your personal and work
            schedule to organising documents, messages, and reminders – it keeps your life in
            one smart, unified hub. No more switching apps or forgetting what’s next. Just one
            place for everything, designed to help you stay organized, save time, and focus on
            what matters.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-8">
          {/* LEFT BUTTON */}
          <SlideLeft>
          <Hovering>
           <a href="https://app.memyselfi.ai/signup" target="blank  ">

            <button
                className=" px-6 py-3 cursor-pointer w-full sm:w-auto  font-medium rounded-lg  transition-colors duration-300 bg-(--bg-button) text-black ">
                Create Account
              </button></a></Hovering>
          </SlideLeft>

          {/* RIGHT BUTTON */}
          <SlideRight>
           <Hovering> 
            <a href="https://app.memyselfi.ai/signup" target="blank  ">
 <button
                className="px-6 py-3 cursor-pointer w-full sm:w-auto font-medium rounded-lg text-[#FFFFFF] border border-[#FFFFFF] bg-transparent transition-colors duration-300">
                Start a 14 Day Free Trial
              </button></a>
              </Hovering> 
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
