import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: 'nav.home', href: '/#home' },
    { key: 'nav.services', href: '/#services' },
    { key: 'nav.portfolio', href: '/#portfolio' },
    { key: 'nav.faq', href: '/#faq' },
    { key: 'nav.contact', href: '/#contact' },
  ];

  return (
    <footer className="dark-section relative overflow-hidden" role="contentinfo">

      {/* Gold top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 80% 48% / 0.5), transparent)' }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-14 pb-8 relative z-10">

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              <span className="gold-text">Bran</span>dixo
            </h3>
            <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-xs">
              {t('footer.desc')}
            </p>
            {/* Social / badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs text-gold/80 font-medium">Available for projects</span>
            </div>
          </div>

          {/* Links column */}
          <nav aria-label="Footer navigation">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              {t('footer.links')}
            </h4>
            <div className="flex flex-col gap-2.5">
              {links.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  className="group inline-flex items-center gap-1 text-sm text-white/40 hover:text-gold transition-colors duration-200"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ms-1" />
                  {t(link.key)}
                </a>
              ))}
              <Link
                to="/privacy"
                className="group inline-flex items-center gap-1 text-sm text-white/30 hover:text-gold transition-colors duration-200 mt-1 pt-2 border-t border-white/8"
              >
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ms-1" />
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="group inline-flex items-center gap-1 text-sm text-white/30 hover:text-gold transition-colors duration-200"
              >
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ms-1" />
                {t('footer.terms')}
              </Link>
            </div>
          </nav>

          {/* Contact column */}
          <address className="not-italic">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              {t('nav.contact')}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@brandixo.shop"
                className="group flex items-center gap-3 text-sm text-white/45 hover:text-gold transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                contact@brandixo.shop
              </a>
              <a
                href="tel:+212691553120"
                className="group flex items-center gap-3 text-sm text-white/45 hover:text-gold transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +212 691 553 120
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212691553120"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-dark transition-all hover:-translate-y-px"
              style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </a>
          </address>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © 2026 Brandixo. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-white/20">Made with</span>
            <span className="text-gold text-xs">♦</span>
            <span className="text-xs text-white/20">in Morocco</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
