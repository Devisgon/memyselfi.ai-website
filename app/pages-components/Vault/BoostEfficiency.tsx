"use client";
import Image from "next/image";
export default function BoostEfficiency() {
  return (
    <section
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-bg)" }} >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative flex flex-col md:flex-row items-center h-auto md:h-[420px]">

          {/* BACKGROUND CARD */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Image
              src="/Vault/background.png"
              alt="Boost Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* LEFT – MOBILE IMAGE */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start items-end 
              pl-0 md:pl-16 pt-10 md:pt-0 z-20">
            <Image
              src="/Vault/mobile.png"
              alt="Vault Mobile App"
              width={240}
              height={480}
              priority
              className="md:w-[280px] md:h-[560px] -mt-6 md:-mt-8 drop-shadow-2xl" />
          </div>
          {/* RIGHT – CONTENT */}
          <div className="relative w-full md:w-1/2 max-w-full md:max-w-[480px] 
              px-6 md:pr-16 z-20 flex flex-col gap-4 
              items-center md:items-start text-center md:text-left pb-10 md:pb-0">
            <h1
              className="text-white font-semibold leading-snug"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "36px",
              }} >
             Organize Documents, Protect Data, 
              <br />
              Boost Efficiency
            </h1>
            <p
              className="text-white/70"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
              }} >
Start using Vault today to streamline your document<br/> management and enhance your productivity.
            </p>
            <button
              className="mt-2 w-fit px-6 py-2 rounded-full bg-[#FFEF43]
              text-black text-bold font-medium text-sm hover:opacity-90 transition"
              style={{ fontFamily: "Inter, sans-serif" }} >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
