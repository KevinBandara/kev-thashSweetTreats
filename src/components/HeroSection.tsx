'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { WHATSAPP_LINK } from '@/lib/constants';

// ─── Icons ────────────────────────────────────────────────────────────────────

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={20}
    height={20}
    className="w-5 h-5 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width={24}
    height={24}
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface FloatingEl {
  emoji: string;
  size: string;
  top: string;
  left?: string;
  right?: string;
  delay: string;
  duration: string;
  reverse?: boolean;
}

const floatingElements: FloatingEl[] = [
  { emoji: '🎂', size: 'text-5xl', top: '8%',  left:  '5%',  delay: '0s',   duration: '6s'   },
  { emoji: '🧁', size: 'text-4xl', top: '15%', right: '8%',  delay: '1s',   duration: '7s',   reverse: true },
  { emoji: '🍰', size: 'text-3xl', top: '65%', left:  '3%',  delay: '2s',   duration: '5s'   },
  { emoji: '🎂', size: 'text-2xl', top: '75%', right: '5%',  delay: '0.5s', duration: '8s',   reverse: true },
  { emoji: '🧁', size: 'text-5xl', top: '40%', right: '3%',  delay: '1.5s', duration: '6.5s' },
  { emoji: '🍓', size: 'text-3xl', top: '20%', left:  '10%', delay: '3s',   duration: '7.5s', reverse: true },
  { emoji: '🍫', size: 'text-2xl', top: '85%', left:  '15%', delay: '2.5s', duration: '5.5s' },
];

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWhatsApp = () => {
    const text =
      lang === 'si'
        ? 'ආයුබෝවන් Kev & Thash Sweet Treats! මට කේක් ඇණවුමක් පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි 🎂'
        : "Hi Kev & Thash Sweet Treats! 🎂 I'd like to enquire about ordering a cake.";
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleViewMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25%       { transform: translateY(-16px) rotate(3deg); }
          75%       { transform: translateY(10px) rotate(-3deg); }
        }
        @keyframes floatDown {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25%       { transform: translateY(12px) rotate(-4deg); }
          75%       { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%       { transform: translateY(8px); opacity: 0.5; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.03); }
        }
        .hero-float-up   { animation: floatUp var(--dur,6s) ease-in-out infinite; animation-delay: var(--delay,0s); }
        .hero-float-down { animation: floatDown var(--dur,7s) ease-in-out infinite; animation-delay: var(--delay,0s); }
        .hero-scroll-bounce { animation: scrollBounce 1.6s ease-in-out infinite; }
        .hero-fade-1 { animation: fadeSlideUp 0.6s ease forwards 0.10s; opacity: 0; }
        .hero-fade-2 { animation: fadeSlideUp 0.6s ease forwards 0.20s; opacity: 0; }
        .hero-fade-3 { animation: fadeSlideUp 0.6s ease forwards 0.35s; opacity: 0; }
        .hero-fade-4 { animation: fadeSlideUp 0.6s ease forwards 0.50s; opacity: 0; }
        .hero-fade-5 { animation: fadeSlideUp 0.6s ease forwards 0.65s; opacity: 0; }
        .hero-cake-pulse { animation: pulseSlow 4s ease-in-out infinite; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 lg:pt-0
                   bg-gradient-to-br from-[#FFF5F7] via-[#FDE8EC] to-[#FCE4F0]"
        aria-label="Hero — Kev & Thash Sweet Treats"
      >
        {/* Decorative floating emoji elements */}
        {mounted &&
          floatingElements.map((el, i) => (
            <span
              key={i}
              className={`absolute select-none pointer-events-none ${el.size} opacity-20 md:opacity-25 ${
                el.reverse ? 'hero-float-down' : 'hero-float-up'
              }`}
              style={
                {
                  top: el.top,
                  left: el.left,
                  right: el.right,
                  '--delay': el.delay,
                  '--dur': el.duration,
                } as React.CSSProperties
              }
              aria-hidden="true"
            >
              {el.emoji}
            </span>
          ))}

        {/* Soft radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 70% 40%, rgba(236,72,153,0.12) 0%, transparent 70%),' +
              'radial-gradient(ellipse 50% 50% at 20% 70%, rgba(233,30,140,0.08) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Main content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-0 lg:min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center w-full">
            {/* ── Left: Text Content ── */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Panadura Location & Pickup Badges */}
              <div className="hero-fade-1 flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-pink-100 text-pink-800 border border-pink-300 shadow-sm">
                  {t.hero.locationBadge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/80 text-pink-700 border border-pink-200 shadow-sm">
                  {t.hero.pickupBadge}
                </span>
              </div>

              {/* Main heading */}
              <h1
                className="hero-fade-2 font-playfair text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight"
                style={{ color: '#3D1A0A' }}
              >
                {t.hero.headingLine1}{' '}
                <span
                  className="italic"
                  style={{
                    background: 'linear-gradient(135deg, #EC4899, #E91E8C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {t.hero.headingLove}
                </span>
                <br />
                {t.hero.headingLine2}{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #E91E8C, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {t.hero.headingPerfection}
                </span>
              </h1>

              {/* Subheading */}
              <p className="hero-fade-3 text-base sm:text-lg max-w-xl leading-relaxed text-[#7A3F2A]">
                {t.hero.subheading}
              </p>

              {/* Star rating badge (10+ Happy Customers) */}
              <div className="hero-fade-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm bg-white/80 backdrop-blur-sm border border-pink-200 text-[#3D1A0A]">
                  <span className="text-yellow-400 text-base tracking-tight" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <span className="font-bold">{t.hero.ratingText}</span>
                  <span className="text-pink-300" aria-hidden="true">
                    |
                  </span>
                  <span className="text-pink-700 font-bold">{t.hero.customersText}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-fade-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full
                             text-white text-base font-bold shadow-lg shadow-green-200
                             bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 cursor-pointer"
                  aria-label="Order on WhatsApp"
                >
                  <WhatsAppIcon />
                  <span>{t.hero.orderBtn}</span>
                </button>

                <button
                  onClick={handleViewMenu}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full
                             text-sm sm:text-base font-bold text-pink-700 bg-white/90 hover:bg-pink-50
                             border-2 border-pink-300 hover:border-pink-400 active:scale-95
                             shadow-sm transition-all duration-200 cursor-pointer"
                  aria-label="View our Menu"
                >
                  <span>🍰</span>
                  <span>{t.hero.menuBtn}</span>
                </button>
              </div>

              {/* Trust Pills */}
              <div className="hero-fade-5 flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                {t.hero.pills.map((pill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                               bg-white/80 border border-pink-200 shadow-xs text-[#3D1A0A]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Visual / Hero Card ── */}
            <div className="relative flex justify-center items-center">
              {/* Outer decorative glow ring */}
              <div
                className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-35 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, #F472B6 0%, #FDA4AF 60%, transparent 80%)',
                }}
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200/80 hero-cake-pulse">
                {/* Brand Logo Central Display */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-pink-300">
                  <Image
                    src="/KevAndThashSweetTreatsLogo.png"
                    alt="Kev & Thash Sweet Treats"
                    fill
                    sizes="(max-width: 640px) 192px, 256px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating highlight badges */}
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-2">
                    {t.hero.cakeLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#3D1A0A] font-playfair">
                    {t.hero.cakeSub}
                  </p>
                  <p className="text-xs sm:text-sm text-[#7A3F2A] mt-1">
                    {lang === 'si'
                      ? 'මලමුල්ල, පානදුරේ අපේ ස්ථානයෙන් නැවුම් පිටින්ම රැගෙන යා හැක'
                      : 'Freshly baked upon request. Convenient pickup in Malamulla, Panadura.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 pb-6 flex justify-center">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-1 text-xs font-semibold text-pink-600 hover:text-pink-800 transition-colors cursor-pointer group"
            aria-label="Scroll to learn more about us"
          >
            <span>{t.hero.scrollText}</span>
            <span className="hero-scroll-bounce">
              <ChevronDownIcon />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
