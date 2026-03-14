import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, ShoppingBag, Star, Zap } from 'lucide-react';
// ✅ framer-motion محذوف من Hero → يحسن LCP بشكل مباشر

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
      style={{ minHeight: '100svh', height: '100svh' }}
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
      <div className="absolute top-1/3 start-1/3 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[140px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />

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
          <div className="flex justify-center mb-5 hero-fade-in" style={{ animationDelay: '0ms' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/8 backdrop-blur-sm">
              <ShoppingBag className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-semibold text-gold-light tracking-widest uppercase">
                {t('hero.badge')}
              </span>
            </div>
          </div>

          {/* ✅ H1 يظهر فوراً — LCP مباشر */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] max-w-4xl mx-auto mb-3 text-white hero-slide-up"
            style={{ animationDelay: '50ms' }}
          >
            {t('hero.title')}
          </h1>

          {/* Gold line */}
          <div
            className="w-14 h-0.5 gold-gradient mx-auto mb-4 rounded-full hero-scale-in"
            style={{ animationDelay: '150ms' }}
          />

          {/* Subtitle */}
          <p
            className="text-sm md:text-base text-white/55 max-w-lg mx-auto mb-6 font-body leading-relaxed hero-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Stats */}
          <div
            className="flex items-center justify-center gap-4 md:gap-10 mb-7 hero-fade-in"
            style={{ animationDelay: '150ms' }}
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
          </div>

          {/* CTAs */}
          <div
            className="flex items-center justify-center gap-3 hero-fade-in"
            style={{ animationDelay: '200ms' }}
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
          </div>

        </div>
      </div>

      <div style={{ height: '32px', flexShrink: 0 }} />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-5 inset-x-0 flex justify-center z-10 hero-fade-in"
        style={{ animationDelay: '600ms' }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">
            {t('hero.scroll')}
          </span>
          <ArrowDown className="w-4 h-4 text-white/25 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
