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
      badge: 'سياحة طبية متميزة إلى الصين',
      title: 'اكتشف العافية الشرقية',
      titleHighlight: 'في قلب الصين',
      subtitle: 'فحوصات عالمية المستوى × الطب الصيني الأصيل × غمر ثقافي · رحلتك إلى الصحة الشاملة',
      description: 'رحلة لتحويل جودة حياتك · فحص صحي دقيق × العلاج الصيني التقليدي × غمر ثقافي',
      viewPackages: 'عرض الباقات',
      bookConsult: 'حجز استشارة مجانية',
      trust1: '✓ شريك أفضل المستشفيات الصينية',
      trust2: '✓ مرافق معتمدة JCI',
      trust3: '✓ خدمات مخصصة للمرضى الدوليين'
    },
    trust: {
      jci: 'مرافق معتمدة JCI',
      gha: 'معايير دولية',
      hospital: 'أفضل المستشفيات الجامعية',
      cases: '500+ ضيف دولي'
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
      desc: 'بنية طبية عالمية المستوى، آلاف السنين من حكمة الطب الصيني التقليدي، وأسعار تنافسية تجعل الصين وجهة ناشئة للمسافرين الباحثين عن العافية.',
      stat1: 'توفير كبير مقارنة بأمريكا/أوروبا',
      stat2: 'بنية طبية رائدة',
      stat3: '5000+ عاماً من ممارسة الطب الصيني',
      stat4: '96% معدل رضا الضيوف',
      testimonial: '"تجاوزت تجربة دمج الحكمة القديمة والطب الحديث كل توقعاتي"',
      patient: '— سارة م.، مديرة تنفيذية بريطانية'
    },
    packages: {
      badge: 'الباقات',
      title: 'اختر رحلتك الصحية',
      desc: 'ثلاث باقات مصممة بعناية لأهداف صحية وميزانيات مختلفة. جميع الباقات تشمل دعم ثنائي اللغة ورعاية شخصية.',
      package0: {
        name: 'العافية الأساسية',
        duration: 'يومان · ليلة واحدة',
        price: '$999',
        popular: 'أفضل قيمة',
        items: ['فحص صحي شامل: تحاليل دم، تخطيط القلب، أشعة فوق صوتية، تحليل التركيب الجسدي', 'تقييم تكوين الطب الصيني (45 دقيقة): تشخيص اللسان والنبض + خطة عافية شخصية', 'جلسة علاج بالطب الصيني الأصيل (60 دقيقة): وخز إبر أو مساج + حجامة', 'ترحيب ثقافي: تجربة طقوس الشاي الخاصة', 'خدمة كونسيرج: استقبال من المطار، منسق ثنائي اللغة، فندق 4 نجوم (ليلة واحدة)', 'متابعة استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً'],
        docUrl: '/docs/package-essential-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/999'
      },
      package1: {
        name: 'رحلة الاكتشاف',
        duration: '3 أيام · ليلتان',
        price: '$2,900',
        popular: 'الأكثر شعبية',
        items: ['[يشمل جميع خدمات العافية الأساسية]', '+ فحص صحي متقدم: أشعة MRI/CT + تحاليل دم شاملة', '+ علاج موسع بالطب الصيني: 3 جلسات تشمل وخز إبر، مساج واستشارة أعشاب', '+ غمر ثقافي عميق: حصة تايتشي + تجربة موسيقى القيتشين + مطبخ أصيل', '+ إقامة مميزة: فندق 4 نجوم (ليلتان) مع مرافق صحية', '+ تصوير احترافي: توثيق رحلتك الصحية', '+ ترجمة طبية احترافية طوال الرحلة'],
        docUrl: '/docs/package-discovery-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/2900'
      },
      package2: {
        name: 'الرحلة المميزة',
        duration: '7 أيام · 6 ليالٍ',
        price: '$6,800',
        popular: 'شاملة',
        items: ['[يشمل جميع خدمات رحلة الاكتشاف]', '+ فحص صحي تنفيذي: تحليل جيني كامل + PET-CT + تقييم قلبي', '+ أسبوع الطب الصيني الشخصي: علاجات يومية مخصصة لتكوينك', '+ وصول حصري ثقافي: جلسات خاصة مع خبراء الطب الصيني + جولة خلف الكواليس في المستشفى', '+ إقامة فاخرة: فندق صحي 5 نجوم (6 ليالٍ)', '+ مواصلات خاصة: سيارة مع سائق مخصص', '+ كونسيرج VIP: منسق عافية شخصي على مدار الساعة'],
        docUrl: '/docs/package-premium-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/6800'
      },
      package3: {
        name: 'الرحلة الملكية',
        duration: '14 يوماً · 13 ليلة · مخصصة بالكامل',
        price: '$15,000',
        popular: 'تجربة فريدة',
        items: ['[مخصصة بالكامل بناءً على أهدافك الصحية]', '+ فحص فائق التميز: MRI كامل للجسم + تحليل جيني شامل + استشارات متخصصة', '+ رعاية طبيب كبير: طبيب طب صيني شخصي طوال إقامتك', '+ تجارب حصريّة: نقل بطائرة خاصة (اختياري)، غمر ثقافي على المستوى الملكي', '+ إقامة فاخرة جداً: جناح رئاسي أو فيلا خاصة (13 ليلة)', '+ فريق مخصص: كونسيرج شخصي، طباخ خاص، مترجم', '+ وصول VIP مدى الحياة: دعم مستمر عبر الإنترنت من الطب الصيني + أولوية الفحص السنوي'],
        docUrl: '/docs/package-royal-ar.pdf',
        paypalUrl: 'https://www.paypal.com/paypalme/mediodyssey/15000'
      },
      viewDetails: 'عرض التفاصيل',
      book: 'احجز الآن'
    },
    testimonials: {
      badge: 'آراء العملاء',
      title: 'ماذا يقول ضيوفنا',
      desc: 'تجارب حقيقية من مسافرين دوليين اكتشفوا العافية في الصين',
      rating: '4.9/5',
      recommendRate: '96%',
      officers: [
        {
          name: 'سارة ميتشيل',
          country: 'المملكة المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=5',
          rating: 5,
          pros: 'كان النهج المتكامل الذي يجمع بين التشخيصات الغربية والطب الصيني التقليدي مذهلاً. كان تشخيص لسان الذكاء الاصطناعي دقيقاً للغاية، وخطط العلاج الشخصية الخاصة بي عالجت مشاكل فاتها أطبائي في لندن.',
          cons: 'أتمنى لو حجزت إقامة أطول لاستكشاف المزيد من شنغهاي.',
          package: 'رحلة الاكتشاف'
        },
        {
          name: 'هانز مولر',
          country: 'ألمانيا',
          avatar: 'https://i.pravatar.cc/150?img=11',
          rating: 5,
          pros: 'تجاوزت باقة التجربة بقيمة 199 دولار كل التوقعات. مترجم طبي محترف، ومرافق من الدرجة الأولى، وجلسة الوخز بالإبر خففت آلام ظهري المزمنة التي عانيت منها لسنوات.',
          cons: 'شعرت أن نصف اليوم كان قصيراً بعض الشيء. أفضل خيار يوم كامل في المرة القادمة.',
          package: 'باقة التجربة'
        },
        {
          name: 'فاطمة الرشيد',
          country: 'الإمارات العربية المتحدة',
          avatar: 'https://i.pravatar.cc/150?img=9',
          rating: 5,
          pros: 'كان الغمر الثقافي مع تايتشي الخاص وطقوس الشاي محولاً. أخيراً جربت الطب الصيني الأصيل غير المتاح في بلدي. إقامة فاخرة ومعاملة VIP على مدار الرحلة.',
          cons: 'تتطلب رحلة الاكتشاف استثماراً، لكنها تستحق بالتأكيد نظراً للرعاية الشاملة والذكريات.',
          package: 'رحلة الاكتشاف'
        },
        {
          name: 'عمر حسن',
          country: 'المملكة العربية السعودية',
          avatar: 'https://i.pravatar.cc/150?img=13',
          rating: 5,
          pros: 'قيمة استثنائية مقابل المال. اكتشف الفحص الصحي الشامل مشاكل مبكرة فاتها أطبائي المحليون. استشارة الطب الصيني عبر الإنترنت لمدة 365 يوماً لا تقدر بثمن وتواصل دعم رحلتي نحو العافية. وفرت آلاف الدولارات مقارنة بالرعاية المماثلة في دبي.',
          cons: 'أتمنى لو اكتشفت MediOdyssey في وقت سابق. أخطط لزيارتي الثانية بالفعل.',
          package: 'رحلة الاكتشاف'
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
        options: ['العافية الأساسية (يومان) - أفضل قيمة', 'رحلة الاكتشاف (3 أيام) - الأكثر شعبية', 'الرحلة المميزة (7 أيام) - شاملة', 'الرحلة الملكية (14 يوماً) - فريدة', 'بحاجة لمساعدة في الاختيار'],
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
      title: 'رحلات صحية محولة',
      subtitle: 'ضيوف دوليون يكتشفون قوة العافية الشرقية والدقة الغربية في الصين',
      featured: 'قصة مميزة',
      doctors: 'ممارسون خبراء',
      outcome: 'النتيجة الصحية',
      viewDetail: 'عرض القصة الكاملة',
      ctaText: 'ابدأ تحولك الخاص اليوم',
      ctaButton: 'احصل على استشارة مجانية',
      stats: [
        { value: '500+', label: 'ضيف دولي' },
        { value: '96%', label: 'معدل الرضا' },
        { value: 'مستوى عالي', label: 'شركاء المستشفيات' },
        { value: '24/7', label: 'دعم الكونسيرج' }
      ],
      cases: [
        {
          id: 1,
          title: 'تنفيذي بريطاني يعكس الإرهاق المزمن بالطب الصيني في شنغهاي',
          hospital: 'القسم الدولي بمستشفى شنغهاي للطب الصيني التقليدي',
          location: 'شنغهاي، الصين',
          summary: 'تنفيذي يبلغ من العمر 45 عاماً من لندن يعاني من الإرهاق المزمن والأرق منذ 3 سنوات. بعد برنامج طب صيني تقليدي متكامل لمدة 5 أيام يشمل الوخز بالإبر، والعلاج بالأعشاب، والتشي كونغ، تمت استعادة مستويات الطاقة وتحسين جودة النوم بشكل كبير.',
          duration: 'البرنامج: 5 أيام',
          outcome: 'استعادة الطاقة، نوم 7+ ساعات يومياً، يستمر في الاستشارات الشهرية عبر الإنترنت',
          tags: ['الطب الصيني التقليدي', 'الإرهاق المزمن', 'عافية التنفيذيين'],
          stats: { doctors: 3, surgeries: 0, days: 5 },
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
          featured: true
        },
        {
          id: 2,
          title: 'فرد من العائلة المالكة في الإمارات يكتشف العافية الصينية الأصيلة',
          hospital: 'مستشفى غوانانمين في بكين',
          location: 'بكين، الصين',
          summary: 'يبحث عن طب صيني تقليدي أصيل غير متوفر في الشرق الأوسط. أكمل فحصاً صحياً شاملاً يليه علاج مخصص لتكوين الطب الصيني التقليدي وغمر ثقافي حصري يشمل تايتشي خاص مع أستاذ.',
          duration: 'البرنامج: 7 أيام',
          outcome: 'إعادة توازن التكوين، تقليل التوتر، إنشاء تقليد سنوي للعافية',
          tags: ['الطب الصيني التقليدي', 'الغمر الثقافي', 'تجربة ملكية'],
          stats: { doctors: 4, surgeries: 0, days: 7 },
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
          featured: false
        },
        {
          id: 3,
          title: 'اكتشاف م engineer ألماني للصحة الوقائية',
          hospital: 'مركز شنغهاي لسرطان جامعة فودان',
          location: 'شنغهاي، الصين',
          summary: 'فحص صحي تنفيذي سنوي اكتشف نمواً بوليب في مراحله المبكرة تم تفويته في الفحص الألماني. تم إجراء إجراء طفيف التوغل في نفس اليوم. اكتشف أيضاً فوائد الوخز بالإبر لآلام الظهر المتعلقة بالمكتب.',
          duration: 'البرنامج: 3 أيام',
          outcome: 'حالة مبكرة تم حلها، آلام الظهر زالت، يوصي الآن بفحوصات الصين للزملاء',
          tags: ['الفحص الوقائي', 'الكشف المبكر', 'السياحة العلاجية'],
          stats: { doctors: 2, surgeries: 1, days: 3 },
          image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
          featured: false
        },
        {
          id: 4,
          title: 'رحلة مدربة اليوغا الأمريكية نحو الشفاء الشامل',
          hospital: 'مستشفى لونغوا شنغهاي',
          location: 'شنغهاي، الصين',
          summary: 'مشاكل هضمية مزمنة لم يتم حلها بالطب الغربي. وجدت الراحة من خلال نهج متكامل يجمع بين تشخيصات الطب الوظيفي والعلاج الغذائي بالطب الصيني التقليدي والوخز بالإبر. تعمق الفهم من خلال طقوس الشاي وممارسات التأمل.',
          duration: 'البرنامج: 10 أيام',
          outcome: 'أعراض هضمية تم حلها، دمج مبادئ الطب الصيني التقليدي في ممارسة وتدريس اليوغا',
          tags: ['الطب التكاملي', 'صحة الجهاز الهضمي', 'العافية الشاملة'],
          stats: { doctors: 3, surgeries: 0, days: 10 },
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
          featured: false
        }
      ]
    }
  }
};
