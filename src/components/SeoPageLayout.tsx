import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeoPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  structuredData?: object;
}

const SeoPageLayout = ({ title, description, children, structuredData }: SeoPageLayoutProps) => {
  const { t, lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const languages = [
    { code: 'ar' as const, label: 'العربية' },
    { code: 'fr' as const, label: 'Français' },
    { code: 'en' as const, label: 'English' },
  ];

  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر إلكتروني')}`;

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.services'), to: '/#services' },
    { label: t('nav.portfolio'), to: '/#portfolio' },
    { label: t('nav.contact'), to: '/#contact' },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://brandixo.com${window.location.pathname}`} />
        <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
        {structuredData && (
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        )}
      </Helmet>

      {/* Navbar */}
      <nav className="fixed top-0 inset-inline-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold font-display">
            <span className="gold-text">Bran</span>dixo
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.label}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute top-full mt-1 end-0 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[120px]">
                    {languages.map(l => (
                      <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }} className={`block w-full text-start px-4 py-2 text-sm hover:bg-muted transition-colors ${lang === l.code ? 'text-gold font-medium' : 'text-foreground'}`}>
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden bg-background border-b border-border">
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map(link => (
                  <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="dark-section py-12 border-t border-white/10" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold font-display mb-3"><span className="gold-text">Bran</span>dixo</h3>
              <p className="text-sm text-white/50">{t('footer.desc')}</p>
            </div>
            <nav aria-label="Footer navigation">
              <h4 className="font-bold mb-3 text-white/80">{t('footer.links')}</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <Link key={link.to} to={link.to} className="text-sm text-white/40 hover:text-gold transition-colors">{link.label}</Link>
                ))}
                <Link to="/privacy" className="text-sm text-white/40 hover:text-gold transition-colors">{t('footer.privacy')}</Link>
                <Link to="/terms" className="text-sm text-white/40 hover:text-gold transition-colors">{t('footer.terms')}</Link>
              </div>
            </nav>
            <address className="not-italic">
              <h4 className="font-bold mb-3 text-white/80">{t('nav.contact')}</h4>
              <a href="mailto:contact@brandixo.com" className="text-sm text-white/40 hover:text-gold transition-colors block">contact@brandixo.com</a>
              <a href="tel:+212691553120" className="text-sm text-white/40 hover:text-gold transition-colors block mt-1">+212 691 553 120</a>
            </address>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
            © 2026 Brandixo. {t('footer.rights')}.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 end-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default SeoPageLayout;
