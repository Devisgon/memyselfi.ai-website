import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
import { Check } from "lucide-react";
export default function ProductivityImpact() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-(--bg-bg)" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FFED29]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
        <Hovering>
      <div
  className="
    bg-white shadow-xl rounded-xl
     w-screen max-w-[769px]
    min-h-[260px] md:min-h-[334px]
    p-4 sm:p-5 md:p-6 mb-60 md:mb-0
  "
>
  <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-black">
    PRODUCTIVITY IMPACT
  </h2>

  <p className="text-sm sm:text-base text-(--text-secondary) mb-4">
    Boost efficiency and financial control with your very own Personal AI Assistant
  </p>

  <div className="flex flex-col gap-3 w-full md:max-w-[622px]">

    <SlideRight>
      <div className="flex items-start sm:items-center gap-3 rounded-lg px-3 sm:px-4 py-2 bg-[#F8F8F8]">
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
        <p className="text-xs sm:text-sm md:text-base text-[#74787C] break-words">
          Eliminates missed bill payments, avoiding penalties.
        </p>
      </div>
    </SlideRight>

    <SlideUp>
      <div className="flex items-start sm:items-center gap-3 rounded-lg px-3 sm:px-4 py-2 bg-[#F8F8F8]">
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
        <p className="text-xs sm:text-sm md:text-base text-[#74787C] break-words">
          Saves 3–5 hours/month compared to manual budget tracking.
        </p>
      </div>
    </SlideUp>

    <SlideLeft>
      <div className="flex items-start sm:items-center gap-3 rounded-lg px-3 sm:px-4 py-2 bg-[#F8F8F8]">
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
        <p className="text-xs sm:text-sm md:text-base text-[#74787C] break-words">
          Improves financial accuracy by over 90% with automated categorization.
        </p>
      </div>
    </SlideLeft>

  </div>
</div>

        </Hovering>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
            <SlideLeft>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-4xl font-bold">20%</h3>
                <p className="font-medium uppercase leading-tight">
                  Reduce<br />Overspending
                </p>
              </div>
            </SlideLeft>

            <SlideUp>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-4xl font-bold">100%</h3>
                <p className="font-medium uppercase leading-tight">
                  ACHIEVE BILLS<br />ON TIME
                </p>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-4xl font-bold">90%</h3>
                <p className="font-medium uppercase leading-tight">
                  IMPROVE FINANCIAL<br />ACCURACY
                </p>
              </div>
            </SlideUp>

            <SlideRight>
              <div className="flex items-center gap-3">
                <h3 className="text-3xl sm:text-4xl font-bold">2x</h3>
                <p className="font-medium uppercase leading-tight">
                  ENABLE QUICKER<br />PLANNING
                </p>
              </div>
            </SlideRight>
          </div>
        </div>
      </div>
    </section>
  );
}
