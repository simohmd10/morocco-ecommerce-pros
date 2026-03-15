import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/components/blogData';

const Blog = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<'ar' | 'fr' | 'en'>(lang as 'ar' | 'fr' | 'en');

  const filtered = blogPosts.filter(p => p.lang === filter);
  const isRTL = filter === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const labels = {
    ar: { title: 'المدونة', subtitle: 'مقالات في التجارة الإلكترونية والمتاجر الرقمية بالمغرب', read: 'اقرأ المقال', min: 'دقيقة قراءة' },
    fr: { title: 'Blog', subtitle: 'Articles sur le e-commerce et les boutiques en ligne au Maroc', read: 'Lire l\'article', min: 'min de lecture' },
    en: { title: 'Blog', subtitle: 'Articles on e-commerce and online stores in Morocco', read: 'Read article', min: 'min read' },
  };
  const L = labels[filter];

  return (
    <>
      <Helmet>
        <title>Blog — Brandixo | التجارة الإلكترونية في المغرب</title>
        <meta name="description" content="مقالات متخصصة في إنشاء المتاجر الإلكترونية في المغرب — أسعار، وسائل دفع، ونصائح للنجاح." />
        <link rel="canonical" href="https://brandixo.store/blog" />
      </Helmet>

      <Navbar />

      <main dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-background pt-20">

        {/* Hero */}
        <section className="section-padding bg-secondary/30 text-center border-b border-border">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground"
          >
            {L.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8"
          >
            {L.subtitle}
          </motion.p>

          {/* Language Filter */}
          <div className="flex items-center justify-center gap-2">
            {(['ar', 'fr', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === l
                    ? 'text-dark shadow-sm'
                    : 'text-muted-foreground border border-border hover:border-gold/40'
                }`}
                style={filter === l ? { background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' } : {}}
              >
                {l === 'ar' ? 'عربي' : l === 'fr' ? 'Français' : 'English'}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden card-shadow card-hover group"
                >
                  {/* Card Header */}
                  <div
                    className="h-3"
                    style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
                  />

                  <div className="p-6">
                    {/* Category + Read Time */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime} {L.min}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-gold-dark transition-colors">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
                    >
                      {L.read}
                      <ArrowIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding dark-section text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-white">
            {filter === 'ar' ? 'جاهز لإطلاق متجرك؟' : filter === 'fr' ? 'Prêt à lancer votre boutique ?' : 'Ready to launch your store?'}
          </h2>
          <p className="text-white/60 mb-6">
            {filter === 'ar' ? 'متجر احترافي جاهز خلال 48 ساعة' : filter === 'fr' ? 'Boutique professionnelle prête en 48h' : 'Professional store ready in 48 hours'}
          </p>
          <Link
            to="/#contact"
            className="btn-gold"
          >
            {filter === 'ar' ? 'ابدأ متجرك الآن' : filter === 'fr' ? 'Lancez votre boutique' : 'Start Your Store'}
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Blog; 