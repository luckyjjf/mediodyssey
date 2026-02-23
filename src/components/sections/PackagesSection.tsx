import { Check, ChevronRight, Star } from 'lucide-react';
import type { Translation } from '../../types';

interface PackagesSectionProps {
  t: Translation;
}

export function PackagesSection({ t }: PackagesSectionProps) {
  const packages = [t.packages.package0, t.packages.package1, t.packages.package2, t.packages.package3];

  return (
    <section id="packages" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.packages.badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">{t.packages.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.packages.desc}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Package - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                {packages[0].popular}
              </span>
            </div>
            <div className="relative z-10 max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{packages[0].name}</h3>
              <p className="text-white/80 text-lg mb-6">{packages[0].duration}</p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-bold">{packages[0].price}</span>
                <span className="text-white/70">/month</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {packages[0].items.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{item.split(' - ')[0]}</span>
                  </div>
                ))}
              </div>
              <a href={packages[0].paypalUrl} className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition">
                {t.packages.book} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20">
              <div className="absolute right-10 bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Experience Package */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <span className="inline-block bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                {packages[1].popular}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{packages[1].name}</h3>
              <p className="text-slate-500">{packages[1].duration}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">{packages[1].price}</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {packages[1].items.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item.replace('[Assessment]', '').replace('[Screening]', '').replace('[Therapy]', '').split(':')[0]}</span>
                </li>
              ))}
            </ul>
            
            <a href={packages[1].paypalUrl} className="block w-full text-center bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition">
              {t.packages.book}
            </a>
          </div>

          {/* Discovery Journey */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{packages[2].name}</h3>
              <p className="text-slate-500">{packages[2].duration}</p>
            </div>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">{packages[2].price}</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {packages[2].items.slice(1, 4).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item.replace('+ ', '').split(':')[0]}</span>
                </li>
              ))}
            </ul>
            
            <a href={packages[2].paypalUrl} className="block w-full text-center border-2 border-gray-900 text-slate-900 py-3 rounded-full font-medium hover:bg-slate-50 transition">
              {t.packages.viewDetails}
            </a>
          </div>

          {/* Royal Journey - Wide Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block bg-secondary/10 text-secondary-light px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {packages[3].popular}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{packages[3].name}</h3>
                <p className="text-slate-400 mb-6">{packages[3].duration}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-bold">{packages[3].price}</span>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <ul className="space-y-3 mb-8">
                  {packages[3].items.slice(2, 5).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Star className="w-4 h-4 text-secondary-light mt-0.5 flex-shrink-0" />
                      <span>{item.replace('+ ', '').split(':')[0]}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={packages[3].paypalUrl} className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                  {t.packages.book} <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
