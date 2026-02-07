'use client';
import { SlideLeft, Hovering } from "@/app/components/Animations";
import Image from "next/image";

export const ProductivityGain = () => {
  return (
    <section className="relative w-full flex items-center justify-center px-4 py-10">

      {/* container */}
      <section
        className="
        relative w-full max-w-[1150px]
        min-h-[380px] lg:h-[550px]
        rounded-2xl
        py-6 px-5
        lg:px-20 lg:py-10
        overflow-hidden
      "
      >

        {/* background */}
        <Hovering>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/AIdiary-Voicenote/productivityImpact.png"
              alt="section background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </Hovering>

        {/* content */}
        <div
          className="
          flex flex-col
          lg:flex-row lg:items-center
          gap-10 lg:gap-16
          h-full
        "
        >

          {/* Desktop spacing (only laptop) */}
          <div className="hidden lg:block lg:w-1/3" />

          <SlideLeft>
            <div className="text-black ml-24 md:-mt-20">

              {/* heading */}
              <h2 className="
                text-3xl 
                sm:text-3xl
                lg:text-5xl
                font-bold
                mb-4 lg:mb-6
              ">
                Productivity Impact:
              </h2>

              {/* list */}
              <ul className="
                space-y-2
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              ">
                <li>• Save up to 50% more time by dictating notes instead of typing.</li>
                <li>• Retrieve by AI assistant using voice queries.</li>
                <li>• Improve goal tracking and project memory in one organized space.</li>
                <li>• Turn scattered thoughts into actionable steps with AI summarization.</li>
                <li>• Record meetings and generate smart summaries automatically.</li>
              </ul>

            </div>
          </SlideLeft>

        </div>
      </section>
    </section>
  );
};
