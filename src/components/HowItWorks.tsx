import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Palette, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Palette, num: '01', title: 'how.step1', desc: 'how.step1.desc' },
    { icon: Settings, num: '02', title: 'how.step2', desc: 'how.step2.desc' },
    { icon: Rocket, num: '03', title: 'how.step3', desc: 'how.step3.desc' },
  ];

  return (
    <section className="section-padding dark-section" id="how" aria-label="How it works">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          {t('how.title')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="text-6xl font-bold text-gold/10 font-display mb-4" aria-hidden="true">{step.num}</div>
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t(step.title)}</h3>
              <p className="text-sm text-white/50">{t(step.desc)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;