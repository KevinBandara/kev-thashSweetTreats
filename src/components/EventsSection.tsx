'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { EVENT_PACKAGES } from '@/lib/constants';
import { getWhatsAppPackageUrl, getWhatsAppEventUrl } from '@/lib/utils';

export default function EventsSection() {
  const { t, lang } = useLanguage();

  const occasions = [
    {
      emoji: '🎂',
      title: t.events.occasions.Birthday,
      desc: t.events.occasions.BirthdayDesc,
    },
    {
      emoji: '💍',
      title: t.events.occasions.Wedding,
      desc: t.events.occasions.WeddingDesc,
    },
    {
      emoji: '🏢',
      title: t.events.occasions.Corporate,
      desc: t.events.occasions.CorporateDesc,
    },
    {
      emoji: '🍼',
      title: t.events.occasions.BabyShower,
      desc: t.events.occasions.BabyShowerDesc,
    },
    {
      emoji: '🎓',
      title: t.events.occasions.Graduation,
      desc: t.events.occasions.GraduationDesc,
    },
    {
      emoji: '💕',
      title: t.events.occasions.Anniversary,
      desc: t.events.occasions.AnniversaryDesc,
    },
  ];

  const handlePackageClick = (pkgName: string, price: string) => {
    const url = getWhatsAppPackageUrl(pkgName, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOccasionClick = (occasionName: string) => {
    const url = getWhatsAppEventUrl(occasionName);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="events"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative"
      aria-label="Events and Celebrations — Kev & Thash Sweet Treats"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-4">
            {t.events.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D1A0A] font-playfair tracking-tight mb-4">
            {t.events.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A3F2A] leading-relaxed">
            {t.events.subtitle}
          </p>
        </div>

        {/* 6 Occasion Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {occasions.map((occ, idx) => (
            <div
              key={idx}
              onClick={() => handleOccasionClick(occ.title)}
              className="bg-pink-50/40 rounded-2xl p-6 border border-pink-100 hover:border-pink-300 hover:bg-pink-50/80 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {occ.emoji}
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#3D1A0A] mb-2 group-hover:text-pink-600 transition-colors">
                {occ.title}
              </h3>
              <p className="text-sm text-[#7A3F2A] leading-relaxed">
                {occ.desc}
              </p>
              <p className="mt-4 text-xs font-bold text-pink-600 flex items-center gap-1 group-hover:underline">
                <span>{lang === 'si' ? 'විමසන්න' : 'Enquire on WhatsApp'}</span>
                <span>→</span>
              </p>
            </div>
          ))}
        </div>

        {/* Packages Header & Malamulla Notice */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3D1A0A] font-playfair mb-3">
            {t.events.packagesTitle}
          </h3>
          <p className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
            📍 {t.events.pickupNote}
          </p>
        </div>

        {/* Packages Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_PACKAGES.map((pkg) => {
            const pkgName = lang === 'si' ? pkg.nameSi : pkg.name;
            const pkgPrice = lang === 'si' ? pkg.priceSi : pkg.price;
            const pkgTagline = lang === 'si' ? pkg.taglineSi : pkg.tagline;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.recommended
                    ? 'bg-gradient-to-b from-pink-50 to-white border-2 border-pink-400 shadow-xl scale-100 md:scale-105 z-10'
                    : 'bg-white border border-pink-200 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-pink-600 text-white shadow-md">
                    {t.events.mostPopular}
                  </span>
                )}

                <div>
                  <h4 className="font-playfair text-2xl font-bold text-[#3D1A0A] mb-1">
                    {pkgName}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A3F2A] mb-6">
                    {pkgTagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-pink-100">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#3D1A0A]">
                      {pkgPrice}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => {
                      const text = lang === 'si' ? feat.textSi : feat.text;
                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            feat.included ? 'text-[#3D1A0A]' : 'text-gray-400 line-through'
                          }`}
                        >
                          <span
                            className={`flex-shrink-0 mt-0.5 text-xs ${
                              feat.included ? 'text-pink-600' : 'text-gray-300'
                            }`}
                          >
                            {feat.included ? '✓' : '✕'}
                          </span>
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button
                  onClick={() => handlePackageClick(pkgName, pkgPrice)}
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                    pkg.recommended
                      ? 'bg-pink-600 hover:bg-pink-700 text-white shadow-md shadow-pink-200'
                      : 'bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-300'
                  }`}
                >
                  <span>💬</span>
                  <span>{t.events.quoteBtn}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
