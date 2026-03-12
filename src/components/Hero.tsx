import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingBag, Star, Zap } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative dark-section overflow-hidden"
      style={{ height: '100svh' }}
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold glows */}
      <div className="absolute top-1/3 start-1/3 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-24 start-8 w-16 h-16 border-t border-s border-gold/20 rounded-tl-lg hidden md:block" />
      <div className="absolute top-24 end-8 w-16 h-16 border-t border-e border-gold/20 rounded-tr-lg hidden md:block" />
      <div className="absolute bottom-16 start-8 w-16 h-16 border-b border-s border-gold/20 rounded-bl-lg hidden md:block" />
      <div className="absolute bottom-16 end-8 w-16 h-16 border-b border-e border-gold/20 rounded-br-lg hidden md:block" />

      {/* Centered content wrapper — accounts for 64px navbar */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ paddingTop: '64px' }}
      >
        <div className="container mx-auto px-4 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/8 backdrop-blur-sm">
              <ShoppingBag className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-semibold text-gold-light tracking-widest uppercase">
                E-Commerce Morocco
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] max-w-4xl mx-auto mb-4"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-14 h-0.5 gold-gradient mx-auto mb-4 rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-white/55 max-w-xl mx-auto mb-7 font-body leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-5 md:gap-10 mb-7 flex-wrap"
          >
            {[
              { icon: Star, label: '48h', sub: 'تسليم سريع' },
              { icon: Zap, label: '+50', sub: 'متجر مُنجز' },
              { icon: ShoppingBag, label: '100%', sub: 'رضا العملاء' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Icon className="w-3 h-3 text-gold" />
                </div>
                <div className="text-start">
                  <div className="text-white font-bold text-xs leading-tight">{label}</div>
                  <div className="text-white/40 text-[10px]">{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#contact" className="btn-gold text-sm md:text-base" aria-label={t('hero.cta')}>
              {t('hero.cta')}
            </a>
            <a href="#services" className="btn-outline-white text-sm md:text-base" aria-label={t('hero.secondary')}>
              {t('hero.secondary')}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 inset-x-0 flex justify-center"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">scroll</span>
          <ArrowDown className="w-4 h-4 text-white/25 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
