import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center dark-section overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gold accent blobs */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 end-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold-light">E-Commerce Morocco</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-block"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-colors inline-block"
            >
              {t('hero.secondary')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-white/30 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
