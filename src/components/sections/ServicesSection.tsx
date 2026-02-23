import { Microscope, Activity, Landmark, ConciergeBell, Check } from 'lucide-react';
import type { Translation } from '../../types';

interface ServicesSectionProps {
  t: Translation;
}

export function ServicesSection({ t }: ServicesSectionProps) {
  const pillars = [
    {
      icon: Microscope,
      bgColor: 'bg-blue-100',
      iconColor: 'text-primary',
      title: t.services.pillar1.title,
      desc: t.services.pillar1.desc,
      items: t.services.pillar1.items
    },
    {
      icon: Activity,
      bgColor: 'bg-green-100',
      iconColor: 'text-secondary',
      title: t.services.pillar2.title,
      desc: t.services.pillar2.desc,
      items: t.services.pillar2.items
    },
    {
      icon: Landmark,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-primary',
      title: t.services.pillar3.title,
      desc: t.services.pillar3.desc,
      items: t.services.pillar3.items
    },
    {
      icon: ConciergeBell,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: t.services.pillar4.title,
      desc: t.services.pillar4.desc,
      items: t.services.pillar4.items
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase">{t.services.badge}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.services.title}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t.services.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <pillar.icon className={`${pillar.iconColor} w-8 h-8`} />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{pillar.title}</h3>
              <p className="text-slate-600 mb-4">{pillar.desc}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="text-secondary w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
