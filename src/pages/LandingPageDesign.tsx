import SeoPageLayout from '@/components/SeoPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Smartphone, Zap, MessageCircle, Check, ShoppingBag } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const LandingPageDesign = () => {
  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد تصميم صفحة هبوط')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Landing Page Design",
    "description": "High-converting landing page design for e-commerce products in Morocco",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "MAD",
      "availability": "https://schema.org/InStock"
    },
    "provider": { "@type": "Organization", "name": "Brandixo" }
  };

  const features = [
    { icon: Palette, title: "تصميم عالي التحويل", desc: "تصميم مدروس لتحقيق أعلى معدل تحويل للزوار إلى عملاء" },
    { icon: Smartphone, title: "متوافق مع الهاتف", desc: "صفحة هبوط تعمل بشكل مثالي على جميع أحجام الشاشات" },
    { icon: MessageCircle, title: "زر طلب واتساب", desc: "زر واتساب مدمج لتسهيل عملية الطلب والتواصل" },
    { icon: Zap, title: "سرعة تحميل فائقة", desc: "صفحة خفيفة وسريعة لتجربة مستخدم ممتازة" },
  ];

  return (
    <SeoPageLayout
      title="تصميم صفحة هبوط للمنتجات | Landing Page Design - Brandixo"
      description="تصميم صفحة هبوط احترافية للمنتجات بسعر 99 درهم فقط. تصميم عالي التحويل، متوافق مع الهاتف، زر واتساب مدمج. Landing page design Morocco."
      structuredData={structuredData}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/3 end-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <Palette className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold-light">Landing Page Design</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
              تصميم <span className="gold-text">صفحة هبوط</span> للمنتجات
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
              صفحة هبوط احترافية لعرض وبيع منتجاتك عبر الإنترنت. تصميم جذاب يحوّل الزوار إلى عملاء.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              اطلب صفحة هبوط الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">مميزات صفحة الهبوط</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border card-shadow hover:border-gold/30 transition-colors">
                <f.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold font-display mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-lg">
          <motion.div {...fadeUp} className="text-center">
            <div className="p-8 rounded-2xl bg-background border-2 border-gold card-shadow">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 text-gold text-sm font-bold mb-6">
                <ShoppingBag className="w-4 h-4" />
                عرض خاص
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">صفحة هبوط</h2>
              <div className="text-5xl md:text-6xl font-bold font-display gold-text my-6">99 <span className="text-2xl">MAD</span></div>
              <div className="space-y-3 text-start mb-8">
                {["تصميم عالي التحويل", "متوافق مع الهاتف", "زر طلب واتساب", "سرعة تحميل فائقة", "تسليم خلال 24 ساعة"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-body">{f}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient w-full px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                اطلب صفحة هبوطك الآن
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding dark-section text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">هل لديك منتج تريد بيعه؟</h2>
            <p className="text-white/60 text-lg mb-8">احصل على صفحة هبوط احترافية بـ 99 درهم فقط</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              تواصل معنا الآن
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
            <Link to="/dropshipping-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر دروبشيبينغ</Link>
            <Link to="/ecommerce-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">التجارة الإلكترونية في المغرب</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default LandingPageDesign;
