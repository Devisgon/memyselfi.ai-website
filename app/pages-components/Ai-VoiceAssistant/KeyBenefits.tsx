'use client';

import { FC } from "react";
import { FadeIn, SlideUp, SlideLeft, SlideRight, Hovering } from "../../components/Animations";
import { AiOutlineSearch} from "react-icons/ai";
import { HiOutlineClipboardList, HiOutlineSparkles } from "react-icons/hi";
import { FaListCheck } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { FaCalendarCheck } from "react-icons/fa";
import { TbUserScan } from "react-icons/tb";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
interface Card {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}
const cards: Card[] = [
    {
        id: 1,
        icon: <FaCalendarCheck className="text-black" />,
        title: "Smart Scheduling",
        description: "AI automatically schedules events, meetings, and tasks based on your preferences and availibility.",
    },
    {
        id: 2,
        icon: <AiOutlineSearch className="text-black" />,
        title: "Information on Demand",
        description: "Get quick answers from your notes, emails, files, and documents instantly.",
    },
    {
        id: 3,
        icon: <FaListCheck  className="text-black" />,
        title: "Task Delegation",
        description: "Create, assign, and track tasks instantly with intelligent priority management.",
    },
    {
        id: 4,
        icon: <TbUserScan className="text-black" />,
        title: "AI Scanning ",
        description: "AI scans emails and messages, reads due dates, and auto-adds bills to your calendar for on-time payments."
    },
    {
        id: 5,
        icon: <CiCircleList  className="text-black" />,
        title: "Hands-Free Control",
        description: "Manage your day without lifting a finger. From setting reminders to sending quick replies, your assistant works entirely through natural voice commands."
    },
    {
        id: 6,
        icon: <MdOutlinePlaylistAddCheck className="text-black" />,
        title: "Personalized Responses",
        description: "The AI learns your preferences and adapts, offering tailored suggestions and context-aware replies that feel uniquely yours."
    },
];
export const KeyBenefits: FC = () => {
    return (
        <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-(--bg-bg) justify-center">
            <SlideUp>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-(--text-primary) mb-4">
 Key Benefits
                </h1>
            </SlideUp>

            <FadeIn>
               <p className="text-center text-[#9CA3AF] max-w-2xl sm:max-w-3xl text-sm sm:text-base mb-12">
  All the tools you need to manage your personal and professional life
                </p>
            </FadeIn>

            {/* Cards */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
                {cards.map((card) => (
                    <SlideUp key={card.id}>
                        <Hovering>
                            <div className="sm:w-[350px] h-[253px] p-6 bg-(--bg-card) border border-gray-700/20 rounded-lg shadow-lg text-left mx-auto">
                                {/* Icon */}
                              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 bg-[#FFEF43] rounded-2xl mb-4">
                                  {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-(--card-text) font-bold text-[19px] mb-2">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-(--card-text) pl-4 text-[15px]">
                                    {card.description}
                                </p>
                            </div>
                        </Hovering>
                    </SlideUp>
                ))}
            </div>
        </section>
    );
};

