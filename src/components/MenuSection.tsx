'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MENU_ITEMS, MenuCategory } from '@/lib/constants';
import { getWhatsAppOrderUrl, getWhatsAppGeneralUrl } from '@/lib/utils';

export default function MenuSection() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const categories: MenuCategory[] = [
    'All',
    'Cakes',
    'Combos & Bento',
    'Cupcakes',
    'Brownies & Jars',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleOrder = (name: string, priceLabel: string) => {
    const url = getWhatsAppOrderUrl(name, priceLabel);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="menu"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] via-[#FFF9FA] to-white relative"
      aria-label="Our Menu — Kev & Thash Sweet Treats"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-4">
            {t.menu.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D1A0A] font-playfair tracking-tight mb-4">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A3F2A] leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14" role="tablist">
          {categories.map((cat) => {
            const label = t.menu.categories[cat] || cat;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-200 scale-105'
                    : 'bg-white text-[#3D1A0A] border border-pink-200 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const itemName = lang === 'si' ? item.nameSi : item.name;
            const itemDesc = lang === 'si' ? item.descriptionSi : item.description;
            const priceDisplay = lang === 'si' ? item.priceLabelSi : item.priceLabel;
            const badgeDisplay = lang === 'si' ? item.badgeSi : item.badge;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-pink-100 shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Emoji & Badge Top */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: item.circleColor }}
                    >
                      {item.emoji}
                    </div>
                    {badgeDisplay && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pink-100 text-pink-700 border border-pink-200">
                        {badgeDisplay}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair font-bold text-xl text-[#3D1A0A] group-hover:text-pink-600 transition-colors mb-2">
                    {itemName}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#7A3F2A] leading-relaxed line-clamp-3 mb-4">
                    {itemDesc}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-pink-100/80 flex items-center justify-between gap-2">
                  <span className="font-extrabold text-base sm:text-lg text-[#3D1A0A]">
                    {priceDisplay}
                  </span>

                  <button
                    onClick={() => handleOrder(itemName, priceDisplay)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-green-500 hover:bg-green-600 active:scale-95 shadow-sm transition-all duration-200 cursor-pointer"
                    aria-label={`Order ${itemName} on WhatsApp`}
                  >
                    <span>💬</span>
                    <span>{lang === 'si' ? 'ඇණවුම්' : 'Order'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Savory Treats Coming Soon Teaser */}
        <div className="mt-14 bg-gradient-to-r from-amber-50 via-orange-50 to-pink-50 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-100/90 border border-amber-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner shrink-0">
            🥟
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-200/80 text-amber-900 border border-amber-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              {t.menu.savoryTeaserBadge}
            </div>
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#3D1A0A] mb-1">
              {t.menu.savoryTeaserTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#7A3F2A] leading-relaxed">
              {t.menu.savoryTeaserSub}
            </p>
          </div>
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-200 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {lang === 'si' ? 'විස්තර අසන්න' : 'Enquire on WhatsApp'}
          </a>
        </div>

        {/* Custom Cake CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl sm:text-3xl font-extrabold mb-2">
              {t.menu.customCtaTitle}
            </h3>
            <p className="text-pink-100 text-sm sm:text-base max-w-xl">
              {lang === 'si'
                ? 'ඔබේ මනසේ ඇති ඕනෑම මෝස්තරයක් හෝ තේමාවක් අපට WhatsApp මගින් එවන්න. අපි එය සාර්ථකව නිර්මාණය කර දෙන්නෙමු.'
                : 'Send us your Pinterest photos, color palettes, or ideas on WhatsApp. We bake custom designs to perfection.'}
            </p>
          </div>

          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 rounded-full bg-white text-pink-600 hover:bg-pink-50 font-bold text-base shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {t.menu.customCtaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
