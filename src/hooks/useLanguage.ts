import { useState, useCallback } from 'react';
import type { Language, Translation } from '../types';
import { translations } from '../data/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  
  const t: Translation = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  return {
    language,
    setLanguage: handleLanguageChange,
    t,
    isRTL
  };
}
