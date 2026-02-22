import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Globe, Star, Heart } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  t: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      viewPackages: string;
      bookConsult: string;
    };
    trust: {
      jci: string;
      gha: string;
      hospital: string;
      cases: string;
    };
  };
}

const Hero = ({ t }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(chars,
          { y: 100, opacity: 0, rotateX: 90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: 'expo.out',
            delay: 0.3
          }
        );
      }

      // Content fade in
      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 1, ease: 'expo.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = t.hero.title;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero-bg.jpg"
          alt="China Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,321.39,56.44Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium tracking-wider">
            <Globe className="w-4 h-4" />
            {t.hero.badge}
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight overflow-hidden"
        >
          {titleText.split('').map((char, index) => (
            <span
              key={index}
              className="char inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-light mb-4 text-shadow font-display italic">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <div ref={contentRef}>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#packages"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-full font-semibold text-lg transition shadow-lg"
            >
              {t.hero.viewPackages}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition"
            >
              <Calendar className="w-5 h-5" />
              {t.hero.bookConsult}
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="text-secondary w-6 h-6" />
              <span className="font-medium">{t.trust.jci}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="text-secondary w-6 h-6" />
              <span className="font-medium">{t.trust.gha}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="text-secondary w-6 h-6" />
              <span className="font-medium">{t.trust.hospital}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Globe className="text-secondary w-6 h-6" />
              <span className="font-medium">{t.trust.cases}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
