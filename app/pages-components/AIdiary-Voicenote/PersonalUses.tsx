'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export const PersonalUses = () => {
  return (
    <section className="relative w-full flex flex-col  lg:flex-row items-center justify-center bg-(--bg-bg) py-12 sm:py-16 md:py-25 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Content */}
      <div className="relative z-10 max-w-full sm:max-w-3xl lg:max-w-6xl w-full flex flex-col items-center text-center lg:text-left">
        <SlideUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-20 text-(--text-primary) transition-colors duration-500">
            From Personal Memories to<br /> Business Notes, for Every Moment
          </h2>
        </SlideUp>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full">
          <SlideLeft>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4 sm:mb-6 text-[#FFF15C] transition-colors duration-500">
                Personal Uses
              </h2>
              <ul className="text-(--text-primary) text-sm sm:text-base md:text-lg px-4 sm:px-10 list-none space-y-2 lg:space-y-3 text-left">
                <li>• Daily Journaling: Record your thoughts, moods, and events &nbsp;&nbsp;&nbsp;effortlessly using voice or text.</li>
                <li>• Memory Preservation: Capture special moments, birthdays, travel &nbsp;&nbsp;&nbsp;stories, or reflections, without worrying about losing details.</li>
                <li>• Wellness Tracking: Keep a private log of your habits, goals, and &nbsp;&nbsp;&nbsp;emotional well-being.</li>
              </ul>
            </div>
          </SlideLeft>

          {/* Right Image */}
          <SlideRight>
            <Hovering>
              <div className="w-full sm:w-[350px] md:w-[400px] h-[300px] sm:h-[380px] md:h-[420px] shrink-0 mt-6 lg:mt-0">
                <img
                  src="AIdiary-Voicenote/personal-uses.png"
                  alt="Right Inbox"
                  className="object-cover w-full h-full"
                />
              </div>
            </Hovering>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
