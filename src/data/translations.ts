import type { Translations } from '../types';

export const translations: Translations = {
  en: {
    nav: {
      services: 'Services',
      packages: 'Packages',
      stories: 'Stories',
      contact: 'Contact',
      freeConsult: 'Free Consultation'
    },
    hero: {
      badge: 'Premium Medical Tourism to China',
      title: 'Discover Eastern Wellness',
      titleHighlight: 'In the Heart of China',
      subtitle: 'World-Class Diagnostics × Authentic TCM × Cultural Immersion · Your Journey to Holistic Health',
      description: 'Transform your health with preventive precision · Advanced Diagnostics × Traditional Chinese Medicine × Holistic Wellness',
      viewPackages: 'View Packages',
      bookConsult: 'Book Free Consultation',
      trust1: '✓ Partner of China\'s Top Tertiary Hospitals',
      trust2: '✓ JCI Certified Medical Facilities',
      trust3: '✓ Dedicated International Patient Services'
    },
    trust: {
      jci: 'JCI Certified Facilities',
      gha: 'International Standards',
      hospital: 'Top Tertiary Hospitals',
      cases: '500+ International Guests'
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
      desc: 'World-class medical infrastructure, millennia of Traditional Chinese Medicine wisdom, and competitive pricing make China an emerging destination for discerning wellness travelers.',
      stat1: 'Significant cost savings vs US/EU',
      stat2: 'Leading medical device infrastructure',
      stat3: '5000+ years of TCM practice',
      stat4: '96% guest satisfaction rate',
      testimonial: '"The integration of ancient wisdom and modern medicine exceeded all expectations"',
      patient: '— Sarah M., UK Executive'
    },
    packages: {
      badge: 'Packages',
      title: 'Choose Your Health Journey',
      desc: 'Three carefully designed packages for different wellness goals and budgets. All packages include bilingual support and personalized care.',
      package0: {
        name: 'Essential Wellness',
        duration: '2 days · 1 night',
        price: '$999',
        popular: 'Best Value',
        items: ['Comprehensive Health Screening: Blood work, ECG, ultrasound, body composition analysis', 'TCM Constitution Assessment (45 min): Tongue & pulse diagnosis + personalized wellness plan', 'Authentic TCM Therapy Session (60 min): Acupuncture or massage + cupping', 'Cultural Welcome: Private tea ceremony experience', 'Concierge Service: Airport pickup, bilingual coordinator, 4-star hotel (1 night)', '365-day online TCM follow-up consultation'],
        docUrl: '/docs/package-essential-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/999'
      },
      package1: {
        name: 'Discovery Journey',
        duration: '3 days · 2 nights',
        price: '$2,900',
        popular: 'Most Popular',
        items: ['[Includes ALL Essential Wellness services]', '+ Advanced Health Screening: MRI/CT scan + comprehensive blood panel', '+ Extended TCM Therapy: 3 sessions including acupuncture, massage & herbal consultation', '+ Deep Cultural Immersion: Tai Chi class + Guqin music experience + authentic cuisine', '+ Premium Accommodation: 4-star hotel (2 nights) with wellness amenities', '+ Professional Photography: Document your wellness journey', '+ Priority medical interpretation throughout'],
        docUrl: '/docs/package-discovery-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/2900'
      },
      package2: {
        name: 'Premium Journey',
        duration: '7 days · 6 nights',
        price: '$6,800',
        popular: 'Comprehensive',
        items: ['[Includes ALL Discovery Journey services]', '+ Executive Health Screening: Full genome analysis + PET-CT + cardiac evaluation', '+ Personalized TCM Week: Daily treatments tailored to your constitution', '+ Exclusive Cultural Access: Private sessions with TCM masters + behind-scenes hospital tour', '+ Luxury Accommodation: 5-star wellness hotel (6 nights)', '+ Private Transportation: Dedicated car and driver', '+ VIP Concierge: Personal wellness coordinator 24/7'],
        docUrl: '/docs/package-premium-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/6800'
      },
      package3: {
        name: 'Royal Journey',
        duration: '14 days · 13 nights · Fully Bespoke',
        price: '$15,000',
        popular: 'Ultimate Experience',
        items: ['[Fully customized based on your health goals]', '+ Ultra-Premium Screening: Full body MRI + comprehensive genetic profiling + specialist consultations', '+ Master Physician Care: Personal TCM doctor throughout your stay', '+ Exclusive Experiences: Private jet transfer (optional), royal-level cultural immersion', '+ Ultra-Luxury Accommodation: Presidential suite or private villa (13 nights)', '+ Dedicated Team: Personal concierge, private chef, translator', '+ Lifetime VIP Access: Permanent online TCM support + annual check-up priority'],
        docUrl: '/docs/package-royal-en.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/15000'
      },
      viewDetails: 'View Details',
      book: 'Book Now'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Guests Say',
      desc: 'Real experiences from international travelers who discovered wellness in China',
      rating: '4.9/5',
      recommendRate: '96%',
      officers: [
        {
          name: 'Sarah Mitchell',
          country: 'United Kingdom',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'The integrated approach combining Western diagnostics with TCM was eye-opening. The AI tongue diagnosis was incredibly accurate, and my personalized treatment plan addressed issues my London doctors missed.',
          cons: 'Wish I had booked a longer stay to explore more of Shanghai.',
          package: 'Discovery Journey'
        },
        {
          name: 'Hans Mueller',
          country: 'Germany',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'The $199 Experience Package exceeded all expectations. Professional medical interpreter, world-class facilities, and the acupuncture session relieved my chronic back pain I\'ve had for years.',
          cons: 'The half-day felt a bit rushed. Would prefer a full day option next time.',
          package: 'Experience Package'
        },
        {
          name: 'Fatima Al-Rashid',
          country: 'UAE',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 5,
          pros: 'The cultural immersion with private Tai Chi and tea ceremony was transformative. Finally experienced authentic TCM unavailable back home. Luxury accommodations and VIP treatment throughout.',
          cons: 'The Discovery Journey requires investment, but absolutely worth it for the comprehensive care and memories.',
          package: 'Discovery Journey'
        },
        {
          name: 'Omar Hassan',
          country: 'Saudi Arabia',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'Exceptional value for money. Full health screening detected early issues my local doctors missed. The 365-day online TCM consultation continues to support my wellness journey. Saved thousands compared to similar care in Dubai.',
          cons: 'Wish I had discovered MediOdyssey sooner. Planning my second visit already.',
          package: 'Discovery Journey'
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
        options: ['Essential Wellness (2 days) - Best Value', 'Discovery Journey (3 days) - Most Popular', 'Premium Journey (7 days) - Comprehensive', 'Royal Journey (14 days) - Ultimate', 'Need recommendation - Help me choose'],
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
    },
    successCases: {
      badge: 'Real Success Stories',
      title: 'Transformative Health Journeys',
      subtitle: 'International guests discovering the power of Eastern wellness and Western precision in China',
      featured: 'Featured Story',
      doctors: 'Expert Practitioners',
      outcome: 'Health Outcome',
      viewDetail: 'View Full Story',
      ctaText: 'Begin your own transformation today',
      ctaButton: 'Get Free Consultation',
      stats: [
        { value: '500+', label: 'International Guests' },
        { value: '96%', label: 'Satisfaction Rate' },
        { value: 'Top Tier', label: 'Hospital Partners' },
        { value: '24/7', label: 'Concierge Support' }
      ],
      cases: [
        {
          id: 1,
          title: 'British Executive Reverses Chronic Fatigue with TCM in Shanghai',
          hospital: 'Shanghai TCM Hospital International Department',
          location: 'Shanghai, China',
          summary: '45-year-old London executive suffering from chronic fatigue and insomnia for 3 years. After 5-day integrated TCM program including acupuncture, herbal therapy, and Qi Gong, energy levels restored and sleep quality dramatically improved.',
          duration: 'Program: 5 days',
          outcome: 'Energy restored, sleeps 7+ hours nightly, continues monthly TCM consultations online',
          tags: ['TCM', 'Chronic Fatigue', 'Executive Wellness'],
          stats: { doctors: 3, surgeries: 0, days: 5 },
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'UAE Royal Family Member Discovers Authentic Chinese Wellness',
          hospital: 'Beijing Guang\'anmen Hospital',
          location: 'Beijing, China',
          summary: 'Seeking authentic traditional Chinese medicine unavailable in the Middle East. Completed comprehensive health screening followed by personalized TCM constitution therapy and exclusive cultural immersion including private Tai Chi with a master.',
          duration: 'Program: 7 days',
          outcome: 'Constitution rebalanced, stress reduced, established annual wellness retreat tradition',
          tags: ['TCM', 'Cultural Immersion', 'Royal Experience'],
          stats: { doctors: 4, surgeries: 0, days: 7 },
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'German Engineer\'s Preventive Health Discovery',
          hospital: 'Fudan University Shanghai Cancer Center',
          location: 'Shanghai, China',
          summary: 'Annual executive health screening detected early-stage polyp that was missed in German check-up. Minimally invasive procedure completed same day. Also discovered benefits of acupuncture for desk-related back pain.',
          duration: 'Program: 3 days',
          outcome: 'Early condition resolved, back pain eliminated, now recommends China health checks to colleagues',
          tags: ['Preventive Screening', 'Early Detection', 'Medical Tourism'],
          stats: { doctors: 2, surgeries: 1, days: 3 },
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'American Yoga Instructor\'s Journey to Holistic Healing',
          hospital: 'Longhua Hospital Shanghai',
          location: 'Shanghai, China',
          summary: 'Chronic digestive issues unresolved by Western medicine. Found relief through integrated approach combining functional medicine diagnostics with TCM dietary therapy and acupuncture. Deepened understanding through tea ceremony and meditation practices.',
          duration: 'Program: 10 days',
          outcome: 'Digestive symptoms resolved, incorporates TCM principles into yoga practice and teaching',
          tags: ['Integrative Medicine', 'Digestive Health', 'Holistic Wellness'],
          stats: { doctors: 3, surgeries: 0, days: 10 },
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
          featured: false
        }
      ]
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
      title: 'موارد طبية عالمية المستوى',
      titleHighlight: 'خدمة السفر الطبي المتكاملة',
      subtitle: 'نوصلك بأفضل المستشفيات العالمية · استشارات طبية احترافية · دعم متكامل',
      description: 'رحلة لتحويل جودة حياتك · فحص صحي دقيق × العلاج الصيني التقليدي × غمر ثقافي',
      viewPackages: 'عرض الباقات',
      bookConsult: 'حجز استشارة مجانية',
      trust1: '✓ شريك رسمي لعيادة مايو',
      trust2: '✓ متعاقدون مع مستشفى كانسر إنستيتيوت أرياكي',
      trust3: '✓ أكثر من 10 سنوات خبرة في السفر الطبي'
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
    },
    successCases: {
      badge: 'قصص نجاح حقيقية',
      title: 'حالات خدمة حقيقية',
      subtitle: 'ضمان حصول كل مريض على العلاج الطبي الأنسب في الخارج',
      featured: 'حالة مميزة',
      doctors: 'أطباء خبراء',
      outcome: 'نتيجة العلاج',
      viewDetail: 'عرض القصة الكاملة',
      ctaText: 'كل مريض يستحق أفضل رعاية طبية',
      ctaButton: 'احصل على استشارة مجانية',
      stats: [
        { value: '+2,000', label: 'حالة ناجحة' },
        { value: '98%', label: 'معدل النجاح' },
        { value: 'أفضل 10', label: 'مستشفيات عالمية' },
        { value: '24/7', label: 'دعم طبي' }
      ],
      cases: [
        {
          id: 1,
          title: 'شاب يبلغ 17 عامًا يعاني من ورم غدي نخاعي نادر يذهب للعلاج في الولايات المتحدة',
          hospital: 'مايو كلينيك، الولايات المتحدة',
          location: 'شنغهاي، الصين',
          summary: 'أشارت التقييمات المحلية إلى مخاطر جراحية عالية للغاية. نجح الفريق الأمريكي في إزالة الورم من خلال التعاون متعدد التخصصات، وخرج المريض بعد 5 أيام.',
          duration: 'العلاج: 21 يومًا',
          outcome: 'تعافٍ جيد بعد العملية، لا مضاعفات',
          tags: ['أمراض نادرة', 'جراحة الصدر', 'متعدد التخصصات'],
          stats: { doctors: 6, surgeries: 1, days: 5 },
          image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'مريضة سرطان الثدي تتلقى علاجًا دقيقًا في اليابان',
          hospital: 'مستشفى كانسر إنستيتيوت أرياكي، اليابان',
          location: 'شنغهاي، الصين',
          summary: '7 أشهر من العلاج المنظم، عملية حفظ الثدي ناجحة، عادت الآن إلى الحياة الطبيعية.',
          duration: 'العلاج: 7 أشهر',
          outcome: 'القضاء التام على الورم، حفظ الثدي',
          tags: ['سرطان الثدي', 'حفظ الثدي', 'علاج مشترك'],
          stats: { doctors: 4, surgeries: 1, days: 210 },
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'مريض سرطان المعدة يتلقى علاج البروتونات في ألمانيا',
          hospital: 'مستشفى جامعة هايدلبرغ، ألمانيا',
          location: 'شنغهاي، الصين',
          summary: 'علاج البروتون والأيونات الثقيلة الدقيق، لحماية الأنسجة السليمة المحيطة بأقصى درجة.',
          duration: 'العلاج: 6 أسابيع',
          outcome: 'انكماش الورم بنسبة 60٪، جودة حياة جيدة',
          tags: ['سرطان المعدة', 'علاج البروتونات', 'الطب الدقيق'],
          stats: { doctors: 5, surgeries: 0, days: 42 },
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'طفل مصاب بسرطان الدم يلتحق بتجربة سريرية في الولايات المتحدة',
          hospital: 'مركز ميموريال سلون كيترينج للسرطان، الولايات المتحدة',
          location: 'شنغهاي، الصين',
          summary: 'شارك في تجربة علاج خلايا CAR-T السريرية، للوصول إلى أحدث بروتوكول علاج.',
          duration: 'العلاج: 12 شهرًا',
          outcome: 'تحقيق الشفاء التام، المتابعة المستمرة',
          tags: ['سرطان الأطفال', 'تجربة سريرية', 'علاج CAR-T'],
          stats: { doctors: 8, surgeries: 0, days: 365 },
          image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
          featured: false
        }
      ]
    }
  }
};
