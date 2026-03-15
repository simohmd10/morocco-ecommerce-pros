import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// ✅ Components أسفل الصفحة تتحمل عند الحاجة فقط
const TrustSection  = lazy(() => import('@/components/TrustSection'));
const WhyEcommerce  = lazy(() => import('@/components/WhyEcommerce'));
const Benefits      = lazy(() => import('@/components/Benefits'));
const HowItWorks    = lazy(() => import('@/components/HowItWorks'));
const Services      = lazy(() => import('@/components/Services'));
const Portfolio     = lazy(() => import('@/components/Portfolio'));
const Pricing       = lazy(() => import('@/components/Pricing'));
const Testimonials  = lazy(() => import('@/components/Testimonials'));
const FAQ           = lazy(() => import('@/components/FAQ'));
const Contact       = lazy(() => import('@/components/Contact'));
const Footer        = lazy(() => import('@/components/Footer'));

const Index = () => {
  const { lang } = useLanguage();

  const title = lang === 'ar'
    ? 'Brandixo — استوديو تصميم وويب | إنشاء متجر إلكتروني في المغرب'
    : lang === 'fr'
    ? 'Brandixo — Design & Web Studio | Création de boutique en ligne au Maroc'
    : 'Brandixo — Design & Web Studio | Create an Online Store in Morocco';

  const description = lang === 'ar'
    ? 'Brandixo استوديو تصميم حديث متخصص في إنشاء المتاجر الإلكترونية في المغرب. تصميم UI/UX احترافي ومواقع عالية الأداء. متجر جاهز خلال 48 ساعة.'
    : lang === 'fr'
    ? 'Brandixo est un studio de design moderne spécialisé en branding, UI/UX et sites web haute performance. Boutique en ligne prête en 48 heures au Maroc.'
    : 'Brandixo is a modern design studio specializing in branding, UI/UX design and high-performance websites. Online store ready in 48 hours in Morocco.';

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
        {/* ✅ Hero يتحمل فوراً — LCP مباشر */}
        <Hero />

        {/* ✅ باقي الصفحة تتحمل بعد Hero */}
        <Suspense fallback={<div style={{ minHeight: '100vh', background: '#ffffff' }} />}>
          <TrustSection />
          <WhyEcommerce />
          <Benefits />
          <HowItWorks />
          <Services />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;