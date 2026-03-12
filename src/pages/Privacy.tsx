import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      introTitle: "1. Introduction",
      introText:
        "Brandixo respects your privacy and is committed to protecting your personal information when you use our website and services including e-commerce store creation, Shopify setup, UI/UX design and landing page development.",
    },

    fr: {
      title: "Politique de confidentialité",
      introTitle: "1. Introduction",
      introText:
        "Brandixo respecte votre vie privée et s'engage à protéger vos informations personnelles lorsque vous utilisez notre site web et nos services de création de boutiques e-commerce, Shopify et design web.",
    },

    ar: {
      title: "سياسة الخصوصية",
      introTitle: "1. المقدمة",
      introText:
        "نحن في Brandixo نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية عند استخدام موقعنا وخدماتنا مثل إنشاء المتاجر الإلكترونية وتصميم صفحات الهبوط وتصميم المواقع.",
    },
  };

  const t = content[lang];

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-widest mb-3">
              LEGAL
            </p>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
              {t.title}
            </h1>

            <p className="text-muted-foreground text-sm">
              Last updated: March 12, 2026
            </p>
          </div>

          <section className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4">
              {t.introTitle}
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {t.introText}
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;