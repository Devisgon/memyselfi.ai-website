import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
export default function ManageGoals() {
  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('/Ai-BudgetModule/manageGoals-bg.png')",
      }} >
      <div className="relative z-10 text-center text-(--text-primary) flex flex-col items-center justify-center">
        <SlideRight>
          <div className="px-2 py-2 bg-[#FFEF43] mb-4 rounded-md w-[140px] sm:w-[150px] md:w-[170px] h-[37px] flex items-center justify-center text-center">
            <p className="text-black font-semibold text-center text-sm tracking-wide">
              TRACK EVERY DOLLAR
            </p>
          </div>
        </SlideRight>
 <SlideUp><h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            LOOKING TO MANAGE PERSONAL<br /> GOALS AND BUSINESS BUDGETS
          </h1> </SlideUp>
        <Hovering>        <a href="https://app.memyselfi.ai/signup" target="blank">

          <button className="px-6 sm:px-8 cursor-pointer py-2 sm:py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-[#FFEF43] transition">
            GET STARTED
          </button></a>
        </Hovering>
      </div>
    </section>
  );
}
