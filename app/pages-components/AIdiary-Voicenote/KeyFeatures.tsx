"use client";
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
import Image from "next/image";

const Cards = [
  {
    id: "1",
    name: "Cross-Device Sync",
    img: "/AIdiary-Voicenote/cross.png",
    description: "Access your diary on mobile, tablet, or desktop seamlessly.",
  },
  {
    id: "2",
    name: "Multi-Format Entries",
    img: "/AIdiary-Voicenote/multi.png",
    description: "Create text entries, attach images, or add voice recordings to enrich your diary.",
  },
  {
    id: "3",
    name: "Voice-to-Text Capture",
    img: "/AIdiary-Voicenote/voice.png",
    description:
      "Record thoughts, ideas, or reminders and have them instantly transcribed with high accuracy.",
  },
  {
    id: "4",
    name: "Meeting Recordings & Summaries",
    img: "/AIdiary-Voicenote/meeting.png",
    description:
      "Record meetings, AI captures key points and generates clear summaries for quick recall.",
  },
];

export const KeyFeatures = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-24 px-6">
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">

        <SlideLeft>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-(--text-primary)">
            Key Features
          </h2>
        </SlideLeft>

        <SlideRight>
          <p className="text-lg sm:text-xl mb-14 text-(--text-primary)">
            Easily capture, store, and revisit your personal notes with the smart Diary & Voice Notes Module.
          </p>
        </SlideRight>
<SlideUp>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
    {Cards.map((card) => (
      <Hovering key={card.id}>
        <div
          className="
            bg-(--card-bg)
            border border-[#E5E5E5]  
            rounded-2xl
            p-6 w-full max-w-[280px] h-[340px]
            flex flex-col items-center text-center
            shadow-[0_6px_18px_rgba(0,0,0,0.08)]
            hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]
            transition-all duration-300
          "
        >
          {/* Image */}
          <Image
            src={card.img}
            alt={card.name}
            width={300}
            height={130}
            className="object-contain"
          />

          {/* Title */}
          <h3 className="text-[#FFED29] font-bold text-[18px] mb-3">
            {card.name}
          </h3>

          {/* Description */}
          <p className="text-(--card-text) text-[15px] leading-relaxed">
            {card.description}
          </p>
        </div>
      </Hovering>
    ))}
  </div>
</SlideUp>

      </div>
    </section>
  );
};
