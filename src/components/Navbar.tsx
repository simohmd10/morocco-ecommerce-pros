import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();

  const links = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.portfolio", href: "#portfolio" },
    { key: "nav.faq", href: "#faq" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 inset-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold">
          <span className="text-yellow-500">Bran</span>dixo
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language */}
          <button
            onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
            className="flex items-center gap-1 text-sm"
          >
            <Globe className="w-4 h-4" />
            {lang === "ar" ? "العربية" : "Fr"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;