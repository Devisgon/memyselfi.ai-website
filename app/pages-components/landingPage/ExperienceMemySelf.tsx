'use client';
import { SlideUp, SlideLeft, SlideRight } from "../../components/Animations";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ExperienceMemySelf = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center py-10 bg-(--bg-primary) overflow-hidden">
      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center w-full max-w-5xl">
        <SlideLeft>  <h1 className="text-3xl sm:text-4xl md:text-[48px] leading-snug md:leading-[61.49px] font-bold text-textPrimary mb-6 font-inter tracking-[-1.91px]">
          Experience MeMyselfI.ai<br /> Wherever You Are
        </h1></SlideLeft>

        {/* Subtext */}
        <SlideRight>   <p className="text-sm sm:text-base md:text-[16.96px] leading-5 sm:leading-6 md:leading-[21.2px] font-normal text-(--text-secondary)  font-inter max-w-3xl">
          Your AI assistant is designed to work seamlessly across every device — iPhone, Android,<br /> laptop, or tablet. Stay organized at home, at work, or on the move.
        </p></SlideRight>
        
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
          whileTap={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          }}
          className="relative w-full max-w-[1200px] aspect-1200/900"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/landingpage-images/experience-Memyself.png"
            alt="Experience MeMyselfI.ai"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

    </section>
  );
};
