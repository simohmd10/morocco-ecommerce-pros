import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.portfolio", href: "#portfolio" },
    { key: "nav.faq", href: "#faq" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          <button onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          <a href="#home" className="text-xl font-bold">
            <span className="text-yellow-500">Bran</span>dixo
          </a>

        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-background z-50 shadow-xl p-6 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >

              <div className="flex justify-between items-center mb-10">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Language
                </p>

                <div className="flex flex-col gap-4">

                  <button onClick={() => setLang("ar")}>
                    العربية {lang === "ar" && "✓"}
                  </button>

                  <button onClick={() => setLang("fr")}>
                    Français {lang === "fr" && "✓"}
                  </button>

                  <button onClick={() => setLang("en")}>
                    English {lang === "en" && "✓"}
                  </button>

                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;