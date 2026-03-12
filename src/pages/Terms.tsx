import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      introTitle: "1. Introduction",
      introText:
        "These Terms of Service govern your use of the Brandixo website and services. By using our website you agree to these terms.",
    },

    fr: {
      title: "Conditions d'utilisation",
      introTitle: "1. Introduction",
      introText:
        "Ces conditions d'utilisation régissent l'utilisation du site et des services Brandixo.",
    },

    ar: {
      title: "شروط الاستخدام",
      introTitle: "1. المقدمة",
      introText:
        "تحكم هذه الشروط استخدامك لموقع Brandixo وخدماته. باستخدام الموقع فإنك توافق على هذه الشروط.",
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

export default Terms;