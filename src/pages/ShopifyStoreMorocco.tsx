import SeoPageLayout from '@/components/SeoPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Globe, CreditCard, BarChart3, Palette, Headphones, Check, MessageCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const ShopifyStoreMorocco = () => {
  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر Shopify')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Store Creation in Morocco",
    "provider": { "@type": "Organization", "name": "Brandixo" },
    "areaServed": { "@type": "Country", "name": "Morocco" },
    "description": "Professional Shopify store setup and design service in Morocco."
  };

  const whyShopify = [
    { icon: Globe, title: "منصة عالمية موثوقة", desc: "أكثر من 4 مليون متجر حول العالم يستخدم Shopify" },
    { icon: CreditCard, title: "بوابات دفع متعددة", desc: "يدعم جميع طرق الدفع المحلية والدولية" },
    { icon: BarChart3, title: "تحليلات متقدمة", desc: "تتبع مبيعاتك وزوارك بتقارير مفصلة" },
    { icon: Palette, title: "تصاميم احترافية", desc: "مئات القوالب الجاهزة والقابلة للتخصيص" },
    { icon: ShoppingBag, title: "سهولة إدارة المنتجات", desc: "إضافة وتعديل المنتجات بنقرة واحدة" },
    { icon: Headphones, title: "دعم فني 24/7", desc: "فريق دعم Shopify متاح على مدار الساعة" },
  ];

  const services = [
    "إعداد متجر Shopify من الصفر",
    "تخصيص القالب حسب هوية علامتك",
    "إضافة المنتجات والتصنيفات",
    "ربط بوابات الدفع المغربية",
    "إعداد الشحن والتوصيل",
    "تحسين SEO للمتجر",
    "تدريب على إدارة المتجر",
    "دعم فني بعد الإطلاق",
  ];

  return (
    <SeoPageLayout
      title="إنشاء متجر Shopify في المغرب | Brandixo - Shopify Store Morocco"
      description="أنشئ متجرك على Shopify في المغرب مع Brandixo. إعداد كامل، تصميم احترافي، ربط الدفع والتوصيل. Shopify store Morocco."
      structuredData={structuredData}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute bottom-1/4 end-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <ShoppingBag className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold-light">Shopify Morocco</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
              إنشاء متجر <span className="gold-text">Shopify</span> في المغرب
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
              نساعدك في إنشاء وإعداد متجر Shopify احترافي لبيع منتجاتك في المغرب والعالم.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              ابدأ متجرك على Shopify
            </a>
          </motion.div>
        </div>
      </section>

      {/* What is Shopify */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">ما هو Shopify؟</h2>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-2xl bg-card border border-border card-shadow">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Shopify هي أكبر منصة لإنشاء المتاجر الإلكترونية في العالم. تتيح لك إنشاء متجر احترافي بدون أي خبرة تقنية، مع أدوات متكاملة لإدارة المنتجات، الطلبات، الدفع والشحن.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              في المغرب، يمكنك استخدام Shopify لبيع منتجاتك محليًا ودوليًا مع دعم كامل لبوابات الدفع المغربية وشركات التوصيل المحلية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Shopify */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">لماذا تختار Shopify؟</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyShopify.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-background border border-border card-shadow hover:border-gold/30 transition-colors">
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">خدمات إعداد متجر Shopify</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((item, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">جاهز لإطلاق متجرك على Shopify؟</h2>
            <p className="text-white/60 text-lg mb-8">تواصل معنا الآن وابدأ البيع أونلاين</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              تواصل معنا
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
            <Link to="/dropshipping-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر دروبشيبينغ</Link>
            <Link to="/landing-page-design" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">تصميم صفحة هبوط</Link>
            <Link to="/ecommerce-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">التجارة الإلكترونية في المغرب</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default ShopifyStoreMorocco;
