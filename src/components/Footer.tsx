import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="dark-section py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-display mb-3">
              <span className="gold-text">Store</span>Maroc
            </h3>
            <p className="text-sm text-white/50">{t('footer.desc')}</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white/80">{t('footer.links')}</h4>
            <div className="flex flex-col gap-2">
              {links.map(link => (
                <a key={link.key} href={link.href} className="text-sm text-white/40 hover:text-gold transition-colors">
                  {t(link.key)}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-white/80">{t('nav.contact')}</h4>
            <p className="text-sm text-white/40">storekom.support@gmail.com</p>
            <p className="text-sm text-white/40 mt-1">+212 691 553 120</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 StoreMaroc. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
