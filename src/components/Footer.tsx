'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  ADDRESS_SI,
  WHATSAPP_LINK,
  INSTAGRAM,
  FACEBOOK,
} from '@/lib/constants';

export default function Footer() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.about, href: '#about' },
    { label: lang === 'si' ? 'ඇගයීම්' : 'Reviews', href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#3D1A0A] text-[#FDEBD0] relative" aria-label="Site footer">
      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 fill-[#FFF5F7]"
        >
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 – Brand / About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4 group" aria-label="Back to top">
              <div className="relative w-14 h-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-pink-400/50 group-hover:ring-pink-400 transition-all shadow-md">
                <Image
                  src="/KevAndThashSweetTreatsLogo.png"
                  alt="Kev & Thash Sweet Treats Logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-[#FDEBD0] text-lg tracking-tight">
                  Kev &amp; Thash
                </span>
                <span className="text-[11px] font-bold text-pink-300 tracking-widest uppercase">
                  Sweet Treats
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#FDEBD0]/70 leading-relaxed mt-3 max-w-xs">
              {t.footer.tagline}
            </p>

            <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-pink-950/60 text-pink-300 border border-pink-800">
              <span>🇱🇰</span>
              <span>Malamulla, Panadura, Sri Lanka</span>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-pink-300 mb-5">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[#FDEBD0]/80 hover:text-pink-300 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-pink-300 mb-5">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-start gap-3 text-sm text-[#FDEBD0]/80 hover:text-pink-300 transition-colors group"
                >
                  <span className="text-pink-400">📞</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-sm text-[#FDEBD0]/80 hover:text-pink-300 transition-colors group"
                >
                  <span className="text-pink-400">✉️</span>
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-[#FDEBD0]/80">
                  <span className="text-pink-400">📍</span>
                  <address className="not-italic leading-relaxed">
                    {lang === 'si' ? ADDRESS_SI : ADDRESS}
                  </address>
                </div>
              </li>
              <li className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md transition-all active:scale-95"
                >
                  <span>💬</span>
                  <span>WhatsApp 071 851 1165</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 – Operating Hours & Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-pink-300 mb-5">
              {t.footer.hours}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FDEBD0]/70 mb-6">
              <li className="flex justify-between">
                <span>Mon – Sat:</span>
                <span className="text-pink-200 font-semibold">9:00 AM – 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-pink-200 font-semibold">10:00 AM – 5:00 PM</span>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-pink-300 mb-3">
              Social Links
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-900/60 hover:bg-pink-600 text-white flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-900/60 hover:bg-blue-600 text-white flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDEBD0]/60 text-center sm:text-left">
          <p>
            © {currentYear} {t.nav.home === 'Home' ? 'Kev & Thash Sweet Treats' : 'Kev & Thash Sweet Treats'}. {t.footer.copyright}
          </p>
          <p className="font-semibold text-pink-300">
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
