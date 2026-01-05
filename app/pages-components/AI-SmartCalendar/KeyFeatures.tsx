"use client";
import Image from "next/image";
import { Hovering, SlideUp , SlideLeft, SlideRight} from "../../components/Animations"
const channels = [
  { name: "EVENTS", img: "/Smart-ai-calendar/Event.png" },
  { name: "COLOR-CODED CLARITY", img: "/Smart-ai-calendar/color-coded.png" },
  { name: "FAMILY SHARING", img: "/Smart-ai-calendar/family-Sharing.png" },
  { name: "ANYWHERE ACCESS", img: "/Smart-ai-calendar/Anywhere-access.png" },
];
export default function KeyFeatures() {
  return (
 <SlideUp><section className="w-full font-inter py-20 px-4 sm:px-10 lg:px-20 bg-(--dw-bg)">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-(--text-primary) tracking-wide">
          KEY BENEFITS
        </h1>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <div className="h-5 w-1 bg-(--bg-button) "></div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
            <div className="w-1.5 h-1.5 bg-(--bg-button) rotate-45"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 place-items-center">
        {channels.map((item, i) => (
          <ChannelCard key={i} name={item.name} img={item.img} />
        ))}
      </div>
    </section></SlideUp>   
  );
}
function ChannelCard({ name, img }: { name: string; img: string }) {
  return (
    <Hovering>
      <div className="flex flex-col items-center w-full sm:w-auto group transition-all duration-300">
        {/* === CARD === */}
        <div
          className="shadow-[0_4px_20px_rgba(0,0,0,0.15)]
            transition-all duration-300
            group-hover:shadow-[0_6px_25px_rgba(255,238,67,0.6)]
            w-full sm:w-auto"
        >
          <Image
            src={img}
            alt={name}
            width={230}
            height={300}
            className="object-contain w-full sm:w-auto" />
        </div>
        <div className="flex gap-50 ">
            <div className=" w-[0.5] h-3 bg-(--text-primary) transition-all  group-hover:bg-[#FFEF43] "/>
            <div className=" w-[0.5] h-3  bg-(--text-primary) transition-all  group-hover:bg-[#FFEF43] "/>
        </div>
        <div className=" w-50 h-[0.5]  bg-(--text-primary) transition-all  group-hover:bg-[#FFEF43] "/>        
        <div className=" w-[0.5] h-12  bg-(--text-primary) transition-all  group-hover:bg-[#FFEF43] "/>
        <div
          className=" w-full sm:w-[167px] h-12 flex items-center justify-center text-center rounded-md text-sm font-semibold  bg-(--text-primary) text-(--dw-bg) shadow-sm transition-all duration-300 group-hover:bg-[#FFEF43] group-hover:text-black  px-2 ">
          {name}
        </div>
      </div>
    </Hovering>
  );
}
