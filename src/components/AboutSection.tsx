'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '10+', label: t.about.stat3Label, icon: '😊', color: '#EC4899' },
    { value: '5.0★', label: t.about.stat2Label, icon: '⭐', color: '#E91E8C' },
    { value: '100%', label: t.about.stat4Label, icon: '💝', color: '#16A34A' },
    { value: 'Panadura', label: lang === 'si' ? 'ස්ථානයෙන් ලබාගැනීම' : 'Self-Pickup', icon: '🛍️', color: '#7C3AED' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      aria-label="About Kev & Thash Sweet Treats"
    >
      {/* Decorative background blurs */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-100/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Badge & Title */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D1A0A] font-playfair tracking-tight mb-4">
            {t.about.titleLine1}{' '}
            <span className="italic text-pink-600">{t.about.titleLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-[#7A3F2A] leading-relaxed">
            {lang === 'si'
              ? 'මලමුල්ල, පානදුරේ අපේ කුස්සියේ සිට ඔබේ සෑම විශේෂ සැමරුමකටම ආදරයෙන් පිළිස්සූ නැවුම් කේක් නිර්මාණ.'
              : 'From our kitchen in Malamulla, Panadura to your celebrations — handcrafted custom cakes baked with true passion.'}
          </p>
        </div>

        {/* Two Column Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Brand Visual Showcase */}
          <div
            className="relative flex justify-center transition-all duration-700 delay-100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
            }}
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-pink-50 to-pink-100/80 rounded-3xl p-8 border border-pink-200 shadow-xl text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full overflow-hidden ring-4 ring-pink-400 shadow-lg mb-6">
                <Image
                  src="/KevAndThashSweetTreatsLogo.png"
                  alt="Kev & Thash Sweet Treats"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>

              <h3 className="font-playfair text-2xl font-bold text-[#3D1A0A]">
                Kev &amp; Thash
              </h3>
              <p className="text-sm font-semibold text-pink-600 mt-1 uppercase tracking-wider">
                {t.about.signatureRole}
              </p>
              <div className="mt-4 pt-4 border-t border-pink-200/80 flex items-center justify-center gap-2 text-xs font-bold text-[#7A3F2A]">
                <span>📍 Malamulla, Panadura</span>
                <span>•</span>
                <span>🇱🇰 Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Right: Story Paragraphs */}
          <div
            className="flex flex-col space-y-5 text-[#5A2D0C] leading-relaxed text-base sm:text-lg transition-all duration-700 delay-200"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
            }}
          >
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#3D1A0A]">
              {t.about.storyTitle}
            </h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 text-sm sm:text-base font-medium text-pink-900">
              🛍️ <strong>{lang === 'si' ? 'ස්ථානයෙන් ලබාගැනීම:' : 'Self-Pickup Notice:'}</strong> {t.about.p4}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-pink-50/60 rounded-2xl p-6 text-center border border-pink-200/70 shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="text-3xl block mb-2" aria-hidden="true">
                {stat.icon}
              </span>
              <p
                className="text-2xl sm:text-3xl font-extrabold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#5A2D0C]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm hover:shadow-md hover:border-pink-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {i === 0 ? '🌾' : i === 1 ? '💝' : i === 2 ? '🎨' : '🛍️'}
              </div>
              <h4 className="font-bold text-lg text-[#3D1A0A] mb-2 font-playfair">
                {v.title}
              </h4>
              <p className="text-sm text-[#7A3F2A] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
