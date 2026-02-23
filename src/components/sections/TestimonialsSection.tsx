import { Check, Star } from 'lucide-react';
import type { Translation } from '../../types';

interface TestimonialsSectionProps {
  t: Translation;
}

export function TestimonialsSection({ t }: TestimonialsSectionProps) {
  return (
    <section id="stories" className="section-padding bg-white" style={{minHeight: '600px'}}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">{t.testimonials.badge}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.testimonials.title}</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">{t.testimonials.desc}</p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{t.testimonials.stats.satisfaction}</div>
              <div className="text-slate-500 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">{t.testimonials.stats.recommend}</div>
              <div className="text-slate-500 text-sm">Recommend Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light">{t.testimonials.stats.renewal}</div>
              <div className="text-slate-500 text-sm">Renewal Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.testimonials.officers.map((officer, index) => (
            <div key={index} className="bg-canvas rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={officer.avatar} 
                  alt={officer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                />
                <div className="flex-1">
                  <h4 className="font-serif text-xl font-bold text-primary">{officer.name}</h4>
                  <p className="text-slate-500 text-sm">{officer.country}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < officer.rating ? 'text-secondary fill-secondary' : 'text-slate-300'}`}
                      />
                    ))}
                    <span className="text-sm text-slate-600 ml-2">{officer.package}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    {t.testimonials.prosLabel}
                  </h5>
                  <p className="text-slate-600 text-sm leading-relaxed">{officer.pros}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-400 mb-2 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">!</span>
                    {t.testimonials.consLabel}
                  </h5>
                  <p className="text-slate-500 text-sm leading-relaxed">{officer.cons}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
