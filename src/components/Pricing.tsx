import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: 'pricing.starter',
      desc: 'pricing.starter.desc',
      price: 'pricing.starter.price',
      popular: false,
      features: [true, true, true, false, false, false, false, true],
    },
    {
      name: 'pricing.pro',
      desc: 'pricing.pro.desc',
      price: 'pricing.pro.price',
      popular: true,
      features: [true, true, true, true, true, false, false, true],
    },
    {
      name: 'pricing.premium',
      desc: 'pricing.premium.desc',
      price: 'pricing.premium.price',
      popular: false,
      features: [true, true, true, true, true, true, true, true],
    },
  ];

  const featureKeys = ['pricing.f1', 'pricing.f2', 'pricing.f3', 'pricing.f4', 'pricing.f5', 'pricing.f6', 'pricing.f7', 'pricing.f8'];

  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('pricing.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('pricing.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? 'bg-primary text-primary-foreground gold-shadow scale-105 border-2 border-gold'
                  : 'bg-background border border-border card-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 px-4 py-1 rounded-full gold-gradient text-primary text-xs font-bold">
                  {t('pricing.popular')}
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{t(plan.name)}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {t(plan.desc)}
              </p>
              <div className="text-3xl font-bold font-display mb-6 gold-text">{t(plan.price)}</div>

              <div className="flex-1 space-y-3 mb-6">
                {featureKeys.map((fKey, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-sm">
                    {plan.features[fi] ? (
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    ) : (
                      <X className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-foreground/30' : 'text-muted-foreground/30'}`} />
                    )}
                    <span className={!plan.features[fi] ? (plan.popular ? 'text-primary-foreground/40' : 'text-muted-foreground/40') : ''}>
                      {t(fKey)}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold transition-transform hover:scale-105 ${
                  plan.popular
                    ? 'gold-gradient text-primary'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {t('pricing.cta')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
