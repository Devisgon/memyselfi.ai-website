"use client"; 
import { SlideUp } from "../../components/Animations";
import React, { useEffect, useRef, useState } from "react";
type Card = { id: number; name: string; role?: string; text: string; avatar?: string; rating?: number };
type Props = { theme?: "light" | "dark"; cards?: Card[]; className?: string };
export default function WhatUserSays({ theme = "dark", cards: incomingCards, className = "" }: Props) {
  const defaultCards: Card[] = incomingCards || [
    { id: 1, name: "Michael Chen", role: "Small Business Owner", text: " 'Having separate work and personal calendars that sync intelligently has eliminated double-bookings. The AI call agent handles my business calls when I'm with family.'", avatar: '/landingpage-images/wus-chen.png', rating: 5 },
    { id: 2, name: "Emma Rodriguez", role: "Freelance Designer", text: '"The unified inbox is a game-changer. I used to miss important messages across different platforms, but now everything is in one place with smart priority sorting."', avatar: '/landingpage-images/wus-emma.png', rating: 5 },
    { id: 3, name: "Sarah Johnson", role: "Marketing Director", text: '"The AI voice assistant has completely changed how I manage my day. I can dictate emails while cooking dinner and never miss an important task."', avatar: '/landingpage-images/wus-sarah.png' , rating: 5 },
    { id: 4, name: "Sara Ahmed", role: "CTO", text: "Our team loved the focused card layout. Managing messages card layout made our testimonials pop. Managing messages has never been easier!", rating: 4 },
    { id: 5, name: "Ehsan", role: "Customer Success", text: "Perfect for highlighting user feedback.card layout made our testimonials pop. Managing messages Managing messages has never been easier!", rating: 5 },
  ];
  const cards = defaultCards;
  const length = cards.length;
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDelta = useRef<number>(0);
  const autoplayRef = useRef<number | null>(null);
  const autoplayInterval = 5000;
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [index, hovered]);

  const startAutoplay = () => {
    stopAutoplay();
    if (hovered) return;
    autoplayRef.current = window.setInterval(() => setIndex((s) => (s + 1) % length), autoplayInterval) as unknown as number;
  };
const stopAutoplay = () => {
    if (autoplayRef.current) { clearInterval(autoplayRef.current as unknown as number); autoplayRef.current = null; }
  };
  const clamp = (i: number) => (i + length) % length;
  const prev = () => setIndex((s) => clamp(s - 1));
  const next = () => setIndex((s) => clamp(s + 1));
  const go = (i: number) => setIndex(clamp(i));
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; touchDelta.current = 0; };
  const handleTouchMove = (e: React.TouchEvent) => { if (touchStartX.current === null) return; touchDelta.current = e.touches[0].clientX - touchStartX.current; };
  const handleTouchEnd = () => {
    const dx = touchDelta.current;
    if (Math.abs(dx) > 40) { if (dx > 0) prev(); else next(); }
    touchStartX.current = null;
    touchDelta.current = 0;
  };
  const leftIdx = clamp(index - 1);
  const centerIdx = clamp(index);
  const rightIdx = clamp(index + 1);
  const isDark = theme === "dark";
  if (!mounted) return null;

  return (
    <SlideUp>
      <section
        className={`py-12 px-6 ${className}`}
        style={{
          backgroundColor: isDark ? "var(--bg-primary)" : "var(--carousal-bg-light)",
          color: isDark ? "var(--text-primary)" : "var(--text-primary)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <SlideUp>
            <h2 style={{ color: isDark ? "var(--text-primary)" : "var(--text-primary)" }} className="text-3xl font-extrabold">What Our Users Say</h2>
            <p style={{ color: isDark ? "var(--text-secondary)" : "var(--text-secondary)" }} className="mt-3 text-lg opacity-80">Real experiences from people using the product</p>
          </SlideUp>
 <div className="mt-10 relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div
              className="mt-6 flex items-center justify-center"
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              {/* Desktop */}
              <div className="hidden md:block w-full">
                <div className="flex items-center justify-center">
              <div className="relative w-7xl h-[360px] flex items-center justify-center overflow-visible">
                    <CardNode card={cards[leftIdx]} position="left" isDark={isDark} />
                    <CardNode card={cards[centerIdx]} position="center" isDark={isDark} />
                    <CardNode card={cards[rightIdx]} position="right" isDark={isDark} />
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div className="md:hidden w-full px-4">
                <div className="max-w-md mx-auto">
                  <div
                    className="relative rounded-2xl p-6 min-h-[260px]"
                    style={{
                      border: isDark ? "1px solid rgba(255,255,255,0.03)" : "1px solid var(--carousalcard-border-light)",
                      backgroundColor: isDark ? "var(--bg-card)" : "var(--carousalcard-bg-light)",
                    }}
                  >
                    <MobileCard card={cards[centerIdx]} isDark={isDark} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button onClick={prev} aria-label="Prev" className="w-14 h-14 rounded-full border-2 border-gray-400/30 flex items-center justify-center bg-transparent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>

              <div className="flex items-center gap-3">
                {cards.map((c, i) => (
                  <button key={c.id} onClick={() => go(i)} aria-label={`Go to ${i + 1}`} className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-(--text-primary) scale-125" : "bg-gray-500/40"}`} />
                ))}
              </div>

              <button onClick={next} aria-label="Next" className="w-14 h-14 rounded-full border-2 border-gray-400/30 flex items-center justify-center bg-transparent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </SlideUp>
  );
}

function CardNode({ card, position = "center", isDark = true }: { card: Card; position?: "left" | "center" | "right"; isDark?: boolean }) {
  const side = position !== "center";
  const baseStyle: React.CSSProperties = { position: "absolute", width: side ? 320 : 360, height: side ? 320 : 340, padding: 24, borderRadius: 16, transition: "all 420ms ease" };

  let transform = "translateX(0px) scale(1)";
  let zIndex = 30;
  let filter = "none";
  let opacity = 1;

if (position === "left") {
  transform = "translateX(-420px) scale(0.9)";
  zIndex = 10;
  filter = "blur(6px)";
  opacity = 0.5;
}

if (position === "right") {
  transform = "translateX(420px) scale(0.9)";
  zIndex = 10;
  filter = "blur(6px)";
  opacity = 0.5;
}


  const bg = isDark ? "var(--bg-card)" : "var(--carousalcard-bg-light)";
  const border = isDark ? "1px solid rgba(255,255,255,0.03)" : "1px solid var(--carousalcard-border-light)";

  return (
    <div style={{ ...baseStyle, transform, zIndex, filter, opacity, background: bg, border }}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <Stars count={card.rating ?? 5} />
          <p style={{ color: isDark ? "var(--text-primary)" : "var(--text-primary)" }} className={`mt-4 leading-relaxed ${position === "center" ? "text-base" : "text-sm"}`}>{card.text}</p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-600">
            {card.avatar ? <img src={card.avatar} alt={card.name} className="w-full h-full object-cover" /> : <span style={{ color: "var(--text-primary)" }} className="font-semibold">{card.name.charAt(0)}</span>}
          </div>
          <div>
            <div style={{ color: isDark ? "var(--text-primary)" : "var(--text-primary)" }} className="font-semibold">{card.name}</div>
            <div style={{ color: isDark ? "var(--text-secondary)" : "var(--text-secondary)" }} className="text-xs opacity-70">{card.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCard({ card, isDark = true }: { card: Card; isDark?: boolean }) {
  const bg = isDark ? "var(--bg-card)" : "var(--carousalcard-bg-light)";
  const border = isDark ? "1px solid rgba(255,255,255,0.03)" : "1px solid var(--carousalcard-border-light)";
  return (
    <div style={{ background: bg, border }} className="rounded-2xl p-4">
      <Stars count={card.rating ?? 5} />
      <p style={{ color: isDark ? "var(--text-primary)" : "var(--text-primary)" }} className="mt-4 text-base leading-relaxed">{card.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-600">
          {card.avatar ? <img src={card.avatar} alt={card.name} className="w-full h-full object-cover" /> : <span style={{ color: "var(--text-primary)" }} className="font-semibold">{card.name.charAt(0)}</span>}
        </div>
        <div>
          <div style={{ color: isDark ? "var(--text-primary)" : "var(--text-primary)" }} className="font-semibold">{card.name}</div>
          <div style={{ color: isDark ? "var(--text-secondary)" : "var(--text-secondary)" }} className="text-xs opacity-70">{card.role}</div>
        </div>
      </div>
    </div>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.606L19.335 24 12 19.897 4.665 24l1.585-8.644L0.5 9.75l7.832-1.732L12 .587z" />
        </svg>
      ))}
    </div>
  );
}
