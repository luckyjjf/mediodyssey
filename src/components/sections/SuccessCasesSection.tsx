import { MapPin, Clock, ArrowRight, Building2, Users, CheckCircle2 } from 'lucide-react';
import type { Translation } from '../../types';

interface SuccessCasesSectionProps {
  t: Translation;
}

export function SuccessCasesSection({ t }: SuccessCasesSectionProps) {
  // Get cases from translations
  const cases = t.successCases.cases || [];

  return (
    <section id="cases" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t.successCases.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.successCases.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.successCases.subtitle}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {t.successCases.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <div 
              key={caseItem.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {caseItem.featured && (
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t.successCases.featured}
                  </div>
                )}

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white/90 text-sm">
                  <MapPin className="w-4 h-4" />
                  {caseItem.location}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Hospital */}
                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">{caseItem.hospital}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {caseItem.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {caseItem.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{caseItem.stats.doctors} {t.successCases.doctors}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{caseItem.duration}</span>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">{t.successCases.outcome}: </span>
                    <span className="text-slate-600">{caseItem.outcome}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  {t.successCases.viewDetail}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">{t.successCases.ctaText}</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
          >
            {t.successCases.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
