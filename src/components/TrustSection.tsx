import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Clock, Smartphone, CreditCard, HeadphonesIcon } from 'lucide-react';

const TrustSection = () => {
  const { t } = useLanguage();

  const points = [
    { icon: Clock, key: 'trust.1' },
    { icon: Smartphone, key: 'trust.2' },
    { icon: CreditCard, key: 'trust.3' },
    { icon: HeadphonesIcon, key: 'trust.4' },
  ];

  return (
    <section className="section-padding bg-secondary/50" id="trust" aria-label="Why Brandixo">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            {t('trust.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-shadow hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4" aria-hidden="true">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-bold text-sm md:text-base text-foreground">{t(point.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
