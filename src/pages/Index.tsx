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
  return (
    <>
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
