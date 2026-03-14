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

    'hero.title': 'أنشئ متجرك الإلكتروني وابدأ البيع في المغرب',
    'hero.subtitle': 'نصمم لك متجراً إلكترونياً احترافياً يساعدك على بيع منتجاتك أونلاين',
    'hero.cta': 'ابدأ متجرك الآن',
    'hero.secondary': 'اكتشف خدماتنا',

    // مفاتيح Hero الجديدة
    'hero.badge': 'E-Commerce Morocco',
    'hero.stat.delivery': 'تسليم سريع',
    'hero.stat.stores': 'متجر مُنجز',
    'hero.stat.satisfaction': 'رضا العملاء',
    'hero.scroll': 'scroll',

    'trust.title': 'لماذا Brandixo؟',
    'trust.1': 'متجر جاهز خلال 48 ساعة',
    'trust.2': 'تصميم احترافي متوافق مع الهاتف',
    'trust.3': 'ربط الدفع والتوصيل في المغرب',
    'trust.4': 'دعم تقني بعد إطلاق المتجر',

    'portfolio.title': 'نماذج من أعمالنا',
    'portfolio.subtitle': 'متاجر إلكترونية صممناها لعملائنا',
    'portfolio.preview': 'معاينة المتجر',
    'portfolio.enter_store': 'دخول المتجر',

    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء مشروعك؟ تواصل معنا الآن',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'وصف المشروع',
    'contact.send': 'أرسل الطلب',

    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.whatsapp.title': 'تواصل عبر واتساب',
    'contact.whatsapp.subtitle': 'هل تفضل التواصل المباشر؟ نحن هنا للرد على استفساراتك',
    'contact.whatsapp.message': 'مرحباً، أريد إنشاء متجر إلكتروني',

    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال رسالتك بنجاح ✓',
    'contact.error': 'حدث خطأ أثناء الإرسال',
    'contact.error.network': 'خطأ في الاتصال بالشبكة',

    // FAQ
    'faq.related': 'روابط ذات صلة',

    // Footer
    'footer.available': 'متاح لمشاريع جديدة',
    'footer.whatsapp': 'واتساب',
    'footer.made': 'صُنع بـ',
  },

  fr: {

    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.title': 'Créez votre boutique en ligne',
    'hero.subtitle': 'Nous créons votre boutique e-commerce professionnelle',
    'hero.cta': 'Lancez votre boutique',
    'hero.secondary': 'Découvrir nos services',

    // Hero
    'hero.badge': 'E-Commerce Maroc',
    'hero.stat.delivery': 'Livraison rapide',
    'hero.stat.stores': 'Boutiques créées',
    'hero.stat.satisfaction': 'Satisfaction client',
    'hero.scroll': 'défiler',

    'trust.title': 'Pourquoi Brandixo ?',
    'trust.1': 'Boutique prête en 48 heures',
    'trust.2': 'Design professionnel compatible mobile',
    'trust.3': 'Paiement et livraison intégrés au Maroc',
    'trust.4': 'Support technique après lancement',

    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Boutiques que nous avons créées',
    'portfolio.preview': 'Aperçu de la boutique',
    'portfolio.enter_store': 'Entrer dans la boutique',

    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à lancer votre projet ? Contactez-nous maintenant',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Description du projet',
    'contact.send': 'Envoyer',

    'contact.whatsapp': 'Contacter via WhatsApp',
    'contact.whatsapp.title': 'Contacter via WhatsApp',
    'contact.whatsapp.subtitle': 'Vous préférez un contact direct ? Nous sommes disponibles',
    'contact.whatsapp.message': 'Bonjour, je souhaite créer une boutique en ligne',

    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès ✓',
    'contact.error': "Erreur lors de l'envoi",
    'contact.error.network': 'Erreur réseau',

    'faq.related': 'Liens connexes',

    'footer.available': 'Disponible pour de nouveaux projets',
    'footer.whatsapp': 'WhatsApp',
    'footer.made': 'Fait avec',
  },

  en: {

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.title': 'Build Your Online Store',
    'hero.subtitle': 'We create professional e-commerce stores',
    'hero.cta': 'Start Your Store Now',
    'hero.secondary': 'Discover Our Services',

    // Hero
    'hero.badge': 'E-Commerce Morocco',
    'hero.stat.delivery': 'Fast delivery',
    'hero.stat.stores': 'Stores built',
    'hero.stat.satisfaction': 'Client satisfaction',
    'hero.scroll': 'scroll',

    'trust.title': 'Why Brandixo?',
    'trust.1': 'Store ready in 48 hours',
    'trust.2': 'Professional mobile-friendly design',
    'trust.3': 'Payment & delivery integration in Morocco',
    'trust.4': 'Technical support after launch',

    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Stores we built for our clients',
    'portfolio.preview': 'Preview Store',
    'portfolio.enter_store': 'Enter Store',

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Contact us now',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Project Description',
    'contact.send': 'Send Request',

    'contact.whatsapp': 'Contact via WhatsApp',
    'contact.whatsapp.title': 'Contact via WhatsApp',
    'contact.whatsapp.subtitle': "Prefer direct contact? We're here to answer your questions",
    'contact.whatsapp.message': 'Hello, I want to create an online store',

    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully ✓',
    'contact.error': 'Error sending message',
    'contact.error.network': 'Network error',

    'faq.related': 'Related links',

    'footer.available': 'Available for new projects',
    'footer.whatsapp': 'WhatsApp',
    'footer.made': 'Made with',
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