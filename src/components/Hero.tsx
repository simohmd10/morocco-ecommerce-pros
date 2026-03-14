import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingBag, Star, Zap } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Star,        label: '48h',  key: 'hero.stat.delivery' },
    { icon: Zap,         label: '+50',  key: 'hero.stat.stores'   },
    { icon: ShoppingBag, label: '100%', key: 'hero.stat.satisfaction' },
  ];

  return (
    <section
      id="home"
      className="relative dark-section overflow-hidden flex flex-col text-center px-4"
      style={{ minHeight: '100svh' }}
      aria-label="Hero"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold glows */}
      <div className="absolute top-1/3 start-1/3 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-24 start-8 w-16 h-16 border-t border-s border-gold/20 rounded-tl-lg hidden lg:block" />
      <div className="absolute top-24 end-8 w-16 h-16 border-t border-e border-gold/20 rounded-tr-lg hidden lg:block" />
      <div className="absolute bottom-16 start-8 w-16 h-16 border-b border-s border-gold/20 rounded-bl-lg hidden lg:block" />
      <div className="absolute bottom-16 end-8 w-16 h-16 border-b border-e border-gold/20 rounded-br-lg hidden lg:block" />

      {/* Navbar spacer */}
      <div style={{ height: '64px', flexShrink: 0 }} />

      {/* Content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="container mx-auto relative z-10">

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
                {t('hero.badge')}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] max-w-4xl mx-auto mb-3"
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
            className="text-sm md:text-base text-white/55 max-w-lg mx-auto mb-6 font-body leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 md:gap-10 mb-7"
          >
            {stats.map(({ icon: Icon, label, key }) => (
              <div key={key} className="flex items-center gap-2 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3 text-gold" />
                </div>
                <div className="text-start">
                  <div className="text-white font-bold text-xs leading-tight">{label}</div>
                  <div className="text-white/40 text-[10px]">{t(key)}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="btn-gold text-sm px-5 py-2.5 whitespace-nowrap"
              aria-label={t('hero.cta')}
            >
              {t('hero.cta')}
            </a>
            <a
              href="#services"
              className="btn-outline-white text-sm px-5 py-2.5 whitespace-nowrap"
              aria-label={t('hero.secondary')}
            >
              {t('hero.secondary')}
            </a>
          </motion.div>

        </div>
      </div>

      <div style={{ height: '56px', flexShrink: 0 }} />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-5 inset-x-0 flex justify-center z-10"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">
            {t('hero.scroll')}
          </span>
          <ArrowDown className="w-4 h-4 text-white/25 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;