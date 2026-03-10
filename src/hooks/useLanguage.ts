import { useState } from 'react';
import type { Language, Translation } from '../types';
import { translations } from '../data/translations';

export function useLanguage() {
  const [language] = useState<Language>('en');
  
  const t: Translation = translations[language];

  return {
    language,
    setLanguage: () => {},
    t
  };
}
