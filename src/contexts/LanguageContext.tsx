import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'fr' | 'en';

interface LanguageContextType {
lang: Language;
setLang: (lang: Language) => void;
t: (key: string) => string;
dir: 'rtl' | 'ltr';
}

const translations: Record<Language, Record<string, string>> = {
ar: {
'nav.home': 'الرئيسية',
'nav.services': 'خدماتنا',
'nav.pricing': 'الأسعار',
'nav.portfolio': 'أعمالنا',
'nav.faq': 'أسئلة شائعة',
'nav.contact': 'تواصل معنا',

'contact.title': 'تواصل معنا',
'contact.subtitle': 'هل أنت مستعد لبدء مشروعك؟ تواصل معنا الآن',
'contact.name': 'الاسم الكامل',
'contact.email': 'البريد الإلكتروني',
'contact.phone': 'رقم الهاتف',
'contact.message': 'وصف المشروع',
'contact.send': 'أرسل الطلب',

'contact.whatsapp': 'تواصل عبر واتساب',
'contact.whatsapp.title': 'تواصل عبر واتساب',

},

fr: {
'nav.home': 'Accueil',
'nav.services': 'Services',
'nav.pricing': 'Tarifs',
'nav.portfolio': 'Portfolio',
'nav.faq': 'FAQ',
'nav.contact': 'Contact',

'contact.title': 'Contactez-nous',
'contact.subtitle': 'Prêt à lancer votre projet ? Contactez-nous maintenant',
'contact.name': 'Nom complet',
'contact.email': 'Email',
'contact.phone': 'Téléphone',
'contact.message': 'Description du projet',
'contact.send': 'Envoyer',

'contact.whatsapp': 'Contacter via WhatsApp',
'contact.whatsapp.title': 'Contact via WhatsApp',

},

en: {
'nav.home': 'Home',
'nav.services': 'Services',
'nav.pricing': 'Pricing',
'nav.portfolio': 'Portfolio',
'nav.faq': 'FAQ',
'nav.contact': 'Contact',

'contact.title': 'Contact Us',
'contact.subtitle': 'Ready to start your project? Contact us now',
'contact.name': 'Full Name',
'contact.email': 'Email',
'contact.phone': 'Phone',
'contact.message': 'Project Description',
'contact.send': 'Send Request',

'contact.whatsapp': 'Contact via WhatsApp',
'contact.whatsapp.title': 'Contact via WhatsApp',

}
};

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