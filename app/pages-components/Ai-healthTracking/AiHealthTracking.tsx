"use client";
import { SlideUp } from "@/app/components/Animations";
import { IoIosLock } from "react-icons/io";

export default function AIHealthTracking() {
  return (
    <section
      className=" relative w-full  py-14 sm:py-20  flex justify-center items-center bg-no-repeat bg-cover bg-center  "
      style={{
        backgroundImage: "url('/Ai-HealthTracking/bg.png')",
      }} >

      <div className="w-full max-w-[1103px] mt-20 sm:mt-20 min-h-[520px] md:min-h-[658px]  rounded-3xl shadow-xl bg-(--HT-bg)/50 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 " >
        {/* ICON */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#FFEF43]/20 mb-5 sm:mb-6">
          <IoIosLock size={28} className="text-[#FFEF43]" />
        </div>

        {/* BADGE */}
        <SlideUp>
          <div className="px-4 py-2 bg-[#FFEF43] mb-4 rounded-md w-40 sm:w-[170px] h-[37px] flex items-center justify-center mx-auto">
            <p className="text-black font-semibold text-xs sm:text-sm tracking-wide">
              Health Tracking
            </p>
          </div>
        </SlideUp>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Feature Locked
        </h2>

        {/* DESCRIPTION */}
        <p className="text-(--text-secondary) text-base sm:text-lg max-w-[750px] mb-5 sm:mb-6 leading-relaxed">
          This exciting new feature is currently under development.
        </p>

        {/* COMING SOON */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#FFED29] mb-2 sm:mb-3">
          Coming Soon!
        </h3>

        <p className="text-(--text-primary) text-base sm:text-lg max-w-[730px] leading-relaxed">
          Stay tuned for updates. We appreciate your patience!
        </p>
      </div>
    </section>
  );
}
