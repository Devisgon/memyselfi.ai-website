"use client";
import { Hovering, SlideLeft, SlideRight } from "../../components/Animations";
import { Check } from "lucide-react";

const personalFeatures = [
  "Smart Dashboard Access",
  "AI Powered Unified Inbox",
  "AI Powered Smart Calendar",
  "AI Powered Message Management",
  "AI Powered Voice Assistant",
  "1GB Vault Storage",
  "Family Calendar Syncing",
  "Budget Tracking",
  "API Integration",
  "Available 24/7",
];

const businessFeatures = [
  "Advanced Dashboard With Analytics",
  "Dual AI Powered Unified Inboxes",
  "Dual AI Powered Smart Calendars",
  "AI Powered Voice Assistant",
  "Team Calendar Syncing",
  "10GB Vault Storage",
  "Full AI Call Handling",
  "Front End AI Prompt Training",
  "API Integrations & Custom Workflows",
  "New Dedicated Number or Call Forwarding",
  "Available 24/7",
];
export default function TransparentPricing() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24  text-(--text-primary)"
    style={{ background: "var(--tp-bg)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Heading */}
        <SlideLeft>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Simple, Transparent Pricing
          </h1>
        </SlideLeft>
        <SlideRight>
          <p className="mt-2 text-base sm:text-lg md:text-xl opacity-80">
            Choose the plan that fits your needs.
          </p>
        </SlideRight>
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Personal Plan */}
   <Hovering>       
           <div className="relative rounded-2xl border border-[#FFEF43] h-[630px] p-6 sm:p-8 bg-(--bg-bg) shadow-lg">
            <div className="absolute -top-3 right-6 w-[122px] h-[23px] bg-[#FFED29] rounded-md flex items-center justify-center">
  <span className="font-medium text-[11px] text-black font-['Inter']">
    14 Day Free Trial
  </span>
</div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-xl sm:text-2xl font-semibold">Personal Plan</h2>
                  <p className="text-sm sm:text-base mt-1 opacity-70">Perfect for personal use</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-2xl sm:text-3xl font-bold">$29.99</span>
                  <p className="text-sm sm:text-base mt-1 opacity-70">per month</p>
                </div>
              </div>

              <ul className="mt-4 mb-6 sm:mt-6 space-y-2 sm:space-y-3">
                {personalFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className="p-1 text-[#27DA68] flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-(--card-text)">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.memyselfi.ai/signup" target="blank  ">
              <button className="cursor-pointer sm:mt-16 w-full py-2 sm:py-3 rounded-lg font-semibold bg-(--bg-button) text-black hover:opacity-90 transition text-sm sm:text-base">
                Sign Up Now
              </button></a>
            </div>
          </Hovering>

    {/* Business Plan */}
   <Hovering> 
      <div className="relative rounded-2xl border border-[#FFEF43] h-[630px] p-6 sm:p-8 bg-(--bg-bg) shadow-lg">
        <div className="absolute -top-3 right-6 w-[122px] h-[23px] bg-[#FFED29] rounded-md flex items-center justify-center">
  <span className="font-medium text-[11px] text-black font-['Inter']">
    14 Day Free Trial
  </span>
</div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-xl sm:text-2xl font-semibold">Business Plan</h2>
                  <p className="text-sm sm:text-base mt-1 opacity-70">
                    For professionals and teams
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-2xl sm:text-3xl font-bold">$99.99</span>
                  <p className="text-sm sm:text-base mt-1 opacity-70">per month</p>
                </div>
              </div>

              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                {businessFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className="p-1 text-[#27DA68] flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-(--card-text)">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://app.memyselfi.ai/signup" target="blank  ">

              <button className="cursor-pointer sm:mt-12 w-full py-2 sm:py-3 rounded-lg font-semibold bg-(--bg-button) text-black hover:opacity-90 transition text-sm sm:text-base">
                Sign Up Now
              </button></a>
            </div>
          </Hovering>
        </div>
      </div>
    </section>
  );
}
