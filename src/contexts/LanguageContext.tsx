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

    'hero.badge': 'E-Commerce Morocco',
    'hero.title': 'أنشئ متجرك الإلكتروني وابدأ البيع في المغرب',
    'hero.subtitle': 'نصمم لك متجراً إلكترونياً احترافياً يساعدك على بيع منتجاتك أونلاين',
    'hero.cta': 'ابدأ متجرك الآن',
    'hero.secondary': 'اكتشف خدماتنا',

    'hero.stat.delivery': 'تسليم سريع',
    'hero.stat.stores': 'متجر مُنجز',
    'hero.stat.satisfaction': 'رضا العملاء',
    'hero.scroll': 'scroll',

    'portfolio.title': 'نماذج من أعمالنا',
    'portfolio.subtitle': 'متاجر إلكترونية صممناها لعملائنا',
    'portfolio.preview': 'معاينة المتجر',
    'portfolio.enter_store': 'دخول المتجر',

    'portfolio.cosmetics': 'متجر مستحضرات التجميل',
    'portfolio.cosmetics.desc': 'متجر إلكتروني احترافي لبيع منتجات التجميل والعناية بالبشرة.',
    'portfolio.visit': 'زيارة المتجر',

    'portfolio.cta.title': 'هل تريد متجرًا مثل هذا؟',
    'portfolio.cta.want_store': 'أريد متجري الآن',

    'faq.title': 'أسئلة شائعة',
    'faq.related': 'روابط ذات صلة',

    'footer.desc': 'نبني متاجر إلكترونية احترافية للتجار المغاربة.',
    'footer.links': 'روابط سريعة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.available': 'متاح لمشاريع جديدة',
    'footer.whatsapp': 'واتساب',
    'footer.made': 'صُنع بـ',

    'testimonials.tag': 'آراء العملاء',
    'testimonials.title.part1': 'ماذا يقول',
    'testimonials.title.part2': 'عملاؤنا',
    'testimonials.subtitle': '+50 متجر إلكتروني ناجح في المغرب',
    'testimonials.stat.rating': 'متوسط التقييم',
    'testimonials.stat.clients': 'عميل سعيد',
    'testimonials.stat.recommend': 'يوصون بنا',
    'testimonials.cta': 'ابدأ متجرك اليوم',

    'testimonials.1.name': 'أحمد بنعلي',
    'testimonials.1.role': 'صاحب متجر ملابس — الدار البيضاء',
    'testimonials.1.avatar': 'أ',
    'testimonials.1.text': 'أنشأ لي Brandixo متجري في أقل من 48 ساعة.',

    'testimonials.2.name': 'فاطمة الزهراء',
    'testimonials.2.role': 'صاحبة متجر عطور — مراكش',
    'testimonials.2.avatar': 'ف',
    'testimonials.2.text': 'الفريق ساعدني خطوة بخطوة.',

    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء مشروعك؟',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'وصف المشروع',
    'contact.send': 'أرسل الطلب',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال رسالتك بنجاح ✓',
    'contact.error': 'حدث خطأ أثناء الإرسال',
    'contact.error.network': 'خطأ في الاتصال بالشبكة',

    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.whatsapp.title': 'تواصل عبر واتساب',
    'contact.whatsapp.subtitle': 'هل تفضل التواصل المباشر؟',
    'contact.whatsapp.message': 'مرحباً، أريد إنشاء متجر إلكتروني'
  },

  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.badge': 'E-Commerce Maroc',
    'hero.title': 'Créez votre boutique en ligne',
    'hero.subtitle': 'Nous créons votre boutique e-commerce professionnelle',
    'hero.cta': 'Lancez votre boutique',
    'hero.secondary': 'Découvrir nos services',

    'hero.stat.delivery': 'Livraison rapide',
    'hero.stat.stores': 'Boutiques créées',
    'hero.stat.satisfaction': 'Satisfaction client',
    'hero.scroll': 'défiler',

    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Boutiques créées pour nos clients',
    'portfolio.preview': 'Aperçu de la boutique',
    'portfolio.enter_store': 'Entrer dans la boutique',

    'portfolio.cosmetics': 'Boutique cosmétique',
    'portfolio.cosmetics.desc': 'Boutique en ligne professionnelle pour produits de beauté.',
    'portfolio.visit': 'Visiter la boutique',

    'portfolio.cta.title': 'Vous voulez une boutique comme celle-ci ?',
    'portfolio.cta.want_store': 'Je veux ma boutique',

    'faq.title': 'Questions fréquentes',
    'faq.related': 'Liens connexes',

    'footer.desc': 'Nous créons des boutiques e-commerce professionnelles.',
    'footer.links': 'Liens rapides',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'footer.rights': 'Tous droits réservés',
    'footer.available': 'Disponible pour de nouveaux projets',
    'footer.whatsapp': 'WhatsApp',
    'footer.made': 'Fait avec',

    'testimonials.tag': 'Avis clients',
    'testimonials.title.part1': 'Ce que disent',
    'testimonials.title.part2': 'nos clients',
    'testimonials.subtitle': '+50 boutiques réussies au Maroc',
    'testimonials.stat.rating': 'Note moyenne',
    'testimonials.stat.clients': 'Client satisfait',
    'testimonials.stat.recommend': 'Nous recommandent',
    'testimonials.cta': "Lancez votre boutique",

    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à lancer votre projet ?',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Description du projet',
    'contact.send': 'Envoyer'
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    'hero.badge': 'E-Commerce Morocco',
    'hero.title': 'Build Your Online Store in Morocco',
    'hero.subtitle': 'We create professional e-commerce stores',
    'hero.cta': 'Start Your Store Now',
    'hero.secondary': 'Discover Our Services',

    'hero.stat.delivery': 'Fast delivery',
    'hero.stat.stores': 'Stores built',
    'hero.stat.satisfaction': 'Client satisfaction',
    'hero.scroll': 'scroll',

    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Online stores we built for our clients',
    'portfolio.preview': 'Preview Store',
    'portfolio.enter_store': 'Enter Store',

    'portfolio.cosmetics': 'Cosmetics Store',
    'portfolio.cosmetics.desc': 'Professional beauty products online store.',
    'portfolio.visit': 'Visit Store',

    'portfolio.cta.title': 'Want a store like this?',
    'portfolio.cta.want_store': 'I want my store',

    'faq.title': 'Frequently Asked Questions',
    'faq.related': 'Related links',

    'footer.desc': 'We build professional e-commerce stores.',
    'footer.links': 'Quick Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': 'All rights reserved',
    'footer.available': 'Available for new projects',
    'footer.whatsapp': 'WhatsApp',
    'footer.made': 'Made with',

    'testimonials.tag': 'Client Reviews',
    'testimonials.title.part1': 'What our',
    'testimonials.title.part2': 'clients say',
    'testimonials.subtitle': '+50 successful online stores in Morocco',
    'testimonials.stat.rating': 'Average rating',
    'testimonials.stat.clients': 'Happy client',
    'testimonials.stat.recommend': 'Recommend us',
    'testimonials.cta': 'Start your store today',

    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project?',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Project description',
    'contact.send': 'Send Request'
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