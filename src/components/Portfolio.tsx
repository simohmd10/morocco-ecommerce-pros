import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();

  const stores = [
    { key: 'portfolio.1', color: 'from-pink-500/20 to-rose-500/20' },
    { key: 'portfolio.2', color: 'from-blue-500/20 to-cyan-500/20' },
    { key: 'portfolio.3', color: 'from-amber-500/20 to-orange-500/20' },
  ];

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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stores.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border card-shadow bg-card"
            >
              <div className={`h-48 bg-gradient-to-br ${store.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <ExternalLink className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{t(store.key)}</h3>
                <p className="text-sm text-muted-foreground mt-1">storeMaroc.ma</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
