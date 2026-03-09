import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Globe, Wallet, BarChart3, Rocket } from 'lucide-react';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Globe, title: 'benefits.1', desc: 'benefits.1.desc' },
    { icon: Wallet, title: 'benefits.2', desc: 'benefits.2.desc' },
    { icon: BarChart3, title: 'benefits.3', desc: 'benefits.3.desc' },
    { icon: Rocket, title: 'benefits.4', desc: 'benefits.4.desc' },
  ];

  return (
    <section className="section-padding bg-secondary/50" id="benefits" aria-label="Benefits">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          {t('benefits.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-background card-shadow border border-border group hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t(item.title)}</h3>
              <p className="text-sm text-muted-foreground">{t(item.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;