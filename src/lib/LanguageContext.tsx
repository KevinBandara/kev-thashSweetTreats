'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'kt_sweet_treats_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'en' || savedLang === 'si') {
        setLangState(savedLang);
        document.documentElement.lang = savedLang === 'si' ? 'si' : 'en';
      }
    } catch {
      // localStorage may not be accessible in private browsing
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang === 'si' ? 'si' : 'en';
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'si' : 'en');
  };

  const t = useMemo(() => {
    return translations[lang] ?? translations.en;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
