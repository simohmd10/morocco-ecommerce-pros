import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeoPageLayoutProps {
  title: string;
  description: string;
  canonical?: string; // اختياري — إذا لم يُمرَّر يُحسب تلقائياً
  children: React.ReactNode;
  structuredData?: object;
}

const BASE_URL = 'https://brandixo.store'; // ✅ إصلاح: كان brandixo.com

const SeoPageLayout = ({ title, description, canonical, children, structuredData }: SeoPageLayoutProps) => {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ canonical يُحسب من الـ URL الحالي إذا لم يُمرَّر
  const canonicalUrl = canonical ?? `${BASE_URL}${location.pathname}`;

  const isRTL = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const languages = [
    { code: 'ar' as const, label: 'العربية' },
    { code: 'fr' as const, label: 'Français' },
    { code: 'en' as const, label: 'English' },
  ];

  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر إلكتروني')}`;

  const navLinks = [
    { label: t('nav.home'),      to: '/' },
    { label: t('nav.services'),  to: '/#services' },
    { label: t('nav.portfolio'), to: '/#portfolio' },
    { label: t('nav.contact'),   to: '/#contact' },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ✅ Canonical صحيح */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title"       content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={canonicalUrl} />
        <meta property="og:image"       content={`${BASE_URL}/og-image.jpg`} />
        <meta property="og:locale"      content={lang === 'ar' ? 'ar_MA' : lang === 'fr' ? 'fr_MA' : 'en_US'} />

        {/* Twitter */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image"       content={`${BASE_URL}/og-image.jpg`} />

        {/* Lang & Dir */}
        <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} />

        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        )}
      </Helmet>

      {/* ═══ NAVBAR ═══ */}
      <nav
        dir={isRTL ? 'rtl' : 'ltr'}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-xl shadow-[0_1px_20px_-4px_hsl(0_0%_0%/0.08)] border-b border-black/5'
            : 'bg-background/80 backdrop-blur-xl border-b border-border'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-[60px] md:h-16 gap-3">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold font-display flex-shrink-0">
            <span className="gold-text">Bran</span>dixo
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Language + CTA + Hamburger */}
          <div className="flex items-center gap-2">

            {/* Language dropdown — desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-black/5"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === lang)?.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full mt-1 end-0 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[130px] z-20"
                    >
                      {languages.map(l => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`block w-full text-start px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                            lang === l.code ? 'text-gold font-semibold bg-gold/5' : 'text-foreground'
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all hover:-translate-y-px whitespace-nowrap text-dark"
              style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
            >
              {t('hero.cta')}
            </a>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/6 transition-colors text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

          </div>
        </div>
      </nav>

      {/* ═══ MOBILE DRAWER ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/55 backdrop-blur-[2px] z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              dir={isRTL ? 'rtl' : 'ltr'}
              className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-[78vw] max-w-[300px] bg-white z-50 shadow-2xl flex flex-col md:hidden`}
              initial={{ x: isRTL ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '100%' : '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-black/6">
                <span className="text-lg font-bold font-display">
                  <span className="gold-text">Bran</span>dixo
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/6 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-0.5 px-3 pt-3 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-end px-4 py-3.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/4 transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Language switcher */}
              <div className="px-5 py-4 border-t border-black/6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Language
                  </span>
                </div>
                <div className="flex gap-2">
                  {languages.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setMobileOpen(false); }}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        lang === code
                          ? 'text-dark shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-black/4 border border-transparent'
                      }`}
                      style={lang === code ? { background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' } : {}}
                    >
                      {code === 'ar' ? 'ع' : label.slice(0, 2)}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-8">
                <Link
                  to="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full justify-center text-sm py-3.5 text-center block text-dark"
                  style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
                >
                  {t('hero.cta')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ═══ CONTENT ═══ */}
      <main className="pt-[60px] md:pt-16">{children}</main>

      {/* ═══ FOOTER ═══ */}
      <footer className="dark-section py-10 md:py-14" role="contentinfo">
        <div className="h-px w-full mb-10" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 80% 48% / 0.4), transparent)' }} />
        <div className="container mx-auto px-4">

          {/* Mobile: single column / Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            <div>
              <h3 className="text-xl font-bold font-display mb-3">
                <span className="gold-text">Bran</span>dixo
              </h3>
              <p className="text-sm text-white/45 leading-relaxed max-w-xs">
                {t('footer.desc')}
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <h4 className="font-semibold mb-3 text-white/60 text-xs uppercase tracking-widest">
                {t('footer.links')}
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <Link key={link.to} to={link.to} className="text-sm text-white/40 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                ))}
                <Link to="/privacy" className="text-sm text-white/30 hover:text-gold transition-colors mt-1">
                  {t('footer.privacy')}
                </Link>
                <Link to="/terms" className="text-sm text-white/30 hover:text-gold transition-colors">
                  {t('footer.terms')}
                </Link>
              </div>
            </nav>

            <address className="not-italic">
              <h4 className="font-semibold mb-3 text-white/60 text-xs uppercase tracking-widest">
                {t('nav.contact')}
              </h4>
              {/* ✅ إصلاح: كان brandixo.com */}
              <a href="mailto:contact@brandixo.shop" className="text-sm text-white/40 hover:text-gold transition-colors block">
                contact@brandixo.shop
              </a>
              <a href="tel:+212691553120" className="text-sm text-white/40 hover:text-gold transition-colors block mt-1.5">
                +212 691 553 120
              </a>
            </address>

          </div>

          <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
            <p className="text-xs text-white/25">© 2026 Brandixo. {t('footer.rights')}.</p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-white/20">Made with</span>
              <span className="text-gold text-xs">♦</span>
              <span className="text-xs text-white/20">in Morocco</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ═══ Floating WhatsApp ═══ */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 end-6 z-50 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-0.5 transition-all"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </>
  );
};

export default SeoPageLayout;
