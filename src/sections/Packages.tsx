import { useEffect, useRef } from 'react';
import { Check, Star, Globe, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PackagesProps {
  t: {
    packages: {
      badge: string;
      title: string;
      desc: string;
      package0: {
        name: string;
        duration: string;
        price: string;
        popular: string;
        items: string[];
        docUrl: string;
        paypalUrl: string;
      };
      package1: {
        name: string;
        duration: string;
        price: string;
        popular: string;
        items: string[];
        docUrl: string;
        paypalUrl: string;
      };
      package2: {
        name: string;
        duration: string;
        price: string;
        popular: string;
        items: string[];
        docUrl: string;
        paypalUrl: string;
      };
      package3: {
        name: string;
        duration: string;
        price: string;
        popular: string;
        items: string[];
        docUrl: string;
        paypalUrl: string;
      };
      viewDetails: string;
      book: string;
    };
  };
  language: string;
}

interface PackageConfig {
  data: {
    name: string;
    duration: string;
    price: string;
    popular: string;
    items: string[];
    docUrl: string;
    paypalUrl: string;
  };
  icon: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  isPopular: boolean;
  isFeatured?: boolean;
}

const Packages = ({ t, language }: PackagesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { rotateY: 45, opacity: 0, y: 50 },
          {
            rotateY: 0,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const packages: PackageConfig[] = [
    {
      data: t.packages.package0,
      icon: (
        <svg className="text-white w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14H5v-2h6v2zm6-4H5v-2h12v2zm0-4H5V7h12v2z"/>
          <path d="M17 8c0-1.1-.9-2-2-2H9v2h6v6h2V8z"/>
        </svg>
      ),
      bgGradient: 'from-teal-400 to-teal-600',
      borderColor: 'border-secondary',
      isPopular: true,
      isFeatured: false
    },
    {
      data: t.packages.package1,
      icon: <Globe className="text-white w-16 h-16" />,
      bgGradient: 'from-blue-400 to-blue-600',
      borderColor: 'border-gray-200',
      isPopular: false,
      isFeatured: false
    },
    {
      data: t.packages.package2,
      icon: <Heart className="text-white w-16 h-16" />,
      bgGradient: 'from-secondary to-green-600',
      borderColor: 'border-accent',
      isPopular: true,
      isFeatured: true
    },
    {
      data: t.packages.package3,
      icon: <Star className="text-white w-16 h-16" />,
      bgGradient: 'from-accent to-yellow-600',
      borderColor: 'border-gray-200',
      isPopular: false,
      isFeatured: false
    }
  ];

  return (
    <section id="packages" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            {t.packages.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            {t.packages.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.packages.desc}
          </p>
        </div>

        {/* Packages Grid */}
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-4 gap-8"
          style={{ perspective: '1000px' }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card rounded-2xl overflow-hidden card-hover border-2 ${pkg.borderColor} relative ${
                pkg.isFeatured ? 'lg:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="popular-badge text-white text-center py-2 font-semibold text-sm">
                  <Star className="inline w-4 h-4 mr-2" />
                  {pkg.data.popular}
                </div>
              )}

              {/* Image Area */}
              <div className={`h-48 bg-gradient-to-br ${pkg.bgGradient} flex items-center justify-center`}>
                {pkg.icon}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {pkg.data.name}
                </h3>
                <p className="text-gray-500 mb-4 text-sm">{pkg.data.duration}</p>
                <div className="text-3xl font-display font-bold text-primary mb-6">
                  {pkg.data.price}
                  <span className="text-lg font-normal text-gray-500">
                    {language === 'zh' ? (index === 0 ? '/月' : '起') : (index === 0 ? '/month' : '')}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {pkg.data.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <Check className="text-secondary w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-3">
                  <a
                    href={pkg.data.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  >
                    {t.packages.viewDetails}
                  </a>

                  {/* Book Now Button */}
                  <a
                    href={pkg.data.paypalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-full font-semibold transition shadow-lg ${
                      pkg.isFeatured
                        ? 'bg-accent text-primary hover:bg-accent/90'
                        : index === 0
                        ? 'bg-accent text-primary hover:bg-accent/90'
                        : index === 3
                        ? 'bg-secondary text-white hover:bg-secondary/90'
                        : 'bg-accent text-primary hover:bg-accent/90'
                    }`}
                  >
                    {t.packages.book}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
