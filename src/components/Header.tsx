import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Header() {
  const { language, setLanguage, t, languages } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'programs', path: '/programs' },
    { key: 'impact', path: '/impact' },
    { key: 'gallery', path: '/gallery' },
    { key: 'news', path: '/news' },
    { key: 'volunteer', path: '/volunteer' },
    { key: 'partnerships', path: '/partnerships' },
    { key: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentLang = languages.find(l => l.code === language);

  return (
    <header
    className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A5F]/95 backdrop-blur-md shadow-lg"
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <motion.img
               whileHover={{ scale: 1.05 }}
               src="/logo.jpg"
               alt="Fondation Mariam"
               className="h-14 md:h-16 w-auto object-contain rounded-full shadow-lg"
      />

      <div className="hidden sm:block">
        <h1 className="text-white font-bold text-xl leading-tight">
          Fondation Mariam
        </h1>

        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.25em]">
          La Lumière de la Nation
        </p>
    </div>
  </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#D4AF37] bg-white/10'
                    : 'text-white/90 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                aria-label={t.common.lang[language]}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{t.common.lang[language]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'bg-[#D4AF37]/10 text-[#D4AF37]' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{t.common.lang[lang.code]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] rounded-full font-semibold text-sm shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {t.nav.donate}
            </Link>

            {/* Sponsor Button */}
            <Link
              to="/sponsor"
              className="px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              {t.nav.sponsor}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1E3A5F] border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#D4AF37] bg-white/10'
                      : 'text-white/90 hover:bg-white/5'
                  }`}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex flex-wrap gap-2 pt-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      language === lang.code
                        ? 'bg-[#D4AF37] text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex gap-3 pt-4">
                <Link
                  to="/donate"
                  className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#1E3A5F] rounded-full font-semibold text-center"
                >
                  {t.nav.donate}
                </Link>
                <Link
                  to="/sponsor"
                  className="flex-1 py-3 bg-white/15 text-white rounded-full font-semibold text-center border border-white/20"
                >
                  {t.nav.sponsor}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
