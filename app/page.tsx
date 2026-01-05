import { HeroSection } from './pages-components/landingPage/HeroSection';
import { PowerfullFeatures } from './pages-components/landingPage/PowerfullFeatures';
import { DontWorrySection } from './pages-components/landingPage/DontWorrySection';
import { YourData } from './pages-components/landingPage/YourData';
import { ControlYourLife } from './pages-components/landingPage/ControllYourLife';
import { ExperienceMemySelf } from './pages-components/landingPage/ExperienceMemySelf';
import TransparentPricing from './pages-components/landingPage/TransparentPricing';
import { Footer } from './pages-components/landingPage/Footer';
import WhatUserSays from './pages-components/landingPage/whatUserSays';
import ContactSection from './pages-components/landingPage/ContactSection';
import LandingCarousel from './pages-components/landingPage/LandingCarousal';
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PowerfullFeatures />
      <DontWorrySection />
      <YourData />
      <LandingCarousel />
      <ControlYourLife />

      <section id="testimonials">
        <WhatUserSays />
      </section>
      <ExperienceMemySelf />

      <section id="pricing">
        <TransparentPricing />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}


