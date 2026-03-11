import SeoPageLayout from '@/components/SeoPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, ShoppingBag, CreditCard, Truck, Globe, BarChart3, Smartphone, DollarSign, Check, MessageCircle } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const EcommerceMorocco = () => {
  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر إلكتروني')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "التجارة الإلكترونية في المغرب - دليل شامل",
    "author": { "@type": "Organization", "name": "Brandixo" },
    "publisher": { "@type": "Organization", "name": "Brandixo" },
    "description": "دليل شامل عن التجارة الإلكترونية في المغرب: النمو، الفرص، وطرق الدفع والتوصيل المتاحة."
  };

  const stats = [
    { value: "+30%", label: "نمو التجارة الإلكترونية سنويًا" },
    { value: "+25M", label: "مستخدم إنترنت في المغرب" },
    { value: "+70%", label: "من المغاربة يتسوقون أونلاين" },
    { value: "+5B MAD", label: "حجم سوق التجارة الإلكترونية" },
  ];

  const whySellOnline = [
    { icon: Users, title: "الوصول لملايين العملاء", desc: "أكثر من 25 مليون مستخدم إنترنت في المغرب جاهزون للشراء أونلاين" },
    { icon: TrendingUp, title: "سوق متنامي بسرعة", desc: "التجارة الإلكترونية في المغرب تنمو بأكثر من 30% سنويًا" },
    { icon: DollarSign, title: "تكاليف أقل من المتجر التقليدي", desc: "لا إيجار، لا موظفين كثيرين، هوامش ربح أعلى" },
    { icon: Globe, title: "بيع 24/7", desc: "متجرك مفتوح على مدار الساعة ويبيع حتى وأنت نائم" },
    { icon: Smartphone, title: "التسوق عبر الهاتف", desc: "أغلب المغاربة يتسوقون من هواتفهم الذكية" },
    { icon: BarChart3, title: "بيانات وتحليلات", desc: "اعرف عملائك وتتبع مبيعاتك بتقارير مفصلة" },
  ];

  const paymentMethods = [
    "الدفع عند الاستلام (COD)",
    "البطاقات البنكية (CMI)",
    "PayPal",
    "التحويل البنكي",
    "محافظ إلكترونية",
  ];

  const deliveryOptions = [
    "Amana Express",
    "GLS Morocco",
    "Chronopost",
    "CTM Messagerie",
    "التوصيل المحلي",
  ];

  return (
    <SeoPageLayout
      title="التجارة الإلكترونية في المغرب | E-commerce Morocco - Brandixo"
      description="دليل شامل عن التجارة الإلكترونية في المغرب. تعرف على نمو السوق، فرص البيع أونلاين، طرق الدفع والتوصيل. أنشئ متجرك الإلكتروني الآن."
      structuredData={structuredData}
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center dark-section overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <TrendingUp className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold-light">E-Commerce Morocco</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight max-w-4xl mx-auto mb-6">
              <span className="gold-text">التجارة الإلكترونية</span> في المغرب
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-body">
              اكتشف فرص التجارة الإلكترونية في المغرب وابدأ البيع أونلاين اليوم. سوق ينمو بسرعة مع ملايين العملاء المحتملين.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              أنشئ متجرك الآن
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">نمو التجارة الإلكترونية في المغرب</h2>
            <p className="text-muted-foreground text-lg">أرقام تعكس حجم الفرصة في السوق المغربي</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-card border border-border card-shadow text-center">
                <div className="text-3xl md:text-4xl font-bold font-display gold-text mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sell Online */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">لماذا يجب أن تبيع أونلاين في المغرب؟</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySellOnline.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-background border border-border card-shadow hover:border-gold/30 transition-colors">
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Delivery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">طرق الدفع والتوصيل في المغرب</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="p-6 rounded-2xl bg-card border border-border card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-gold" />
                <h3 className="text-xl font-bold font-display">طرق الدفع</h3>
              </div>
              <div className="space-y-3">
                {paymentMethods.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-body">{m}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-card border border-border card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-gold" />
                <h3 className="text-xl font-bold font-display">شركات التوصيل</h3>
              </div>
              <div className="space-y-3">
                {deliveryOptions.map((d, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="font-body">{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of Online Stores */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">مزايا المتجر الإلكتروني</h2>
          </motion.div>
          <motion.div {...fadeUp} className="p-8 rounded-2xl bg-background border border-border card-shadow">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                المتجر الإلكتروني يتيح لك بيع منتجاتك على مدار الساعة بدون قيود جغرافية. على عكس المتجر التقليدي، لا تحتاج لدفع إيجار أو توظيف فريق كبير. يمكنك إدارة كل شيء من هاتفك.
              </p>
              <p className="leading-relaxed mb-4">
                في المغرب، يفضل أكثر من 70% من المتسوقين عبر الإنترنت الشراء من متاجر إلكترونية محلية. هذا يعني فرصة كبيرة لأي شخص يريد بدء مشروع تجاري أونلاين.
              </p>
              <p className="leading-relaxed">
                مع Brandixo، نساعدك في إنشاء متجر إلكتروني احترافي مع كل الأدوات التي تحتاجها: تصميم عصري، دفع إلكتروني، ربط مع شركات التوصيل، وتحسين لمحركات البحث.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding dark-section text-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">ابدأ البيع أونلاين في المغرب</h2>
            <p className="text-white/60 text-lg mb-8">أنشئ متجرك الإلكتروني الاحترافي مع Brandixo واستفد من نمو التجارة الإلكترونية في المغرب</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="gold-gradient px-8 py-4 rounded-xl text-primary font-bold text-lg gold-shadow hover:scale-105 transition-transform inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                تواصل معنا الآن
              </a>
              <Link to="/create-online-store" className="px-8 py-4 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-colors inline-block">
                تعرف على خدماتنا
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
            <Link to="/create-online-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">إنشاء متجر إلكتروني</Link>
            <Link to="/shopify-store-morocco" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر Shopify في المغرب</Link>
            <Link to="/landing-page-design" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">تصميم صفحة هبوط</Link>
            <Link to="/dropshipping-store" className="px-6 py-3 rounded-xl border border-border hover:border-gold/30 transition-colors text-sm">متجر دروبشيبينغ</Link>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
};

export default EcommerceMorocco;
