import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Paintbrush, Package, CreditCard, Truck, Zap, Smartphone, LayoutDashboard } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Paintbrush, key: 'services.1' },
    { icon: Package, key: 'services.2' },
    { icon: CreditCard, key: 'services.3' },
    { icon: Truck, key: 'services.4' },
    { icon: Zap, key: 'services.5' },
    { icon: Smartphone, key: 'services.6' },
    { icon: LayoutDashboard, key: 'services.7' },
  ];

  return (
    <section id="services" className="section-padding bg-background" aria-label="Services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors card-shadow"
            >
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">{t(service.key)}</span>
            </motion.div>
          ))}
        </div>

        {/* Internal link for SEO */}
        <div className="text-center mt-10">
          <a href="#contact" className="text-gold hover:text-gold-light text-sm font-medium transition-colors underline underline-offset-4">
            {t('hero.cta')} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;