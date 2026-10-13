'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.events, href: '#events' },
    { label: t.nav.about, href: '#about' },
    { label: lang === 'si' ? 'ඇගයීම්' : 'Reviews', href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = ['home', 'menu', 'events', 'about', 'testimonials', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) {
        setActiveSection(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-pink-100/50 border-b border-pink-100'
            : 'bg-white/85 backdrop-blur-sm border-b border-pink-100/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo + Brand */}
            <Link
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
              aria-label="Kev & Thash Sweet Treats – Home"
            >
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-pink-300 group-hover:ring-pink-500 transition-all duration-300 shadow-sm">
                <Image
                  src="/KevAndThashSweetTreatsLogo.png"
                  alt="Kev & Thash Sweet Treats Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#3D1A0A] group-hover:text-pink-600 transition-colors">
                  Kev &amp; Thash
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-pink-500">
                  Sweet Treats
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-[#3D1A0A] hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-pink-500 transition-all duration-300 ${
                        isActive ? 'w-4' : 'w-0'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right Controls: Language Switcher & WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher Pill */}
              <div
                className="flex items-center bg-pink-50 border border-pink-200 rounded-full p-1 shadow-inner text-xs font-bold"
                role="group"
                aria-label="Language selection"
              >
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    lang === 'en'
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-[#3D1A0A] hover:text-pink-600'
                  }`}
                  aria-pressed={lang === 'en'}
                  aria-label="English"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('si')}
                  className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    lang === 'si'
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'text-[#3D1A0A] hover:text-pink-600'
                  }`}
                  aria-pressed={lang === 'si'}
                  aria-label="Sinhala"
                >
                  සිංහල
                </button>
              </div>

              {/* WhatsApp Order CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm font-bold px-4 py-2.5 rounded-full shadow-md shadow-green-100 transition-all duration-200"
                aria-label="Order on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="whitespace-nowrap">{t.nav.orderNow}</span>
              </a>
            </div>

            {/* Mobile Controls (Lang toggle + Hamburger) */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'si' : 'en')}
                className="px-2.5 py-1 text-xs font-bold rounded-full bg-pink-100 text-pink-700 border border-pink-200"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'සිංහල' : 'English'}
              </button>

              <button
                onClick={() => setIsMobileOpen((o) => !o)}
                className="p-2 rounded-lg transition-colors duration-200 text-[#3D1A0A] hover:bg-pink-50"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 rounded-full bg-current origin-top-left transition-all duration-300 ${
                      isMobileOpen ? 'rotate-45 translate-x-0.5' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 rounded-full bg-current transition-all duration-300 ${
                      isMobileOpen ? 'opacity-0 -translate-x-2' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 rounded-full bg-current origin-bottom-left transition-all duration-300 ${
                      isMobileOpen ? '-rotate-45 translate-x-0.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-pink-100">
            <span className="font-extrabold text-[#3D1A0A] text-lg">
              {lang === 'si' ? 'මෙනුව' : 'Menu'}
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-1.5 rounded-full hover:bg-pink-50 text-[#3D1A0A] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Language Switcher in Mobile Drawer */}
          <div className="px-6 pt-4 pb-2">
            <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-2">
              {lang === 'si' ? 'භාෂාව තෝරන්න' : 'Choose Language'}
            </p>
            <div className="flex rounded-xl bg-pink-50 p-1 border border-pink-200">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                  lang === 'en' ? 'bg-pink-600 text-white shadow-sm' : 'text-[#3D1A0A]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('si')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                  lang === 'si' ? 'bg-pink-600 text-white shadow-sm' : 'text-[#3D1A0A]'
                }`}
              >
                සිංහල
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-left px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                    isActive
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-[#3D1A0A] hover:bg-pink-50 hover:text-pink-600'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Mobile WhatsApp CTA */}
          <div className="px-6 pb-8 border-t border-pink-100 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-green-100 w-full transition-all duration-200 active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{t.nav.orderNow}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
