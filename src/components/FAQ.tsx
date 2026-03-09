import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';

const FAQ = () => {
  const { t, lang } = useLanguage();

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
  ];

  // Inject FAQ structured data dynamically based on language
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": t(faq.q),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(faq.a)
        }
      }))
    };

    let script = document.getElementById('faq-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'faq-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, [lang]);

  return (
    <section id="faq" className="section-padding dark-section" aria-label="Frequently Asked Questions">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-display text-center mb-16"
        >
          {t('faq.title')}
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="border border-white/10 rounded-xl px-5 bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-start hover:no-underline text-white/90 font-medium">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-white/50">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Internal links for SEO */}
        <nav className="mt-12 text-center" aria-label="Related sections">
          <p className="text-white/40 text-sm mb-3">{lang === 'ar' ? 'روابط ذات صلة' : lang === 'fr' ? 'Liens connexes' : 'Related links'}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#services" className="text-gold/70 hover:text-gold text-sm transition-colors underline underline-offset-4">
              {t('services.title')}
            </a>
            <span className="text-white/20">|</span>
            <a href="#contact" className="text-gold/70 hover:text-gold text-sm transition-colors underline underline-offset-4">
              {t('contact.title')}
            </a>
            <span className="text-white/20">|</span>
            <a href="#portfolio" className="text-gold/70 hover:text-gold text-sm transition-colors underline underline-offset-4">
              {t('portfolio.title')}
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default FAQ;