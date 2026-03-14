import React, { createContext, useContext, useState, useEffect } from 'react';
import ar from '@/locales/ar.json';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

type Language = 'ar' | 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = { ar, fr, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('site-lang') as Language;
    return saved || 'ar';
  });

  const setLang = (newLang: Language) => {
    localStorage.setItem('site-lang', newLang);
    setLangState(newLang);
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
  }, [lang, dir]);

  const t = (key: string): string => {
    return (
      translations[lang]?.[key] ||
      translations['ar']?.[key] ||
      translations['en']?.[key] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
