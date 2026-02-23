import React, { useEffect } from 'react';
import { 
  Heart,
  Microscope, 
  Activity,
  Landmark,
  ConciergeBell,
  Globe,
  Check,
  Star,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ChevronRight,
  Calendar,
  Send
} from 'lucide-react';
import { loadPayPalHostedButton, loadPayPalSubscriptionButton } from './utils/paypal';


// Translations
const translations = {
  en: {
    nav: {
      services: 'Services',
      packages: 'Packages',
      stories: 'Stories',
      contact: 'Contact',
      freeConsult: 'Free Consultation'
    },
    hero: {
      badge: 'Trusted Global Medical Tourism Brand',
      title: 'Premium Preventive Care × Ancient Chinese Healing',
      subtitle: 'World-Class Medical Diagnostics Meets 3,000 Years of Wellness Wisdom',
      description: 'Transform your health with preventive precision · Advanced Diagnostics × Traditional Chinese Medicine × Holistic Wellness',
      viewPackages: 'View Packages',
      bookConsult: 'Book Free Consultation'
    },
    trust: {
      jci: 'JCI Certified',
      gha: 'GHA Excellence',
      hospital: 'Top Hospital Partners',
      cases: '10,000+ Cases'
    },
    services: {
      badge: 'Our Services',
      title: 'Four Pillars of Health',
      desc: 'Combining the best of Eastern and Western medicine for comprehensive health management',
      pillar1: {
        title: 'Precision Health Screening',
        desc: 'PET-CT, MRI, genetic testing with cutting-edge equipment',
        items: ['Full-body cancer screening', 'Cardiovascular assessment', 'Genetic analysis']
      },
      pillar2: {
        title: 'TCM Wellness',
        desc: 'Ancient Eastern wisdom with personalized constitution therapy',
        items: ['Constitution diagnosis', 'Acupuncture & massage', 'Herbal remedies']
      },
      pillar3: {
        title: 'Cultural Immersion',
        desc: 'Tea ceremony, Tai Chi, calligraphy - mind-body Eastern practices',
        items: ['Private tea tasting', 'Tai Chi & Qigong', 'Guqin & calligraphy']
      },
      pillar4: {
        title: 'Concierge Service',
        desc: 'From visa to departure, 24/7 dedicated butler service',
        items: ['Visa assistance', 'VIP airport transfers', 'Multilingual support']
      }
    },
    whyChina: {
      badge: 'Why China',
      title: 'Why Choose China?',
      desc: 'World-leading medical equipment, experienced experts, and competitive prices make China an emerging global destination for medical tourism.',
      stat1: '1/3 the cost of US/EU services',
      stat2: '#1 in MRI/CT equipment access',
      stat3: '5000+ international patients yearly',
      stat4: '100% patient satisfaction',
      testimonial: '"Chinese healthcare surprised me"',
      patient: '— Sarah M., US Patient'
    },
    packages: {
      badge: 'Packages',
      title: 'Choose Your Health Journey',
      desc: 'Three carefully designed packages for different health goals and budgets',
      package0: {
        name: 'Tea Subscription',
        duration: 'Monthly · $29',
        price: '$29',
        popular: 'Best Value',
        items: ['Personalized wellness tea bags (30 packs) - Value $25', 'Online TCM consultation (15 min) - Value $50', 'AI smart health assistant - Value $20', 'Exclusive member content - Value $15', 'Product discount benefits - Unlimited', 'Health records management - Value $10', 'Total value $120+ · Save 76%'],
        docUrl: '/docs/tea-subscription-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/99'
      },
      package1: {
        name: 'Experience Package',
        duration: 'Half-day · 3-4 hours',
        price: '$199',
        popular: 'Most Popular',
        items: ['[Assessment] TCM Constitution (45 min): AI tongue + smart pulse + 60+ survey', '[Screening] Basic Health Check (30 min): 10-item blood panel + body composition', '[Therapy] TCM Experience (60 min): Doctor consult + acupuncture + massage + cupping', '[Service] Medical interpreter + TCM gift set + 3 edited photos', '[Bonus] 365-day online TCM consultation'],
        docUrl: '/docs/package-experience-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'Discovery Journey',
        duration: '3 days · Intro to Eastern Medicine',
        price: '$3,900',
        popular: 'Classic',
        items: ['[Includes ALL Experience Package services]', '+ Full Health Screening: MRI/CT + comprehensive blood work', '+ Extended TCM Therapy: 3 sessions including acupuncture & massage', '+ Cultural Experience: Tea ceremony + Tai Chi + Guqin', '+ 4-star hotel accommodation (2 nights)', '+ Airport transfers included', '+ Extended 365-day online TCM consultation'],
        docUrl: '/docs/package-discovery-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · Ultimate bespoke experience',
        price: '$23,500',
        popular: 'Luxury',
        items: ['[Includes ALL Discovery Journey services]', '+ Premium Health Screening: Full genome + PET-CT', '+ Master Physician Consultation (Top-tier specialist)', '+ Royal Cultural Experience: Exclusive access + VIP treatment', '+ Luxury suite accommodation (13 nights)', '+ Private car + Personal concierge', '+ Private jet transfer (optional)', '+ Lifetime VIP online TCM consultation'],
        docUrl: '/docs/package-royal-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'View Details',
      book: 'Book Now'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Experience Officers Say',
      desc: 'Real reviews from our certified experience officers',
      rating: '4.8/5',
      recommendRate: '94%',
      officers: [
        {
          name: 'Sarah Mitchell',
          country: 'United Kingdom',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'The AI tongue diagnosis was incredibly accurate. The tea quality is exceptional and the monthly health tips are very practical.',
          cons: 'Would love more flavor variety in the tea subscription.',
          package: 'Tea Subscription'
        },
        {
          name: 'Hans Mueller',
          country: 'Germany',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'The $199 Experience Package exceeded expectations. Professional medical interpreter, top-notch facilities, and the acupuncture session relieved my chronic back pain.',
          cons: 'The half-day felt a bit rushed. Would prefer a full day option.',
          package: 'Experience Package'
        },
        {
          name: 'Fatima Al-Rashid',
          country: 'UAE',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 4,
          pros: 'The cultural immersion with Tai Chi and tea ceremony was transformative. Luxury accommodations and VIP treatment throughout.',
          cons: 'The Discovery Journey is quite expensive, though worth it for the comprehensive care.',
          package: 'Discovery Journey'
        },
        {
          name: 'Omar Hassan',
          country: 'Saudi Arabia',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'Exceptional value for money. The 365-day online consultation is invaluable. I\'ve saved thousands compared to local TCM treatments.',
          cons: 'Initial shipping took longer than expected, but now it arrives promptly every month.',
          package: 'Tea Subscription'
        }
      ],
      prosLabel: 'What They Loved',
      consLabel: 'Areas for Improvement',
      stats: {
        satisfaction: '4.8/5',
        recommend: '94%',
        renewal: '67%'
      }
    },
    contact: {
      badge: 'Contact Us',
      title: 'Start Your Health Journey',
      desc: 'Fill out the form and our health advisor will contact you within 24 hours',
      phone: 'Phone',
      email: 'Email',
      wechat: 'WeChat',
      telegram: 'Telegram',
      form: {
        name: 'Name *',
        email: 'Email *',
        countryCode: 'Country Code',
        phoneNumber: 'Phone Number',
        package: 'Interested Package',
        placeholder: 'Select...',
        options: ['Tea Subscription (Monthly) - Best Value', 'Discovery Journey (3 days)', 'Experience Package (Half-day) - Most Popular', 'Royal Journey (14 days)', 'Need recommendation'],
        message: 'Message/Contact',
        submit: 'Submit Inquiry'
      }
    },
    footer: {
      tagline: 'Western Precision × Eastern Wisdom',
      tagline2: 'Begin your journey to transform your life',
      links: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  ar: {
    nav: {
      services: 'الخدمات',
      packages: 'الباقات',
      stories: 'القصص',
      contact: 'اتصل بنا',
      freeConsult: 'استشارة مجانية'
    },
    hero: {
      badge: 'علامة تجارية موثوقة للسياحة الطبية',
      title: 'ميدي أوديسي',
      subtitle: 'حيث الدقة الغربية تلتقي بالحكمة الشرقية',
      description: 'رحلة لتحويل جودة حياتك · فحص صحي دقيق × العلاج الصيني التقليدي × غمر ثقافي',
      viewPackages: 'عرض الباقات',
      bookConsult: 'حجز استشارة مجانية'
    },
    trust: {
      jci: 'معتمد JCI',
      gha: 'GHA للتميز',
      hospital: 'شراكات مستشفيات رائدة',
      cases: 'أكثر من 10,000 حالة'
    },
    services: {
      badge: 'خدماتنا',
      title: 'أربع ركائز للصحة',
      desc: 'دمج أفضل ما في الطب الشرقي والغربي لإدارة صحية شاملة',
      pillar1: {
        title: 'فحص صحي دقيق',
        desc: 'PET-CT، MRI، اختبارات جينية بأحدث المعدات',
        items: ['فحص شامل للسرطان', 'تقييم القلب والأوعية', 'تحليل جيني']
      },
      pillar2: {
        title: 'العلاج الصيني التقليدي',
        desc: 'حكمة شرقية عريقة مع علاج مخصص للتكوين الجسدي',
        items: ['تشخيص التكوين', 'إبر ومساج', 'أعشاب طبية']
      },
      pillar3: {
        title: 'الغمر الثقافي',
        desc: 'طقوس الشاي، تايتشي، الخط العربي - ممارسات شرقية للجسد والعقل',
        items: ['تذوق شاي خاص', 'تايتشي وتشيغونغ', 'قيتشين والخط']
      },
      pillar4: {
        title: 'خدمة الكونسيرج',
        desc: 'من التأشيرة إلى المغادرة، خدمة حصرية على مدار الساعة',
        items: ['مساعدة التأشيرة', 'نقل VIP من المطار', 'دعم متعدد اللغات']
      }
    },
    whyChina: {
      badge: 'لماذا الصين؟',
      title: 'لماذا تختار الصين؟',
      desc: 'معدات طبية رائدة عالمياً، خبراء ذوي خبرة، وأسعار تنافسية تجعل الصين وجهة صاعدة للسياحة الطبية العالمية.',
      stat1: 'ثلث تكلفة خدمات الاتحاد الأوروبي',
      stat2: 'الأولى في توفير أجهزة MRI/CT',
      stat3: 'أكثر من 5000 مريض دولي سنوياً',
      stat4: 'رضا المرضى 100%',
      testimonial: '"الرعاية الصحية الصينية فاجأتني"',
      patient: '— سارة م.، مريضة أمريكية'
    },
    packages: {
      badge: 'الباقات',
      title: 'اختر رحلتك الصحية',
      desc: 'أربع باقات مصممة بعناية لأهداف وميزانيات صحية مختلفة',
      package0: {
        name: 'اشتراك العضوية',
        duration: 'شهرياً · $29',
        price: '$29',
        popular: 'أفضل قيمة',
        items: ['أكياس شاي العافية المخصصة (30 كيس) - قيمة $25', 'استشارة الطب الصيني عبر الإنترنت (15 دقيقة) - قيمة $50', 'مساعد الصحة الذكي بالذكاء الاصطناعي - قيمة $20', 'محتوى حصري للأعضاء - قيمة $15', 'خصومات على المنتجات - غير محدودة', 'إدارة السجلات الصحية - قيمة $10', 'القيمة الإجمالية $120+ · وفّر 76%'],
        docUrl: '/docs/tea-subscription-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/99'
      },
      package1: {
        name: 'باقة التجربة',
        duration: 'نصف يوم · 3-4 ساعات',
        price: '$199',
        popular: 'الأكثر شعبية',
        items: ['[تقييم] تقييم تكوين الطب الصيني (45 دقيقة): تشخيص الذكاء الاصطناعي للسان + قياس النبض الذكي', '[فحص] فحص صحي أساسي (30 دقيقة): 10 تحليلات دم + تحليل التركيب الجسدي', '[علاج] تجربة العلاج بالطب الصيني (60 دقيقة): استشارة + وخز إبر + تدليك + حجامة', '[خدمة] مترجم طبي + طقم هدايا + 3 صور مُحسّنة', '[مكافأة] استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً'],
        docUrl: '/docs/package-experience-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/199'
      },
      package2: {
        name: 'رحلة الاكتشاف',
        duration: '3 أيام · مقدمة للطب الشرقي',
        price: '$3,900',
        popular: 'كلاسيكي',
        items: ['[يشمل جميع خدمات باقة التجربة]', '+ فحص صحي شامل: MRI/CT + تحاليل دم شاملة', '+ علاج بالطب الصيني موسع: 3 جلسات وخز إبر وتدليك', '+ تجربة ثقافية: طقوس الشاي + تايتشي + قيتشين', '+ إقامة في فندق 4 نجوم (ليلتان)', '+ نقل من وإلى المطار', '+ استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً موسعة'],
        docUrl: '/docs/package-discovery-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/3900'
      },
      package3: {
        name: 'الرحلة الملكية',
        duration: '14 يوماً · تجربة فاخرة مخصصة',
        price: '$23,500',
        popular: 'فاخر',
        items: ['[يشمل جميع خدمات رحلة الاكتشاف]', '+ فحص صحي ممتاز: الجينوم الكامل + PET-CT', '+ استشارة طبيب كبير (أفضل المتخصصين)', '+ تجربة ثقافية ملكية: وصول حصري + معاملة VIP', '+ إقامة في جناح فاخر (13 ليلة)', '+ سيارة خاصة + مساعد شخصي', '+ نقل بطائرة خاصة (اختياري)', '+ استشارة VIP مدى الحياة'],
        docUrl: '/docs/package-royal-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/23500'
      },
      viewDetails: 'عرض التفاصيل',
      book: 'احجز الآن'
    },
    testimonials: {
      badge: 'آراء العملاء',
      title: 'ماذا يقول ضباط التجربة لدينا',
      desc: 'تقييمات حقيقية من ضباط التجربة المعتمدين لدينا',
      rating: '4.8/5',
      recommendRate: '94%',
      officers: [
        {
          name: 'سارة ميتشيل',
          country: 'المملكة المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'كان تشخيص لسان الذكاء الاصطناعي دقيقاً للغاية. جودة الشاي استثنائية، والنصائح الصحية الشهرية عملية للغاية.',
          cons: 'أتمنى المزيد من تنوع النكهات في اشتراك الشاي.',
          package: 'اشتراك العضوية'
        },
        {
          name: 'هانز مولر',
          country: 'ألمانيا',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'تجاوزت باقة التجربة بقيمة 199 دولار التوقعات. مترجم طبي محترف، ومرافق من الدرجة الأولى، وجلسة الوخز بالإبر خففت آلام ظهري المزمنة.',
          cons: 'شعرت أن نصف اليوم كان قصيراً بعض الشيء. أفضل خيار يوم كامل.',
          package: 'باقة التجربة'
        },
        {
          name: 'فاطمة الرشيد',
          country: 'الإمارات العربية المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 4,
          pros: 'كان الغمر الثقافي مع تايتشي وطقوس الشاي محولاً. إقامة فاخرة ومعاملة VIP على مدار الرحلة.',
          cons: 'رحلة الاكتشاف مرتفعة الثمن، لكنها تستحق ذلك نظراً للرعاية الشاملة.',
          package: 'رحلة الاكتشاف'
        },
        {
          name: 'عمر حسن',
          country: 'المملكة العربية السعودية',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'قيمة استثنائية مقابل المال. استشارة مدة 365 يوم عبر الإنترنت لا تقدر بثمن. وفرت آلاف الدولارات مقارنة بالعلاج الصيني المحلي.',
          cons: 'استغرقت الشحنة الأولى وقتاً أطول من المتوقع، لكن الآن تصل في موعدها كل شهر.',
          package: 'اشتراك العضوية'
        }
      ],
      prosLabel: 'ما أعجبهم',
      consLabel: 'مجالات التحسين',
      stats: {
        satisfaction: '4.8/5',
        recommend: '94%',
        renewal: '67%'
      }
    },
    contact: {
      badge: 'اتصل بنا',
      title: 'ابدأ رحلتك الصحية',
      desc: 'املأ النموذج وسيتواصل معك مستشارنا الصحي خلال 24 ساعة',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      wechat: 'ويتشات',
      telegram: 'تلغرام',
      form: {
        name: 'الاسم *',
        email: 'البريد الإلكتروني *',
        countryCode: 'رمز الدولة',
        phoneNumber: 'رقم الهاتف',
        package: 'الباقة المهتم بها',
        placeholder: 'اختر...',
        options: ['اشتراك الشاي (شهرياً) - أفضل قيمة', 'الاكتشاف (3 أيام)', 'باقة التجربة (نصف يوم) - الأكثر شعبية', 'الملكية (14 يوماً)', 'بحاجة لتوصية'],
        message: 'الرسالة / معلومات الاتصال',
        submit: 'إرسال الاستفسار'
      }
    },
    footer: {
      tagline: 'الدقة الغربية × الحكمة الشرقية',
      tagline2: 'ابدأ رحلتك لتحويل حياتك',
      links: 'روابط سريعة',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    }
  }
};

function App() {
  const [language, setLanguage] = React.useState<'en' | 'ar'>('en');
  
  const t = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  // Load PayPal buttons
  useEffect(() => {
    // Discovery Journey - Hosted Button
    loadPayPalHostedButton(
      'PCVZMAHAUCLEE',
      'paypal-container-PCVZMAHAUCLEE',
      'BAAMkzXjQ-Az2R2yBDRxEjBRXV6jyvZnIzxEhSyLJVT2Q5XwugbNRXTpsUkYWx_lAW468dLzobLEmnvuww'
    );
    
    // Tea Subscription - Subscription Button
    loadPayPalSubscriptionButton(
      'P-46T13876K0925810UNGMVWUQ',
      'paypal-button-container-P-46T13876K0925810UNGMVWUQ',
      'AdE_Z_W7TwFrNJbYftxbWO4LI_oFydXRUsmPigyTQu4oKWe_G_UWBvoMO1e5gFBj8iPKb17GS7h9IL4W',
      (subscriptionId) => {
        console.log('Subscription successful:', subscriptionId);
      }
    );
  }, []);

  return (
    <div className={`min-h-screen bg-cream ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {}
      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 99999, backgroundColor: 'white', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}>
              <div style={{width: '40px', height: '40px', backgroundColor: '#1e3a5f', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Heart style={{color: 'white', width: '24px', height: '24px'}} />
              </div>
              <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1e3a5f'}}>MediOdyssey</span>
            </a>
            <div style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
              <a href="#services" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.services}</a>
              <a href="#packages" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.packages}</a>
              <a href="#stories" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.stories}</a>
              <a href="#contact" style={{color: '#1f2937', textDecoration: 'none'}}>{t.nav.contact}</a>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'ar')}
                style={{padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc'}}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
              <a href="#contact" style={{backgroundColor: '#1e3a5f', color: 'white', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none'}}>
                {t.nav.freeConsult}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {}
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-apple"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float-apple" style={{animationDelay: '2s'}}></div>
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
          
          {/* Main Title - White Text for Dark Background */}
          <h1 className="apple-headline text-white mb-6 tracking-tight">
            <span className="block">{t.hero.title}</span>
          </h1>
          
          {/* Subtitle - Light Text */}
          <p className="apple-subhead text-white/70 mb-6 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Description - Light Text */}
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
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

        {/* Trust Badges - Dark Theme */}
        <div className="relative z-10 w-full bg-slate-800/50 backdrop-blur border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="flex items-center gap-3 text-white/70">
                <Star className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium">{t.trust.jci}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Star className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium">{t.trust.gha}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Heart className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium">{t.trust.hospital}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Globe className="text-secondary w-5 h-5" />
                <span className="text-sm font-medium">{t.trust.cases}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase">{t.services.badge}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-4">{t.services.title}</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t.services.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="text-primary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar1.title}</h3>
              <p className="text-slate-600 mb-4">{t.services.pillar1.desc}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar1.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="text-secondary w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar2.title}</h3>
              <p className="text-slate-600 mb-4">{t.services.pillar2.desc}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar2.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Landmark className="text-accent w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar3.title}</h3>
              <p className="text-slate-600 mb-4">{t.services.pillar3.desc}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar3.items[2]}</li>
              </ul>
            </div>

            <div className="pillar-card rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <ConciergeBell className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{t.services.pillar4.title}</h3>
              <p className="text-slate-600 mb-4">{t.services.pillar4.desc}</p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[0]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[1]}</li>
                <li className="flex items-center"><Check className="text-secondary w-4 h-4 mr-2" />{t.services.pillar4.items[2]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase">{t.whyChina.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">{t.whyChina.title}</h2>
              <p className="text-slate-600 text-lg mb-8">
                {t.whyChina.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="text-4xl font-bold text-primary mb-2">1/3</div>
                  <p className="text-slate-600">{t.whyChina.stat1}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="text-4xl font-bold text-primary mb-2">#1</div>
                  <p className="text-slate-600">{t.whyChina.stat2}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-slate-600">{t.whyChina.stat3}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-slate-600">{t.whyChina.stat4}</p>
                </div>
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
                    <p className="text-dark font-medium">{t.whyChina.testimonial}</p>
                    <p className="text-slate-500 text-sm">{t.whyChina.patient}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="packages" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.packages.badge}</span>
            <h2 className="apple-headline text-slate-900 mt-4 mb-6">{t.packages.title}</h2>
            <p className="apple-subhead max-w-2xl mx-auto">
              {t.packages.desc}
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Package - Large Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden card-hover glow-effect">
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                  {t.packages.package0.popular}
                </span>
              </div>
              <div className="relative z-10 max-w-lg">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.packages.package0.name}</h3>
                <p className="text-text-primary-light text-lg mb-6">{t.packages.package0.duration}</p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl md:text-6xl font-bold">{t.packages.package0.price}</span>
                  <span className="text-text-primary-light">/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {t.packages.package0.items.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-text-primary/10">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{item.split(' - ')[0]}</span>
                    </div>
                  ))}
                </div>
                <a href={t.packages.package0.paypalUrl} className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-primary/10 transition">
                  {t.packages.book} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              {/* Background Decoration */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20">
                <div className="absolute right-10 bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Experience Package */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 card-hover">
              <div className="mb-6">
                <span className="inline-block bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {t.packages.package1.popular}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.packages.package1.name}</h3>
                <p className="text-slate-500">{t.packages.package1.duration}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{t.packages.package1.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.packages.package1.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item.replace('[Assessment]', '').replace('[Screening]', '').replace('[Therapy]', '').split(':')[0]}</span>
                  </li>
                ))}
              </ul>
              <a href={t.packages.package1.paypalUrl} className="block w-full text-center bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition">
                {t.packages.book}
              </a>
            </div>

            {/* Discovery Journey */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 card-hover">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.packages.package2.name}</h3>
                <p className="text-slate-500">{t.packages.package2.duration}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{t.packages.package2.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.packages.package2.items.slice(1, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item.replace('+ ', '').split(':')[0]}</span>
                  </li>
                ))}
              </ul>
              <a href={t.packages.package2.paypalUrl} className="block w-full text-center border-2 border-gray-900 text-slate-900 py-3 rounded-full font-medium hover:bg-slate-50 transition">
                {t.packages.viewDetails}
              </a>
            </div>

            {/* Royal Journey - Wide Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden card-hover">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-xl">
                  <span className="inline-block bg-secondary/10 text-text-secondary-light px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {t.packages.package3.popular}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.packages.package3.name}</h3>
                  <p className="text-slate-400 mb-6">{t.packages.package3.duration}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold">{t.packages.package3.price}</span>
                  </div>
                </div>
                <div className="flex-1 max-w-md">
                  <ul className="space-y-3 mb-8">
                    {t.packages.package3.items.slice(2, 5).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Star className="w-4 h-4 text-secondary-light mt-0.5 flex-shrink-0" />
                        <span>{item.replace('+ ', '').split(':')[0]}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={t.packages.package3.paypalUrl} className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                    {t.packages.book} <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Background Gradient */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section id="stories" className="py-24 bg-white" style={{minHeight: '600px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-3xl font-bold text-accent">{t.testimonials.stats.renewal}</div>
                <div className="text-slate-500 text-sm">Renewal Rate</div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.officers.map((officer, index) => (
              <div key={index} className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                          className={`w-4 h-4 ${i < officer.rating ? 'text-accent fill-accent' : 'text-slate-300'}`}
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

      {}
      <section id="contact" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-secondary font-semibold tracking-wider uppercase">{t.contact.badge}</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">{t.contact.title}</h2>
              <p className="text-slate-600 text-lg mb-8">
                {t.contact.desc}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.phone}</p>
                    <p className="text-slate-600">+86 133-9645-7967</p>
                    <p className="text-slate-600">+852 4743-6719</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.email}</p>
                    <p className="text-slate-600">jiangjingfu@mediodyssey.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.wechat}</p>
                    <a 
                      href="https://work.weixin.qq.com/kfid/kfc840a16d52318ed05" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-secondary transition"
                    >
                      stay7967
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Send className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t.contact.telegram}</p>
                    <p className="text-slate-600">
                      <a 
                        href="https://t.me/MediOdyssey_bot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition"
                      >
                        @MediOdyssey_bot
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder={language === 'ar' ? 'اسمك' : 'Your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">{t.contact.form.countryCode}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder="+86"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-slate-700 font-medium mb-2">{t.contact.form.phoneNumber}</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                      placeholder={language === 'ar' ? '123456789' : 'Phone number'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.package}</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                    <option>{t.contact.form.placeholder}</option>
                    {t.contact.form.options.map((opt, idx) => (
                      <option key={idx}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">{t.contact.form.message}</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent" 
                    placeholder={language === 'ar' ? 'أخبرنا عن احتياجاتك الصحية...' : 'Tell us about your health needs...'}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#152a47] transition"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WeChat Customer Service Float Button */}
      <a
        href="https://work.weixin.qq.com/kfid/kfc840a16d52318ed05"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#059669] hover:bg-[#047857] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        title="微信客服"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
      </a>

      {}
      <footer className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Heart className="text-white w-6 h-6" />
                </div>
                <span className="font-serif text-2xl font-bold">MediOdyssey</span>
              </div>
              <p className="text-slate-400 mb-4">
                {t.footer.tagline}<br />
                {t.footer.tagline2}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.links}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">{language === 'en' ? 'About Us' : 'من نحن'}</a></li>
                <li><a href="#services" className="hover:text-white transition">{t.nav.services}</a></li>
                <li><a href="#packages" className="hover:text-white transition">{t.nav.packages}</a></li>
                <li><a href="#stories" className="hover:text-white transition">{t.nav.stories}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">{t.services.pillar1.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar2.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar3.title}</a></li>
                <li><a href="#" className="hover:text-white transition">{t.services.pillar4.title}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+86 133-9645-7967</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" />+852 4743-6719</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" />jiangjingfu@mediodyssey.com</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{language === 'ar' ? 'مبنى 4، حديقة ويست بوند الإبداعية، رقم 186 شارع جوي، منطقة شيهوي، شنغهاي' : 'Building 4, West Bund Creative Park, 186 Guyi Road, Xuhui District, Shanghai'}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2026 MediOdyssey. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;