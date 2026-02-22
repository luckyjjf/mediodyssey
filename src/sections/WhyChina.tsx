import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WhyChinaProps {
  t: {
    whyChina: {
      badge: string;
      title: string;
      desc: string;
      stat1: string;
      stat2: string;
      stat3: string;
      stat4: string;
      testimonial: string;
      patient: string;
    };
  };
}

const WhyChina = ({ t }: WhyChinaProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(statsRef.current.children,
          { y: 40, opacity: 0, rotateX: 45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
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

  const stats = [
    { value: '1/3', label: t.whyChina.stat1 },
    { value: '#1', label: t.whyChina.stat2 },
    { value: '5000+', label: t.whyChina.stat3 },
    { value: '100%', label: t.whyChina.stat4 }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              {t.whyChina.badge}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">
              {t.whyChina.title}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {t.whyChina.desc}
            </p>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-xl p-6"
                  style={{ perspective: '1000px' }}
                >
                  <div className="text-4xl font-display font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="./tea-product.jpg"
              alt="Modern medical facility"
              className="rounded-2xl shadow-2xl"
            />
            {/* Testimonial Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Star className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-dark font-medium">{t.whyChina.testimonial}</p>
                  <p className="text-gray-500 text-sm">{t.whyChina.patient}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChina;
