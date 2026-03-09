import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `📩 طلب جديد من الموقع\n\n👤 الاسم: ${form.name}\n📧 الإيميل: ${form.email}\n📞 الهاتف: ${form.phone}\n💬 الرسالة: ${form.message}`
    );
    window.open(`https://wa.me/212691553120?text=${text}`, '_blank');
    toast.success(t('contact.send') + ' ✓');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const whatsappUrl = `https://wa.me/212691553120?text=${encodeURIComponent('مرحباً، أريد إنشاء متجر إلكتروني')}`;

  return (
    <section id="contact" className="section-padding bg-background" aria-label="Contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
            aria-label="Contact form"
          >
            <label htmlFor="contact-name" className="sr-only">{t('contact.name')}</label>
            <input
              id="contact-name"
              type="text"
              required
              maxLength={100}
              placeholder={t('contact.name')}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />
            <label htmlFor="contact-email" className="sr-only">{t('contact.email')}</label>
            <input
              id="contact-email"
              type="email"
              required
              maxLength={255}
              placeholder={t('contact.email')}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />
            <label htmlFor="contact-phone" className="sr-only">{t('contact.phone')}</label>
            <input
              id="contact-phone"
              type="tel"
              required
              maxLength={20}
              placeholder={t('contact.phone')}
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors text-foreground"
            />
            <label htmlFor="contact-message" className="sr-only">{t('contact.message')}</label>
            <textarea
              id="contact-message"
              required
              maxLength={1000}
              rows={4}
              placeholder={t('contact.message')}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none text-foreground"
            />
            <button
              type="submit"
              className="w-full gold-gradient text-primary font-bold py-3 rounded-xl gold-shadow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              {t('contact.send')}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6 p-8 rounded-2xl bg-card border border-border card-shadow"
          >
            <MessageCircle className="w-16 h-16 text-green-500" aria-hidden="true" />
            <p className="text-center text-muted-foreground">{t('contact.subtitle')}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-primary-foreground font-bold px-8 py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center gap-2"
              aria-label={t('contact.whatsapp')}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t('contact.whatsapp')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;