
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
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-foreground fade-in-up">
          {t('benefits.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-card card-shadow border border-border group hover:border-gold/30 transition-colors fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{t(item.title)}</h3>
              <p className="text-sm text-muted-foreground">{t(item.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
