import { useLanguage } from '@/contexts/LanguageContext';
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
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-white fade-in-up">
          {t('how.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center relative fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-6xl font-bold text-gold/10 font-display mb-4" aria-hidden="true">{step.num}</div>
              <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{t(step.title)}</h3>
              <p className="text-sm text-white/50">{t(step.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
