"use client";
import Contact from "@/app/components/Contact";
import { SlideUp, FadeIn, } from "../../components/Animations";
export default function ContactSection() {

  return (
    <section className="w-full py-10 bg-primaryBg flex justify-center px-4">
      <div className="max-w-xl w-full text-center">
              {/* Heading */}
        <SlideUp>
          <h2 className="text-3xl font-bold text-textPrimary mb-2">
            Get in Touch
          </h2>
        </SlideUp>

        <FadeIn>
          <p className="text-textSecondary mb-4">
            Have questions? We're here to help.
          </p>
        </FadeIn>
<Contact/>
      </div>
    </section>
  );
}
