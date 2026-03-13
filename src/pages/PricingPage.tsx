import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, HeadphonesIcon } from 'lucide-react';

const PricingPage = () => {
  const { lang } = useLanguage();

  const seoData = {
    ar: {
      title: 'تكلفة إنشاء متجر إلكتروني في المغرب 2026 | باقات Brandixo',
      description: 'اكتشف أسعار إنشاء المتجر الإلكتروني في المغرب. باقات تبدأ من 2,999 درهم مع تصميم احترافي وربط الدفع CMI والتوصيل. قارن الباقات الآن.',
      h1: 'تكلفة إنشاء متجر إلكتروني في المغرب',
      intro: 'نقدم باقات واضحة وشاملة لإنشاء متجرك الإلكتروني في المغرب. بدون رسوم خفية، بدون مفاجآت.',
    },
    fr: {
      title: 'Prix Création Boutique en Ligne Maroc 2026 | Forfaits Brandixo',
      description: 'Découvrez les tarifs de création de boutique en ligne au Maroc. Forfaits à partir de 2 999 MAD avec design professionnel et intégration paiement CMI.',
      h1: 'Tarifs Création Boutique en Ligne au Maroc',
      intro: 'Des forfaits clairs et complets pour créer votre boutique en ligne au Maroc. Sans frais cachés.',
    },
    en: {
      title: 'Online Store Creation Cost in Morocco 2026 | Brandixo Plans',
      description: 'Discover online store creation prices in Morocco. Plans starting from 2,999 MAD with professional design and CMI payment integration.',
      h1: 'Online Store Creation Cost in Morocco',
      intro: 'Clear and comprehensive plans to build your online store in Morocco. No hidden fees.',
    },
  };

  const seo = seoData[lang];

  const guarantees = [
    {
      icon: Clock,
      ar: 'جاهز خلال 48 ساعة',
      fr: 'Prêt en 48 heures',
      en: 'Ready in 48 hours',
    },
    {
      icon: Shield,
      ar: 'بدون رسوم خفية',
      fr: 'Sans frais cachés',
      en: 'No hidden fees',
    },
    {
      icon: Check,
      ar: 'ربط الدفع CMI مجاناً',
      fr: 'Intégration CMI gratuite',
      en: 'Free CMI payment setup',
    },
    {
      icon: HeadphonesIcon,
      ar: 'دعم فني بعد الإطلاق',
      fr: 'Support après lancement',
      en: 'Post-launch support',
    },
  ];

  const compareData = {
    ar: {
      title: 'لماذا Brandixo أفضل من المنافسين؟',
      headers: ['الميزة', 'Brandixo', 'Fiverr', 'وكالات أخرى'],
      rows: [
        ['السعر', '2,999–9,999 د', 'غير محدد', '15,000+ د'],
        ['التسليم', '48 ساعة – 10 أيام', '2-4 أسابيع', '1-3 أشهر'],
        ['ربط CMI', '✅ مجاناً', '❌ إضافي', '✅ بتكلفة'],
        ['دعم بالعربية', '✅', '❌', '⚠️ أحياناً'],
        ['متوافق هاتف', '✅', '⚠️', '✅'],
        ['ضمان الجودة', '✅', '❌', '⚠️'],
      ],
    },
    fr: {
      title: 'Pourquoi Brandixo est meilleur ?',
      headers: ['Fonctionnalité', 'Brandixo', 'Fiverr', 'Autres agences'],
      rows: [
        ['Prix', '2 999–9 999 MAD', 'Variable', '15 000+ MAD'],
        ['Délai', '48h – 10 jours', '2-4 semaines', '1-3 mois'],
        ['Intégration CMI', '✅ Gratuit', '❌ En plus', '✅ Payant'],
        ['Support en arabe', '✅', '❌', '⚠️ Parfois'],
        ['Compatible mobile', '✅', '⚠️', '✅'],
        ['Garantie qualité', '✅', '❌', '⚠️'],
      ],
    },
    en: {
      title: 'Why Brandixo beats the competition?',
      headers: ['Feature', 'Brandixo', 'Fiverr', 'Other agencies'],
      rows: [
        ['Price', '2,999–9,999 MAD', 'Variable', '15,000+ MAD'],
        ['Delivery', '48h – 10 days', '2-4 weeks', '1-3 months'],
        ['CMI Integration', '✅ Free', '❌ Extra', '✅ Paid'],
        ['Arabic support', '✅', '❌', '⚠️ Sometimes'],
        ['Mobile-friendly', '✅', '⚠️', '✅'],
        ['Quality guarantee', '✅', '❌', '⚠️'],
      ],
    },
  };

  const compare = compareData[lang];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://brandixo.store/pricing" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content="https://brandixo.store/pricing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": lang === 'ar' ? "باقات إنشاء المتجر الإلكتروني في المغرب" : "E-commerce Store Plans Morocco",
          "itemListElement": [
            {
              "@type": "ListItem", "position": 1,
              "item": {
                "@type": "Offer",
                "name": lang === 'ar' ? "باقة البداية" : "Starter Plan",
                "priceCurrency": "MAD", "price": "2999",
                "description": lang === 'ar' ? "متجر أساسي + 10 منتجات" : "Basic store + 10 products",
                "url": "https://brandixo.store/pricing"
              }
            },
            {
              "@type": "ListItem", "position": 2,
              "item": {
                "@type": "Offer",
                "name": lang === 'ar' ? "باقة احترافية" : "Pro Plan",
                "priceCurrency": "MAD", "price": "5999",
                "description": lang === 'ar' ? "متجر كامل + ربط الدفع + التوصيل" : "Full store + payment + delivery",
                "url": "https://brandixo.store/pricing"
              }
            },
            {
              "@type": "ListItem", "position": 3,
              "item": {
                "@type": "Offer",
                "name": lang === 'ar' ? "باقة متقدمة" : "Premium Plan",
                "priceCurrency": "MAD", "price": "9999",
                "description": lang === 'ar' ? "متجر متقدم + SEO + تسويق" : "Advanced store + SEO + marketing",
                "url": "https://brandixo.store/pricing"
              }
            }
          ]
        })}</script>
      </Helmet>

      <Navbar />

      <main>

        {/* Hero section — SEO H1 */}
        <section className="section-padding dark-section pt-28 md:pt-36 text-center">
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="section-tag-dark mb-4 inline-block">
                💰 {lang === 'ar' ? 'باقات الأسعار' : lang === 'fr' ? 'Nos Tarifs' : 'Pricing Plans'}
              </span>

              {/* H1 — الكلمة المفتاحية الرئيسية */}
              <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-5 leading-tight">
                {seo.h1}
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                {seo.intro}
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/8">
                    <g.icon className="w-5 h-5 text-gold" />
                    <span className="text-xs text-white/70 text-center leading-tight">
                      {g[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing component */}
        <Pricing />

        {/* Comparison table */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">
                {compare.title}
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    {compare.headers.map((h, i) => (
                      <th key={i} className={`px-4 py-3 font-semibold ${i === 0 ? 'text-start' : 'text-center'} ${i === 1 ? 'text-gold' : ''}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compare.rows.map((row, ri) => (
                    <tr key={ri} className={`border-t border-border ${ri % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`px-4 py-3 ${ci === 0 ? 'font-medium text-start' : 'text-center'} ${ci === 1 ? 'font-semibold text-gold' : 'text-muted-foreground'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ (يظهر كـ Rich Snippet) */}
        <FAQ />

        {/* Contact CTA */}
        <Contact />

      </main>

      <Footer />
    </>
  );
};

export default PricingPage;
