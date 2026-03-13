import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, MessageCircle } from 'lucide-react';
import storeCosmetics from '@/assets/store-cosmetics.jpg';
import storeFashion from '@/assets/store-fashion.jpg';
import storeElectronics from '@/assets/store-electronics.jpg';

const WHATSAPP_NUMBER = '212691553120';

const Portfolio = () => {
  const { t } = useLanguage();

  const stores = [
    {
      titleKey: 'portfolio.electronics',
      descKey: 'portfolio.electronics.desc',
      image: storeElectronics,
      alt: 'متجر إلكترونيات أونلاين في المغرب - تصميم Brandixo',
      url: 'https://tech-haven-store.vercel.app/',
    },
    {
      titleKey: 'portfolio.fashion',
      descKey: 'portfolio.fashion.desc',
      image: storeFashion,
      alt: 'متجر أزياء نسائية إلكتروني في المغرب - تصميم Brandixo',
      url: 'https://v0-luxury-fashion-website-five-ecru.vercel.app/',
    },
    {
      titleKey: 'portfolio.cosmetics',
      descKey: 'portfolio.cosmetics.desc',
      image: storeCosmetics,
      alt: 'متجر إلكتروني لمستحضرات التجميل في المغرب - تصميم Brandixo',
      url: 'https://serene-beauty-e-commerce.vercel.app/',
    },
  ];

  const handleVisitStore = (url: string) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppCTA = () => {
    const message = encodeURIComponent(t('portfolio.whatsapp_message'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="portfolio" className="section-padding bg-background" aria-label="Portfolio">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-3">
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
          {stores.map((store, i) => (
            <motion.article
              key={store.url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border card-shadow bg-card hover:border-primary/30 transition-all duration-300 md:hover:-translate-y-2"
            >

              <div
                className="relative overflow-hidden cursor-pointer"
                style={{ height: '220px' }}
                onClick={() => handleVisitStore(store.url)}
              >
                <img
                  src={store.image}
                  alt={store.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    {t('portfolio.preview')}
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="font-bold text-base md:text-lg mb-1">
                  {t(store.titleKey)}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(store.descKey)}
                </p>

                <button
                  onClick={() => handleVisitStore(store.url)}
                  className="w-full inline-flex items-center justify-center gap-2 gold-gradient text-dark px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-[0_4px_20px_-4px_hsl(42_80%_48%/0.4)] transition-all active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('portfolio.visit')}
                </button>
              </div>

            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <h3 className="text-xl md:text-3xl font-bold font-display mb-5">
            {t('portfolio.cta.title')}
          </h3>

          <button
            onClick={handleWhatsAppCTA}
            className="inline-flex items-center gap-3 gold-gradient text-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full text-base md:text-lg font-bold hover:shadow-[0_8px_40px_-8px_hsl(42_80%_48%/0.5)] hover:-translate-y-0.5 transition-all active:scale-[0.98]"
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