"use client";
const GoodbyeCalls = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-6 lg:px-6 bg-[#FFDD57]/20 dark:bg-[#FFD93D]/20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-(text-primary) mb-4">
          Say goodbye to missed calls and hello to more free time.
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Set up your AI Call Agent in under 5 minutes
        </p>
        <button className="bg-(--bg-button) text-black px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-medium shadow hover:scale-105 transition-all">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default GoodbyeCalls;
