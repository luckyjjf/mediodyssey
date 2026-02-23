import { Heart } from 'lucide-react';
import type { Translation, Language } from '../../types';

interface NavbarProps {
  t: Translation;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ t, language, onLanguageChange }: NavbarProps) {
  return (
    <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999, backgroundColor: 'white', borderBottom: '1px solid #e5e7eb'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}>
            <div style={{width: '40px', height: '40px', backgroundColor: '#1e3a5f', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Heart style={{color: 'white', width: '24px', height: '24px'}} />
            </div>
            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a5f'}}>MediOdyssey</span>
          </a>
          <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
            <a href="#services" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.services}</a>
            <a href="#packages" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.packages}</a>
            <a href="#stories" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.stories}</a>
            <a href="#contact" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.contact}</a>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              style={{padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc'}}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
            <a href="#contact" style={{backgroundColor: '#1e3a5f', color: 'white', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none'}}>
              {t.nav.freeConsult}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
