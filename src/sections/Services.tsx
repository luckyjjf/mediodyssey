import { useEffect, useRef } from 'react';
import { Microscope, Activity, Landmark, ConciergeBell, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  t: {
    services: {
      badge: string;
      title: string;
      desc: string;
      pillar1: {
        title: string;
        desc: string;
        items: string[];
      };
      pillar2: {
        title: string;
        desc: string;
        items: string[];
      };
      pillar3: {
        title: string;
        desc: string;
        items: string[];
      };
      pillar4: {
        title: string;
        desc: string;
        items: string[];
      };
    };
  };
}

const Services = ({ t }: ServicesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
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

  const pillars = [
    {
      icon: Microscope,
      title: t.services.pillar1.title,
      desc: t.services.pillar1.desc,
      items: t.services.pillar1.items,
      bgColor: 'bg-blue-100',
      iconColor: 'text-primary'
    },
    {
      icon: Activity,
      title: t.services.pillar2.title,
      desc: t.services.pillar2.desc,
      items: t.services.pillar2.items,
      bgColor: 'bg-teal-100',
      iconColor: 'text-secondary'
    },
    {
      icon: Landmark,
      title: t.services.pillar3.title,
      desc: t.services.pillar3.desc,
      items: t.services.pillar3.items,
      bgColor: 'bg-amber-100',
      iconColor: 'text-accent'
    },
    {
      icon: ConciergeBell,
      title: t.services.pillar4.title,
      desc: t.services.pillar4.desc,
      items: t.services.pillar4.items,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            {t.services.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.services.desc}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card rounded-2xl p-8 card-hover border border-gray-100"
            >
              <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <pillar.icon className={`${pillar.iconColor} w-8 h-8`} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 mb-4">{pillar.desc}</p>
              <ul className="text-sm text-gray-500 space-y-2">
                {pillar.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="text-secondary w-4 h-4 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
