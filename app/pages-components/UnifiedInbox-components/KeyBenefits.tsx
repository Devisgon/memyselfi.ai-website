'use client';
import { FC } from "react";
import { FadeIn, SlideUp, SlideLeft, SlideRight, Hovering } from "../../components/Animations";
import {  Calendar} from "lucide-react";
import { FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdReply } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
interface Card {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}
const cards: Card[] = [
    {
        id: 1,
        icon: <FaHouse className="text-black" />,
        title: "One dashboard, zero chaos",
        description: "Check, reply, and manage all your messages in one space.",
    },
    {
        id: 2,
        icon: <FaSearch className="text-black" />,
        title: "Instant search",
        description: "Find a message, email or thread in seconds.",
    },
    {
        id: 3,
        icon: <Calendar className="text-black" />,
        title: "Consistency across platforms",
        description: "Reply from one place, no matter where the message started.",
    },
    {
        id: 4,
        icon: <Calendar className="text-black" />,
        title: "AI Smart Auto-Scheduling",
        description: "AI auto-detects events from WhatsApp, SMS, Email or linked platforms, adds them to your calendar as pending (red), and confirms with a green tick once approved."
    },
    {
        id: 5,
        icon: <IoMdNotifications className="text-black" />,
        title: "AI Smart Replies",
        description: "AI Smart Replies suggest context-aware responses in seconds, while Quick Replies let you send instant one-tap confirmations and updates."
    },
    {
        id: 6,
        icon: <MdReply className="text-black" />,
        title: "AI Smart Notifications",
        description: "Smart notifications and gentle nudges so  you don't forget to reply, helping you stay consistent and responsive with ease."
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
Discover what makes your AI assistant exceptional
                </p>
            </FadeIn>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {cards.map((card) => (
                    <SlideUp key={card.id}>
                        <Hovering>
                            <div className="w-full sm:w-[350px] h-[253px] shrink-0 p-6 bg-(--bg-card) border border-gray-700/20 rounded-lg shadow-lg text-left mx-auto">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#FFEF43] rounded-2xl mb-4">
                                  {card.icon}
                                </div>
                                <h3 className="text-(--card-text) font-bold text-[19px] mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-(--card-text) text-left text-[15px]">
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
