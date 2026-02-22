import { useState, useEffect } from 'react';
import { Heart, Menu, X, Globe } from 'lucide-react';
import type { Language } from '../translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    nav: {
      services: string;
      packages: string;
      stories: string;
      contact: string;
      freeConsult: string;
    };
  };
}

const Navbar = ({ language, onLanguageChange, t }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    onLanguageChange(lang);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.packages, href: '#packages' },
    { name: t.nav.stories, href: '#stories' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const langNames: Record<Language, string> = {
    en: 'English',
    zh: '中文',
    ar: 'العربية'
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Heart className={`w-5 h-5 transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`} />
            </div>
            <span className={`font-display font-semibold text-xl transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              MediOdyssey
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-secondary rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform" />
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[120px] z-[100000]">
                  {(Object.keys(langNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-teal-50 transition-colors ${
                        language === lang ? 'text-secondary font-medium' : 'text-gray-700'
                      }`}
                    >
                      {langNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {t.nav.freeConsult}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20 bg-white/95 backdrop-blur rounded-2xl px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-2 pt-2 border-t border-gray-100">
                {(Object.keys(langNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      language === lang
                        ? 'bg-secondary text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                className="bg-primary text-white px-5 py-3 rounded-full text-center font-medium mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.freeConsult}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
