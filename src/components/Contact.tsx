import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Send, Loader } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mdawgbkj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        toast.success(t('contact.success'));
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(t('contact.error'));
      }
    } catch {
      toast.error(t('contact.error.network'));
    }

    setLoading(false);
  };

  const whatsappUrl =
    "https://wa.me/212691553120?text=" +
    encodeURIComponent(t('contact.whatsapp.message'));

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold font-display mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col-reverse gap-5 md:grid md:grid-cols-2 md:gap-8">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-3.5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              required
              placeholder={t('contact.name')}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors"
            />

            <input
              type="email"
              required
              placeholder={t('contact.email')}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors"
            />

            <input
              type="tel"
              required
              placeholder={t('contact.phone')}
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none text-sm transition-colors"
            />

            <textarea
              rows={4}
              required
              placeholder={t('contact.message')}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none text-sm transition-colors"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full gold-gradient text-dark font-bold py-3.5 rounded-xl gold-shadow hover:shadow-[0_8px_40px_-8px_hsl(42_80%_48%/0.45)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('contact.send')}
                </>
              )}
            </button>
          </motion.form>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-2xl bg-card border border-border card-shadow text-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 md:w-9 md:h-9 text-green-500" />
            </div>

            <div>
              {/* ✅ FIX 1: إزالة الـ fallback المنطقي الخاطئ — t() تعمل مباشرة */}
              <h3 className="font-bold text-base md:text-lg mb-1">
                {t('contact.whatsapp.title')}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('contact.whatsapp.subtitle')}
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              {t('contact.whatsapp')}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
