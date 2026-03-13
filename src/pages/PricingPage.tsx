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
      description:
        'اكتشف أسعار إنشاء المتجر الإلكتروني في المغرب. باقات تبدأ من 2,999 درهم مع تصميم احترافي وربط الدفع CMI والتوصيل.',
      h1: 'تكلفة إنشاء متجر إلكتروني في المغرب',
      intro:
        'نقدم باقات واضحة وشاملة لإنشاء متجرك الإلكتروني في المغرب. بدون رسوم خفية، بدون مفاجآت.',
    },
    fr: {
      title: 'Prix Création Boutique en Ligne Maroc 2026 | Forfaits Brandixo',
      description:
        'Découvrez les tarifs de création de boutique en ligne au Maroc.',
      h1: 'Tarifs Création Boutique en Ligne au Maroc',
      intro:
        'Des forfaits clairs et complets pour créer votre boutique en ligne.',
    },
    en: {
      title: 'Online Store Creation Cost in Morocco 2026 | Brandixo Plans',
      description:
        'Discover online store creation prices in Morocco.',
      h1: 'Online Store Creation Cost in Morocco',
      intro:
        'Clear plans to build your online store in Morocco.',
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
        ['Support arabe', '✅', '❌', '⚠️ Parfois'],
        ['Mobile friendly', '✅', '⚠️', '✅'],
        ['Garantie', '✅', '❌', '⚠️'],
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
      </Helmet>

      <Navbar />

      <main>
        <section className="section-padding dark-section pt-28 md:pt-36 text-center">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
              {seo.h1}
            </h1>

            <p className="text-white/60 mb-8">{seo.intro}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {guarantees.map((g, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-xl">
                  <g.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <span className="text-xs text-white/70">{g[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />

        {/* جدول المقارنة */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto max-w-4xl">

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              {compare.title}
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-border">

              <table className="w-full min-w-[520px] text-xs md:text-sm">

                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    {compare.headers.map((h, i) => (
                      <th
                        key={i}
                        className={`px-2 py-3 md:px-4 font-semibold ${
                          i === 0 ? 'text-start' : 'text-center'
                        } ${i === 1 ? 'text-gold' : ''}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {compare.rows.map((row, ri) => (
                    <tr
                      key={ri}
                      className={`border-t border-border ${
                        ri % 2 === 0 ? 'bg-background' : 'bg-secondary/30'
                      }`}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-2 py-3 md:px-4 ${
                            ci === 0
                              ? 'font-medium text-start'
                              : 'text-center'
                          } ${
                            ci === 1
                              ? 'font-semibold text-gold'
                              : 'text-muted-foreground'
                          }`}
                        >
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

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;