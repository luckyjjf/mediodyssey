import { Star } from 'lucide-react';
import type { Translation } from '../../types';

interface WhyChinaSectionProps {
  t: Translation;
}

export function WhyChinaSection({ t }: WhyChinaSectionProps) {
  const stats = [
    { value: '1/3', label: t.whyChina.stat1 },
    { value: '#1', label: t.whyChina.stat2 },
    { value: '5000+', label: t.whyChina.stat3 },
    { value: '100%', label: t.whyChina.stat4 }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase">{t.whyChina.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">{t.whyChina.title}</h2>
            <p className="text-slate-600 text-lg mb-8">
              {t.whyChina.desc}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80" 
              alt="Modern medical facility" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Star className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-900 font-medium">{t.whyChina.testimonial}</p>
                  <p className="text-slate-500 text-sm">{t.whyChina.patient}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
