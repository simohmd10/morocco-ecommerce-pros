import SeoPageLayout from '@/components/SeoPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, DollarSign, Globe, ShoppingBag, Truck, Check, MessageCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const DropshippingStore = () => {
  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر دروبشيبينغ')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dropshipping Store Creation in Morocco",
    "provider": { "@type": "Organization", "name": "Brandixo" },
    "areaServed": { "@type": "Country", "name": "Morocco" },
    "description": "Create a professional dropshipping store in Morocco. Start selling online without inventory."
  };

  const benefits = [
    { icon: DollarSign, title: "بدون رأس مال كبير", desc: "ابدأ بدون شراء مخزون. ادفع فقط عند تحقيق مبيعات" },
    { icon: Package, title: "بدون تخزين منتجات", desc: "المورد يشحن مباشرة للعميل بدون تدخلك" },
    { icon: Globe, title: "بيع عالمي", desc: "بع منتجاتك في المغرب وحول العالم" },
    { icon: TrendingUp, title: "هامش ربح مرن", desc: "أنت تحدد سعر البيع وهامش ربحك" },
    { icon: ShoppingBag, title: "ملايين المنتجات", desc: "اختر من ملايين المنتجات المتاحة للبيع" },
    { icon: Truck, title: "شحن مباشر", desc: "المورد يتكفل بالتغليف والشحن" },
  ];

  const weProvide = [
    "إنشاء متجر دروبشيبينغ احترافي",
    "ربط مع موردين موثوقين",
    "إضافة المنتجات الرابحة",
    "إعداد بوابات الدفع",
    "تصميم صفحات منتجات جذابة",
    "تحسين SEO للمتجر",
    "تدريب على إدارة المتجر",
    "استراتيجية تسويق رقمي",
  ];

  return (
    <SeoPageLayout
      title="إنشاء متجر دروبشيبينغ في المغرب | Brandixo - Dropshipping Morocco"
      description="أنشئ متجر دروبشيبينغ احترافي في المغرب. ابدأ البيع أونلاين بدون مخزون. نوفر لك متجر جاهز مع موردين موثوقين. Dropshipping store Morocco."
      structuredData={structuredData}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 start-1/3 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <Package className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold-light">Dropshipping Morocco</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
              إنشاء متجر <span className="gold-text">دروبشيبينغ</span> في المغرب
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
              ابدأ البيع أونلاين بدون مخزون. نصمم لك متجر دروبشيبينغ احترافي مع موردين موثوقين.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              ابدأ متجر دروبشيبينغ
            </a>
          </motion.div>
        </div>
      </section>

      {/* What is Dropshipping */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">ما هو الدروبشيبينغ؟</h2>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-2xl bg-card border border-border card-shadow">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              الدروبشيبينغ هو نموذج تجاري يتيح لك بيع المنتجات عبر الإنترنت بدون الحاجة لشراء أو تخزين أي مخزون. عندما يطلب عميل منتجًا من متجرك، تقوم بتمرير الطلب للمورد الذي يشحنه مباشرة للعميل.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              في المغرب، أصبح الدروبشيبينغ وسيلة شائعة لبدء مشروع تجاري أونلاين برأس مال محدود. مع Brandixo، نساعدك في إنشاء متجر دروبشيبينغ احترافي وربطه بموردين موثوقين.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">مزايا الدروبشيبينغ</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-background border border-border card-shadow hover:border-gold/30 transition-colors">
                <b.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold font-display mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">ماذا نقدم لك؟</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {weProvide.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span className="font-body">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding dark-section text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">ابدأ مشروع دروبشيبينغ اليوم</h2>
            <p className="text-white/60 text-lg mb-8">تواصل معنا واحصل على متجر دروبشيبينغ جاهز للبيع</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </a>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold font-display mb-6">خدمات أخرى</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/create-online-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">إنشاء متجر إلكتروني</Link>
            <Link to="/shopify-store-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر Shopify في المغرب</Link>
            <Link to="/landing-page-design" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">تصميم صفحة هبوط</Link>
            <Link to="/ecommerce-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">التجارة الإلكترونية في المغرب</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default DropshippingStore;
