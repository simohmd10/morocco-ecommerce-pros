import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/components/blogData';

// Simple markdown renderer
const renderContent = (content: string) => {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-2xl font-bold font-display text-foreground mt-8 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-xl font-bold text-foreground mt-6 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('| ') && line.endsWith(' |')) {
      // Table
      const tableLines = [line];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const headers = tableLines[0].split('|').filter(c => c.trim() && !c.includes('---'));
      const rows = tableLines.slice(2).map(row => row.split('|').filter(c => c.trim()));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}>
                {headers.map((h, hi) => <th key={hi} className="px-4 py-3 text-dark text-sm font-bold text-start">{h.trim()}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-card' : 'bg-background'}>
                  {row.map((cell, ci) => <td key={ci} className="px-4 py-3 text-sm text-foreground border-t border-border">{cell.trim()}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith('- ')) {
      const items = [line.slice(2)];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ms-4">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 text-foreground/80 text-base">
              <span className="text-gold mt-1.5 flex-shrink-0">◆</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith('1. ') || line.startsWith('2. ')) {
      const items = [line.replace(/^\d+\.\s/, '')];
      i++;
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 ms-4 list-decimal list-inside">
          {items.map((item, ii) => (
            <li key={ii} className="text-foreground/80 text-base"
              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>') }}
            />
          ))}
        </ol>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="text-foreground/80 leading-relaxed text-base my-3"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>') }}
        />
      );
    }
    i++;
  }
  return elements;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    navigate('/blog');
    return null;
  }

  const isRTL = post.lang === 'ar';
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const backLabel = post.lang === 'ar' ? 'العودة للمدونة' : post.lang === 'fr' ? 'Retour au blog' : 'Back to blog';
  const ctaLabel = post.lang === 'ar' ? 'ابدأ متجرك مع Brandixo' : post.lang === 'fr' ? 'Lancez votre boutique avec Brandixo' : 'Start your store with Brandixo';
  const ctaSub = post.lang === 'ar' ? 'متجر احترافي جاهز خلال 48 ساعة مع ربط الدفع والتوصيل' : post.lang === 'fr' ? 'Boutique professionnelle prête en 48h avec paiement et livraison' : 'Professional store ready in 48 hours with payment and delivery';
  const ctaBtn = post.lang === 'ar' ? 'تواصل معنا الآن' : post.lang === 'fr' ? 'Contactez-nous' : 'Contact Us Now';
  const minRead = post.lang === 'ar' ? 'دقيقة قراءة' : post.lang === 'fr' ? 'min de lecture' : 'min read';

  return (
    <>
      <Helmet>
        <title>{post.title} | Brandixo</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://brandixo.store/blog/${post.slug}`} />
        <html lang={post.lang} dir={isRTL ? 'rtl' : 'ltr'} />
      </Helmet>

      <Navbar />

      <main dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-background pt-20">

        {/* Back button */}
        <div className="container mx-auto max-w-3xl px-4 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <BackIcon className="w-4 h-4" />
            {backLabel}
          </Link>
        </div>

        {/* Article */}
        <article className="container mx-auto max-w-3xl px-4 pb-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-semibold text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString(post.lang === 'ar' ? 'ar-MA' : post.lang === 'fr' ? 'fr-MA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime} {minRead}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Gold divider */}
            <div className="w-16 h-1 rounded-full mt-6" style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-content"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 md:p-8 rounded-2xl dark-section text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2">
              {ctaLabel}
            </h3>
            <p className="text-white/60 text-sm mb-5">{ctaSub}</p>
            <Link to="/#contact" className="btn-gold">
              {ctaBtn}
            </Link>
          </motion.div>

        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
