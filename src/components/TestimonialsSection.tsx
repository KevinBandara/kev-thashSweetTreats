'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FFF5F7] to-[#FFF5F7] relative"
      aria-label="Customer Reviews — Kev & Thash Sweet Treats"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-4">
            {t.testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D1A0A] font-playfair tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A3F2A] leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => {
            const authorName = lang === 'si' ? review.nameSi : review.name;
            const authorLocation = lang === 'si' ? review.locationSi : review.location;
            const reviewText = lang === 'si' ? review.reviewSi : review.review;
            const occasionText = lang === 'si' ? review.occasionSi : review.occasion;

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base text-[#5A2D0C] leading-relaxed italic mb-6">
                    &ldquo;{reviewText}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-pink-100 text-pink-700 font-extrabold flex items-center justify-center text-base shadow-inner">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#3D1A0A]">
                        {authorName}
                      </h4>
                      <p className="text-xs text-pink-600 font-semibold">
                        📍 {authorLocation}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-pink-50 text-pink-700 border border-pink-200">
                    {occasionText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
