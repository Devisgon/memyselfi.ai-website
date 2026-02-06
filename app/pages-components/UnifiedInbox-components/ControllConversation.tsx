"use client";
import { SlideUp,SlideLeft, SlideRight ,Hovering} from "@/app/components/Animations";
import { useTheme } from "../../components/ThemeProvider";
export default function ControllConversation() {
  const { theme } = useTheme(); 
  return (
<section
  className="relative w-full min-h-screen py-20 px-8 bg-(--bg-bg) flex items-center justify-center transition-all duration-300">
<div
  className="absolute bottom-10 right-10 translate-x-0 w-[1200px] h-[400px] rounded-full blur-[140px]"
  style={{
    background: "var(--bg-button)",
    opacity: theme === "dark" ? 0.25 : 0.25, 
    filter: "blur(140px)",
  }}
/>

  <SlideUp> 
      <div className="max-w-3xl relative text-center justify-center space-y-6">
   <SlideLeft>   <h1 className="text-4xl font-bold text-(--text-primary)">
          Take Back Control of Your Conversations.
        </h1></SlideLeft>  

    <SlideRight>   <p className="text-lg opacity-90 text-(--text-secondary)">
         Try Unified Inbox Today
        </p></SlideRight> 
     <Hovering><a href="https://app.memyselfi.ai/signup" target="blank"><button
          className="
            mt-4  px-8 py-3  rounded-xl cursor-pointer bg-(--bg-button)  text-black  font-semibold  shadow-md  hover:opacity-90  transition">
          Get Started
        </button></a></Hovering> 
      </div>
      </SlideUp> 
    </section>
  );
}
