"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const images: string[] = [
  "/Smart-ai-calendar/calen1.png",
  "/Smart-ai-calendar/calen2.png",
  "/Smart-ai-calendar/calen3.png",
];
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-72 sm:w-[420px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] shrink-0">
      <Image
        src={images[index]}
        alt="Daily Calendar Preview"
        width={1000}
        height={1000}
        className="w-full h-full object-contain transition-transform duration-700 ease-in-out"
        priority />
    </div>
  );
};
export default HeroCarousel;
