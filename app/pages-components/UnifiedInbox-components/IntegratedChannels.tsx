"use client";
import Image from "next/image";
import { Hovering } from "../../components/Animations";

const channels = [
  { name: "Gmail", img: "/Unified-inbox/email.png" },
  { name: "Outlook", img: "/Unified-inbox/outlook.png" },
  { name: "Yahoo", img: "/Unified-inbox/yohoo.png" },
  { name: "WhatsApp", img: "/Unified-inbox/whatsapp.png" },
  { name: "SMS", img: "/Unified-inbox/sms.png" },
  { name: "Facebook", img: "/Unified-inbox/fb.png" },
  { name: "Instagram", img: "/Unified-inbox/instagram.png" },
  { name: "Slack", img: "/Unified-inbox/slack.png" },
];

export default function IntegratedChannels() {
  return (
    <section className="w-full py-6 sm:py-10 px-4 sm:px-10 lg:px-20 bg-(--bg-bg)">
      <div className="text-center mb-10 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-(--text-primary) tracking-wide">
          INTEGRATED CHANNELS
        </h1>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <div className="h-5 w-1 bg-(--bg-button)"></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-14 place-items-center">
        {channels.map((item, i) => (
          <ChannelCard key={i} name={item.name} img={item.img} />
        ))}
      </div>
    </section>
  );
}

function ChannelCard({ name, img }: { name: string; img: string }) {
  return (
      <div className="flex flex-col items-center group transition-all duration-300">
        <div
          className="
            w-[180px] h-[180px]
            sm:w-[220px] sm:h-[220px]
            lg:w-[270px] lg:h-[270px]
            flex items-center justify-center
            bg-(--bg-bg) rounded-4xl
            border dark:border-white
            shadow-sm
            transition-all duration-300
            group-hover:border-[#FFEF43]
          ">
          <Image
            src={img}
            alt={name}
            width={215}
            height={215}
            className="w-[150px] h-[140px]  lg:w-[200px] lg:h-[215px] object-contain"
          />
        </div>
        <div
          className="
            w-[1px] h-7 sm:h-9 bg-(--text-primary)
            transition-all duration-300
            group-hover:bg-[#FFEF43]
          " />
        <div
          className="
            w-[120px] sm:w-[145px] lg:w-[167px] h-10 sm:h-12
            flex items-center justify-center
            rounded-md text-xs sm:text-sm font-semibold
            bg-(--text-primary) text-(--bg-bg)
            transition-all duration-300
            group-hover:bg-[#FFEF43] group-hover:text-black
          ">
          {name}
        </div>
      </div>
  );
}
