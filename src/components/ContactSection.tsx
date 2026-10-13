'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import {
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  EMAIL,
  ADDRESS,
  ADDRESS_SI,
  GOOGLE_MAPS_URL,
} from '@/lib/constants';
import { getWhatsAppFromFormUrl, getWhatsAppGeneralUrl } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  occasion?: string;
  message?: string;
}

export default function ContactSection() {
  const { t, lang } = useLanguage();

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    occasion: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const occasionsList = [
    { value: 'Birthday', label: lang === 'si' ? 'උපන්දිනය (Birthday)' : 'Birthday' },
    { value: 'Wedding', label: lang === 'si' ? 'විවාහ මංගල්‍යය (Wedding)' : 'Wedding' },
    { value: 'Anniversary', label: lang === 'si' ? 'සංවත්සරය (Anniversary)' : 'Anniversary' },
    { value: 'Baby Shower', label: lang === 'si' ? 'බිළිඳු සාදය (Baby Shower)' : 'Baby Shower' },
    { value: 'Corporate', label: lang === 'si' ? 'කාර්යාලීය උත්සවය (Corporate)' : 'Corporate' },
    { value: 'Other', label: lang === 'si' ? 'වෙනත් (Other)' : 'Other' },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = lang === 'si' ? 'කරුණාකර ඔබේ නම ඇතුළත් කරන්න' : 'Please enter your name';
    }
    if (!form.phone.trim()) {
      newErrors.phone =
        lang === 'si' ? 'දුරකථන හෝ WhatsApp අංකය ඇතුළත් කරන්න' : 'Please enter your phone number';
    }
    if (!form.occasion.trim()) {
      newErrors.occasion =
        lang === 'si' ? 'කරුණාකර අවස්ථාව තෝරන්න' : 'Please select an occasion';
    }
    if (!form.message.trim()) {
      newErrors.message =
        lang === 'si' ? 'කරුණාකර කේක් විස්තර සටහන් කරන්න' : 'Please share cake details';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const waUrl = getWhatsAppFromFormUrl({
      name: form.name,
      email: form.email,
      phone: form.phone,
      occasion: form.occasion,
      message: form.message,
    });

    setLastWaUrl(waUrl);
    setSubmitted(true);

    // Open WhatsApp directly in new window/tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', occasion: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setLastWaUrl('');
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F7] via-white to-[#FFF5F7] relative"
      aria-label="Order & Contact — Kev & Thash Sweet Treats"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-pink-100 text-pink-700 border border-pink-300 mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D1A0A] font-playfair tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[#7A3F2A] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: WhatsApp Form & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: WhatsApp Order Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-pink-200 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-pink-100">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#3D1A0A]">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-[#7A3F2A] mt-1">
                  💬 {t.contact.submitNote}
                </p>
              </div>
              <span className="text-3xl" aria-hidden="true">
                🎂
              </span>
            </div>

            {submitted ? (
              /* Success / WhatsApp Opened State */
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
                  ✓
                </div>
                <h4 className="font-playfair text-2xl font-bold text-[#3D1A0A]">
                  {lang === 'si' ? 'WhatsApp වෙත යොමු කරන ලදී!' : 'Ready to Send on WhatsApp!'}
                </h4>
                <p className="text-sm text-[#7A3F2A] max-w-md mx-auto">
                  {lang === 'si'
                    ? 'ඔබගේ පණිවිඩය සමඟ WhatsApp විවෘත වී ඇත. WhatsApp විවෘත නොවූයේ නම් පහත බොත්තම ඔබන්න:'
                    : 'Your enquiry is prepared. If WhatsApp did not open automatically, click the button below to send your message directly:'}
                </p>

                {lastWaUrl && (
                  <div className="pt-2">
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-lg shadow-green-200 active:scale-95 transition-all"
                    >
                      <span>💬</span>
                      <span>
                        {lang === 'si' ? 'WhatsApp මගින් විවෘත කරන්න' : 'Open WhatsApp Now'}
                      </span>
                    </a>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-pink-600 hover:text-pink-800 underline cursor-pointer"
                  >
                    {lang === 'si' ? 'තවත් පණිවිඩයක් එවන්න' : 'Send another enquiry'}
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1A0A] mb-1.5">
                    {t.contact.nameLabel} <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-pink-200 focus:ring-pink-300 focus:border-pink-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1A0A] mb-1.5">
                      {t.contact.phoneLabel} <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-pink-200 focus:ring-pink-300 focus:border-pink-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1A0A] mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500 transition-all"
                    />
                  </div>
                </div>

                {/* Occasion Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1A0A] mb-1.5">
                    {t.contact.occasionLabel} <span className="text-pink-600">*</span>
                  </label>
                  <select
                    value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all bg-white ${
                      errors.occasion
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-pink-200 focus:ring-pink-300 focus:border-pink-500'
                    }`}
                  >
                    <option value="">{t.contact.occasionPlaceholder}</option>
                    {occasionsList.map((occ) => (
                      <option key={occ.value} value={occ.value}>
                        {occ.label}
                      </option>
                    ))}
                  </select>
                  {errors.occasion && (
                    <p className="text-xs text-red-500 mt-1 font-semibold">{errors.occasion}</p>
                  )}
                </div>

                {/* Cake Details Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1A0A] mb-1.5">
                    {t.contact.messageLabel} <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-pink-200 focus:ring-pink-300 focus:border-pink-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 font-semibold">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-base text-white bg-green-500 hover:bg-green-600 active:scale-98 shadow-lg shadow-green-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="text-lg">💬</span>
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Panadura Pickup & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Card */}
            <div className="bg-white rounded-3xl p-8 border border-pink-200 shadow-md">
              <h3 className="font-playfair text-xl font-bold text-[#3D1A0A] mb-6">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg flex-shrink-0 text-pink-600">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A3F2A]">
                      {t.contact.phoneText}
                    </p>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-base font-bold text-[#3D1A0A] hover:text-pink-600 transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg flex-shrink-0 text-pink-600">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A3F2A]">
                      {t.contact.emailText}
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-base font-bold text-[#3D1A0A] hover:text-pink-600 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg flex-shrink-0 text-pink-600">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7A3F2A]">
                      {t.contact.addressText}
                    </p>
                    <p className="text-sm font-bold text-[#3D1A0A]">
                      {lang === 'si' ? ADDRESS_SI : ADDRESS}
                    </p>
                    <p className="text-xs text-pink-600 mt-0.5">
                      {lang === 'si'
                        ? '🛍️ ඇවිත් ලබාගත හැක (Self-Pickup)'
                        : '🛍️ Convenient Self-Pickup in Panadura'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-pink-100">
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full font-bold text-sm text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  <span>
                    {lang === 'si' ? 'සෘජුව WhatsApp පණිවිඩයක් එවන්න' : 'Direct WhatsApp Chat'}
                  </span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-pink-50/70 rounded-3xl p-6 border border-pink-200">
              <h4 className="font-playfair text-lg font-bold text-[#3D1A0A] mb-3">
                🕒 {t.contact.hoursTitle}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5A2D0C]">
                <li className="flex justify-between">
                  <span>{t.contact.hoursWeekday}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t.contact.hoursSunday}</span>
                </li>
              </ul>
              <p className="text-xs text-pink-700 font-semibold mt-3 pt-3 border-t border-pink-200/60">
                ⚠️ {t.contact.hoursNote}
              </p>
            </div>

            {/* Panadura Location Link */}
            <div className="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[#3D1A0A]">
                  {t.contact.pickupMapTitle}
                </p>
                <p className="text-xs text-[#7A3F2A]">
                  Western Province, Sri Lanka 🇱🇰
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold bg-pink-600 text-white hover:bg-pink-700 shadow-sm whitespace-nowrap transition-colors"
              >
                {t.contact.pickupMapBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
