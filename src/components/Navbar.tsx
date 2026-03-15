import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { key: "nav.home", hash: "home" },
    { key: "nav.services", hash: "services" },
    { key: "nav.portfolio", hash: "portfolio" },
    { key: "nav.faq", hash: "faq" },
    { key: "nav.contact", hash: "contact" },
  ];

  const blogLabel = lang === "ar" ? "المدونة" : "Blog";

  const handleNavClick = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate("/#" + hash);
    }
  };

  const isRTL = lang === "ar";

  return (
    <>
      <nav
        dir={isRTL ? "rtl" : "ltr"}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_20px_-4px_hsl(0_0%_0%/0.08)] border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-[60px] md:h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className={`text-xl font-bold tracking-tight transition-colors flex-1 md:flex-none text-center md:text-start ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Brandixo home"
          >
            <span className="gold-text">Bran</span>dixo
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.hash)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-black/5"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {t(link.key)}
              </button>
            ))}

            {/* ✅ Blog link — Desktop */}
            <Link
              to="/blog"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-black/5"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              } ${location.pathname === "/blog" ? "text-gold font-semibold" : ""}`}
            >
              {blogLabel}
            </Link>
          </div>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center gap-0.5 rounded-lg border p-0.5 border-white/20"
            style={scrolled ? { borderColor: 'hsl(0 0% 0% / 0.08)' } : {}}>
            {([
              { code: "ar", label: "ع" },
              { code: "fr", label: "Fr" },
              { code: "en", label: "En" },
            ] as const).map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  lang === code
                    ? "text-dark"
                    : scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-black/5"
                    : "text-white/65 hover:text-white hover:bg-white/10"
                }`}
                style={lang === code ? { background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' } : {}}
                aria-label={code.toUpperCase()}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-2 flex-1 md:flex-none justify-end">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 hover:shadow-[0_4px_20px_-4px_hsl(42_80%_48%/0.45)] hover:-translate-y-px whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
            >
              <span className="text-dark">{t('hero.cta')}</span>
            </a>

            <button
              onClick={() => setOpen(true)}
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-black/5"
                  : "text-white/80 hover:bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/55 backdrop-blur-[2px] z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              dir={isRTL ? "rtl" : "ltr"}
              className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} h-full w-[78vw] max-w-[300px] bg-white z-50 shadow-2xl flex flex-col md:hidden`}
              initial={{ x: isRTL ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "100%" : "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-black/6">
                <span className="text-lg font-bold">
                  <span className="gold-text">Bran</span>dixo
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/6 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-0.5 px-3 pt-3 flex-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.key}
                    initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    onClick={() => handleNavClick(link.hash)}
                    className="w-full text-end px-4 py-3.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/4 transition-all active:scale-[0.98]"
                  >
                    {t(link.key)}
                  </motion.button>
                ))}

                {/* ✅ Blog link — Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05, duration: 0.25 }}
                >
                  <Link
                    to="/blog"
                    onClick={() => setOpen(false)}
                    className={`w-full text-end px-4 py-3.5 rounded-xl text-sm font-medium transition-all active:scale-[0.98] flex justify-end ${
                      location.pathname === "/blog"
                        ? "text-gold font-semibold bg-gold/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-black/4"
                    }`}
                  >
                    {blogLabel}
                  </Link>
                </motion.div>
              </nav>

              {/* Divider */}
              <div className="mx-5 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 80% 48% / 0.25), transparent)' }} />

              {/* Language switcher */}
              <div className="px-5 py-4">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Language
                  </span>
                </div>
                <div className="flex gap-2">
                  {[
                    { code: "ar", label: "ع" },
                    { code: "fr", label: "Fr" },
                    { code: "en", label: "En" },
                  ].map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => setLang(code as "ar" | "fr" | "en")}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        lang === code
                          ? "text-dark shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-black/4 border border-transparent hover:border-black/8"
                      }`}
                      style={lang === code ? { background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' } : {}}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-5 pb-8">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
                  className="btn-gold w-full justify-center text-sm py-3.5"
                  style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
                >
                  {t('hero.cta')}
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
