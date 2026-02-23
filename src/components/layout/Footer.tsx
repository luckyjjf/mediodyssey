import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import type { Translation, Language } from '../../types';

interface FooterProps {
  t: Translation;
  language: Language;
}

export function Footer({ t, language }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold">MediOdyssey</span>
            </div>
            <p className="text-slate-400 mb-4">
              {t.footer.tagline}<br />
              {t.footer.tagline2}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.links}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition">{language === 'en' ? 'About Us' : 'من نحن'}</a></li>
              <li><a href="#services" className="hover:text-white transition">{t.nav.services}</a></li>
              <li><a href="#packages" className="hover:text-white transition">{t.nav.packages}</a></li>
              <li><a href="#stories" className="hover:text-white transition">{t.nav.stories}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition">{t.services.pillar1.title}</a></li>
              <li><a href="#" className="hover:text-white transition">{t.services.pillar2.title}</a></li>
              <li><a href="#" className="hover:text-white transition">{t.services.pillar3.title}</a></li>
              <li><a href="#" className="hover:text-white transition">{t.services.pillar4.title}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+86 133-9645-7967</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+852 4743-6719</li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" />jiangjingfu@mediodyssey.com</li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'مبنى 4، حديقة ويست بوند الإبداعية، رقم 186 شارع جوي، منطقة شيهوي، شنغهاي' : 'Building 4, West Bund Creative Park, 186 Guyi Road, Xuhui District, Shanghai'}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2026 MediOdyssey. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
