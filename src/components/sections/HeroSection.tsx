import { Globe, ChevronRight, Calendar, Check } from 'lucide-react';
import type { Translation } from '../../types';

interface HeroSectionProps {
  t: Translation;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Dark Background Base */}
      <div className="absolute inset-0 bg-slate-900"></div>
      
      {/* Gradient Overlay - Deep Green */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-slate-900 to-slate-900"></div>
      
      {/* Radial Glow - Gold Accent */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
      }}></div>
      
      {/* Floating Elements - Dark Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-dark/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
        {/* Badge - Dark Theme */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-secondary border border-secondary/30">
            <Globe className="w-4 h-4" />
            {t.hero.badge}
          </span>
        </div>
        
        {/* Main Title - Updated with Highlight */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          <span className="block">{t.hero.title}</span>
          <span className="block text-secondary mt-2">{t.hero.titleHighlight}</span>
        </h1>
        
        {/* Subtitle - Light Text */}
        <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-3xl mx-auto font-light">
          {t.hero.subtitle}
        </p>
        
        {/* Trust Badges - New Section */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Check className="text-secondary w-4 h-4" />
            <span className="text-sm font-medium">{t.hero.trust1}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Check className="text-secondary w-4 h-4" />
            <span className="text-sm font-medium">{t.hero.trust2}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Check className="text-secondary w-4 h-4" />
            <span className="text-sm font-medium">{t.hero.trust3}</span>
          </div>
        </div>
        
        {/* CTA Buttons - Dark Theme */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#packages" className="group bg-secondary hover:bg-secondary-light text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center shadow-lg shadow-secondary/30 hover:shadow-secondary/50">
            {t.hero.viewPackages} 
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="group bg-white/10 hover:bg-white/20 text-white backdrop-blur px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 flex items-center border border-white/30">
            <Calendar className="mr-2 w-5 h-5" />
            {t.hero.bookConsult}
          </a>
        </div>
      </div>
    </section>
  );
}
