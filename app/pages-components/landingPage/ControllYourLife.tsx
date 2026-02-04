'use client';
import { SlideLeft,SlideRight, Hovering  } from "../../components/Animations";
export const ControlYourLife = () => {
  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 
                      bg-[url('/landingpage-images/Control-lifedark.png')] "></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">
       <SlideRight> <h1 className="text-[40px] sm:text-[40px] font-bold leading-12 text-[#FFFFFF] mb-12 font-inter">
          Ready to take control of your life with your very own Personal AI Assistant?
        </h1></SlideRight>
       <SlideLeft> <p className="text-[20px] sm:text-[20px] font-normal leading-7 text-[#D1D5DB] mb-8 font-inter">
          Start using MeMyselfI.ai to manage your messages, events, and voice-<br/>based tasks — all in one place.
        </p></SlideLeft>

       {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
       <Hovering><a href="https://app.memyselfi.ai/signup" target="blank"> <button className=" cursor-pointer px-6 py-3 rounded-md  bg-[#FFED29] text-[#000000] border border-[#1F2228] font-bold font-inter  hover:opacity-90 transition">
            Get Started
          </button></a>
</Hovering>
          {/* Contact Us */}
          <Hovering>
         <a href="#contact"> <button className=" cursor-pointer px-6 py-3 rounded-md  bg-transparent  text-[#FFFFFF] border border-[#FFFFFF] dark:text-[#FFED29] dark:border-[#FFED29]  font-semibold font-inter">
            Contact Us
          </button> </a></Hovering>
      </div>
      </div>
    </section>
  );
};


