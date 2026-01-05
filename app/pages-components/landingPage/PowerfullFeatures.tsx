'use client';
import { FC } from "react";
import { FadeIn, SlideUp, SlideLeft, SlideRight, Hovering } from "../../components/Animations";
import {MicrophoneIcon,PhoneIcon, WalletIcon,UserGroupIcon} from "@heroicons/react/24/solid"
import { RiDashboard3Fill } from "react-icons/ri";
import { FaInbox ,FaVault,FaFileInvoice } from "react-icons/fa6";
import { FaCalendarAlt  } from "react-icons/fa";
import { BsHeartPulseFill } from "react-icons/bs";
interface Card {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}
const cards: Card[] = [
    {
        id: 1,
        icon: <RiDashboard3Fill className="text-white w-6 h-6" />,
        title: "Smart Dashboard",
        description: "View your messages and calendar eventsat a glance with your AI-powered dashboard.",
    },
    {
        id: 2,
        icon: <FaInbox className="text-white w-6 h-6" />,
        title: "Unified Inbox",
        description: "One inbox for SMS, Email, WhatsApp, Instagram, Slack, Facebook, Telegram &more, sorted smartly with AI suggested replies.",
    },
    {
        id: 3,
        icon: <FaCalendarAlt className="text-white w-6 h-6" />,
        title: "Smart Calendar",
        description: "Maintain separate personal and work schedules with AI-suggested time management.",
    },
    {
        id: 4,
        icon: <FaFileInvoice  className="text-white w-6 h-6" />,
        title: "Diary & Voice Notes Module",
        description: "Record your thoughts by voice or text with AI-powered insights and mood tracking."
    },
    {
        id: 5,
        icon: <MicrophoneIcon className="text-white w-6 h-6" />,
        title: "AI Voice Assistant",
        description: "Use voice to manage schedules,messages, and tasks, while your AI handles bookings, reschedules, and answers queries."
    },
    {
        id: 6,
        icon: <PhoneIcon className="text-white w-6 h-6" />,
        title: "AI Call Agent",
        description: "Let AI handle your calls with screening,summaries, recordings, and books appointments and manages your calendar."
    },
    {
        id: 7,
        icon: <WalletIcon className="text-white w-6 h-6" />,
        title: "Budget Module",
        description: "Track expenses, set budgets, and receive AI-powered insights on your spending habits."
    },
    {
        id: 8,
        icon: <UserGroupIcon className="text-white w-6 h-6" />,
        title: "Family Sharing",
        description: "Share calendars and tasks with family members with parental controls for younger users."
    },
    {
        id: 9,
        icon: <FaVault className="text-white  w-6 h-6" />,
        title: "Secure Vault",
        description: "Store and organize important documents with encrypted security and easy retrieval."
    },

    {
        id: 10,
        icon: <BsHeartPulseFill className="text-white w-6 h-6" />,
        title: "Health Tracking (Coming Soon)",
        description: "Personalized diet plans and training programs powered by AI. Connect with Garmin, Apple Health, Strava, and more, all from one place."
    },
];
export const PowerfullFeatures: FC = () => {
    return (
        <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
            style={{ backgroundColor: 'var(--secondary-bg-color)' }}
        >
            {/* Heading */}
            <SlideUp>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-(--mheading-color) mb-4">
 Powerful Features
                </h1>
            </SlideUp>

            <FadeIn>
               <p className="text-center text-[#9CA3AF] max-w-2xl sm:max-w-3xl text-sm sm:text-base mb-12">
  All the tools you need to manage your personal and professional life <br/> with AI in one place.


                </p>
            </FadeIn>

            {/* Cards */}
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
                {cards.map((card) => (
                    <SlideUp key={card.id}>
                        <Hovering>
                            <div className="sm:w-[350px] h-[253px] p-6 bg-(--bg-card) border border-gray-700/20 rounded-lg shadow-lg text-left mx-auto">
                                {/* Icon */}
                              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center  bg-(--icons-bg) rounded-full mb-4">
                                  {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-(--card-text) font-bold text-[19px] mb-2">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-(--card-text)  text-[15px]">
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

