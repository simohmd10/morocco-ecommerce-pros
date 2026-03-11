import SeoPageLayout from '@/components/SeoPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Zap, Smartphone, CreditCard, Truck, LayoutDashboard, Check, MessageCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const CreateOnlineStore = () => {
  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر إلكتروني')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Create Online Store in Morocco",
    "provider": { "@type": "Organization", "name": "Brandixo" },
    "areaServed": { "@type": "Country", "name": "Morocco" },
    "description": "Professional online store creation service in Morocco. Modern design, fast delivery, integrated payment and shipping."
  };

  const benefits = [
    { icon: Zap, title: "متجر جاهز خلال 48 ساعة", desc: "نصمم ونطلق متجرك بسرعة فائقة" },
    { icon: Smartphone, title: "تصميم متجاوب مع الهاتف", desc: "متجرك يعمل بشكل مثالي على جميع الأجهزة" },
    { icon: CreditCard, title: "دمج وسائل الدفع المغربية", desc: "CMI, PayPal, الدفع عند الاستلام" },
    { icon: Truck, title: "ربط مع شركات التوصيل", desc: "Amana Express, GLS وغيرها" },
    { icon: LayoutDashboard, title: "لوحة تحكم سهلة", desc: "إدارة منتجاتك وطلباتك بسهولة تامة" },
    { icon: ShoppingBag, title: "تحسين محركات البحث SEO", desc: "متجرك يظهر في نتائج Google" },
  ];

  const included = [
    "تصميم احترافي وعصري",
    "صفحة رئيسية جذابة",
    "صفحات المنتجات",
    "سلة التسوق ونظام الدفع",
    "ربط مع WhatsApp",
    "تحسين سرعة الموقع",
    "شهادة SSL مجانية",
    "دعم فني لمدة شهر",
  ];

  return (
    <SeoPageLayout
      title="إنشاء متجر إلكتروني في المغرب | Brandixo - تصميم متاجر احترافية"
      description="أنشئ متجرك الإلكتروني الاحترافي في المغرب مع Brandixo. تصميم متاجر حديثة وسريعة لبيع منتجاتك أونلاين. متجر جاهز خلال 48 ساعة. Create online store Morocco."
      structuredData={structuredData}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <ShoppingBag className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold-light">E-Commerce Morocco</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
              إنشاء <span className="gold-text">متجر إلكتروني</span> في المغرب
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
              نصمم لك متجرًا إلكترونيًا احترافيًا وسريعًا لبيع منتجاتك عبر الإنترنت في المغرب. تصميم عصري، دفع وتوصيل مدمجين.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                ابدأ الآن عبر واتساب
              </a>
              <Link to="/#services" className="px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-colors inline-block">
                تعرف على خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">لماذا تختار Brandixo لإنشاء متجرك؟</h2>
            <p className="text-muted-foreground text-lg">نقدم لك كل ما تحتاجه لبدء البيع أونلاين في المغرب</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border card-shadow hover:border-gold/30 transition-colors">
                <b.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold font-display mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">ماذا يتضمن المتجر؟</h2>
            <p className="text-muted-foreground text-lg">كل ما تحتاجه لمتجر إلكتروني ناجح في المغرب</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
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
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">جاهز لإنشاء متجرك الإلكتروني؟</h2>
            <p className="text-white/60 text-lg mb-8">تواصل معنا الآن واحصل على متجرك خلال 48 ساعة</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </a>
              <Link to="/#contact" className="px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-colors inline-block">
                أرسل استفسارك
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold font-display mb-6">خدمات أخرى</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shopify-store-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر Shopify في المغرب</Link>
            <Link to="/dropshipping-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر دروبشيبينغ</Link>
            <Link to="/landing-page-design" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">تصميم صفحة هبوط</Link>
            <Link to="/ecommerce-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">التجارة الإلكترونية في المغرب</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default CreateOnlineStore;
