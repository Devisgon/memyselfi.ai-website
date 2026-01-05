'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export default function Productivity() {
  return (
    <SlideUp>
      <section className="w-full py-24 px-4 sm:px-6 lg:px-6 flex flex-col bg-(--bg-bg) items-center">
        <SlideUp>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Vault  Productivity
          </h1>
        </SlideUp>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 justify-center items-start w-full max-w-[1200px]">
          
          <SlideLeft>
            <div
              className="relative w-full sm:w-[532px] h-[569px] rounded-[50px] overflow-hidden flex flex-col justify-center items-center bg-gray-200 mb-6 lg:mb-0"
              style={{
                backgroundImage: "url('/Vault/left.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <SlideRight>
                <h2 className="text-2xl font-bold text-black mb-4 text-center">
                  All Files, One Vault
                </h2>
              </SlideRight>
              <SlideLeft>
                <p className="text-black text-center px-6">
                  With Vault, your important personal documents, from passports and medical records to home warranties and travel itineraries, are stored in one secure hub. No more searching through endless emails or messy folders to find what you need. Everything is encrypted, organized, and instantly accessible. Share files with family when needed, keep track of updates, and enjoy the peace of mind of having your life’s essentials ready in seconds.
                </p>
              </SlideLeft>
            </div>
          </SlideLeft>

          <SlideRight>
            <div className="flex flex-col gap-6 lg:gap-3 w-full sm:w-[532px]"> 
              <div
                className="w-full h-[291px] rounded-[50px] bg-[#FFEF43] flex flex-col items-center justify-center" >
                <SlideRight>
                  <h2 className="text-2xl font-bold text-black mb-4 text-center">
                    Instant Access & Edits
                  </h2>
                </SlideRight>
                <SlideLeft>
                  <p className="text-black text-center px-6">
                    Open, preview, and edit your documents instantly, no downloads, no delays. Make quick updates, save changes in real time, and keep your workflow uninterrupted, whether you’re on desktop or mobile.
                  </p>
                </SlideLeft>
              </div> 
               <div className="relative w-full h-[258px] rounded-[50px] overflow-hidden flex flex-col items-center justify-center bg-gray-200"
                style={{
                  backgroundImage: "url('/Vault/right.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}  >
                <SlideRight>
                  <h2 className="text-2xl font-bold text-black mb-4 text-center">
                    Version Safety Net
                  </h2>
                </SlideRight>
                <SlideLeft>
                  <p className="text-black text-center px-6">
                    Never lose progress, Vault automatically saves past versions so you can roll back changes when needed.
                  </p>
                </SlideLeft>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>
    </SlideUp>
  );
}
