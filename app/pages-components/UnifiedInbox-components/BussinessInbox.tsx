'use client';
import { SlideLeft, SlideRight, SlideUp ,Hovering } from "@/app/components/Animations";
export const BusinessInbox = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-6">
      <div className="absolute inset-0 bg-(--bg-bg) "></div>
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center">
        <SlideUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-(--text-primary) transition-colors duration-500">
            Business Inbox
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-(--text-secondary) transition-colors duration-500">
            Bring all your professional communication into one powerful inbox.
          </p>
        </SlideUp>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 sm:gap-8 lg:gap-12 w-full">
          <SlideLeft>
            <Hovering>
              <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[581px] h-auto aspect-581/666 shrink-0">
                <img
                  src="/Unified-inbox/BS-left.png"
                  alt="Left Inbox"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </Hovering>
          </SlideLeft>
          <SlideRight>
            <Hovering>
              <div className="w-full sm:w-[360px] md:w-[450px] lg:w-[540px] h-auto aspect-square shrink-0">
                <img
                  src="/Unified-inbox/BS-right.png"
                  alt="Right Inbox"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </Hovering>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};
