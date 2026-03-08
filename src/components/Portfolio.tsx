import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, MessageCircle } from 'lucide-react';
import storeCosmetics from '@/assets/store-cosmetics.jpg';
import storeFashion from '@/assets/store-fashion.jpg';
import storeElectronics from '@/assets/store-electronics.jpg';

const PREVIEW_URL = 'https://es-d-5183352620260309-019cc6aa-1b20-7fe1-9816-30c5a687a999.codepen.dev/';
const WHATSAPP_NUMBER = '212600000000';

const Portfolio = () => {
  const { t } = useLanguage();

  const stores = [
    {
      titleKey: 'portfolio.cosmetics',
      descKey: 'portfolio.cosmetics.desc',
      image: storeCosmetics,
    },
    {
      titleKey: 'portfolio.fashion',
      descKey: 'portfolio.fashion.desc',
      image: storeFashion,
    },
    {
      titleKey: 'portfolio.electronics',
      descKey: 'portfolio.electronics.desc',
      image: storeElectronics,
    },
  ];

  const handleVisitStore = () => {
    window.open(PREVIEW_URL, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppCTA = () => {
    const message = encodeURIComponent(t('portfolio.whatsapp_message'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('portfolio.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stores.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden border border-border card-shadow bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden cursor-pointer" onClick={handleVisitStore}>
                <img
                  src={store.image}
                  alt={t(store.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    {t('portfolio.preview')}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{t(store.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t(store.descKey)}</p>
                  </div>
                </div>
                <button
                  onClick={handleVisitStore}
                  className="w-full inline-flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('portfolio.visit')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">{t('portfolio.cta.title')}</h3>
          <button
            onClick={handleWhatsAppCTA}
            className="inline-flex items-center gap-3 gold-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {t('portfolio.cta.want_store')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
