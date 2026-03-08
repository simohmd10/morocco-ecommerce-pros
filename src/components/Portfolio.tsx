import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Store as StoreIcon, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import storeCosmetics from '@/assets/store-cosmetics.jpg';
import storeFashion from '@/assets/store-fashion.jpg';
import storeElectronics from '@/assets/store-electronics.jpg';

const PREVIEW_URL = 'https://es-d-5183352620260309-019cc6aa-1b20-7fe1-9816-30c5a687a999.codepen.dev/';
const REAL_STORE_URL = 'https://shoopexpress.base44.app';

interface StoreItem {
  titleKey: string;
  descKey: string;
  image: string;
  gradient: string;
}

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedStore, setSelectedStore] = useState<StoreItem | null>(null);
  const [showIframe, setShowIframe] = useState(false);

  const stores: StoreItem[] = [
    {
      titleKey: 'portfolio.cosmetics',
      descKey: 'portfolio.cosmetics.desc',
      image: storeCosmetics,
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
    {
      titleKey: 'portfolio.fashion',
      descKey: 'portfolio.fashion.desc',
      image: storeFashion,
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
    {
      titleKey: 'portfolio.electronics',
      descKey: 'portfolio.electronics.desc',
      image: storeElectronics,
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    setSelectedStore(null);
    setShowIframe(false);
  };

  const handleEnterStore = () => {
    window.open(REAL_STORE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
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
                onClick={() => { setSelectedStore(store); setShowIframe(false); }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border card-shadow bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
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
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{t(store.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">storeMaroc.ma</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">{t('portfolio.cta.title')}</h3>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg"
            >
              {t('portfolio.cta.button')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Preview Modal */}
      <Dialog open={!!selectedStore} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden bg-card border-border">
          <DialogTitle className="sr-only">
            {selectedStore ? t(selectedStore.titleKey) : ''}
          </DialogTitle>
          {selectedStore && (
            <div className="flex flex-col h-full">
              {!showIframe ? (
                /* Landing Preview Page */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Store Screenshot */}
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={selectedStore.image}
                      alt={t(selectedStore.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                          <StoreIcon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-primary font-bold">StoreMaroc</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
                        {t(selectedStore.titleKey)}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base mb-6 max-w-lg">
                        {t(selectedStore.descKey)}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => setShowIframe(true)}
                          className="inline-flex items-center justify-center gap-2 gold-gradient text-primary-foreground px-8 py-3.5 rounded-full text-base font-bold hover:scale-105 transition-transform shadow-lg"
                        >
                          {t('portfolio.visit')}
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleEnterStore}
                          className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/20 transition-all"
                        >
                          {t('portfolio.enter_store')}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Iframe Preview */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <div>
                      <h3 className="font-bold text-lg">{t(selectedStore.titleKey)}</h3>
                      <p className="text-sm text-muted-foreground">{t(selectedStore.descKey)}</p>
                    </div>
                    <button
                      onClick={handleEnterStore}
                      className="inline-flex items-center gap-2 gold-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                    >
                      {t('portfolio.enter_store')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1 bg-muted">
                    <iframe
                      src={PREVIEW_URL}
                      title={t(selectedStore.titleKey)}
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
