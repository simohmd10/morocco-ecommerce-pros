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

  const featureKeys = [
    'pricing.f1', 'pricing.f2', 'pricing.f3', 'pricing.f4',
    'pricing.f5', 'pricing.f6', 'pricing.f7', 'pricing.f8'
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-3 text-foreground">
            {t('pricing.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6 md:items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl p-5 md:p-6 flex flex-col
                ${plan.popular
                  ? 'bg-primary text-primary-foreground border-2 border-gold md:scale-105 shadow-[0_8px_40px_-8px_hsl(42_80%_48%/0.35)]'
                  : 'bg-card border border-border card-shadow text-card-foreground'
                }
              `}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 px-4 py-1 rounded-full gold-gradient text-dark text-xs font-bold whitespace-nowrap">
                  {t('pricing.popular')}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-4">
                <h3 className={`text-lg md:text-xl font-bold mb-1 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {t(plan.name)}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {t(plan.desc)}
                </p>
              </div>

              {/* Price */}
              <div className="text-3xl md:text-4xl font-bold font-display mb-5 gold-text">
                {t(plan.price)}
              </div>

              {/* Features */}
              <div className="flex-1 space-y-2.5 mb-5">
                {featureKeys.map((fKey, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 text-sm">
                    {plan.features[fi] ? (
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    ) : (
                      <X className={`w-4 h-4 flex-shrink-0 ${
                        plan.popular ? 'text-primary-foreground/25' : 'text-muted-foreground/25'
                      }`} />
                    )}
                    <span className={
                      !plan.features[fi]
                        ? plan.popular
                          ? 'text-primary-foreground/35'
                          : 'text-muted-foreground/40'
                        : plan.popular
                          ? 'text-primary-foreground'
                          : 'text-foreground'
                    }>
                      {t(fKey)}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-bold transition-all hover:-translate-y-px active:scale-[0.98] ${
                  plan.popular
                    ? 'gold-gradient text-dark hover:shadow-[0_4px_20px_-4px_hsl(42_80%_48%/0.5)]'
                    : 'bg-foreground text-background hover:bg-foreground/90'
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
