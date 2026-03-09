import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import WhyEcommerce from '@/components/WhyEcommerce';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { t, lang } = useLanguage();

  const title = lang === 'ar'
    ? 'إنشاء متجر إلكتروني في المغرب | Storekom - تصميم متاجر احترافية'
    : lang === 'fr'
    ? 'Création de boutique en ligne au Maroc | Storekom'
    : 'Create an Online Store in Morocco | Storekom';

  const description = lang === 'ar'
    ? 'أنشئ متجرك الإلكتروني الاحترافي في المغرب مع Storekom. تصميم متاجر حديثة وسريعة لبيع منتجاتك أونلاين. متجر جاهز خلال 48 ساعة.'
    : lang === 'fr'
    ? 'Créez votre boutique en ligne professionnelle au Maroc avec Storekom. Design moderne, paiement et livraison intégrés. Boutique prête en 48 heures.'
    : 'Create your professional online store in Morocco with Storekom. Modern design, integrated payment and delivery. Store ready in 48 hours.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <WhyEcommerce />
        <Benefits />
        <HowItWorks />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;