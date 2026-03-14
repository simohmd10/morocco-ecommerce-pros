import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({
  name, role, avatar, rating, text
}: {
  name: string; role: string; avatar: string; rating: number; text: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white border border-black/6 rounded-2xl p-6 card-hover card-shadow flex flex-col gap-4"
  >
    <Quote className="w-6 h-6 text-gold/40" />

    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>

    <p className="text-sm text-foreground/70 leading-relaxed flex-1">{text}</p>

    <div className="flex items-center gap-3 pt-2 border-t border-black/5">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-dark font-bold text-sm shrink-0"
        style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
      >
        {avatar}
      </div>

      <div>
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      avatar: t('testimonials.1.avatar'),
      rating: 5,
      text: t('testimonials.1.text'),
    },
    {
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      avatar: t('testimonials.2.avatar'),
      rating: 5,
      text: t('testimonials.2.text'),
    },
    {
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      avatar: t('testimonials.3.avatar'),
      rating: 5,
      text: t('testimonials.3.text'),
    },
    {
      name: t('testimonials.4.name'),
      role: t('testimonials.4.role'),
      avatar: t('testimonials.4.avatar'),
      rating: 5,
      text: t('testimonials.4.text'),
    },
    {
      name: t('testimonials.5.name'),
      role: t('testimonials.5.role'),
      avatar: t('testimonials.5.avatar'),
      rating: 5,
      text: t('testimonials.5.text'),
    },
    {
      name: t('testimonials.6.name'),
      role: t('testimonials.6.role'),
      avatar: t('testimonials.6.avatar'),
      rating: 5,
      text: t('testimonials.6.text'),
    },
  ];

  const stats = [
    { value: '5.0', key: 'testimonials.stat.rating' },
    { value: '+50', key: 'testimonials.stat.clients' },
    { value: '100%', key: 'testimonials.stat.recommend' },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-3"
          >
            <span className="section-tag">⭐ {t('testimonials.tag')}</span>
          </motion.div>

          {/* العنوان المترجم */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            {t('testimonials.title.part1')}{' '}
            <span className="gold-text">
              {t('testimonials.title.part2')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base"
          >
            {t('testimonials.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-8 flex-wrap"
          >
            {stats.map(({ value, key }) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold gold-text">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t(key)}</div>
              </div>
            ))}
          </motion.div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-gold">
            {t('testimonials.cta')}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;