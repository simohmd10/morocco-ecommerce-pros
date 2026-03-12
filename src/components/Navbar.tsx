import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "nav.home", hash: "home" },
    { key: "nav.services", hash: "services" },
    { key: "nav.portfolio", hash: "portfolio" },
    { key: "nav.faq", hash: "faq" },
    { key: "nav.contact", hash: "contact" },
  ];

  const handleNavClick = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#" + hash);
    }
  };

  return (
    <>
      <nav
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/6"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
              scrolled
                ? "text-foreground hover:bg-black/5"
                : "text-white/80 hover:bg-white/10"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className={`text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <span className="gold-text">Bran</span>dixo
          </button>

          {/* CTA button (desktop) */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 bg-gold text-dark hover:shadow-[0_4px_20px_-4px_hsl(42_80%_48%/0.4)] hover:-translate-y-px"
            style={{ background: 'linear-gradient(135deg, hsl(42 80% 48%), hsl(42 85% 62%))' }}
          >
            {t('hero.cta')}
          </a>

        </div>
      </nav>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-black/6">
                <span className="text-lg font-bold">
                  <span className="gold-text">Bran</span>dixo
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1 px-3 pt-4">
                {links.map((link, i) => (
                  <motion.button
                    key={link.key}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.hash)}
                    className="w-full text-start px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/4 transition-all"
                  >
                    {t(link.key)}
                  </motion.button>
                ))}
              </div>

              {/* Gold divider */}
              <div className="mx-6 mt-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(42 80% 48% / 0.3), transparent)' }} />

              {/* Language switcher */}
              <div className="px-6 pt-5">
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
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
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
              <div className="mt-auto px-6 pb-8 pt-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}
                  className="btn-gold w-full justify-center text-sm"
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
