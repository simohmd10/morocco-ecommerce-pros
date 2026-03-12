import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mdawgbkj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      toast.success("Message envoyé ✓");
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      toast.error("Erreur lors de l'envoi");
    }
  };

  const whatsappUrl =
    "https://wa.me/212691553120?text=" +
    encodeURIComponent("مرحباً، أريد إنشاء متجر إلكتروني");

  return (
    <section
      id="contact"
      className="section-padding bg-background"
      aria-label="Contact"
    >
      <div className="container mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            {t('contact.title')}
          </h2>

          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              required
              placeholder={t('contact.name')}
              value={form.name}
              onChange={e =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />

            <input
              type="email"
              required
              placeholder={t('contact.email')}
              value={form.email}
              onChange={e =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />

            <input
              type="tel"
              required
              placeholder={t('contact.phone')}
              value={form.phone}
              onChange={e =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />

            <textarea
              rows={4}
              required
              placeholder={t('contact.message')}
              value={form.message}
              onChange={e =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none text-foreground"
            />

            <button
              type="submit"
              className="w-full gold-gradient text-primary font-bold py-3 rounded-xl gold-shadow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t('contact.send')}
            </button>

          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl bg-card border border-border card-shadow"
          >

            <MessageCircle className="w-16 h-16 text-green-500" />

            <p className="text-center text-muted-foreground">
              {t('contact.subtitle')}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2"
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