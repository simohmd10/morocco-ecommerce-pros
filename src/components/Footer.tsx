import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="dark-section py-12 border-t border-white/10" role="contentinfo">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Logo + description */}
          <div>
            <h3 className="text-xl font-bold font-display mb-3">
              <span className="gold-text">Bran</span>dixo
            </h3>
            <p className="text-sm text-white/50">
              {t('footer.desc')}
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold mb-3 text-white/80">
              {t('footer.links')}
            </h4>

            <div className="flex flex-col gap-2">

              {links.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-gold transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}

              {/* Legal pages */}
              <Link
                to="/privacy"
                className="text-sm text-white/40 hover:text-gold transition-colors"
              >
                {t('footer.privacy')}
              </Link>

              <Link
                to="/terms"
                className="text-sm text-white/40 hover:text-gold transition-colors"
              >
                {t('footer.terms')}
              </Link>

            </div>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="font-bold mb-3 text-white/80">
              {t('nav.contact')}
            </h4>

            <a
              href="mailto:contact@brandixo.com"
              className="text-sm text-white/40 hover:text-gold transition-colors block"
            >
              contact@brandixo.com
            </a>

            <a
              href="tel:+212691553120"
              className="text-sm text-white/40 hover:text-gold transition-colors block mt-1"
            >
              +212 691 553 120
            </a>

          </address>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 Brandixo. {t('footer.rights')}.
        </div>

      </div>
    </footer>
  );
};

export default Footer;