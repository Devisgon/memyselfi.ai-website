'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export const PersonalInbox = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-25 px-6">
      <div className="absolute inset-0 bg-(--bg-bg) transition-colors duration-500"></div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        <SlideUp>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-(--text-primary) transition-colors duration-500">
            Personal Inbox
          </h2>
          <p className="text-lg sm:text-xl mb-12 text-(--text-secondary) transition-colors duration-500 px-2">
            Your personal life deserves just as much clarity. With Unified Inbox, you can manage all <br className="hidden md:block" />
            your everyday communications in one place too. Keep your private and professional<br className="hidden md:block" />
            worlds separate but equally organized.
          </p>
        </SlideUp>
        <div className="flex items-center justify-center gap-12 max-lg:gap-8 max-md:flex-col">         
          {/* Left Image */}
          <SlideLeft>
            <Hovering>
              <div className="w-[581px] h-[576px] shrink-0 max-lg:w-[480px] max-lg:h-[480px] max-md:w-full max-md:h-auto">
                <img
                  src="/Unified-inbox/left.png"
                  alt="Left Inbox"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </Hovering>
          </SlideLeft>
          {/* Right Image */}
          <SlideRight>
            <Hovering>
              <div className="w-[581px] h-[576px] shrink-0 max-lg:w-[480px] max-lg:h-[480px] max-md:w-full max-md:h-auto">
                <img
                  src="/Unified-inbox/right.png"
                  alt="Right Inbox"
                  className="w-full h-full object-cover rounded-xl shadow-lg" /> </div>
            </Hovering>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
