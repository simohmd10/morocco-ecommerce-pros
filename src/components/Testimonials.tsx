import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد بنعلي',
    role: 'صاحب متجر ملابس — الدار البيضاء',
    avatar: 'أ',
    rating: 5,
    text: 'أنشأ لي Brandixo متجري في أقل من 48 ساعة. المبيعات ارتفعت 3 أضعاف في الشهر الأول. تصميم احترافي وخدمة ممتازة.',
  },
  {
    name: 'فاطمة الزهراء',
    role: 'صاحبة متجر عطور — مراكش',
    avatar: 'ف',
    rating: 5,
    text: 'كنت خايفة من فكرة البيع أونلاين، لكن الفريق شرح لي كل شيء وساعدني خطوة بخطوة. متجري الآن يبيع في كل المغرب.',
  },
  {
    name: 'يوسف الحسني',
    role: 'تاجر إلكترونيات — الرباط',
    avatar: 'ي',
    rating: 5,
    text: 'أفضل استثمار قمت به. المتجر سريع، احترافي، ويعمل على الموبايل بشكل مثالي. أنصح كل تاجر يريد التوسع.',
  },
  {
    name: 'سناء المنصوري',
    role: 'صاحبة متجر كوزميتيك — فاس',
    avatar: 'س',
    rating: 5,
    text: 'خدمة ما بعد البيع رائعة. دائماً متاحون للمساعدة. المتجر يعكس هوية ماركتي بشكل كامل.',
  },
  {
    name: 'كريم أيت علي',
    role: 'بائع مستلزمات رياضية — أكادير',
    avatar: 'ك',
    rating: 5,
    text: 'من أول يوم والطلبات تنهال! التصميم جذاب والدفع سهل للزبائن. شكراً Brandixo على هذا العمل الرائع.',
  },
  {
    name: 'نادية بوشتى',
    role: 'صاحبة متجر حلويات — طنجة',
    avatar: 'ن',
    rating: 5,
    text: 'حلم أصبح حقيقة. متجر أونلاين بتصميم فاخر وسعر معقول. العملاء دائماً يمدحون شكل الموقع.',
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="bg-white border border-black/6 rounded-2xl p-6 card-hover card-shadow flex flex-col gap-4"
  >
    {/* Quote icon */}
    <Quote className="w-6 h-6 text-gold/40" />

    {/* Stars */}
    <div className="flex gap-0.5">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>

    {/* Text */}
    <p className="text-sm text-foreground/70 leading-relaxed flex-1">
      {testimonial.text}
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-2 border-t border-black/5">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-dark font-bold text-sm shrink-0"
        style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
      >
        {testimonial.avatar}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
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
            <span className="section-tag">⭐ آراء العملاء</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display mb-4"
          >
            ماذا يقول{' '}
            <span className="gold-text">عملاؤنا</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base"
          >
            +50 متجر إلكتروني ناجح في المغرب — هذه قصصهم الحقيقية
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-8 flex-wrap"
          >
            {[
              { value: '5.0', label: 'متوسط التقييم' },
              { value: '+50', label: 'عميل سعيد' },
              { value: '100%', label: 'يوصون بنا' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold gold-text">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-gold">
            ابدأ متجرك اليوم
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
