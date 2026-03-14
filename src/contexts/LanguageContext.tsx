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
    // ─── Nav ───────────────────────────────────────
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.pricing': 'الأسعار',
    'nav.portfolio': 'أعمالنا',
    'nav.faq': 'أسئلة شائعة',
    'nav.contact': 'تواصل معنا',

    // ─── Hero ──────────────────────────────────────
    'hero.badge': 'E-Commerce Morocco',
    'hero.title': 'أنشئ متجرك الإلكتروني وابدأ البيع في المغرب',
    'hero.subtitle': 'نصمم لك متجراً إلكترونياً احترافياً يساعدك على بيع منتجاتك أونلاين',
    'hero.cta': 'ابدأ متجرك الآن',
    'hero.secondary': 'اكتشف خدماتنا',
    'hero.stat.delivery': 'تسليم سريع',
    'hero.stat.stores': 'متجر مُنجز',
    'hero.stat.satisfaction': 'رضا العملاء',
    'hero.scroll': 'scroll',

    // ─── Trust ─────────────────────────────────────
    'trust.title': 'لماذا Brandixo؟',
    'trust.1': 'متجر جاهز خلال 48 ساعة',
    'trust.2': 'تصميم احترافي متوافق مع الهاتف',
    'trust.3': 'ربط الدفع والتوصيل في المغرب',
    'trust.4': 'دعم تقني بعد إطلاق المتجر',

    // ─── Services ──────────────────────────────────
    'services.title': 'ما الذي نقدمه لك؟',
    'services.subtitle': 'كل ما تحتاجه لإنشاء متجر إلكتروني ناجح في المغرب',
    'services.1': 'تصميم احترافي مخصص',
    'services.2': 'إضافة المنتجات والفئات',
    'services.3': 'ربط وسائل الدفع',
    'services.4': 'ربط شركات التوصيل',
    'services.5': 'سرعة تحميل عالية',
    'services.6': 'متوافق مع الهاتف 100%',
    'services.7': 'لوحة تحكم سهلة',

    // ─── Benefits ──────────────────────────────────
    'benefits.title': 'فوائد المتجر الإلكتروني',
    'benefits.1': 'وصول أوسع للعملاء',
    'benefits.1.desc': 'بيع منتجاتك لكل المغرب وليس فقط مدينتك',
    'benefits.2': 'تكاليف أقل',
    'benefits.2.desc': 'لا حاجة لمحل تجاري، وفر المصاريف وزد أرباحك',
    'benefits.3': 'بيانات ومبيعات',
    'benefits.3.desc': 'تابع مبيعاتك وفهم عملاءك بشكل أفضل',
    'benefits.4': 'نمو سريع',
    'benefits.4.desc': 'قابل للتوسع مع نمو مشروعك بدون تعقيد',

    // ─── How It Works ──────────────────────────────
    'how.title': 'كيف نعمل؟',
    'how.step1': 'التصميم والتخصيص',
    'how.step1.desc': 'نصمم متجرك حسب هوية علامتك التجارية وذوقك',
    'how.step2': 'الإعداد والربط',
    'how.step2.desc': 'نربط الدفع والتوصيل ونضيف منتجاتك',
    'how.step3': 'الإطلاق والدعم',
    'how.step3.desc': 'نطلق متجرك ونبقى معك بعد الإطلاق',

    // ─── Pricing ───────────────────────────────────
    'pricing.title': 'اختر الباقة المناسبة لك',
    'pricing.subtitle': 'أسعار شفافة بدون رسوم خفية',
    'pricing.popular': 'الأكثر طلباً',
    'pricing.cta': 'ابدأ الآن',
    'pricing.starter': 'البداية',
    'pricing.starter.desc': 'مثالية للمشاريع الصغيرة',
    'pricing.starter.price': '999 درهم',
    'pricing.pro': 'الاحترافية',
    'pricing.pro.desc': 'للمشاريع المتوسطة والمتنامية',
    'pricing.pro.price': '1,799 درهم',
    'pricing.premium': 'المتميزة',
    'pricing.premium.desc': 'للمشاريع الكبيرة والمتطورة',
    'pricing.premium.price': '2,999 درهم',
    'pricing.f1': 'تصميم احترافي مخصص',
    'pricing.f2': 'إضافة حتى 50 منتج',
    'pricing.f3': 'ربط الدفع والتوصيل',
    'pricing.f4': 'متجر متعدد اللغات',
    'pricing.f5': 'لوحة تحكم متقدمة',
    'pricing.f6': 'تحسين SEO كامل',
    'pricing.f7': 'تطبيق موبايل',
    'pricing.f8': 'دعم تقني مستمر',

    // ─── Portfolio ─────────────────────────────────
    'portfolio.title': 'نماذج من أعمالنا',
    'portfolio.subtitle': 'متاجر إلكترونية صممناها لعملائنا',
    'portfolio.preview': 'معاينة المتجر',
    'portfolio.enter_store': 'دخول المتجر',

    // ─── FAQ ───────────────────────────────────────
    'faq.title': 'أسئلة شائعة',
    'faq.related': 'روابط ذات صلة',
    'faq.q1': 'كم يستغرق إنشاء المتجر؟',
    'faq.a1': 'نسلم متجرك الإلكتروني كاملاً خلال 48 ساعة من تأكيد الطلب وتسليم المعلومات اللازمة.',
    'faq.q2': 'ما طرق الدفع المدعومة في المغرب؟',
    'faq.a2': 'ندعم CMI، PayZone، الدفع عند الاستلام، وتحويل بنكي. نختار ما يناسب نشاطك.',
    'faq.q3': 'هل يعمل المتجر على الهاتف؟',
    'faq.a3': 'نعم 100%. كل متاجرنا مصممة أولاً للهاتف لأن أغلب المتسوقين في المغرب يستخدمون الموبايل.',
    'faq.q4': 'هل أحتاج خبرة تقنية لإدارة المتجر؟',
    'faq.a4': 'لا، نوفر لك لوحة تحكم بسيطة وندربك على استخدامها. يمكنك إضافة منتجات وتتبع الطلبات بسهولة.',
    'faq.q5': 'ماذا بعد إطلاق المتجر؟',
    'faq.a5': 'نقدم دعماً تقنياً مستمراً. أي مشكلة أو تعديل، نحن متاحون للمساعدة.',

    // ─── Testimonials ──────────────────────────────
    'testimonials.tag': 'آراء العملاء',
    'testimonials.title.part1': 'ماذا يقول',
    'testimonials.title.part2': 'عملاؤنا',
    'testimonials.subtitle': '+50 متجر إلكتروني ناجح في المغرب — هذه قصصهم الحقيقية',
    'testimonials.stat.rating': 'متوسط التقييم',
    'testimonials.stat.clients': 'عميل سعيد',
    'testimonials.stat.recommend': 'يوصون بنا',
    'testimonials.cta': 'ابدأ متجرك اليوم',
    'testimonials.1.name': 'أحمد بنعلي',
    'testimonials.1.role': 'صاحب متجر ملابس — الدار البيضاء',
    'testimonials.1.avatar': 'أ',
    'testimonials.1.text': 'أنشأ لي Brandixo متجري في أقل من 48 ساعة. المبيعات ارتفعت 3 أضعاف في الشهر الأول. تصميم احترافي وخدمة ممتازة.',
    'testimonials.2.name': 'فاطمة الزهراء',
    'testimonials.2.role': 'صاحبة متجر عطور — مراكش',
    'testimonials.2.avatar': 'ف',
    'testimonials.2.text': 'كنت خايفة من فكرة البيع أونلاين، لكن الفريق شرح لي كل شيء وساعدني خطوة بخطوة. متجري الآن يبيع في كل المغرب.',
    'testimonials.3.name': 'يوسف الحسني',
    'testimonials.3.role': 'تاجر إلكترونيات — الرباط',
    'testimonials.3.avatar': 'ي',
    'testimonials.3.text': 'أفضل استثمار قمت به. المتجر سريع، احترافي، ويعمل على الموبايل بشكل مثالي. أنصح كل تاجر يريد التوسع.',
    'testimonials.4.name': 'سناء المنصوري',
    'testimonials.4.role': 'صاحبة متجر كوزميتيك — فاس',
    'testimonials.4.avatar': 'س',
    'testimonials.4.text': 'خدمة ما بعد البيع رائعة. دائماً متاحون للمساعدة. المتجر يعكس هوية ماركتي بشكل كامل.',
    'testimonials.5.name': 'كريم أيت علي',
    'testimonials.5.role': 'بائع مستلزمات رياضية — أكادير',
    'testimonials.5.avatar': 'ك',
    'testimonials.5.text': 'من أول يوم والطلبات تنهال! التصميم جذاب والدفع سهل للزبائن. شكراً Brandixo على هذا العمل الرائع.',
    'testimonials.6.name': 'نادية بوشتى',
    'testimonials.6.role': 'صاحبة متجر حلويات — طنجة',
    'testimonials.6.avatar': 'ن',
    'testimonials.6.text': 'حلم أصبح حقيقة. متجر أونلاين بتصميم فاخر وسعر معقول. العملاء دائماً يمدحون شكل الموقع.',

    // ─── Contact ───────────────────────────────────
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء مشروعك؟ تواصل معنا الآن',
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
    'contact.whatsapp.subtitle': 'هل تفضل التواصل المباشر؟ نحن هنا للرد على استفساراتك',
    'contact.whatsapp.message': 'مرحباً، أريد إنشاء متجر إلكتروني',

    // ─── Footer ────────────────────────────────────
    'footer.desc': 'نبني متاجر إلكترونية احترافية للتجار المغاربة. سريع، موثوق، وبأسعار مناسبة.',
    'footer.links': 'روابط سريعة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.available': 'متاح لمشاريع جديدة',
    'footer.whatsapp': 'واتساب',
    'footer.made': 'صُنع بـ',
  },

  fr: {
    // ─── Nav ───────────────────────────────────────
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.pricing': 'Tarifs',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // ─── Hero ──────────────────────────────────────
    'hero.badge': 'E-Commerce Maroc',
    'hero.title': 'Créez votre boutique en ligne',
    'hero.subtitle': 'Nous créons votre boutique e-commerce professionnelle au Maroc',
    'hero.cta': 'Lancez votre boutique',
    'hero.secondary': 'Découvrir nos services',
    'hero.stat.delivery': 'Livraison rapide',
    'hero.stat.stores': 'Boutiques créées',
    'hero.stat.satisfaction': 'Satisfaction client',
    'hero.scroll': 'défiler',

    // ─── Trust ─────────────────────────────────────
    'trust.title': 'Pourquoi Brandixo ?',
    'trust.1': 'Boutique prête en 48 heures',
    'trust.2': 'Design professionnel compatible mobile',
    'trust.3': 'Paiement et livraison intégrés au Maroc',
    'trust.4': 'Support technique après lancement',

    // ─── Services ──────────────────────────────────
    'services.title': 'Ce que nous offrons',
    'services.subtitle': 'Tout ce dont vous avez besoin pour réussir en ligne au Maroc',
    'services.1': 'Design professionnel personnalisé',
    'services.2': 'Ajout de produits et catégories',
    'services.3': 'Intégration des paiements',
    'services.4': 'Intégration des livraisons',
    'services.5': 'Vitesse de chargement optimale',
    'services.6': '100% compatible mobile',
    'services.7': 'Tableau de bord intuitif',

    // ─── Benefits ──────────────────────────────────
    'benefits.title': 'Avantages de la boutique en ligne',
    'benefits.1': 'Portée client élargie',
    'benefits.1.desc': 'Vendez dans tout le Maroc, pas seulement dans votre ville',
    'benefits.2': 'Coûts réduits',
    'benefits.2.desc': 'Pas besoin de local commercial, réduisez vos charges',
    'benefits.3': 'Données & ventes',
    'benefits.3.desc': 'Suivez vos ventes et comprenez mieux vos clients',
    'benefits.4': 'Croissance rapide',
    'benefits.4.desc': 'Évolutif avec votre croissance, sans complexité',

    // ─── How It Works ──────────────────────────────
    'how.title': 'Comment ça marche ?',
    'how.step1': 'Design et personnalisation',
    'how.step1.desc': 'Nous designons votre boutique selon votre identité de marque',
    'how.step2': 'Configuration et intégration',
    'how.step2.desc': 'Nous intégrons paiements, livraisons et ajoutons vos produits',
    'how.step3': 'Lancement et support',
    'how.step3.desc': 'Nous lançons votre boutique et restons disponibles après',

    // ─── Pricing ───────────────────────────────────
    'pricing.title': 'Choisissez votre formule',
    'pricing.subtitle': 'Tarifs transparents sans frais cachés',
    'pricing.popular': 'Le plus populaire',
    'pricing.cta': 'Commencer maintenant',
    'pricing.starter': 'Starter',
    'pricing.starter.desc': 'Idéal pour les petits projets',
    'pricing.starter.price': '999 MAD',
    'pricing.pro': 'Pro',
    'pricing.pro.desc': 'Pour les projets en croissance',
    'pricing.pro.price': '1 799 MAD',
    'pricing.premium': 'Premium',
    'pricing.premium.desc': 'Pour les grands projets',
    'pricing.premium.price': '2 999 MAD',
    'pricing.f1': 'Design professionnel personnalisé',
    'pricing.f2': "Ajout jusqu'à 50 produits",
    'pricing.f3': 'Paiement et livraison intégrés',
    'pricing.f4': 'Boutique multilingue',
    'pricing.f5': 'Tableau de bord avancé',
    'pricing.f6': 'SEO complet',
    'pricing.f7': 'Application mobile',
    'pricing.f8': 'Support technique continu',

    // ─── Portfolio ─────────────────────────────────
    'portfolio.title': 'Notre Portfolio',
    'portfolio.subtitle': 'Boutiques que nous avons créées pour nos clients',
    'portfolio.preview': 'Aperçu de la boutique',
    'portfolio.enter_store': 'Entrer dans la boutique',

    // ─── FAQ ───────────────────────────────────────
    'faq.title': 'Questions fréquentes',
    'faq.related': 'Liens connexes',
    'faq.q1': 'Combien de temps prend la création ?',
    'faq.a1': 'Nous livrons votre boutique complète en 48h après confirmation et réception des informations.',
    'faq.q2': 'Quels moyens de paiement sont supportés ?',
    'faq.a2': 'Nous supportons CMI, PayZone, paiement à la livraison et virement bancaire.',
    'faq.q3': 'La boutique fonctionne-t-elle sur mobile ?',
    'faq.a3': 'Oui, 100%. Toutes nos boutiques sont conçues mobile-first.',
    'faq.q4': "Faut-il des compétences techniques pour gérer la boutique ?",
    'faq.a4': 'Non, nous vous fournissons un tableau de bord simple et vous formons à son utilisation.',
    'faq.q5': "Que se passe-t-il après le lancement ?",
    'faq.a5': 'Nous offrons un support technique continu. Pour tout problème ou modification, nous sommes disponibles.',

    // ─── Testimonials ──────────────────────────────
    'testimonials.tag': 'Avis clients',
    'testimonials.title.part1': 'Ce que disent',
    'testimonials.title.part2': 'nos clients',
    'testimonials.subtitle': '+50 boutiques en ligne réussies au Maroc — leurs vraies histoires',
    'testimonials.stat.rating': 'Note moyenne',
    'testimonials.stat.clients': 'Client satisfait',
    'testimonials.stat.recommend': 'Nous recommandent',
    'testimonials.cta': "Lancez votre boutique aujourd'hui",
    'testimonials.1.name': 'Ahmed Benali',
    'testimonials.1.role': 'Propriétaire boutique vêtements — Casablanca',
    'testimonials.1.avatar': 'A',
    'testimonials.1.text': "Brandixo a créé ma boutique en moins de 48h. Les ventes ont triplé le premier mois. Design professionnel et excellent service.",
    'testimonials.2.name': 'Fatima Zahra',
    'testimonials.2.role': 'Propriétaire boutique parfums — Marrakech',
    'testimonials.2.avatar': 'F',
    'testimonials.2.text': "J'avais peur de vendre en ligne, mais l'équipe m'a tout expliqué étape par étape. Ma boutique vend dans tout le Maroc.",
    'testimonials.3.name': 'Youssef El Hassani',
    'testimonials.3.role': 'Commerçant électronique — Rabat',
    'testimonials.3.avatar': 'Y',
    'testimonials.3.text': "Meilleur investissement que j'ai fait. La boutique est rapide, professionnelle et parfaite sur mobile.",
    'testimonials.4.name': 'Sanaa El Mansouri',
    'testimonials.4.role': 'Propriétaire boutique cosmétiques — Fès',
    'testimonials.4.avatar': 'S',
    'testimonials.4.text': "Le service après-vente est excellent. Toujours disponibles. La boutique reflète parfaitement l'identité de ma marque.",
    'testimonials.5.name': 'Karim Ait Ali',
    'testimonials.5.role': 'Vendeur articles sportifs — Agadir',
    'testimonials.5.avatar': 'K',
    'testimonials.5.text': "Dès le premier jour les commandes ont afflué ! Design attractif et paiement facile. Merci Brandixo !",
    'testimonials.6.name': 'Nadia Bouchtay',
    'testimonials.6.role': 'Propriétaire pâtisserie — Tanger',
    'testimonials.6.avatar': 'N',
    'testimonials.6.text': "Un rêve devenu réalité. Design luxueux pour un prix raisonnable. Les clients complimentent toujours le site.",

    // ─── Contact ───────────────────────────────────
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à lancer votre projet ? Contactez-nous maintenant',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.message': 'Description du projet',
    'contact.send': 'Envoyer',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès ✓',
    'contact.error': "Erreur lors de l'envoi",
    'contact.error.network': 'Erreur réseau',
    'contact.whatsapp': 'Contacter via WhatsApp',
    'contact.whatsapp.title': 'Contacter via WhatsApp',
    'contact.whatsapp.subtitle': 'Vous préférez un contact direct ? Nous sommes disponibles',
    'contact.whatsapp.message': 'Bonjour, je souhaite créer une boutique en ligne',

    // ─── Footer ────────────────────────────────────
    'footer.desc': 'Nous créons des boutiques e-commerce professionnelles pour les commerçants marocains.',
    'footer.links': 'Liens rapides',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'footer.rights': 'Tous droits réservés',
    'footer.available': 'Disponible pour de nouveaux projets',
    'footer.whatsapp': 'WhatsApp',
    'footer.made': 'Fait avec',
  },

  en: {
    // ─── Nav ───────────────────────────────────────
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.portfolio': 'Portfolio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // ─── Hero ──────────────────────────────────────
    'hero.badge': 'E-Commerce Morocco',
    'hero.title': 'Build Your Online Store in Morocco',
    'hero.subtitle': 'We create professional e-commerce stores to help you sell online',
    'hero.cta': 'Start Your Store Now',
    'hero.secondary': 'Discover Our Services',
    'hero.stat.delivery': 'Fast delivery',
    'hero.stat.stores': 'Stores built',
    'hero.stat.satisfaction': 'Client satisfaction',
    'hero.scroll': 'scroll',

    // ─── Trust ─────────────────────────────────────
    'trust.title': 'Why Brandixo?',
    'trust.1': 'Store ready in 48 hours',
    'trust.2': 'Professional mobile-friendly design',
    'trust.3': 'Payment & delivery integration in Morocco',
    'trust.4': 'Technical support after launch',

    // ─── Services ──────────────────────────────────
    'services.title': 'What We Offer',
    'services.subtitle': 'Everything you need to succeed online in Morocco',
    'services.1': 'Custom professional design',
    'services.2': 'Products & categories setup',
    'services.3': 'Payment gateway integration',
    'services.4': 'Delivery integration',
    'services.5': 'High loading speed',
    'services.6': '100% mobile compatible',
    'services.7': 'Easy admin dashboard',

    // ─── Benefits ──────────────────────────────────
    'benefits.title': 'Benefits of an Online Store',
    'benefits.1': 'Wider customer reach',
    'benefits.1.desc': 'Sell your products across Morocco, not just your city',
    'benefits.2': 'Lower costs',
    'benefits.2.desc': 'No need for a physical store, save money and increase profit',
    'benefits.3': 'Data & sales insights',
    'benefits.3.desc': 'Track your sales and understand your customers better',
    'benefits.4': 'Fast growth',
    'benefits.4.desc': 'Scalable as your business grows, without complexity',

    // ─── How It Works ──────────────────────────────
    'how.title': 'How It Works',
    'how.step1': 'Design & Customization',
    'how.step1.desc': 'We design your store to match your brand identity and style',
    'how.step2': 'Setup & Integration',
    'how.step2.desc': 'We connect payments, delivery and add your products',
    'how.step3': 'Launch & Support',
    'how.step3.desc': 'We launch your store and stay with you after launch',

    // ─── Pricing ───────────────────────────────────
    'pricing.title': 'Choose Your Plan',
    'pricing.subtitle': 'Transparent pricing with no hidden fees',
    'pricing.popular': 'Most Popular',
    'pricing.cta': 'Get Started',
    'pricing.starter': 'Starter',
    'pricing.starter.desc': 'Perfect for small projects',
    'pricing.starter.price': '999 MAD',
    'pricing.pro': 'Pro',
    'pricing.pro.desc': 'For growing businesses',
    'pricing.pro.price': '1,799 MAD',
    'pricing.premium': 'Premium',
    'pricing.premium.desc': 'For large and advanced projects',
    'pricing.premium.price': '2,999 MAD',
    'pricing.f1': 'Custom professional design',
    'pricing.f2': 'Add up to 50 products',
    'pricing.f3': 'Payment & delivery integration',
    'pricing.f4': 'Multilingual store',
    'pricing.f5': 'Advanced dashboard',
    'pricing.f6': 'Full SEO optimization',
    'pricing.f7': 'Mobile application',
    'pricing.f8': 'Ongoing technical support',

    // ─── Portfolio ─────────────────────────────────
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Online stores we built for our clients',
    'portfolio.preview': 'Preview Store',
    'portfolio.enter_store': 'Enter Store',

    // ─── FAQ ───────────────────────────────────────
    'faq.title': 'Frequently Asked Questions',
    'faq.related': 'Related links',
    'faq.q1': 'How long does it take to build the store?',
    'faq.a1': 'We deliver your complete store within 48 hours of order confirmation.',
    'faq.q2': 'What payment methods are supported?',
    'faq.a2': 'We support CMI, PayZone, cash on delivery, and bank transfer.',
    'faq.q3': 'Does the store work on mobile?',
    'faq.a3': 'Yes, 100%. All our stores are designed mobile-first.',
    'faq.q4': 'Do I need technical skills to manage the store?',
    'faq.a4': 'No, we provide a simple dashboard and train you on how to use it.',
    'faq.q5': 'What happens after the store launches?',
    'faq.a5': 'We provide ongoing technical support. For any issue or update, we are here to help.',

    // ─── Testimonials ──────────────────────────────
    'testimonials.tag': 'Client Reviews',
    'testimonials.title.part1': 'What our',
    'testimonials.title.part2': 'clients say',
    'testimonials.subtitle': '+50 successful online stores in Morocco — their real stories',
    'testimonials.stat.rating': 'Average rating',
    'testimonials.stat.clients': 'Happy client',
    'testimonials.stat.recommend': 'Recommend us',
    'testimonials.cta': 'Start your store today',
    'testimonials.1.name': 'Ahmed Benali',
    'testimonials.1.role': 'Clothing store owner — Casablanca',
    'testimonials.1.avatar': 'A',
    'testimonials.1.text': 'Brandixo built my store in less than 48 hours. Sales tripled in the first month. Professional design and excellent service.',
    'testimonials.2.name': 'Fatima Zahra',
    'testimonials.2.role': 'Perfume store owner — Marrakech',
    'testimonials.2.avatar': 'F',
    'testimonials.2.text': 'I was afraid of selling online, but the team explained everything step by step. My store now sells all across Morocco.',
    'testimonials.3.name': 'Youssef El Hassani',
    'testimonials.3.role': 'Electronics merchant — Rabat',
    'testimonials.3.avatar': 'Y',
    'testimonials.3.text': 'Best investment I ever made. The store is fast, professional, and works perfectly on mobile.',
    'testimonials.4.name': 'Sanaa El Mansouri',
    'testimonials.4.role': 'Cosmetics store owner — Fès',
    'testimonials.4.avatar': 'S',
    'testimonials.4.text': 'After-sales service is wonderful. Always available to help. The store fully reflects my brand identity.',
    'testimonials.5.name': 'Karim Ait Ali',
    'testimonials.5.role': 'Sports supplies seller — Agadir',
    'testimonials.5.avatar': 'K',
    'testimonials.5.text': 'Orders started pouring in from day one! Attractive design and easy payment. Thank you Brandixo!',
    'testimonials.6.name': 'Nadia Bouchtay',
    'testimonials.6.role': 'Pastry store owner — Tangier',
    'testimonials.6.avatar': 'N',
    'testimonials.6.text': 'A dream come true. Luxury design at a reasonable price. Customers always compliment the look of the site.',

    // ─── Contact ───────────────────────────────────
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your project? Contact us now',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Project Description',
    'contact.send': 'Send Request',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully ✓',
    'contact.error': 'Error sending message',
    'contact.error.network': 'Network error',
    'contact.whatsapp': 'Contact via WhatsApp',
    'contact.whatsapp.title': 'Contact via WhatsApp',
    'contact.whatsapp.subtitle': "Prefer direct contact? We're here to answer your questions",
    'contact.whatsapp.message': 'Hello, I want to create an online store',

    // ─── Footer ────────────────────────────────────
    'footer.desc': 'We build professional e-commerce stores for Moroccan merchants. Fast, reliable, and affordable.',
    'footer.links': 'Quick links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': 'All rights reserved',
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
