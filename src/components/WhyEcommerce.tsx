import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock, Smartphone } from 'lucide-react';

const WhyEcommerce = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, stat: 'why.stat1', desc: 'why.stat1.desc' },
    { icon: TrendingUp, stat: 'why.stat2', desc: 'why.stat2.desc' },
    { icon: Clock, stat: 'why.stat3', desc: 'why.stat3.desc' },
    { icon: Smartphone, stat: 'why.stat4', desc: 'why.stat4.desc' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          {t('why.title')}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card card-shadow border border-border"
            >
              <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold gold-text mb-2">{t(item.stat)}</div>
              <p className="text-sm text-muted-foreground">{t(item.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEcommerce;
