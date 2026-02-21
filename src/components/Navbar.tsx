import React, { useState } from 'react';
import { Heart, Menu, X, Languages } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'zh' | 'ar';
  onLanguageChange: (lang: 'en' | 'zh' | 'ar') => void;
  t: any;
  isRTL: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange, t, isRTL }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleLanguageChange = (lang: 'en' | 'zh' | 'ar') => {
    onLanguageChange(lang);
    setLangMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 shadow-sm"
      style={{ 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1a365d' }}>
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1a365d' }}>MediOdyssey</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-dark hover:text-secondary transition" style={{ color: '#2d3748' }}>{t.nav.services}</a>
            <a href="#packages" className="text-dark hover:text-secondary transition" style={{ color: '#2d3748' }}>{t.nav.packages}</a>
            <a href="#stories" className="text-dark hover:text-secondary transition" style={{ color: '#2d3748' }}>{t.nav.stories}</a>
            <a href="#contact" className="text-dark hover:text-secondary transition" style={{ color: '#2d3748' }}>{t.nav.contact}</a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1 text-sm font-medium transition"
                style={{ color: '#1a365d' }}
              >
                <Languages className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[100px]" style={{ zIndex: 100000 }}>
                  <button 
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'en' ? 'font-medium' : ''}`}
                    style={{ color: language === 'en' ? '#38a169' : '#2d3748' }}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('zh')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'zh' ? 'font-medium' : ''}`}
                    style={{ color: language === 'zh' ? '#38a169' : '#2d3748' }}
                  >
                    中文
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('ar')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'ar' ? 'font-medium' : ''}`}
                    style={{ color: language === 'ar' ? '#38a169' : '#2d3748' }}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              className="text-white px-6 py-2.5 rounded-full transition font-medium"
              style={{ backgroundColor: '#1a365d' }}
            >
              {t.nav.freeConsult}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            style={{ color: '#2d3748' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#services" style={{ color: '#2d3748' }}>{t.nav.services}</a>
            <a href="#packages" style={{ color: '#2d3748' }}>{t.nav.packages}</a>
            <a href="#stories" style={{ color: '#2d3748' }}>{t.nav.stories}</a>
            <a href="#contact" style={{ color: '#2d3748' }}>{t.nav.contact}</a>
            <div className="flex space-x-4 pt-2 border-t">
              <button onClick={() => handleLanguageChange('en')} style={{ color: language === 'en' ? '#38a169' : '#2d3748' }}>EN</button>
              <button onClick={() => handleLanguageChange('zh')} style={{ color: language === 'zh' ? '#38a169' : '#2d3748' }}>中</button>
              <button onClick={() => handleLanguageChange('ar')} style={{ color: language === 'ar' ? '#38a169' : '#2d3748' }}>عربي</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
